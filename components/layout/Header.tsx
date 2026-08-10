"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { navSections, mobileNavGroups } from "@/data/navigation";
import { NavIndexPanel } from "@/components/layout/NavIndexPanel";
import { SITE_EMAIL } from "@/lib/constants";

const HOVER_CLOSE_DELAY = 140;

export function Header() {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const closeAll = useCallback(() => {
    setOpenSection(null);
    setMobileOpen(false);
  }, []);

  // Navigating away closes whatever is open, including on browser back/forward.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenSection(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeAll]);

  useEffect(() => {
    if (!openSection) return;
    const onPointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenSection(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openSection]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenSection(null), HOVER_CLOSE_DELAY);
  };

  const active = navSections.find((s) => s.label === openSection);

  return (
    <header className="sticky top-0 z-50 overflow-x-clip">
      {/* Dispatch rail — standing facts a solicitor needs before they read anything else */}
      <div className="bg-ink text-paper">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-1.5 text-[12.5px] sm:px-6 lg:px-8">
          <p className="text-paper/70">
            Country evidence for UK asylum and immigration tribunals
          </p>
          <p className="flex items-center gap-4 text-paper/70">
            <span className="hidden sm:inline">Replies within one working day</span>
            <a href={`mailto:${SITE_EMAIL}`} className="text-ochre-pale hover:text-paper">
              {SITE_EMAIL}
            </a>
          </p>
        </div>
      </div>

      {/* Masthead */}
      <div
        ref={navRef}
        className="border-b border-rule bg-paper/95 backdrop-blur-sm"
        onMouseLeave={scheduleClose}
        onMouseEnter={cancelClose}
      >
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="min-w-0 shrink" onClick={closeAll}>
            <span className="block truncate font-display text-xl leading-none text-ink sm:text-[1.6rem]">
              South Asia <span className="italic text-ochre">Reports</span>
            </span>
            <span className="mt-1 hidden text-[12px] text-ink-soft sm:block">
              Bangladesh &middot; India &middot; Sri Lanka &middot; Nepal &middot; Bhutan
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navSections.map((section) => {
              const isOpen = openSection === section.label;
              return (
                <button
                  key={section.label}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls="nav-index-panel"
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenSection(section.label);
                  }}
                  onClick={() => setOpenSection(isOpen ? null : section.label)}
                  onFocus={() => setOpenSection(section.label)}
                  className={`relative min-h-[44px] cursor-pointer px-3 text-[15px] transition-colors after:absolute after:inset-x-3 after:bottom-2 after:h-[2px] after:origin-left after:transition-transform after:duration-200 after:content-[''] ${
                    isOpen
                      ? "text-ink after:scale-x-100 after:bg-ochre"
                      : "text-body after:scale-x-0 after:bg-ochre hover:text-ink"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
            <Link
              href="/contact"
              onClick={closeAll}
              className="ml-3 inline-flex min-h-[44px] items-center rounded-[10px] bg-indigo px-4 text-[15px] font-medium text-paper transition-colors hover:bg-indigo-deep"
            >
              Start an instruction
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-[10px] border border-rule text-ink lg:hidden"
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeWidth={1.6} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth={1.6} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {active && (
          <div id="nav-index-panel" className="absolute inset-x-0 top-full hidden lg:block">
            <NavIndexPanel section={active} onNavigate={closeAll} />
          </div>
        )}
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="max-h-[calc(100dvh-6.5rem)] overflow-y-auto overscroll-contain border-b border-rule bg-paper lg:hidden"
        >
          <div className="px-4 py-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6">
            <Link
              href="/contact"
              onClick={closeAll}
              className="flex min-h-[48px] w-full items-center justify-center rounded-[10px] bg-indigo font-medium text-paper"
            >
              Start an instruction
            </Link>

            {mobileNavGroups.map((group) => (
              <details key={group.title} className="border-b border-rule-soft py-1">
                <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between font-display text-lg text-ink marker:content-['']">
                  {group.title}
                  <svg className="h-4 w-4 text-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeWidth={1.8} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <ul className="pb-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeAll}
                        className="flex min-h-[44px] flex-col justify-center py-1.5 text-[15px] text-body"
                      >
                        {link.label}
                        {link.note && (
                          <span className="text-[13px] leading-snug text-ink-soft">{link.note}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </nav>
      )}

      {active && (
        <div
          className="fixed inset-0 -z-10 hidden bg-ink/10 lg:block"
          aria-hidden
          onClick={() => setOpenSection(null)}
        />
      )}
    </header>
  );
}
