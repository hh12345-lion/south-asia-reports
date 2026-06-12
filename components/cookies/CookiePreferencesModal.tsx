"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CATEGORY_META } from "@/lib/cookies/constants";
import type { CategoryConsent, CookieCategory } from "@/lib/cookies/types";
import { useCookieConsent } from "./CookieConsentContext";
import { useFocusTrap } from "./useFocusTrap";

const CATEGORIES: CookieCategory[] = ["necessary", "analytics", "marketing", "preferences"];

function CategoryToggle({
  id,
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <p className="font-semibold text-[#1B2A4A]">{label}</p>
        <p className="mt-1 text-sm text-[#374151] leading-relaxed">{description}</p>
        {disabled && (
          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#C4793A]">
            Always active
          </p>
        )}
      </div>
      <button
        type="button"
        id={id}
        role="switch"
        aria-checked={checked}
        aria-label={`${label} cookies`}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative mt-0.5 inline-flex h-7 w-12 shrink-0 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C4793A] focus-visible:ring-offset-2 ${
          disabled ? "cursor-not-allowed bg-[#1B2A4A]/30" : checked ? "bg-[#1B2A4A]" : "bg-[#D1DCE6]"
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-6 w-6 translate-y-0.5 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
          aria-hidden
        />
      </button>
    </div>
  );
}

export function CookiePreferencesModal() {
  const {
    isPreferencesOpen,
    closePreferences,
    choices,
    savePreferences,
    acceptAll,
    rejectNonEssential,
  } = useCookieConsent();

  const [draft, setDraft] = useState<CategoryConsent>(choices);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(dialogRef, isPreferencesOpen);

  useEffect(() => {
    if (isPreferencesOpen) setDraft(choices);
  }, [isPreferencesOpen, choices]);

  useEffect(() => {
    if (!isPreferencesOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreferences();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isPreferencesOpen, closePreferences]);

  const toggle = useCallback((key: CookieCategory, value: boolean) => {
    if (key === "necessary") return;
    setDraft((d) => ({ ...d, [key]: value }));
  }, []);

  if (!isPreferencesOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-center sm:items-center sm:p-4">
      <button
        type="button"
        className="absolute inset-0 bg-[#1B2A4A]/60 backdrop-blur-[3px] animate-[fadeIn_0.2s_ease-out]"
        aria-label="Close cookie preferences"
        onClick={closePreferences}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-prefs-title"
        className="relative z-10 flex max-h-[min(90vh,720px)] w-full max-w-lg flex-col overflow-hidden rounded-t-[8px] border border-[#D1DCE6] bg-white shadow-[0_24px_64px_rgba(27,42,74,0.28)] sm:rounded-[8px] cookie-banner-enter"
      >
        <div className="border-b border-[#D1DCE6] bg-[#1B2A4A] px-5 py-4 sm:px-6">
          <div className="h-0.5 w-12 rounded-full bg-[#C4793A] mb-3" aria-hidden />
          <h2 id="cookie-prefs-title" className="text-lg font-bold text-white sm:text-xl">
            Customize cookie preferences
          </h2>
          <p className="mt-1 text-sm text-white/75">
            Manage how we use cookies.{" "}
            <Link
              href="/cookie-policy"
              className="font-medium text-[#C4793A] hover:underline"
              onClick={closePreferences}
            >
              Cookie Policy
            </Link>
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
          <ul className="space-y-3">
            {CATEGORIES.map((key) => {
              const meta = CATEGORY_META[key];
              return (
                <li key={key} className="rounded-[8px] border border-[#D1DCE6] bg-[#F0F4F8]/50 p-4">
                  <CategoryToggle
                    id={`cookie-toggle-${key}`}
                    label={meta.label}
                    description={meta.description}
                    checked={draft[key]}
                    disabled={meta.required}
                    onChange={(v) => toggle(key, v)}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-2 border-t border-[#D1DCE6] bg-[#F0F4F8] p-4 sm:flex-row sm:flex-wrap sm:justify-end">
          <button
            type="button"
            ref={closeBtnRef}
            onClick={closePreferences}
            className="min-h-[44px] rounded-[8px] border border-[#D1DCE6] bg-white px-4 py-2 text-sm font-medium text-[#374151] hover:bg-[#F0F4F8]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={rejectNonEssential}
            className="min-h-[44px] rounded-[8px] border border-[#1B2A4A] bg-white px-4 py-2 text-sm font-semibold text-[#1B2A4A] hover:bg-[#F0F4F8]"
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            onClick={() => savePreferences(draft)}
            className="min-h-[44px] rounded-[8px] bg-[#1B2A4A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#152238]"
          >
            Save preferences
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="min-h-[44px] rounded-[8px] bg-[#C4793A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a8682f]"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
