"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useCookieConsent } from "./CookieConsentContext";

const btnPrimary =
  "inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-paper px-5 text-[15px] font-medium text-ink transition-colors hover:bg-ochre-pale sm:w-auto";
const btnSecondary =
  "inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center rounded-[10px] border border-paper/30 px-5 text-[15px] font-medium text-paper transition-colors hover:border-paper sm:w-auto";
const btnGhost =
  "inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center rounded-[10px] px-4 text-[15px] text-paper/70 underline-offset-4 transition-colors hover:text-paper hover:underline sm:w-auto";

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
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[14px] bg-ink shadow-[0_-4px_40px_rgba(23,17,31,0.28)]">
        <div className="h-[3px] bg-ochre" aria-hidden />
        <div className="p-5 sm:p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 id="cookie-banner-title" className="font-display text-xl text-paper">
                Cookies on this site
              </h2>
              <p id="cookie-banner-desc" className="mt-2 text-[15px] leading-relaxed text-paper/70">
                Necessary cookies keep the site working. Everything else stays off until you turn it
                on. Read the{" "}
                <Link href="/cookie-policy" className="link-rule text-ochre-pale">
                  cookie policy
                </Link>{" "}
                or{" "}
                <Link href="/privacy" className="link-rule text-ochre-pale">
                  privacy policy
                </Link>
                .
              </p>
            </div>
            <div
              className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:shrink-0 lg:justify-end"
              role="group"
              aria-label="Cookie consent actions"
            >
              <button ref={acceptRef} type="button" onClick={acceptAll} className={btnPrimary}>
                Accept all
              </button>
              <button type="button" onClick={rejectNonEssential} className={btnSecondary}>
                Reject non-essential
              </button>
              <button type="button" onClick={openPreferences} className={btnGhost}>
                Choose
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
