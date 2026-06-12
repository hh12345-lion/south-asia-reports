import { readFileSync } from "fs";
import { join } from "path";
import { appendRow } from "../lib/google-sheets";
import { LEAD_BRAND_NAME, LEAD_SHEET_COLUMNS } from "../lib/submit-lead";

function loadEnvLocal() {
  try {
    const content = readFileSync(join(process.cwd(), ".env.local"), "utf-8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      process.env[key] = value;
    }
  } catch {
    /* .env.local optional when vars are already in environment */
  }
}

loadEnvLocal();

async function test() {
  console.log("Testing Google Sheets connection...\n");
  console.log("Expected header row (Row 1):", LEAD_SHEET_COLUMNS.join(" | "));

  try {
    const result = await appendRow([
      new Date().toISOString(),
      "Test Entry",
      "Test Law Firm",
      "test@example.com",
      "+44 7700 900000",
      "Political Persecution",
      "Bangladesh",
      "First-tier Tribunal (FTT)",
      "Legal Aid",
      "",
      "Standard (7+ days)",
      "Test submission from development environment.",
      LEAD_BRAND_NAME,
    ]);
    console.log("Row written:", result.updatedRange);
    console.log("\nAll tests passed.");
  } catch (error) {
    console.error("Failed:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

test();
