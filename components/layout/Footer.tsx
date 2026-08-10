import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { PAKISTAN_REPORTS_URL, SITE_EMAIL } from "@/lib/constants";

const sections = [
  { label: "Countries", href: "/countries" },
  { label: "Profiles", href: "/asylum-profiles" },
  { label: "Case types", href: "/case-types" },
  { label: "Services", href: "/services" },
  { label: "Guides", href: "/guides" },
  { label: "How to instruct", href: "/how-to-instruct" },
];

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookie-policy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <span className="kicker kicker-pale">Instructing an expert</span>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="mt-3 block font-display text-2xl text-paper underline decoration-ochre decoration-1 underline-offset-[6px] transition-colors hover:decoration-ochre-pale sm:text-3xl"
            >
              {SITE_EMAIL}
            </a>
            <p className="mt-4 text-[15px] leading-relaxed text-paper/60">
              Send the refusal letter, the appeal bundle index and your hearing date. You will have a
              scope, a fee and a delivery date within one working day.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            {sections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] text-paper/70 transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-paper/15 pt-6">
          <p className="font-display text-[15px] italic text-paper/50">
            An expert&rsquo;s duty is to the tribunal, not to the party instructing them.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-paper/45">
            <span>South Asia Reports &mdash; not a law firm, no legal advice</span>
            {legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-paper/80">
                {item.label}
              </Link>
            ))}
            <CookieSettingsButton variant="footer" />
            <a href={PAKISTAN_REPORTS_URL} rel="noopener noreferrer" className="hover:text-paper/80">
              Pakistan reports
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
