import { asylumProfiles } from "./asylum-profiles";
import { caseTypes } from "./case-types";
import { countries } from "./countries";
import { guides } from "./guides";
import { services } from "./services";

export type NavLink = {
  label: string;
  href: string;
  /** Short qualifier shown in the header index panels */
  note?: string;
};

/** Curated one-line qualifiers. Kept here so the nav reads as an index, not a link dump. */
const profileNotes: Record<string, string> = {
  "political-persecution-south-asia": "Party membership, protest history, imputed opinion",
  "religious-minority-persecution": "Hindus, Christians, Ahmadis, Muslims by region",
  "lgbtq-south-asia": "Section 377 legacy, family and community risk",
  "caste-discrimination": "Dalit and Adivasi claims, state protection gaps",
  "women-gender-based-violence": "Acid attacks, dowry violence, honour crimes",
  "journalists-human-rights-defenders": "Reporters, bloggers, NGO and union figures",
  "diaspora-activity-risk-on-return": "Sur place activity and airport monitoring",
  "failed-asylum-seekers-return": "Documentation, screening and reception on return",
};

const caseTypeNotes: Record<string, string> = {
  "ftt-south-asia-appeal": "First-tier Tribunal substantive appeals",
  "upper-tribunal-south-asia": "Error of law and remaking",
  "sri-lanka-tamil-claims": "KK [2021] risk categories",
  "bangladesh-political-claims": "Post-August 2024 reversal of risk",
  "india-minority-claims": "Hindutva-era minority and caste claims",
  "deportation-return-south-asia": "Article 3 and foreign-criminal deportation",
  "fresh-claims-south-asia": "Paragraph 353 further submissions",
  "certification-challenge": "Clearly unfounded and safe-return certificates",
};

const resourceNotes: Record<string, string> = {
  "/south-asia-asylum-explained": "The full picture, start here",
  "/what-is-a-south-asia-expert-report": "Scope, format and tribunal duties",
  "/cpin-country-guidance": "Current CPINs and country guidance",
  "/guides": "Long-form guidance by country and issue",
  "/how-to-instruct": "Seven steps from enquiry to filed report",
  "/qualifications": "Credentials and Practice Direction duties",
  "/glossary": "35 tribunal and country-evidence terms",
};

export const servicesNavLinks: NavLink[] = services.map((s) => ({
  label: s.navLabel,
  href: `/services/${s.id}`,
  note: s.description.split(/(?<=\.)\s/)[0],
}));

export const asylumProfilesNavLinks: NavLink[] = asylumProfiles.map((p) => ({
  label: p.title,
  href: `/asylum-profiles/${p.slug}`,
  note: profileNotes[p.slug],
}));

export const countriesNavLinks: NavLink[] = countries.map((c) => ({
  label: c.title,
  href: `/countries/${c.slug}`,
  note: c.keyProfiles,
}));

export const caseTypesNavLinks: NavLink[] = caseTypes.map((c) => ({
  label: c.title,
  href: `/case-types/${c.slug}`,
  note: caseTypeNotes[c.slug],
}));

export const resourcesNavLinks: NavLink[] = [
  { label: "South Asia Asylum Explained", href: "/south-asia-asylum-explained" },
  { label: "What Is an Expert Report?", href: "/what-is-a-south-asia-expert-report" },
  { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
  { label: "Solicitor Guides", href: "/guides" },
  { label: "How to Instruct", href: "/how-to-instruct" },
  { label: "Qualifications", href: "/qualifications" },
  { label: "Glossary", href: "/glossary" },
].map((link) => ({ ...link, note: resourceNotes[link.href] }));

export const guidesNavLinks: NavLink[] = guides.map((g) => ({
  label: g.h1.replace(/:.*$/, "").slice(0, 40),
  href: `/guides/${g.slug}`,
}));

/** Sections rendered as full-width index panels in the header. */
export type NavSection = {
  label: string;
  href: string;
  /** Standfirst shown in the panel spine */
  blurb: string;
  hubLabel: string;
  links: NavLink[];
  /** Two columns for short lists, three for long ones */
  columns: 2 | 3;
};

export const navSections: NavSection[] = [
  {
    label: "Countries",
    href: "/countries",
    blurb:
      "Five countries, each with its own evidence problem. Bangladesh and India have no current UK country guidance, so the CPIN stands unless it is answered.",
    hubLabel: "All countries",
    links: countriesNavLinks,
    columns: 2,
  },
  {
    label: "Profiles",
    href: "/asylum-profiles",
    blurb:
      "Risk in South Asia is profile-specific. The same country can be safe for one appellant and not for another, which is where expert evidence does its work.",
    hubLabel: "All asylum profiles",
    links: asylumProfilesNavLinks,
    columns: 2,
  },
  {
    label: "Case types",
    href: "/case-types",
    blurb:
      "What the tribunal needs from an expert changes with the procedural posture, from a first appeal to a certification challenge.",
    hubLabel: "All case types",
    links: caseTypesNavLinks,
    columns: 2,
  },
  {
    label: "Services",
    href: "/services",
    blurb:
      "Country condition reports, CPIN challenges, internal relocation analysis and oral evidence, all prepared to Practice Direction standards.",
    hubLabel: "All services",
    links: servicesNavLinks,
    columns: 2,
  },
  {
    label: "Resources",
    href: "/guides",
    blurb:
      "Free reference material for solicitors: what a country expert report can and cannot do, and how to instruct one well.",
    hubLabel: "Solicitor guides",
    links: resourcesNavLinks,
    columns: 2,
  },
];

export const mobileNavGroups = [
  {
    title: "Countries",
    links: [{ label: "All Countries", href: "/countries" }, ...countriesNavLinks],
  },
  {
    title: "Asylum Profiles",
    links: [{ label: "All Asylum Profiles", href: "/asylum-profiles" }, ...asylumProfilesNavLinks],
  },
  {
    title: "Case Types",
    links: [{ label: "All Case Types", href: "/case-types" }, ...caseTypesNavLinks],
  },
  {
    title: "Services",
    links: [{ label: "All Services", href: "/services" }, ...servicesNavLinks],
  },
  {
    title: "Resources",
    links: [...resourcesNavLinks],
  },
] satisfies { title: string; links: NavLink[] }[];
