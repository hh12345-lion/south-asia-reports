export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.southasiareports.com";
export const SITE_NAME = "South Asia Reports";
export const SITE_EMAIL = "info@southasiareports.com";
export const PAKISTAN_REPORTS_URL = "https://www.pakistanexpertreports.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/south-asia-reports";

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
