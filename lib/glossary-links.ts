import type { RelatedLink } from "@/data/related-links";

/** SEO-critical glossary term to internal links (Appendix C) */
export const GLOSSARY_TERM_LINKS: Record<string, RelatedLink[]> = {
  "kk-and-others-2021": [
    { label: "Sri Lanka Country Page", href: "/countries/sri-lanka" },
    { label: "Sri Lanka KK Guide", href: "/guides/sri-lanka-kk-guide" },
    { label: "Sri Lanka Tamil Case Type", href: "/case-types/sri-lanka-tamil-claims" },
    { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
  ],
  hindutva: [
    { label: "India Country Page", href: "/countries/india" },
    { label: "Religious Minority Profile", href: "/asylum-profiles/religious-minority-persecution" },
    { label: "India Asylum Guide", href: "/guides/india-asylum-guide" },
  ],
  rss: [
    { label: "India Country Page", href: "/countries/india" },
    { label: "Religious Minority Profile", href: "/asylum-profiles/religious-minority-persecution" },
    { label: "India Asylum Guide", href: "/guides/india-asylum-guide" },
  ],
  bjp: [
    { label: "India Country Page", href: "/countries/india" },
    { label: "Political Persecution Profile", href: "/asylum-profiles/political-persecution-south-asia" },
  ],
  bnp: [
    { label: "Bangladesh Country Page", href: "/countries/bangladesh" },
    { label: "Political Persecution Profile", href: "/asylum-profiles/political-persecution-south-asia" },
    { label: "Bangladesh 2024 Guide", href: "/guides/bangladesh-asylum-2024-guide" },
  ],
  "awami-league": [
    { label: "Bangladesh Country Page", href: "/countries/bangladesh" },
    { label: "Bangladesh Political Claims", href: "/case-types/bangladesh-political-claims" },
    { label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" },
  ],
  "jamaat-e-islami-bangladesh": [
    { label: "Bangladesh Country Page", href: "/countries/bangladesh" },
    { label: "Political Persecution Profile", href: "/asylum-profiles/political-persecution-south-asia" },
  ],
  cpin: [
    { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    { label: "South Asia CPIN Guide", href: "/guides/south-asia-cpin-guide" },
    { label: "CPIN Challenge Service", href: "/services#cpin-challenge" },
  ],
  "country-guidance-case": [
    { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    { label: "Sri Lanka KK Guide", href: "/guides/sri-lanka-kk-guide" },
  ],
  caste: [
    { label: "Caste Discrimination Profile", href: "/asylum-profiles/caste-discrimination" },
    { label: "India Country Page", href: "/countries/india" },
    { label: "Nepal Country Page", href: "/countries/nepal" },
  ],
  dalit: [
    { label: "Caste Discrimination Profile", href: "/asylum-profiles/caste-discrimination" },
    { label: "Nepal/Bhutan Guide", href: "/guides/nepal-bhutan-expert-guide" },
  ],
  lttee: [
    { label: "Sri Lanka Country Page", href: "/countries/sri-lanka" },
    { label: "Diaspora Activity Profile", href: "/asylum-profiles/diaspora-activity-risk-on-return" },
  ],
  ltte: [
    { label: "Sri Lanka Country Page", href: "/countries/sri-lanka" },
    { label: "Sri Lanka Tamil Case Type", href: "/case-types/sri-lanka-tamil-claims" },
  ],
  "hj-iran-2010": [
    { label: "LGBTQ+ Profile", href: "/asylum-profiles/lgbtq-south-asia" },
    { label: "India Country Page", href: "/countries/india" },
  ],
  "navtej-singh-johar": [
    { label: "LGBTQ+ Profile", href: "/asylum-profiles/lgbtq-south-asia" },
    { label: "India Asylum Guide", href: "/guides/india-asylum-guide" },
  ],
  s377: [
    { label: "LGBTQ+ Profile", href: "/asylum-profiles/lgbtq-south-asia" },
    { label: "Bangladesh Country Page", href: "/countries/bangladesh" },
  ],
  lhotshampa: [
    { label: "Bhutan Country Page", href: "/countries/bhutan" },
    { label: "Nepal/Bhutan Guide", href: "/guides/nepal-bhutan-expert-guide" },
  ],
  khalistan: [
    { label: "India Country Page", href: "/countries/india" },
    { label: "Political Persecution Profile", href: "/asylum-profiles/political-persecution-south-asia" },
  ],
  caa: [
    { label: "India Country Page", href: "/countries/india" },
    { label: "Religious Minority Profile", href: "/asylum-profiles/religious-minority-persecution" },
  ],
  nrc: [
    { label: "India Country Page", href: "/countries/india" },
    { label: "India Minority Claims", href: "/case-types/india-minority-claims" },
  ],
  "tamil-eelam": [
    { label: "Sri Lanka Country Page", href: "/countries/sri-lanka" },
    { label: "Diaspora Activity Profile", href: "/asylum-profiles/diaspora-activity-risk-on-return" },
  ],
  "maoist-nepal": [
    { label: "Nepal Country Page", href: "/countries/nepal" },
    { label: "Political Persecution Profile", href: "/asylum-profiles/political-persecution-south-asia" },
  ],
  "state-protection": [
    { label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" },
    { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
  ],
  "well-founded-fear": [
    { label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" },
    { label: "What Is a South Asia Expert Witness?", href: "/what-is-a-south-asia-expert-witness" },
  ],
};

export function getGlossaryTermLinks(slug: string): RelatedLink[] {
  return GLOSSARY_TERM_LINKS[slug] ?? [];
}
