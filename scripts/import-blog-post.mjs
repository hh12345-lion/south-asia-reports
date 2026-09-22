import fs from "node:fs";

const src =
  "C:/Users/Eroniti/Downloads/what-su-expert-reports-format-bangladesh-decision-means-south-asia.md";
const dest =
  "C:/Users/Eroniti/Desktop/Projects/south-asia-reports/content/blog/what-su-expert-reports-format-bangladesh-decision-means-south-asia.md";

let body = fs.readFileSync(src, "utf8");
body = body
  .replace(/\\#/g, "#")
  .replace(/\\-/g, "-")
  .replace(/\\\./g, ".")
  .replace(/\\\*/g, "*")
  .replace(/\\\[/g, "[")
  .replace(/\\\]/g, "]")
  .replace(/\r\n/g, "\n");

body = body.replace(/^#\s+.+\n+/, "");

const fm = `---
title: "What the 2026 SU (Expert Reports - Format) Bangladesh Decision Means for South Asia Expert Evidence"
description: "What SU (Expert reports - format) Bangladesh [2026] UKUT 00317 (IAC) means for instructing South Asia country experts and preparing expert reports."
date: "2026-09-21"
updated: "2026-09-21"
image: "/images/blog/what-su-expert-reports-format-bangladesh-decision-means-south-asia.png"
imageAlt: "Practitioners reviewing documents and case materials around a table"
---

`;

fs.writeFileSync(dest, fm + body.trim() + "\n", "utf8");
console.log("wrote", dest);
