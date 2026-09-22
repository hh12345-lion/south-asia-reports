export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://southasiareports.com";
export const SITE_NAME = "South Asia Reports";
export const SITE_EMAIL = "cases@southasiareports.com";
export const PAKISTAN_REPORTS_URL = "https://www.pakistanexpertreports.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/south-asia-reports";

/** Geographic and professional scope — use in page copy (not alert banners) */
export const SERVICE_SCOPE_TITLE = "Service scope";

export const SERVICE_SCOPE_INTRO =
  "South Asia Reports connects immigration counsel, law firms, and legal-aid practitioners with country condition reports for South Asian asylum and immigration proceedings.";

export const SERVICE_SCOPE_DETAIL =
  "Guidance on this website addresses country conditions across Bangladesh, India, Sri Lanka, Nepal, and Bhutan, including official country-of-origin material, tribunal practice, and instruction processes. We focus on South Asian jurisdictions rather than unrelated regional systems.";

export const SERVICE_SCOPE_POINTS = [
  "Immigration and asylum tribunal appeals involving South Asian countries of origin",
  "Official country-of-origin material and designated country guidance",
  "Legal-aid-compatible fee structures where applicable",
  "Expert reports prepared for Refugee Convention analysis as applied in the relevant forum",
] as const;

/** @deprecated Prefer SERVICE_SCOPE_* — kept for existing imports */
export const UK_SERVICE_SCOPE_TITLE = SERVICE_SCOPE_TITLE;
export const UK_SERVICE_SCOPE_INTRO = SERVICE_SCOPE_INTRO;
export const UK_SERVICE_SCOPE_DETAIL = SERVICE_SCOPE_DETAIL;
export const UK_SERVICE_SCOPE_POINTS = SERVICE_SCOPE_POINTS;

/** Primary landing CTA — not Instruct / Retain / Brief / Find an Expert */
export const PRIMARY_CTA = "Lodge a case";

/** Brand palette from guidelines */
export const COLORS = {
  primary: "#261E18",
  accent: "#7F905C",
  highlight: "#80273A",
  background: "#EAE5DB",
  sectionAlt: "#E0D9CC",
  border: "#C9C0B3",
  heading: "#261E18",
  body: "#4A423B",
  white: "#FFFFFF",
} as const;
