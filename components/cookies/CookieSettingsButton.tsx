"use client";

import { useCookieConsent } from "./CookieConsentContext";

type Props = {
  className?: string;
  variant?: "footer" | "inline";
};

export function CookieSettingsButton({ className = "", variant = "footer" }: Props) {
  const { openPreferences } = useCookieConsent();

  const base =
    variant === "footer"
      ? "cursor-pointer text-[13px] text-paper/45 hover:text-paper/80 focus:outline-none focus-visible:underline"
      : "inline-flex min-h-[44px] cursor-pointer items-center text-[15px] font-medium text-indigo hover:underline";

  return (
    <button type="button" onClick={openPreferences} className={`${base} ${className}`}>
      Cookie Settings
    </button>
  );
}
