export type RelatedLink = { label: string; href: string };

const INSTRUCTION_LINKS: RelatedLink[] = [
  { label: "How to Instruct", href: "/how-to-instruct" },
  { label: "Contact Us", href: "/contact" },
];

function mergeLinks(...groups: RelatedLink[][]): RelatedLink[] {
  const seen = new Set<string>();
  const out: RelatedLink[] = [];
  for (const group of groups) {
    for (const link of group) {
      if (seen.has(link.href)) continue;
      seen.add(link.href);
      out.push(link);
    }
  }
  return out;
}

/** Appendix D: Profile Minimum Links Matrix + Rule A */
export function getProfileRelatedLinks(slug: string): RelatedLink[] {
  const map: Record<string, RelatedLink[]> = {
    "political-persecution-south-asia": [
      { label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" },
      { label: "Bangladesh Political Claims", href: "/case-types/bangladesh-political-claims" },
      { label: "Bangladesh 2024 Guide", href: "/guides/bangladesh-asylum-2024-guide" },
      { label: "Bangladesh Country Page", href: "/countries/bangladesh" },
      { label: "BNP (Glossary)", href: "/glossary#bnp" },
    ],
    "religious-minority-persecution": [
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "India Minority Claims", href: "/case-types/india-minority-claims" },
      { label: "India Asylum Guide", href: "/guides/india-asylum-guide" },
      { label: "India Country Page", href: "/countries/india" },
      { label: "Hindutva (Glossary)", href: "/glossary#hindutva" },
    ],
    "lgbtq-south-asia": [
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "India Minority Claims", href: "/case-types/india-minority-claims" },
      { label: "India Asylum Guide", href: "/guides/india-asylum-guide" },
      { label: "Bangladesh Country Page", href: "/countries/bangladesh" },
      { label: "India Country Page", href: "/countries/india" },
      { label: "HJ (Iran) [2010] (Glossary)", href: "/glossary#hj-iran-2010" },
    ],
    "caste-discrimination": [
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "India Minority Claims", href: "/case-types/india-minority-claims" },
      { label: "Nepal/Bhutan Guide", href: "/guides/nepal-bhutan-expert-guide" },
      { label: "India Country Page", href: "/countries/india" },
      { label: "Nepal Country Page", href: "/countries/nepal" },
      { label: "Caste (Glossary)", href: "/glossary#caste" },
    ],
    "women-gender-based-violence": [
      { label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" },
      { label: "FTT South Asia Appeal", href: "/case-types/ftt-south-asia-appeal" },
      { label: "Bangladesh Country Page", href: "/countries/bangladesh" },
      { label: "India Country Page", href: "/countries/india" },
    ],
    "journalists-human-rights-defenders": [
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "Bangladesh Political Claims", href: "/case-types/bangladesh-political-claims" },
      { label: "Bangladesh 2024 Guide", href: "/guides/bangladesh-asylum-2024-guide" },
      { label: "Bangladesh Country Page", href: "/countries/bangladesh" },
      { label: "India Country Page", href: "/countries/india" },
    ],
    "diaspora-activity-risk-on-return": [
      { label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" },
      { label: "Sri Lanka Tamil Claims", href: "/case-types/sri-lanka-tamil-claims" },
      { label: "Sri Lanka KK Guide", href: "/guides/sri-lanka-kk-guide" },
      { label: "Sri Lanka Country Page", href: "/countries/sri-lanka" },
      { label: "KK [2021] (Glossary)", href: "/glossary#kk-and-others-2021" },
    ],
    "failed-asylum-seekers-return": [
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "Deportation & Return", href: "/case-types/deportation-return-south-asia" },
      { label: "South Asia CPIN Guide", href: "/guides/south-asia-cpin-guide" },
      { label: "Bangladesh Country Page", href: "/countries/bangladesh" },
    ],
  };

  return mergeLinks(
    map[slug] ?? [{ label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" }],
    INSTRUCTION_LINKS
  );
}

/** Rule B: Guide → profile, pillar/CPIN, instruction, contact */
export function getGuideRelatedLinks(slug: string): RelatedLink[] {
  const map: Record<string, RelatedLink[]> = {
    "bangladesh-asylum-2024-guide": [
      { label: "Political Persecution Profile", href: "/asylum-profiles/political-persecution-south-asia" },
      { label: "Journalists & HRDs Profile", href: "/asylum-profiles/journalists-human-rights-defenders" },
      { label: "Bangladesh Country Page", href: "/countries/bangladesh" },
      { label: "Bangladesh Political Claims", href: "/case-types/bangladesh-political-claims" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" },
    ],
    "india-asylum-guide": [
      { label: "Religious Minority Profile", href: "/asylum-profiles/religious-minority-persecution" },
      { label: "LGBTQ+ Profile", href: "/asylum-profiles/lgbtq-south-asia" },
      { label: "India Country Page", href: "/countries/india" },
      { label: "India Minority Claims", href: "/case-types/india-minority-claims" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    ],
    "sri-lanka-kk-guide": [
      { label: "Diaspora Activity Profile", href: "/asylum-profiles/diaspora-activity-risk-on-return" },
      { label: "Sri Lanka Country Page", href: "/countries/sri-lanka" },
      { label: "Sri Lanka Tamil Claims", href: "/case-types/sri-lanka-tamil-claims" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "KK [2021] (Glossary)", href: "/glossary#kk-and-others-2021" },
    ],
    "south-asia-cpin-guide": [
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "All Countries", href: "/countries" },
      { label: "Failed Asylum Seekers", href: "/asylum-profiles/failed-asylum-seekers-return" },
      { label: "Fresh Claims Case Type", href: "/case-types/fresh-claims-south-asia" },
    ],
    "nepal-bhutan-expert-guide": [
      { label: "Caste Discrimination Profile", href: "/asylum-profiles/caste-discrimination" },
      { label: "Nepal Country Page", href: "/countries/nepal" },
      { label: "Bhutan Country Page", href: "/countries/bhutan" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    ],
    "instructing-south-asia-expert": [
      { label: "Political Persecution", href: "/asylum-profiles/political-persecution-south-asia" },
      { label: "Religious Minority Persecution", href: "/asylum-profiles/religious-minority-persecution" },
      { label: "LGBTQ+ South Asia", href: "/asylum-profiles/lgbtq-south-asia" },
      { label: "Failed Asylum Seekers", href: "/asylum-profiles/failed-asylum-seekers-return" },
      { label: "Qualifications", href: "/qualifications" },
      { label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" },
    ],
  };

  return mergeLinks(
    map[slug] ?? [{ label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" }],
    INSTRUCTION_LINKS
  );
}

export function getCountryRelatedLinks(slug: string): RelatedLink[] {
  const map: Record<string, RelatedLink[]> = {
    bangladesh: [
      { label: "All Countries", href: "/countries" },
      { label: "Political Persecution Profile", href: "/asylum-profiles/political-persecution-south-asia" },
      { label: "Religious Minority Profile", href: "/asylum-profiles/religious-minority-persecution" },
      { label: "LGBTQ+ Profile", href: "/asylum-profiles/lgbtq-south-asia" },
      { label: "Bangladesh 2024 Guide", href: "/guides/bangladesh-asylum-2024-guide" },
      { label: "Bangladesh Political Claims", href: "/case-types/bangladesh-political-claims" },
      { label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    ],
    india: [
      { label: "All Countries", href: "/countries" },
      { label: "Religious Minority Profile", href: "/asylum-profiles/religious-minority-persecution" },
      { label: "LGBTQ+ Profile", href: "/asylum-profiles/lgbtq-south-asia" },
      { label: "Caste Discrimination Profile", href: "/asylum-profiles/caste-discrimination" },
      { label: "India Asylum Guide", href: "/guides/india-asylum-guide" },
      { label: "India Minority Claims", href: "/case-types/india-minority-claims" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    ],
    "sri-lanka": [
      { label: "All Countries", href: "/countries" },
      { label: "Diaspora Activity Profile", href: "/asylum-profiles/diaspora-activity-risk-on-return" },
      { label: "Sri Lanka KK Guide", href: "/guides/sri-lanka-kk-guide" },
      { label: "Sri Lanka Tamil Claims", href: "/case-types/sri-lanka-tamil-claims" },
      { label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    ],
    nepal: [
      { label: "All Countries", href: "/countries" },
      { label: "Caste Discrimination Profile", href: "/asylum-profiles/caste-discrimination" },
      { label: "Nepal/Bhutan Guide", href: "/guides/nepal-bhutan-expert-guide" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    ],
    bhutan: [
      { label: "All Countries", href: "/countries" },
      { label: "Caste Discrimination Profile", href: "/asylum-profiles/caste-discrimination" },
      { label: "Nepal/Bhutan Guide", href: "/guides/nepal-bhutan-expert-guide" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "Lhotshampa (Glossary)", href: "/glossary#lhotshampa" },
    ],
  };

  return mergeLinks(map[slug] ?? [{ label: "All Countries", href: "/countries" }], INSTRUCTION_LINKS);
}

export function getCaseTypeRelatedLinks(slug: string): RelatedLink[] {
  const map: Record<string, RelatedLink[]> = {
    "ftt-south-asia-appeal": [
      { label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" },
      { label: "All Asylum Profiles", href: "/asylum-profiles" },
      { label: "Qualifications", href: "/qualifications" },
    ],
    "upper-tribunal-south-asia": [
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "CPIN Challenge Service", href: "/services#cpin-challenge" },
      { label: "Political Persecution Profile", href: "/asylum-profiles/political-persecution-south-asia" },
    ],
    "sri-lanka-tamil-claims": [
      { label: "Diaspora Activity Profile", href: "/asylum-profiles/diaspora-activity-risk-on-return" },
      { label: "Sri Lanka Country Page", href: "/countries/sri-lanka" },
      { label: "Sri Lanka KK Guide", href: "/guides/sri-lanka-kk-guide" },
      { label: "KK [2021] (Glossary)", href: "/glossary#kk-and-others-2021" },
    ],
    "bangladesh-political-claims": [
      { label: "Political Persecution Profile", href: "/asylum-profiles/political-persecution-south-asia" },
      { label: "Bangladesh Country Page", href: "/countries/bangladesh" },
      { label: "Bangladesh 2024 Guide", href: "/guides/bangladesh-asylum-2024-guide" },
    ],
    "india-minority-claims": [
      { label: "Religious Minority Profile", href: "/asylum-profiles/religious-minority-persecution" },
      { label: "India Country Page", href: "/countries/india" },
      { label: "India Asylum Guide", href: "/guides/india-asylum-guide" },
    ],
    "deportation-return-south-asia": [
      { label: "Failed Asylum Seekers", href: "/asylum-profiles/failed-asylum-seekers-return" },
      { label: "Bangladesh Country Page", href: "/countries/bangladesh" },
      { label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" },
    ],
    "fresh-claims-south-asia": [
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "Political Persecution Profile", href: "/asylum-profiles/political-persecution-south-asia" },
      { label: "South Asia CPIN Guide", href: "/guides/south-asia-cpin-guide" },
    ],
    "certification-challenge": [
      { label: "Upper Tribunal Case Type", href: "/case-types/upper-tribunal-south-asia" },
      { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
      { label: "Qualifications", href: "/qualifications" },
    ],
  };

  return mergeLinks(
    map[slug] ?? [{ label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" }],
    INSTRUCTION_LINKS
  );
}

/** Pillar page must link to hub spokes (Section 3 / Appendix C) */
export function getPillarRelatedLinks(): RelatedLink[] {
  return [
    { label: "All Countries", href: "/countries" },
    { label: "Bangladesh", href: "/countries/bangladesh" },
    { label: "India", href: "/countries/india" },
    { label: "Sri Lanka", href: "/countries/sri-lanka" },
    { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
    { label: "All Asylum Profiles", href: "/asylum-profiles" },
    { label: "All Guides", href: "/guides" },
    { label: "How to Instruct", href: "/how-to-instruct" },
    { label: "Contact Us", href: "/contact" },
  ];
}

/** CPIN hub must link to pillar, countries, profiles, guides */
export function getCpinRelatedLinks(): RelatedLink[] {
  return [
    { label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" },
    { label: "All Countries", href: "/countries" },
    { label: "All Asylum Profiles", href: "/asylum-profiles" },
    { label: "South Asia CPIN Guide", href: "/guides/south-asia-cpin-guide" },
    { label: "How to Instruct", href: "/how-to-instruct" },
    { label: "Contact Us", href: "/contact" },
  ];
}
