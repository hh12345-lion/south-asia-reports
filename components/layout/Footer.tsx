import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { PAKISTAN_REPORTS_URL, SITE_EMAIL, UK_SERVICE_SCOPE_DETAIL } from "@/lib/constants";
import { asylumProfiles } from "@/data/asylum-profiles";
import { countries } from "@/data/countries";

export function Footer() {
  return (
    <footer className="border-t border-[#D1DCE6] bg-[#1B2A4A] text-white">
      <div className="mx-auto min-w-0 max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-semibold text-[#C4793A]">Countries</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {countries.map((c) => (
                <li key={c.slug}>
                  <Link href={`/countries/${c.slug}`} className="inline-flex min-h-[44px] items-center hover:text-white">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#C4793A]">Asylum Profiles</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {asylumProfiles.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link href={`/asylum-profiles/${p.slug}`} className="inline-flex min-h-[44px] items-center hover:text-white">
                    {p.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/asylum-profiles" className="text-[#C4793A] hover:underline">
                  View all profiles
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#C4793A]">Resources</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/south-asia-asylum-explained" className="hover:text-white">South Asia Asylum Explained</Link></li>
              <li><Link href="/cpin-country-guidance" className="hover:text-white">CPIN & Country Guidance</Link></li>
              <li><Link href="/guides" className="hover:text-white">Solicitor Guides</Link></li>
              <li><Link href="/how-to-instruct" className="hover:text-white">How to Instruct</Link></li>
              <li><Link href="/qualifications" className="hover:text-white">Qualifications</Link></li>
              <li><Link href="/glossary" className="hover:text-white">Glossary</Link></li>
              <li><Link href="/what-is-a-south-asia-expert-report" className="hover:text-white">What is a South Asia Expert Report?</Link></li>
              <li>
                <a href={PAKISTAN_REPORTS_URL} className="hover:text-white" rel="noopener noreferrer">
                  Pakistan Expert Reports
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#C4793A]">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="text-white/70">United Kingdom enquiries only</li>
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-white">
                  {SITE_EMAIL}
                </a>
              </li>
              <li><Link href="/contact" className="font-semibold text-[#C4793A] hover:underline">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/20 pt-6 text-center text-xs leading-relaxed text-white/60">
          South Asia Reports connects UK solicitors with qualified South Asia country experts for First-tier Tribunal
          and Upper Tribunal asylum and immigration proceedings. We are not a law firm and do not provide legal advice.{" "}
          {UK_SERVICE_SCOPE_DETAIL}
        </p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-xs text-white/50">
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Privacy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Cookie Policy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-white">
            Terms
          </Link>
          <span aria-hidden="true">·</span>
          <CookieSettingsButton variant="footer" />
        </p>
      </div>
    </footer>
  );
}
