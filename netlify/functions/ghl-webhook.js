/**
 * Netlify fallback for /api/ghl-webhook when not using Next.js API routes.
 * Mirrors lib/ghl-webhook.ts contract: form JSON keys name, email, phone, company,
 * subject, message, country, profile, funding, report_type.
 */

const SITE_NAME = "South Asia Reports";

function splitName(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!parts.length) return { firstName: "", lastName: "" };
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

function normalizePhone(phone) {
  const trimmed = String(phone || "").trim();
  if (!trimmed) return "";
  const digits = trimmed.replace(/[^\d+]/g, "");
  return digits || trimmed;
}

function buildWebhookPayload(payload) {
  const service = payload.subject || payload.report_type || "";
  return {
    name: payload.name || "",
    email: payload.email || "",
    phone: normalizePhone(payload.phone || ""),
    company: payload.company || "",
    subject: service,
    service_interest: service,
    message: payload.message || "",
    country: payload.country || "",
    profile: payload.profile || "",
    funding: payload.funding || "",
    report_type: payload.report_type || "",
    brand: SITE_NAME,
    source: `${SITE_NAME} Website`,
  };
}

async function createContact(payload) {
  const apiKey = (process.env.GHL_API_KEY || "").trim();
  const locationId = (process.env.GHL_LOCATION_ID || "").trim();
  if (!apiKey || !locationId) return { skipped: true };
  if (!payload.email && !payload.phone) return { skipped: true };

  const { firstName, lastName } = splitName(payload.name);
  const service = payload.subject || payload.report_type || "";

  const body = {
    firstName: firstName || undefined,
    lastName: lastName || undefined,
    email: payload.email || undefined,
    phone: normalizePhone(payload.phone || "") || undefined,
    companyName: payload.company || undefined,
    source: `${SITE_NAME} Website`,
  };

  const res = await fetch("https://services.leadconnectorhq.com/contacts/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Version: "2021-07-28",
      "Content-Type": "application/json",
      Accept: "application/json",
      LocationId: locationId,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("GHL API failed", res.status, text, { service });
    return { ok: false };
  }
  return { ok: true };
}

async function forwardWebhook(payload) {
  const url = (process.env.GHL_WEBHOOK_URL || "").trim();
  if (!url) return { skipped: true };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(buildWebhookPayload(payload)),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("GHL inbound webhook failed", res.status, text);
    return { ok: false };
  }
  return { ok: true };
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  if (payload.website) {
    return { statusCode: 400, body: JSON.stringify({ error: "Submission rejected" }) };
  }

  if (!payload.name?.trim()) {
    return { statusCode: 400, body: JSON.stringify({ error: "Name is required" }) };
  }

  const hasApi = Boolean(process.env.GHL_API_KEY && process.env.GHL_LOCATION_ID);
  const hasWebhook = Boolean(process.env.GHL_WEBHOOK_URL);

  if (!hasApi && !hasWebhook) {
    return {
      statusCode: 503,
      body: JSON.stringify({ error: "GHL not configured" }),
    };
  }

  if (!payload.email && !payload.phone) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Email or phone is required" }),
    };
  }

  if (hasApi) await createContact(payload);
  if (hasWebhook) {
    const wh = await forwardWebhook(payload);
    if (!wh.ok && !hasApi) {
      return { statusCode: 502, body: JSON.stringify({ error: "Webhook failed" }) };
    }
  }

  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};
