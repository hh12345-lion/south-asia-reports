#!/usr/bin/env npx tsx
/**
 * Generates public/sitemap.xml and public/robots.txt from buildPublicUrlInventory().
 * Run: npm run seo:generate
 */
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import {
  buildPublicUrlInventory,
  ROBOTS_DISALLOW_PATHS,
} from "../lib/seo/publicUrlInventory";
import { SITE_URL } from "../lib/constants";

const PUBLIC_DIR = join(process.cwd(), "public");
const SITEMAP_PATH = join(PUBLIC_DIR, "sitemap.xml");
const ROBOTS_PATH = join(PUBLIC_DIR, "robots.txt");

function todayUtc(): string {
  return new Date().toISOString().slice(0, 10);
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function renderSitemap(inventory: ReturnType<typeof buildPublicUrlInventory>): string {
  const lastmod = todayUtc();
  const urls = inventory.entries
    .map((entry) => {
      const loc = entry.path === "/" ? inventory.siteUrl : `${inventory.siteUrl}${entry.path}`;
      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(2)}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function renderRobots(siteUrl: string): string {
  const disallowLines = ROBOTS_DISALLOW_PATHS.map((p) => `Disallow: ${p}`).join("\n");
  return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
${disallowLines}

Sitemap: ${siteUrl}/sitemap.xml
`;
}

function main() {
  const inventory = buildPublicUrlInventory(SITE_URL);
  mkdirSync(PUBLIC_DIR, { recursive: true });

  const sitemapXml = renderSitemap(inventory);
  const robotsTxt = renderRobots(inventory.siteUrl);

  writeFileSync(SITEMAP_PATH, sitemapXml, "utf-8");
  writeFileSync(ROBOTS_PATH, robotsTxt, "utf-8");

  console.log(`Wrote ${SITEMAP_PATH} (${inventory.entries.length} URLs)`);
  console.log(`Wrote ${ROBOTS_PATH}`);
  console.log(`Canonical host: ${inventory.siteUrl}`);
}

main();
