"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PRIMARY_CTA } from "@/lib/constants";

const mobileLinks = [
  { label: "Lodge a case", href: "/contact" },
  { label: "Countries", href: "/countries" },
  { label: "Profiles", href: "/asylum-profiles" },
  { label: "Case types", href: "/case-types" },
  { label: "Services", href: "/services" },
  { label: "Guides", href: "/guides" },
  { label: "How a case is lodged", href: "/how-to-instruct" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper lg:hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="min-w-0" onClick={() => setOpen(false)}>
          <span className="block truncate font-display text-xl leading-none text-ink">
            South Asia <span className="text-indigo">Reports</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex min-h-[40px] items-center bg-indigo px-3 text-[13px] font-medium text-paper"
          >
            {PRIMARY_CTA}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center border border-rule text-ink"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              {open ? (
                <path strokeLinecap="round" strokeWidth={1.6} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth={1.6} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-rule bg-surface px-4 py-3 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
        >
          <ul>
            {mobileLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center border-b border-rule-soft text-[16px] text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
