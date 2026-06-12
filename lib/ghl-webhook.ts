import { SITE_NAME } from "@/lib/constants";

export type GhlFormPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
  country?: string;
  profile?: string;
  funding?: string;
  report_type?: string;
  website?: string;
};

const CUSTOM_FIELD_NAMES: Record<string, string[]> = {
  businessName: ["business name", "company name"],
  serviceInterest: ["service interest", "service"],
  message: ["message", "case description", "notes"],
  country: ["country"],
  profile: ["profile", "case profile"],
  funding: ["funding"],
};

type CustomFieldIds = Partial<Record<keyof typeof CUSTOM_FIELD_NAMES, string>>;

function envCustomFieldIds(): CustomFieldIds {
  return {
    businessName: process.env.GHL_CUSTOM_FIELD_BUSINESS_NAME_ID?.trim(),
    serviceInterest: process.env.GHL_CUSTOM_FIELD_SERVICE_INTEREST_ID?.trim(),
    message: process.env.GHL_CUSTOM_FIELD_MESSAGE_ID?.trim(),
    country: process.env.GHL_CUSTOM_FIELD_COUNTRY_ID?.trim(),
    profile: process.env.GHL_CUSTOM_FIELD_PROFILE_ID?.trim(),
    funding: process.env.GHL_CUSTOM_FIELD_FUNDING_ID?.trim(),
  };
}

function splitName(name: string): { firstName: string; lastName: string } {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: "", lastName: "" };
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

function normalizePhone(phone: string): string {
  const trimmed = phone.trim();
  if (!trimmed) return "";
  const digits = trimmed.replace(/[^\d+]/g, "");
  return digits || trimmed;
}

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

export function parseGhlPayload(body: unknown): GhlFormPayload | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  return {
    name: typeof b.name === "string" ? sanitize(b.name) : "",
    email: typeof b.email === "string" ? sanitize(b.email).toLowerCase() : "",
    phone: typeof b.phone === "string" ? sanitize(b.phone) : "",
    company: typeof b.company === "string" ? sanitize(b.company) : "",
    subject: typeof b.subject === "string" ? sanitize(b.subject) : "",
    message: typeof b.message === "string" ? sanitize(b.message) : "",
    country: typeof b.country === "string" ? sanitize(b.country) : "",
    profile: typeof b.profile === "string" ? sanitize(b.profile) : "",
    funding: typeof b.funding === "string" ? sanitize(b.funding) : "",
    report_type: typeof b.report_type === "string" ? sanitize(b.report_type) : "",
    website: typeof b.website === "string" ? sanitize(b.website) : "",
  };
}

export function buildWebhookPayload(payload: GhlFormPayload) {
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

async function fetchCustomFieldIds(
  apiKey: string,
  locationId: string
): Promise<CustomFieldIds> {
  const fromEnv = envCustomFieldIds();
  const missing = Object.entries(fromEnv).filter(([, id]) => !id);
  if (missing.length === 0) return fromEnv;

  try {
    const res = await fetch(
      `https://services.leadconnectorhq.com/locations/${locationId}/customFields`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Version: "2021-07-28",
          Accept: "application/json",
        },
      }
    );
    if (!res.ok) return fromEnv;
    const data = (await res.json()) as { customFields?: { id: string; name: string }[] };
    const fields = data.customFields ?? [];
    const resolved: CustomFieldIds = { ...fromEnv };

    for (const [key, names] of Object.entries(CUSTOM_FIELD_NAMES)) {
      const k = key as keyof typeof CUSTOM_FIELD_NAMES;
      if (resolved[k]) continue;
      const match = fields.find((f) =>
        names.some((n) => f.name.toLowerCase() === n.toLowerCase())
      );
      if (match) resolved[k] = match.id;
    }
    return resolved;
  } catch {
    return fromEnv;
  }
}

function pushCustomField(
  customFields: { id: string; value: string }[],
  id: string | undefined,
  value: string
) {
  if (id && value) customFields.push({ id, value });
}

export async function buildContactPayload(payload: GhlFormPayload) {
  const apiKey = (process.env.GHL_API_KEY || "").trim();
  const locationId = (process.env.GHL_LOCATION_ID || "").trim();
  const { firstName, lastName } = splitName(payload.name || "");
  const service = payload.subject || payload.report_type || "";
  const fieldIds = apiKey && locationId ? await fetchCustomFieldIds(apiKey, locationId) : envCustomFieldIds();

  const customFields: { id: string; value: string }[] = [];
  pushCustomField(customFields, fieldIds.businessName, payload.company || "");
  pushCustomField(customFields, fieldIds.serviceInterest, service);
  pushCustomField(customFields, fieldIds.message, payload.message || "");
  pushCustomField(customFields, fieldIds.country, payload.country || "");
  pushCustomField(customFields, fieldIds.profile, payload.profile || "");
  pushCustomField(customFields, fieldIds.funding, payload.funding || "");

  return {
    firstName,
    lastName,
    email: payload.email || "",
    phone: normalizePhone(payload.phone || ""),
    companyName: payload.company || "",
    source: `${SITE_NAME} Website`,
    customFields,
    apiKey,
    locationId,
  };
}

export async function createOrUpdateGhlContact(payload: GhlFormPayload): Promise<boolean> {
  const contact = await buildContactPayload(payload);
  if (!contact.apiKey || !contact.locationId) return false;
  if (!contact.email && !contact.phone) return false;

  const body: Record<string, unknown> = {
    firstName: contact.firstName || undefined,
    lastName: contact.lastName || undefined,
    email: contact.email || undefined,
    phone: contact.phone || undefined,
    companyName: contact.companyName || undefined,
    source: contact.source,
    customFields: contact.customFields,
  };

  let res = await fetch("https://services.leadconnectorhq.com/contacts/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${contact.apiKey}`,
      Version: "2021-07-28",
      "Content-Type": "application/json",
      Accept: "application/json",
      LocationId: contact.locationId,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok && contact.customFields.length > 0) {
    const fallback = { ...body, customFields: [] as typeof contact.customFields };
    res = await fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${contact.apiKey}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
        Accept: "application/json",
        LocationId: contact.locationId,
      },
      body: JSON.stringify(fallback),
    });
  }

  return res.ok;
}

export async function forwardInboundWebhook(payload: GhlFormPayload): Promise<boolean> {
  const url = (process.env.GHL_WEBHOOK_URL || "").trim();
  if (!url) return false;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(buildWebhookPayload(payload)),
    signal: AbortSignal.timeout(12_000),
  });

  return res.ok;
}

export async function submitToGhl(payload: GhlFormPayload): Promise<{ ok: boolean; error?: string }> {
  const hasApi = Boolean((process.env.GHL_API_KEY || "").trim() && (process.env.GHL_LOCATION_ID || "").trim());
  const hasWebhook = Boolean((process.env.GHL_WEBHOOK_URL || "").trim());

  if (!hasApi && !hasWebhook) {
    return {
      ok: false,
      error:
        "Contact form is not configured. Set GHL_API_KEY, GHL_LOCATION_ID, and/or GHL_WEBHOOK_URL.",
    };
  }

  if (!payload.email && !payload.phone) {
    return { ok: false, error: "Email or phone is required." };
  }

  if (hasApi) {
    try {
      await createOrUpdateGhlContact(payload);
    } catch (err) {
      console.error("GHL API contact creation failed:", err);
    }
  }

  if (hasWebhook) {
    const webhookOk = await forwardInboundWebhook(payload);
    if (!webhookOk && !hasApi) {
      return { ok: false, error: "Inbound webhook request failed." };
    }
  }

  return { ok: true };
}
