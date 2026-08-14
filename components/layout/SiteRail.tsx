import Link from "next/link";
import { PRIMARY_CTA, SITE_EMAIL } from "@/lib/constants";

const railLinks = [
  { label: "Countries", href: "/countries" },
  { label: "Profiles", href: "/asylum-profiles" },
  { label: "Case types", href: "/case-types" },
  { label: "Services", href: "/services" },
  { label: "Guides", href: "/guides" },
  { label: "How a case is lodged", href: "/how-to-instruct" },
];

export function SiteRail() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-0 flex h-dvh w-[19.5rem] flex-col justify-between border-r border-rule bg-ink px-7 py-8 text-paper">
        <div>
          <Link href="/" className="block">
            <span className="block font-display text-[1.65rem] leading-none text-paper">
              South Asia
            </span>
            <span className="mt-1 block font-display text-[1.65rem] leading-none text-ochre-pale">
              Reports
            </span>
          </Link>
          <p className="mt-5 text-[13.5px] leading-relaxed text-paper/65">
            Country evidence for UK asylum appeals. Bangladesh, India, Sri Lanka, Nepal, Bhutan.
          </p>

          <Link
            href="/contact"
            className="mt-7 flex min-h-[48px] items-center justify-center bg-indigo px-4 text-[15px] font-medium text-paper transition-colors hover:bg-indigo-deep"
          >
            {PRIMARY_CTA}
          </Link>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="mt-3 block break-words text-center text-[12.5px] text-paper/55 hover:text-paper"
          >
            {SITE_EMAIL}
          </a>
        </div>

        <nav aria-label="Site" className="space-y-1">
          {railLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-1.5 text-[15px] text-paper/70 transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
