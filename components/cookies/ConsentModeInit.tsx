"use client";

import { useEffect } from "react";
import { initGoogleConsentDefaults } from "@/lib/cookies/consent-mode";

/**
 * Runs Google Consent Mode defaults before any tag can load.
 * Mounted once in layout (client-only, renders nothing).
 */
export function ConsentModeInit() {
  useEffect(() => {
    initGoogleConsentDefaults();
  }, []);
  return null;
}
