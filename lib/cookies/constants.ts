import type { CookieCategory } from "./types";

/** localStorage key — South Asia Reports branded; bump CONSENT_VERSION to re-prompt */
export const CONSENT_STORAGE_KEY = "sar_cookie_consent_v1";

/** Increment to invalidate stored consent and show banner again */
export const CONSENT_VERSION = 1;

/** GDPR common practice: re-ask annually */
export const CONSENT_EXPIRY_DAYS = 365;

export const CATEGORY_META: Record<
  CookieCategory,
  { label: string; description: string; required: boolean }
> = {
  necessary: {
    label: "Necessary Cookies",
    description:
      "Required for the site to function securely (consent storage, load balancing, fraud prevention). Cannot be disabled.",
    required: true,
  },
  analytics: {
    label: "Analytics",
    description:
      "Help us understand how visitors use the site through aggregated data (Google Analytics, Google Tag Manager, Hotjar).",
    required: false,
  },
  marketing: {
    label: "Marketing",
    description:
      "Measure advertising performance and reach relevant professional audiences (Meta Pixel, LinkedIn Insight Tag).",
    required: false,
  },
  preferences: {
    label: "Preferences",
    description:
      "Remember optional choices such as display settings to improve your experience on return visits.",
    required: false,
  },
};
