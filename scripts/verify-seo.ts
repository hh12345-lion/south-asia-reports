#!/usr/bin/env npx tsx
/**
 * Verifies SEO architecture: sitemap inventory, slug redirects, internal linking matrix.
 * Run: npm run seo:verify
 */
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { buildPublicUrlInventory } from "../lib/seo/publicUrlInventory";
import { SEO_SLUG_REDIRECTS } from "../lib/seo/slug-redirects";
import { SITE_URL } from "../lib/constants";
import { asylumProfiles } from "../data/asylum-profiles";
import {
  getProfileRelatedLinks,
  getGuideRelatedLinks,
  getCountryRelatedLinks,
  getCaseTypeRelatedLinks,
} from "../data/related-links";
import { guides } from "../data/guides";
import { countries } from "../data/countries";
import { caseTypes } from "../data/case-types";

const SITEMAP_PATH = join(process.cwd(), "public", "sitemap.xml");
const ROBOTS_PATH = join(process.cwd(), "public", "robots.txt");

/** Appendix D minimum href requirements per profile slug */
const PROFILE_MATRIX: Record<string, string[]> = {
  "political-persecution-south-asia": [
    "/south-asia-asylum-explained",
    "/case-types/bangladesh-political-claims",
    "/guides/bangladesh-asylum-2024-guide",
    "/countries/bangladesh",
  ],
  "religious-minority-persecution": [
    "/cpin-country-guidance",
    "/case-types/india-minority-claims",
    "/guides/india-asylum-guide",
    "/countries/india",
  ],
  "lgbtq-south-asia": [
    "/cpin-country-guidance",
    "/case-types/india-minority-claims",
    "/guides/india-asylum-guide",
    "/countries/bangladesh",
  ],
  "caste-discrimination": [
    "/cpin-country-guidance",
    "/case-types/india-minority-claims",
    "/guides/nepal-bhutan-expert-guide",
    "/countries/india",
  ],
  "women-gender-based-violence": [
    "/south-asia-asylum-explained",
    "/case-types/ftt-south-asia-appeal",
    "/countries/bangladesh",
  ],
  "journalists-human-rights-defenders": [
    "/cpin-country-guidance",
    "/case-types/bangladesh-political-claims",
    "/guides/bangladesh-asylum-2024-guide",
    "/countries/bangladesh",
  ],
  "diaspora-activity-risk-on-return": [
    "/south-asia-asylum-explained",
    "/case-types/sri-lanka-tamil-claims",
    "/guides/sri-lanka-kk-guide",
    "/countries/sri-lanka",
  ],
  "failed-asylum-seekers-return": [
    "/cpin-country-guidance",
    "/case-types/deportation-return-south-asia",
    "/guides/south-asia-cpin-guide",
  ],
};

const GUIDE_MATRIX: Record<string, string[]> = {
  "bangladesh-asylum-2024-guide": [
    "/asylum-profiles/political-persecution-south-asia",
    "/countries/bangladesh",
    "/cpin-country-guidance",
  ],
  "india-asylum-guide": [
    "/asylum-profiles/religious-minority-persecution",
    "/countries/india",
    "/cpin-country-guidance",
  ],
  "sri-lanka-kk-guide": [
    "/asylum-profiles/diaspora-activity-risk-on-return",
    "/countries/sri-lanka",
    "/cpin-country-guidance",
  ],
  "south-asia-cpin-guide": ["/cpin-country-guidance", "/countries"],
  "nepal-bhutan-expert-guide": [
    "/asylum-profiles/caste-discrimination",
    "/countries/nepal",
    "/cpin-country-guidance",
  ],
  "instructing-south-asia-expert": [
    "/asylum-profiles/political-persecution-south-asia",
    "/asylum-profiles/religious-minority-persecution",
    "/qualifications",
  ],
};

const CASE_TYPE_MATRIX: Record<string, string[]> = {
  "ftt-south-asia-appeal": ["/south-asia-asylum-explained", "/asylum-profiles"],
  "upper-tribunal-south-asia": ["/cpin-country-guidance", "/services#cpin-challenge"],
  "sri-lanka-tamil-claims": [
    "/asylum-profiles/diaspora-activity-risk-on-return",
    "/countries/sri-lanka",
    "/guides/sri-lanka-kk-guide",
  ],
  "bangladesh-political-claims": [
    "/asylum-profiles/political-persecution-south-asia",
    "/countries/bangladesh",
    "/guides/bangladesh-asylum-2024-guide",
  ],
  "india-minority-claims": [
    "/asylum-profiles/religious-minority-persecution",
    "/countries/india",
    "/guides/india-asylum-guide",
  ],
  "deportation-return-south-asia": ["/asylum-profiles/failed-asylum-seekers-return"],
  "fresh-claims-south-asia": ["/cpin-country-guidance", "/guides/south-asia-cpin-guide"],
  "certification-challenge": ["/cpin-country-guidance", "/qualifications"],
};

const COUNTRY_MATRIX: Record<string, string[]> = {
  bangladesh: ["/countries", "/cpin-country-guidance", "/south-asia-asylum-explained"],
  india: ["/countries", "/cpin-country-guidance"],
  "sri-lanka": ["/countries", "/cpin-country-guidance", "/guides/sri-lanka-kk-guide"],
  nepal: ["/countries", "/cpin-country-guidance"],
  bhutan: ["/countries", "/cpin-country-guidance"],
};

const REQUIRED_REDIRECTS: Record<string, string> = {
  "/what-is-a-somalia-expert-witness": "/what-is-a-south-asia-expert-witness",
  "/regions": "/countries",
  "/moj-country-guidance": "/south-asia-asylum-explained",
  "/faq": "/countries",
  "/fees": "/how-to-instruct",
  "/experts": "/qualifications",
};

function extractLocs(xml: string): string[] {
  const locs: string[] = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    locs.push(m[1].trim());
  }
  return locs.sort();
}

function hrefs(links: { href: string }[]): string[] {
  return links.map((l) => l.href.split("#")[0]);
}

function verifyMatrix(
  label: string,
  slug: string,
  links: string[],
  matrix: Record<string, string[]>
): string[] {
  const errors: string[] = [];
  const required = matrix[slug] ?? [];
  for (const path of required) {
    const base = path.split("#")[0];
    if (!links.includes(base) && !links.some((l) => l === path)) {
      if (path.includes("#")) {
        const fullLinks = links;
        if (!fullLinks.some((l) => l.startsWith(base))) {
          errors.push(`${label} ${slug} missing required link: ${path}`);
        }
      } else if (!links.includes(path)) {
        errors.push(`${label} ${slug} missing required link: ${path}`);
      }
    }
  }
  return errors;
}

function verifyInternalLinking(): string[] {
  const errors: string[] = [];

  for (const profile of asylumProfiles) {
    const links = hrefs(getProfileRelatedLinks(profile.slug));
    errors.push(...verifyMatrix("Profile", profile.slug, links, PROFILE_MATRIX));
    if (!links.includes("/how-to-instruct")) {
      errors.push(`Profile ${profile.slug} missing /how-to-instruct`);
    }
    if (!links.includes("/contact")) {
      errors.push(`Profile ${profile.slug} missing /contact`);
    }
  }

  for (const slug of Object.keys(PROFILE_MATRIX)) {
    if (!asylumProfiles.some((p) => p.slug === slug)) {
      errors.push(`PROFILE_MATRIX references unknown profile slug: ${slug}`);
    }
  }

  for (const guide of guides) {
    const links = hrefs(getGuideRelatedLinks(guide.slug));
    errors.push(...verifyMatrix("Guide", guide.slug, links, GUIDE_MATRIX));
    if (!links.includes("/how-to-instruct")) {
      errors.push(`Guide ${guide.slug} missing /how-to-instruct`);
    }
    if (!links.includes("/contact")) {
      errors.push(`Guide ${guide.slug} missing /contact`);
    }
  }

  for (const country of countries) {
    const links = hrefs(getCountryRelatedLinks(country.slug));
    errors.push(...verifyMatrix("Country", country.slug, links, COUNTRY_MATRIX));
    if (!links.includes("/how-to-instruct")) {
      errors.push(`Country ${country.slug} missing /how-to-instruct`);
    }
    if (!links.includes("/contact")) {
      errors.push(`Country ${country.slug} missing /contact`);
    }
  }

  for (const ct of caseTypes) {
    const rawLinks = getCaseTypeRelatedLinks(ct.slug).map((l) => l.href);
    const links = hrefs(getCaseTypeRelatedLinks(ct.slug));
    errors.push(...verifyMatrix("Case type", ct.slug, links, CASE_TYPE_MATRIX));
    for (const path of CASE_TYPE_MATRIX[ct.slug] ?? []) {
      if (path.includes("#") && !rawLinks.includes(path)) {
        errors.push(`Case type ${ct.slug} missing required anchor link: ${path}`);
      }
    }
    if (!links.includes("/how-to-instruct")) {
      errors.push(`Case type ${ct.slug} missing /how-to-instruct`);
    }
    if (!links.includes("/contact")) {
      errors.push(`Case type ${ct.slug} missing /contact`);
    }
  }

  return errors;
}

function verifySlugRedirects(): string[] {
  const errors: string[] = [];
  for (const [from, to] of Object.entries(REQUIRED_REDIRECTS)) {
    if (SEO_SLUG_REDIRECTS[from] !== to) {
      errors.push(`Missing or incorrect redirect: ${from} -> ${to}`);
    }
  }
  return errors;
}

function main() {
  let failed = false;

  if (!existsSync(SITEMAP_PATH)) {
    console.error(`Missing ${SITEMAP_PATH}. Run: npm run seo:generate`);
    process.exit(1);
  }
  if (!existsSync(ROBOTS_PATH)) {
    console.error(`Missing ${ROBOTS_PATH}. Run: npm run seo:generate`);
    process.exit(1);
  }

  const inventory = buildPublicUrlInventory(SITE_URL);
  const expected = [...inventory.allUrls].sort();
  const actual = extractLocs(readFileSync(SITEMAP_PATH, "utf-8"));

  const missing = expected.filter((u) => !actual.includes(u));
  const extra = actual.filter((u) => !expected.includes(u));

  if (missing.length > 0) {
    failed = true;
    console.error(`Sitemap missing ${missing.length} URL(s):`);
    missing.forEach((u) => console.error(`  - ${u}`));
  }
  if (extra.length > 0) {
    failed = true;
    console.error(`Sitemap has ${extra.length} unexpected URL(s):`);
    extra.forEach((u) => console.error(`  + ${u}`));
  }

  const robots = readFileSync(ROBOTS_PATH, "utf-8");
  if (!robots.includes(`Sitemap: ${inventory.siteUrl}/sitemap.xml`)) {
    failed = true;
    console.error(`robots.txt missing correct Sitemap line for ${inventory.siteUrl}`);
  }
  for (const path of ["/thank-you", "/api/"]) {
    if (!robots.includes(`Disallow: ${path}`)) {
      failed = true;
      console.error(`robots.txt missing Disallow: ${path}`);
    }
  }

  const linkErrors = verifyInternalLinking();
  if (linkErrors.length > 0) {
    failed = true;
    console.error("Internal linking matrix errors:");
    linkErrors.forEach((e) => console.error(`  - ${e}`));
  }

  const redirectErrors = verifySlugRedirects();
  if (redirectErrors.length > 0) {
    failed = true;
    console.error("Slug redirect errors:");
    redirectErrors.forEach((e) => console.error(`  - ${e}`));
  }

  if (failed) {
    console.error("\nSEO verification failed.");
    process.exit(1);
  }

  console.log(
    `SEO verify OK: ${actual.length} sitemap URLs, internal linking matrix, and slug redirects.`
  );
}

main();
