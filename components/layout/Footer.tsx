import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { PAKISTAN_REPORTS_URL, PRIMARY_CTA, SITE_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-rule bg-oat">
      <div className="px-4 py-10 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl text-ink">{SITE_EMAIL.replace("@", " · ")}</p>
            <a href={`mailto:${SITE_EMAIL}`} className="link-rule mt-2 inline-block text-[15px] text-indigo">
              {SITE_EMAIL}
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center bg-indigo px-6 text-[15px] font-medium text-paper hover:bg-indigo-deep"
          >
            {PRIMARY_CTA}
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-rule pt-5 text-[13px] text-ink-soft">
          <span>South Asia Reports — not a law firm</span>
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
          <Link href="/cookie-policy" className="hover:text-ink">
            Cookies
          </Link>
          <Link href="/terms" className="hover:text-ink">
            Terms
          </Link>
          <CookieSettingsButton variant="footer" />
          <a href={PAKISTAN_REPORTS_URL} rel="noopener noreferrer" className="hover:text-ink">
            Pakistan reports
          </a>
        </div>
      </div>
    </footer>
  );
}
