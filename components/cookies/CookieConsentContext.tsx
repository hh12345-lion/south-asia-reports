"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { CookieBanner } from "./CookieBanner";
import { CookiePreferencesModal } from "./CookiePreferencesModal";
import { initGoogleConsentDefaults, updateGoogleConsent } from "@/lib/cookies/consent-mode";
import {
  createScriptRegistry,
  syncTrackingScripts,
  type TrackingScriptConfig,
} from "@/lib/cookies/script-registry";
import {
  readStoredConsent,
  subscribeConsentStore,
  writeStoredConsent,
} from "@/lib/cookies/storage";
import {
  ACCEPT_ALL_CONSENT,
  REJECT_NON_ESSENTIAL_CONSENT,
  type CategoryConsent,
  type ConsentStatus,
  DEFAULT_CATEGORY_CONSENT,
} from "@/lib/cookies/types";

type CookieConsentContextValue = {
  status: ConsentStatus;
  choices: CategoryConsent;
  isPreferencesOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (choices: CategoryConsent) => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}

/** Client-only gate without setState-in-effect (React-recommended pattern). */
function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const isClient = useIsClient();
  const stored = useSyncExternalStore(
    subscribeConsentStore,
    readStoredConsent,
    () => null
  );

  const status: ConsentStatus = stored ? "granted" : "pending";
  const choices: CategoryConsent = stored?.choices ?? DEFAULT_CATEGORY_CONSENT;

  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const registryRef = useRef<TrackingScriptConfig[] | null>(null);
  const syncedKeyRef = useRef<string | null>(null);

  const applyConsent = useCallback((next: CategoryConsent) => {
    const normalized: CategoryConsent = { ...next, necessary: true };
    writeStoredConsent(normalized);
    updateGoogleConsent(normalized);
    if (!registryRef.current) {
      registryRef.current = createScriptRegistry();
    }
    syncTrackingScripts(normalized, registryRef.current);
    syncedKeyRef.current = JSON.stringify(normalized);
    setIsPreferencesOpen(false);
  }, []);

  // Side effects only — no setState. Re-run when stored consent changes (e.g. hydration).
  useEffect(() => {
    initGoogleConsentDefaults();
    if (!registryRef.current) {
      registryRef.current = createScriptRegistry();
    }
    if (!stored) return;

    const key = JSON.stringify(stored.choices);
    if (syncedKeyRef.current === key) return;
    syncedKeyRef.current = key;
    updateGoogleConsent(stored.choices);
    syncTrackingScripts(stored.choices, registryRef.current);
  }, [stored]);

  const acceptAll = useCallback(() => {
    applyConsent(ACCEPT_ALL_CONSENT);
  }, [applyConsent]);

  const rejectNonEssential = useCallback(() => {
    applyConsent(REJECT_NON_ESSENTIAL_CONSENT);
  }, [applyConsent]);

  const savePreferences = useCallback(
    (draft: CategoryConsent) => {
      applyConsent(draft);
    },
    [applyConsent]
  );

  const value = useMemo(
    () => ({
      status,
      choices,
      isPreferencesOpen,
      openPreferences: () => setIsPreferencesOpen(true),
      closePreferences: () => setIsPreferencesOpen(false),
      acceptAll,
      rejectNonEssential,
      savePreferences,
    }),
    [status, choices, isPreferencesOpen, acceptAll, rejectNonEssential, savePreferences]
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {isClient && (
        <>
          <CookieBanner />
          <CookiePreferencesModal />
        </>
      )}
    </CookieConsentContext.Provider>
  );
}
