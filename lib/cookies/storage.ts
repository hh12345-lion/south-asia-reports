import {
  CONSENT_EXPIRY_DAYS,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
} from "./constants";
import {
  type StoredConsent,
  type CategoryConsent,
  DEFAULT_CATEGORY_CONSENT,
} from "./types";

/** Same-tab notify channel for useSyncExternalStore subscribers */
const CONSENT_CHANGE_EVENT = "sar-cookie-consent-change";

/** Cached snapshot — getSnapshot must return a stable reference or React loops. */
let cachedRaw: string | null | undefined;
let cachedValue: StoredConsent | null = null;

function invalidateConsentCache() {
  cachedRaw = undefined;
  cachedValue = null;
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function notifyConsentSubscribers() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

export function isConsentExpired(stored: StoredConsent): boolean {
  return new Date(stored.expiresAt).getTime() <= Date.now();
}

export function isStoredConsentValid(stored: StoredConsent | null): stored is StoredConsent {
  if (!stored) return false;
  if (stored.version !== CONSENT_VERSION) return false;
  if (!stored.choices?.necessary) return false;
  if (isConsentExpired(stored)) return false;
  return true;
}

/** Read consent from localStorage (client-only). Cached for useSyncExternalStore. */
export function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (raw === cachedRaw) return cachedValue;
    cachedRaw = raw;
    if (!raw) {
      cachedValue = null;
      return null;
    }
    const parsed = JSON.parse(raw) as StoredConsent;
    cachedValue = isStoredConsentValid(parsed) ? parsed : null;
    return cachedValue;
  } catch {
    invalidateConsentCache();
    return null;
  }
}

/** Persist consent with expiry */
export function writeStoredConsent(choices: CategoryConsent): StoredConsent {
  const now = new Date();
  const stored: StoredConsent = {
    version: CONSENT_VERSION,
    savedAt: now.toISOString(),
    expiresAt: addDays(now, CONSENT_EXPIRY_DAYS).toISOString(),
    choices: {
      ...DEFAULT_CATEGORY_CONSENT,
      ...choices,
      necessary: true,
    },
  };
  if (typeof window !== "undefined") {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
    invalidateConsentCache();
    notifyConsentSubscribers();
  }
  return stored;
}

export function clearStoredConsent(): void {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
    invalidateConsentCache();
    notifyConsentSubscribers();
  }
}

/** Subscribe to consent storage changes (same tab + cross-tab). */
export function subscribeConsentStore(onStoreChange: () => void): () => void {
  if (typeof window === "undefined") return () => {};

  const onStorage = (e: StorageEvent) => {
    if (e.key === CONSENT_STORAGE_KEY || e.key === null) onStoreChange();
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
  };
}
