import Link from "next/link";

type HubLink = { label: string; href: string };

export function HubLinkGrid({ title, links }: { title: string; links: HubLink[] }) {
  return (
    <div className="rounded-[14px] border border-rule bg-oat/70 p-5 sm:p-6">
      <h3 className="font-display text-lg text-ink">{title}</h3>
      <ul className="mt-3 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <li key={link.href} className="border-b border-rule-soft last:border-0">
            <Link
              href={link.href}
              className="flex min-h-[48px] max-w-full items-center break-words py-2 text-[14.5px] text-ink transition-colors hover:text-indigo"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
