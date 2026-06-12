import Link from "next/link";

type CardItem = { id?: string; title: string; description: string; href?: string };

function CardContent({ item }: { item: CardItem }) {
  return (
    <>
      <h3 className="break-words font-semibold text-[#1B2A4A] group-hover:text-[#C4793A]">{item.title}</h3>
      <p className="prose-safe mt-2 text-sm text-[#374151] leading-relaxed">{item.description}</p>
      {item.href && <span className="mt-4 inline-block text-sm font-medium text-[#C4793A]">Learn more →</span>}
    </>
  );
}

export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {items.map((item) =>
        item.href ? (
          <Link
            key={item.href ?? item.id ?? item.title}
            href={item.href}
            className="group min-h-[44px] min-w-0 rounded-[8px] border border-[#D1DCE6] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)] transition hover:border-[#1B2A4A] sm:p-6"
          >
            <CardContent item={item} />
          </Link>
        ) : (
          <div
            key={item.id ?? item.title}
            id={item.id}
            className="scroll-mt-24 rounded-[8px] border border-[#D1DCE6] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)]"
          >
            <CardContent item={item} />
          </div>
        )
      )}
    </div>
  );
}
