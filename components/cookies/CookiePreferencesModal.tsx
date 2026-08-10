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
        <p className="font-display text-[1.05rem] text-ink">{label}</p>
        <p className="mt-1 text-[14.5px] leading-relaxed text-body">{description}</p>
        {disabled && <p className="kicker mt-2 text-[14px]">Always active</p>}
      </div>
      <button
        type="button"
        id={id}
        role="switch"
        aria-checked={checked}
        aria-label={`${label} cookies`}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative mt-0.5 inline-flex h-7 w-12 shrink-0 rounded-full transition-colors ${
          disabled
            ? "cursor-not-allowed bg-ink/25"
            : checked
              ? "cursor-pointer bg-indigo"
              : "cursor-pointer bg-rule"
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-6 w-6 translate-y-0.5 rounded-full bg-surface shadow transition-transform ${
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
  const [wasOpen, setWasOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(dialogRef, isPreferencesOpen);

  // Reset draft when the modal opens (adjust state during render — React-recommended).
  if (isPreferencesOpen !== wasOpen) {
    setWasOpen(isPreferencesOpen);
    if (isPreferencesOpen) {
      setDraft(choices);
    }
  }

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
        className="absolute inset-0 bg-ink/60 backdrop-blur-[3px] animate-[fadeIn_0.2s_ease-out]"
        aria-label="Close cookie preferences"
        onClick={closePreferences}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-prefs-title"
        className="cookie-banner-enter relative z-10 flex max-h-[min(90vh,720px)] w-full max-w-lg flex-col overflow-hidden rounded-t-[14px] bg-surface shadow-[0_24px_64px_rgba(23,17,31,0.28)] sm:rounded-[14px]"
      >
        <div className="bg-ink px-5 py-5 sm:px-6">
          <h2 id="cookie-prefs-title" className="font-display text-xl text-paper">
            Choose your cookies
          </h2>
          <p className="mt-1.5 text-[15px] text-paper/70">
            Read the{" "}
            <Link href="/cookie-policy" className="link-rule text-ochre-pale" onClick={closePreferences}>
              cookie policy
            </Link>{" "}
            for the detail.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
          <ul className="space-y-3">
            {CATEGORIES.map((key) => {
              const meta = CATEGORY_META[key];
              return (
                <li key={key} className="rounded-[12px] border border-rule bg-oat/50 p-4">
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

        <div className="flex flex-col gap-2 border-t border-rule bg-oat p-4 sm:flex-row sm:flex-wrap sm:justify-end">
          <button
            type="button"
            ref={closeBtnRef}
            onClick={closePreferences}
            className="min-h-[46px] cursor-pointer rounded-[10px] px-4 text-[15px] text-ink-soft hover:text-ink"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={rejectNonEssential}
            className="min-h-[46px] cursor-pointer rounded-[10px] border border-rule bg-surface px-4 text-[15px] text-ink hover:border-ink"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={() => savePreferences(draft)}
            className="min-h-[46px] cursor-pointer rounded-[10px] border border-ink px-4 text-[15px] text-ink hover:bg-surface"
          >
            Save
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="min-h-[46px] cursor-pointer rounded-[10px] bg-indigo px-4 text-[15px] font-medium text-paper hover:bg-indigo-deep"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
