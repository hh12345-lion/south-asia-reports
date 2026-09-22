/**
 * Second-pass softener for remaining high-visibility UK phrases in data + pages.
 */
const fs = require("fs");
const path = require("path");

const pairs = [
  [/\bUK\b asylum/g, "asylum"],
  [/\bUK\b immigration/g, "immigration"],
  [/\bUK\b tribunal/g, "tribunal"],
  [/\bUK\b tribunals/g, "tribunals"],
  [/\bUK\b courts/g, "courts"],
  [/\bUK\b proceedings/g, "proceedings"],
  [/\bUK\b country guidance/g, "country guidance"],
  [/\bUK\b guidance/g, "guidance"],
  [/\bUK\b CPIN/g, "CPIN"],
  [/\bUK\b Legal Aid/g, "legal aid"],
  [/\bUK\b practitioners/g, "practitioners"],
  [/\bUK\b practice/g, "practice"],
  [/\bUK\b forum/g, "forum"],
  [/\bUK\b law/g, "applicable law"],
  [/\bUK\b solicitors/g, "counsel"],
  [/\bUK\b counsel/g, "counsel"],
  [/ in the UK/g, ""],
  [/ across the UK/g, " across jurisdictions"],
  [/ from the UK/g, ""],
  [/ for the UK/g, " for the forum"],
  [/ to the UK/g, ""],
  [/ of the UK/g, ""],
  [/\| UK /g, "| "],
  [/ UK \|/g, " |"],
  [/ \(UK\)/g, ""],
  [/UK GDPR/g, "GDPR"],
  [/outside the UK/g, "outside your jurisdiction"],
];

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next"].includes(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(ent.name)) out.push(p);
  }
  return out;
}

let n = 0;
for (const root of ["app", "data", "components", "lib"]) {
  if (!fs.existsSync(root)) continue;
  for (const file of walk(root)) {
    if (file.includes("script-registry")) continue;
    if (file.endsWith("lib\\constants.ts") || file.endsWith("lib/constants.ts")) continue;
    let t = fs.readFileSync(file, "utf8");
    const orig = t;
    for (const [re, rep] of pairs) t = t.replace(re, rep);
    // Collapse double spaces from removals in prose (not in code ids)
    if (t !== orig) {
      fs.writeFileSync(file, t);
      n++;
      console.log(file);
    }
  }
}
console.log("updated", n);

let uk = 0;
for (const f of walk(".")) {
  const m = fs.readFileSync(f, "utf8").match(/\bUK\b/g);
  if (m) uk += m.length;
}
console.log("UK_REMAINING", uk);
