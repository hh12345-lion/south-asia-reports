import Link from "next/link";
import type { RelatedLink } from "@/data/related-links";

export function RelatedLinks({
  title = "Read next",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  if (links.length === 0) return null;
  return (
    <aside className="mt-14 min-w-0 border-t border-rule pt-8">
      <h2 className="kicker">{title}</h2>
      <ul className="mt-4 grid grid-cols-1 gap-x-10 md:grid-cols-2">
        {links.map((link) => (
          <li key={link.href} className="border-b border-rule-soft">
            <Link
              href={link.href}
              className="flex min-h-[52px] items-center justify-between gap-4 py-2 text-[15px] text-ink transition-colors hover:text-indigo"
            >
              <span className="break-words">{link.label}</span>
              <span aria-hidden="true" className="shrink-0 text-ochre">
                &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
