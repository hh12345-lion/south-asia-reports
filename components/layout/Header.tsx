"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  asylumProfilesNavLinks,
  caseTypesNavLinks,
  countriesNavLinks,
  mobileNavGroups,
  resourcesNavLinks,
  servicesNavLinks,
} from "@/data/navigation";
import { NavDropdown } from "@/components/layout/NavDropdown";

export function Header() {
  const toggleRef = useRef<HTMLInputElement>(null);

  const closeMobileMenu = () => {
    if (toggleRef.current) toggleRef.current.checked = false;
  };

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1280px)").matches) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 overflow-x-clip border-b border-[#D1DCE6] bg-white shadow-sm">
      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="header-bar mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 xl:px-8">
        <Link
          href="/"
          className="flex min-h-[44px] min-w-0 shrink items-center gap-2 font-bold text-[#1B2A4A]"
        >
          <span className="truncate text-base sm:text-lg xl:text-xl">South Asia Reports</span>
        </Link>

        <nav className="hidden min-w-0 items-center gap-0.5 xl:flex" aria-label="Main">
          <Link
            href="/"
            className="inline-flex min-h-[44px] shrink-0 items-center rounded-[8px] px-2 py-2 text-sm text-[#374151] hover:bg-[#F0F4F8] hover:text-[#1B2A4A] xl:px-2.5"
          >
            Home
          </Link>
          <NavDropdown label="Countries" href="/countries" items={countriesNavLinks} scrollable />
          <NavDropdown
            label="Asylum Profiles"
            href="/asylum-profiles"
            items={asylumProfilesNavLinks}
            scrollable
          />
          <NavDropdown label="Case Types" href="/case-types" items={caseTypesNavLinks} scrollable />
          <NavDropdown label="Services" href="/services" items={servicesNavLinks} scrollable />
          <NavDropdown
            label="Resources"
            href="/guides"
            items={[...resourcesNavLinks]}
            scrollable
            align="right"
          />
          <Link
            href="/contact"
            className="ml-1 inline-flex min-h-[44px] shrink-0 items-center rounded-[8px] bg-[#00796B] px-3 py-2 text-sm font-semibold text-white hover:bg-[#00695C] xl:px-4"
          >
            Contact Us
          </Link>
        </nav>

        <label
          htmlFor="mobile-nav-toggle"
          className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-[8px] border border-[#D1DCE6] xl:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="icon-open h-6 w-6 text-[#1B2A4A]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className="icon-close hidden h-6 w-6 text-[#1B2A4A]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>

      <nav
        id="mobile-menu"
        className="hidden max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-[#D1DCE6] bg-white peer-checked:block xl:hidden"
        aria-label="Mobile"
      >
        <div className="px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          {mobileNavGroups.map((group) => (
            <div key={group.title} className="mb-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#1B2A4A]">
                {group.title}
              </p>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex min-h-[44px] items-center rounded-[8px] px-3 text-sm text-[#374151] hover:bg-[#F0F4F8]"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href="/contact"
            className="flex min-h-[44px] w-full items-center justify-center rounded-[8px] bg-[#00796B] text-sm font-semibold text-white"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
