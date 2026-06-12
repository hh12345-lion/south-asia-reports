#!/usr/bin/env node
/**
 * Responsive smoke test: checks horizontal overflow and key UI at common breakpoints.
 * Usage: node scripts/test-responsive.mjs [baseUrl]
 */
import { chromium } from "playwright";

const BASE = process.argv[2] ?? "http://127.0.0.1:3000";
const VIEWPORTS = [
  { name: "mobile-xs", width: 320, height: 568 },
  { name: "mobile", width: 375, height: 667 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
  { name: "desktop-xl", width: 1536, height: 900 },
];
const PATHS = [
  "/",
  "/contact",
  "/countries",
  "/countries/bangladesh",
  "/countries/india",
  "/countries/sri-lanka",
  "/south-asia-asylum-explained",
  "/cpin-country-guidance",
  "/asylum-profiles/political-persecution-south-asia",
  "/case-types/bangladesh-political-claims",
  "/guides/bangladesh-asylum-2024-guide",
  "/glossary",
  "/services",
];

async function auditPage(page, path, viewport) {
  const issues = [];
  await page.setViewportSize({ width: viewport.width, height: viewport.height });
  await page.goto(`${BASE}${path}`, { waitUntil: "networkidle", timeout: 60000 });

  const metrics = await page.evaluate(() => {
    const doc = document.documentElement;
    const overflow = doc.scrollWidth - window.innerWidth;
    const h1 = document.querySelector("h1");
    const h1Box = h1?.getBoundingClientRect();
    const header = document.querySelector("header");
    const mobileToggle = document.querySelector("#mobile-nav-toggle");
    const desktopNav = document.querySelector('nav[aria-label="Main"]');
    const contactLinks = document.querySelectorAll('a[href="/contact"]');
    const contactInDom = contactLinks.length > 0;
    let contactVisible = false;
    contactLinks.forEach((el) => {
      const box = el.getBoundingClientRect();
      if (box.width > 0 && box.height > 0) contactVisible = true;
    });
    return {
      overflow,
      scrollWidth: doc.scrollWidth,
      innerWidth: window.innerWidth,
      h1Visible: !!h1 && h1Box && h1Box.width > 0 && h1Box.height > 0,
      headerVisible: !!header && header.getBoundingClientRect().height > 0,
      mobileTogglePresent: !!mobileToggle,
      desktopNavVisible: desktopNav
        ? window.getComputedStyle(desktopNav).display !== "none"
        : false,
      contactInDom,
      contactVisible,
    };
  });

  if (metrics.overflow > 1) {
    issues.push(`horizontal overflow ${metrics.overflow}px (scroll ${metrics.scrollWidth} vs viewport ${metrics.innerWidth})`);
  }
  if (!metrics.h1Visible) issues.push("h1 not visible");
  if (!metrics.headerVisible) issues.push("header not visible");
  if (viewport.width < 1024 && !metrics.mobileTogglePresent) {
    issues.push("mobile nav toggle missing");
  }
  if (viewport.width >= 1024 && !metrics.desktopNavVisible) {
    issues.push("desktop nav not visible");
  }
  if (!metrics.contactInDom) issues.push("contact link missing from DOM");
  if (viewport.width >= 1024 && !metrics.contactVisible) {
    issues.push("contact CTA not visible on desktop");
  }

  return issues;
}

async function main() {
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    const failures = [];

    for (const viewport of VIEWPORTS) {
      for (const path of PATHS) {
        const issues = await auditPage(page, path, viewport);
        const label = `${viewport.name} ${viewport.width}px ${path}`;
        if (issues.length > 0) {
          failures.push({ label, issues });
          console.error(`FAIL ${label}`);
          issues.forEach((i) => console.error(`  - ${i}`));
        } else {
          console.log(`PASS ${label}`);
        }
      }
    }

    if (failures.length > 0) {
      console.error(`\n${failures.length} responsive check(s) failed.`);
      process.exit(1);
    }

    console.log(`\nAll ${VIEWPORTS.length * PATHS.length} responsive checks passed.`);
  } catch (error) {
    console.error("Responsive test error:", error.message);
    process.exit(1);
  } finally {
    if (browser) await browser.close();
  }
}

main();
