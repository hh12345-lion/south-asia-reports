import { SITE_URL } from "../constants";
import { asylumProfiles } from "../../data/asylum-profiles";
import { caseTypes } from "../../data/case-types";
import { countries } from "../../data/countries";
import { guides } from "../../data/guides";
import { services } from "../../data/services";

export type PublicUrlEntry = {
  path: string;
  priority: number;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
};

export const APP_STATIC_PATHS: PublicUrlEntry[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/south-asia-asylum-explained", priority: 0.95, changefreq: "monthly" },
  { path: "/countries", priority: 0.95, changefreq: "monthly" },
  { path: "/cpin-country-guidance", priority: 0.95, changefreq: "monthly" },
  { path: "/asylum-profiles", priority: 0.93, changefreq: "monthly" },
  { path: "/services", priority: 0.9, changefreq: "monthly" },
  { path: "/what-is-a-south-asia-expert-report", priority: 0.9, changefreq: "monthly" },
  { path: "/case-types", priority: 0.88, changefreq: "monthly" },
  { path: "/how-to-instruct", priority: 0.88, changefreq: "monthly" },
  { path: "/qualifications", priority: 0.88, changefreq: "monthly" },
  { path: "/guides", priority: 0.87, changefreq: "monthly" },
  { path: "/glossary", priority: 0.75, changefreq: "monthly" },
  { path: "/cookie-policy", priority: 0.5, changefreq: "yearly" },
];

export const NON_INDEXABLE_PATHS = ["/contact", "/thank-you", "/privacy", "/terms"] as const;

export const ROBOTS_DISALLOW_PATHS = ["/thank-you", "/api/"] as const;

const COUNTRY_PRIORITIES: Record<string, number> = {
  bangladesh: 0.94,
  india: 0.94,
  "sri-lanka": 0.93,
  nepal: 0.92,
  bhutan: 0.9,
};

const SERVICE_PRIORITIES: Record<string, number> = {
  "bangladesh-post-2024-reports": 0.94,
};

function dynamicEntries(): PublicUrlEntry[] {
  return [
    ...asylumProfiles.map((p) => ({
      path: `/asylum-profiles/${p.slug}`,
      priority: 0.92,
      changefreq: "monthly" as const,
    })),
    ...countries.map((c) => ({
      path: `/countries/${c.slug}`,
      priority: COUNTRY_PRIORITIES[c.slug] ?? 0.9,
      changefreq: "monthly" as const,
    })),
    ...caseTypes.map((c) => ({
      path: `/case-types/${c.slug}`,
      priority: 0.88,
      changefreq: "monthly" as const,
    })),
    ...guides.map((g) => ({
      path: `/guides/${g.slug}`,
      priority: 0.82,
      changefreq: "monthly" as const,
    })),
    ...services.map((s) => ({
      path: `/services/${s.id}`,
      priority: SERVICE_PRIORITIES[s.id] ?? 0.9,
      changefreq: "monthly" as const,
    })),
  ];
}

export type PublicUrlInventory = {
  siteUrl: string;
  entries: PublicUrlEntry[];
  allPaths: string[];
  allUrls: string[];
};

export function buildPublicUrlInventory(siteUrl: string = SITE_URL): PublicUrlInventory {
  const origin = siteUrl.replace(/\/$/, "");
  const merged = [...APP_STATIC_PATHS, ...dynamicEntries()];

  const byPath = new Map<string, PublicUrlEntry>();
  for (const entry of merged) {
    const path = entry.path.startsWith("/") ? entry.path : `/${entry.path}`;
    if (NON_INDEXABLE_PATHS.includes(path as (typeof NON_INDEXABLE_PATHS)[number])) continue;
    byPath.set(path, { ...entry, path });
  }

  const entries = [...byPath.values()].sort((a, b) => a.path.localeCompare(b.path));
  const allPaths = entries.map((e) => e.path);
  const allUrls = allPaths.map((p) => (p === "/" ? origin : `${origin}${p}`));

  return { siteUrl: origin, entries, allPaths, allUrls };
}
