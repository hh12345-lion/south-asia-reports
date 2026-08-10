import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[13px] text-ink-soft">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
        {items.map((item, i) => (
          <li key={i} className="flex max-w-full items-center gap-2">
            {i > 0 && (
              <span aria-hidden="true" className="shrink-0 text-ochre">
                /
              </span>
            )}
            {item.href ? (
              <Link href={item.href} className="break-words py-1 hover:text-ink hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="break-words py-1 text-ink">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
