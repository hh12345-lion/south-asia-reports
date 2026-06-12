export const CASE_PROFILES = [
  "Political Persecution",
  "Religious Minority",
  "LGBTQ+",
  "Caste",
  "Women / GBV",
  "Journalist / HRD",
  "Diaspora Activity",
  "Other",
] as const;

export const COUNTRIES = [
  "Bangladesh",
  "India",
  "Sri Lanka",
  "Nepal",
  "Bhutan",
  "Multiple / Not Sure",
] as const;

export const FUNDING_OPTIONS = ["Legal Aid", "Private", "Unsure"] as const;

export const REPORT_TYPES = [
  "Country Condition Report",
  "CPIN Challenge",
  "Internal Relocation",
  "Post-August 2024 Bangladesh",
  "Oral Evidence",
  "Unsure",
] as const;

export const PROCEEDINGS = [
  "First-tier Tribunal (FTT)",
  "Upper Tribunal (UT)",
  "Fresh Claim",
  "Deportation/Removal",
  "Judicial Review",
  "Pre-hearing / Not Yet Listed",
] as const;

export const URGENCY_OPTIONS = [
  "Standard (7+ days)",
  "Urgent (3-7 days)",
  "Emergency (within 72 hours)",
] as const;
