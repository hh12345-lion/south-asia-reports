export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.southasiareports.com";
export const SITE_NAME = "South Asia Reports";
export const SITE_EMAIL = "cases@southasiareports.com";
export const PAKISTAN_REPORTS_URL = "https://www.pakistanexpertreports.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/south-asia-reports";

/** Geographic and professional scope — use in page copy (not alert banners) */
export const UK_SERVICE_SCOPE_TITLE = "United Kingdom service scope";

export const UK_SERVICE_SCOPE_INTRO =
  "South Asia Reports is a United Kingdom–focused expert report service. We connect immigration solicitors, law firms, and Legal Aid practitioners in England, Wales, Scotland, and Northern Ireland with country condition reports for UK asylum and immigration proceedings.";

export const UK_SERVICE_SCOPE_DETAIL =
  "All guidance on this website reflects UK asylum law, Home Office Country Policy Information Notes (CPINs), Upper Tribunal country guidance, Immigration Tribunal Practice Direction paragraph 10, and Legal Aid Agency instruction processes. We do not provide reports for US, Canadian, EU, or other non-UK immigration systems.";

export const UK_SERVICE_SCOPE_POINTS = [
  "First-tier Tribunal (Immigration and Asylum Chamber) and Upper Tribunal appeals",
  "Home Office CPINs and designated UK country guidance (e.g. KK [2021] Sri Lanka)",
  "Legal Aid Agency prior authority and LAA-compatible fee structures",
  "Expert reports prepared for the UK Immigration Rules and Refugee Convention as applied in the UK",
] as const;

export const COLORS = {
  primary: "#1B2A4A",
  accent: "#C4793A",
  highlight: "#00796B",
  background: "#FFFFFF",
  sectionAlt: "#F0F4F8",
  border: "#D1DCE6",
  heading: "#1B2A4A",
  body: "#374151",
} as const;
