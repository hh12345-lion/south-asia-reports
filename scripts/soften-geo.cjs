/**
 * Soften high-visibility UK/US framing without touching regex literals.
 * Run: node scripts/soften-geo.cjs
 */
const fs = require("fs");
const path = require("path");

const roots = ["app", "components", "data", "lib"];
const skipDirs = new Set(["node_modules", ".next", "test-results"]);

const pairs = [
  [/ Expert Reports UK/g, " Expert Reports"],
  [/ Reports UK/g, " Reports"],
  [/ \| UK$/gm, ""],
  [/UK South Asia/g, "South Asia"],
  [/for UK asylum/g, "for asylum"],
  [/UK asylum appeals/g, "asylum appeals"],
  [/UK asylum tribunals/g, "asylum tribunals"],
  [/UK asylum law/g, "asylum law"],
  [/UK immigration solicitors/g, "immigration counsel"],
  [/UK solicitors/g, "counsel"],
  [/immigration solicitors/g, "immigration counsel"],
  [/Legal Aid practitioners only/g, "instructing counsel"],
  [/FTT\/UT proceedings, and Legal Aid practitioners only/g, "tribunal proceedings"],
  [/country evidence for UK asylum/gi, "country evidence for asylum"],
  [/Never shared with the Home Office\./g, "Confidential intake."],
  [/Home Office Country Policy Information Notes \(CPINs\)/g, "official country-of-origin notes (CPINs)"],
  [/Home Office CPINs/g, "official CPINs"],
  [/Home Office/g, "decision-makers"],
  [/United Kingdom–focused/g, "South Asia–focused"],
  [/United Kingdom expert reports/g, "South Asia expert reports"],
  [/United Kingdom service scope/g, "Service scope"],
  [/in England, Wales, Scotland, and Northern Ireland/g, ""],
  [/We do not provide reports for US, Canadian, EU, or other non-UK immigration systems\./g, "We focus on South Asian countries of origin."],
  [/en-GB/g, "en"],
  [/en_GB/g, "en"],
];

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (/\.(ts|tsx|md)$/.test(ent.name)) out.push(p);
  }
  return out;
}

let n = 0;
for (const root of roots) {
  if (!fs.existsSync(root)) continue;
  for (const file of walk(root)) {
    // Never touch constants we already rewrote carefully
    if (file.replace(/\\/g, "/").endsWith("lib/constants.ts")) continue;
    if (file.replace(/\\/g, "/").endsWith("lib/metadata.ts")) continue;
    if (file.replace(/\\/g, "/").endsWith("app/layout.tsx")) continue;
    let t = fs.readFileSync(file, "utf8");
    const orig = t;
    for (const [re, rep] of pairs) t = t.replace(re, rep);
    if (t !== orig) {
      fs.writeFileSync(file, t);
      n++;
      console.log(file);
    }
  }
}
console.log("updated", n);
