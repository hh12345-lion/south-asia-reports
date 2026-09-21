function getSiteDomain(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://southasiareports.com";
  try {
    return new URL(raw).hostname.replace(/^www\./, "");
  } catch {
    return "southasiareports.com";
  }
}

export const LEAD_BRAND_NAME = "South Asia Reports";

/** Single Google Sheet tab for every lead. Never write to a second tab. */
export const LEAD_SHEET_TAB =
  process.env.GOOGLE_SHEET_TAB_NAME?.trim() || "Sheet1";

/** Row 1 headers in Google Sheet tab (GOOGLE_SHEET_TAB_NAME); order must match buildLeadSheetRow() */
export const LEAD_SHEET_COLUMNS = [
  "Timestamp",
  "Full Name",
  "Law Firm",
  "Email",
  "Phone",
  "Profile",
  "Country",
  "Proceedings",
  "Funding",
  "Deadline",
  "Urgency",
  "Case Summary",
  "Brand name",
] as const;

export function buildLeadSheetRow(payload: SubmitLeadPayload): (string | number | boolean | null)[] {
  const sanitize = (str: string) => str.replace(/<[^>]*>/g, "").trim();
  return [
    new Date().toISOString(),
    sanitize(payload.fullName ?? ""),
    sanitize(payload.organisation ?? ""),
    (payload.email ?? "").toLowerCase().trim(),
    sanitize(payload.phone ?? ""),
    sanitize(payload.caseProfile ?? ""),
    sanitize(payload.region ?? ""),
    sanitize(payload.proceedings ?? ""),
    sanitize(payload.funding ?? ""),
    payload.deadline ?? "",
    sanitize(payload.urgency ?? ""),
    sanitize(payload.summary ?? ""),
    LEAD_BRAND_NAME,
  ];
}

export type SubmitLeadInput = {
  fullName: string;
  email: string;
  phone: string;
  message?: string;
};

export type SubmitLeadPayload = SubmitLeadInput & {
  organisation?: string;
  caseProfile?: string;
  region?: string;
  proceedings?: string;
  funding?: string;
  deadline?: string;
  urgency?: string;
  summary?: string;
};

/** Map site free-text field names onto universal lowercase `message`. */
export function resolveLeadMessage(
  body: Record<string, unknown> | null | undefined
): string {
  if (!body || typeof body !== "object") return "";
  const keys = [
    "message",
    "Message",
    "summary",
    "description",
    "enquiry",
    "details",
    "notes",
    "matter",
    "caseBrief",
    "caseSummary",
    "case_summary",
    "caseDescription",
    "caseDetails",
    "additionalInfo",
    "additional_info",
    "enquiryDetails",
    "brief",
  ] as const;
  for (const key of keys) {
    if (body[key] != null && String(body[key]).trim()) {
      return String(body[key]).trim();
    }
  }
  return "";
}

/** Minimal webhook payload (n8n / Lead_notification_url) */
export function buildLeadWebhookPayload(input: SubmitLeadInput) {
  return {
    "Full Name": input.fullName.trim(),
    Email: input.email.trim(),
    "Phone Number": input.phone.trim(),
    "Brand name": LEAD_BRAND_NAME,
    domain: getSiteDomain(),
    message: input.message ?? "",
  };
}

export function getLeadWebhookUrl(): string | undefined {
  return (
    process.env.Lead_notification_url?.trim() ||
    process.env.LEAD_NOTIFICATION_URL?.trim() ||
    undefined
  );
}

/** Client-side: POST lead to /api/submit-lead */
export async function postSubmitLead(payload: SubmitLeadPayload): Promise<boolean> {
  try {
    const res = await fetch("/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}
