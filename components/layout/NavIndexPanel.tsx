import Link from "next/link";
import type { NavSection } from "@/data/navigation";

/**
 * Full-width index panel used by the header instead of a narrow link list.
 * Reads as the index page of a reference work: a spine on the left explaining
 * the section, a two-column annotated index on the right.
 */
export function NavIndexPanel({
  section,
  onNavigate,
}: {
  section: NavSection;
  onNavigate: () => void;
}) {
  return (
    <div className="index-panel border-b border-rule bg-surface shadow-[0_18px_36px_-28px_rgba(36,28,51,0.5)]">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-4">
          <h2 className="font-display text-2xl text-ink">{section.label}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{section.blurb}</p>
          <Link
            href={section.href}
            onClick={onNavigate}
            className="link-rule mt-4 inline-flex items-center gap-2 text-[15px] font-medium text-indigo"
          >
            {section.hubLabel}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:col-span-8">
          {section.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onNavigate}
                className="group block rounded-[10px] px-3 py-2.5 transition-colors hover:bg-oat"
              >
                <span className="block font-medium text-ink group-hover:text-indigo-deep">
                  {link.label}
                </span>
                {link.note && (
                  <span className="mt-0.5 block text-[13px] leading-snug text-ink-soft">
                    {link.note}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
