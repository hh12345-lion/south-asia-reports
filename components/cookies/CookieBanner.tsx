"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useCookieConsent } from "./CookieConsentContext";

/** South Asia Reports brand: navy #1B2A4A, copper #C4793A, teal #00796B */
const btnPrimary =
  "inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] bg-[#C4793A] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(196,121,58,0.35)] transition hover:bg-[#a8682f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C4793A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B2A4A] sm:w-auto";
const btnSecondary =
  "inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] border border-white/35 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B2A4A] sm:w-auto";
const btnGhost =
  "inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] px-4 py-2.5 text-sm font-medium text-white/90 underline-offset-2 transition hover:bg-white/8 hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto";

export function CookieBanner() {
  const { status, acceptAll, rejectNonEssential, openPreferences } = useCookieConsent();
  const acceptRef = useRef<HTMLButtonElement>(null);

  // Move keyboard focus to the banner when it appears (WCAG 2.4.3)
  useEffect(() => {
    if (status === "pending") {
      acceptRef.current?.focus();
    }
  }, [status]);

  if (status !== "pending") return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      aria-modal="false"
      aria-live="polite"
      className="cookie-banner-enter fixed inset-x-0 bottom-0 z-[100] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6"
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[8px] border border-[#C4793A]/30 bg-[#1B2A4A] shadow-[0_-4px_40px_rgba(0,0,0,0.28),0_8px_32px_rgba(27,42,74,0.45)]">
        <div
          className="h-1 bg-gradient-to-r from-[#C4793A] via-[#e0a840] to-[#00796B]"
          aria-hidden
        />
        <div className="p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#C4793A]">
                Privacy & compliance
              </p>
              <h2 id="cookie-banner-title" className="mt-1.5 text-lg font-bold text-white sm:text-xl">
                We value your privacy
              </h2>
              <p id="cookie-banner-desc" className="mt-2 text-sm leading-relaxed text-white/82">
                We use cookies to run this website securely, understand how solicitors use our
                resources, and measure marketing performance. You can accept all cookies, reject
                non-essential cookies, or customise your preferences. See our{" "}
                <Link href="/cookie-policy" className="font-semibold text-[#C4793A] hover:underline">
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="font-semibold text-[#C4793A] hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <p className="mt-2 text-xs text-white/55">
                UK GDPR & ePrivacy compliant. California residents: we do not sell personal
                information. Non-essential cookies are off until you opt in.
              </p>
            </div>
            <div
              className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:max-w-md lg:shrink-0 lg:justify-end"
              role="group"
              aria-label="Cookie consent actions"
            >
              <button ref={acceptRef} type="button" onClick={acceptAll} className={btnPrimary}>
                Accept All
              </button>
              <button type="button" onClick={rejectNonEssential} className={btnSecondary}>
                Reject Non-Essential
              </button>
              <button type="button" onClick={openPreferences} className={btnGhost}>
                Customize Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
