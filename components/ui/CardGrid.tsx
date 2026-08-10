import Link from "next/link";

type CardItem = { id?: string; title: string; description: string; href?: string };

function CardBody({ item }: { item: CardItem }) {
  return (
    <>
      <span
        aria-hidden="true"
        className="block h-px w-10 bg-ochre transition-all duration-300 group-hover:w-full"
      />
      <h3 className="mt-4 break-words font-display text-lg text-ink">{item.title}</h3>
      <p className="prose-safe mt-2 text-[14.5px] leading-relaxed text-body">{item.description}</p>
      {item.href && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-indigo">
          Read this page
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            &rarr;
          </span>
        </span>
      )}
    </>
  );
}

export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      {items.map((item) =>
        item.href ? (
          <Link
            key={item.href ?? item.id ?? item.title}
            href={item.href}
            className="group flex min-w-0 flex-col rounded-[14px] border border-rule bg-surface p-5 transition-colors hover:border-ochre"
          >
            <CardBody item={item} />
          </Link>
        ) : (
          <div
            key={item.id ?? item.title}
            id={item.id}
            className="group scroll-mt-32 rounded-[14px] border border-rule bg-surface p-5"
          >
            <CardBody item={item} />
          </div>
        )
      )}
    </div>
  );
}
