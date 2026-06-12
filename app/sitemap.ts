import type { MetadataRoute } from "next";
import { buildPublicUrlInventory } from "@/lib/seo/publicUrlInventory";

/**
 * Indexable URLs only. Excludes noindex routes: /contact, /thank-you, /privacy, /terms
 * (see NON_INDEXABLE_PATHS in lib/seo/publicUrlInventory.ts).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const { entries, siteUrl } = buildPublicUrlInventory();

  return entries.map((entry) => ({
    url: entry.path === "/" ? siteUrl : `${siteUrl}${entry.path}`,
    lastModified: new Date(),
    changeFrequency: entry.changefreq,
    priority: entry.priority,
  }));
}
