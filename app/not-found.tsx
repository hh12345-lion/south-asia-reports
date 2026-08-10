import Link from "next/link";

const elsewhere = [
  { label: "Countries", href: "/countries", note: "Bangladesh, India, Sri Lanka, Nepal, Bhutan" },
  { label: "Asylum profiles", href: "/asylum-profiles", note: "Risk assessed by profile" },
  { label: "Case types", href: "/case-types", note: "FTT, Upper Tribunal, fresh claims" },
  { label: "Asylum explained", href: "/south-asia-asylum-explained", note: "The full guide" },
];

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[1180px] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <span className="kicker">404</span>
          <h1 className="mt-4 font-display text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
            That page is not here
          </h1>
          <p className="measure mt-5 text-[17px] leading-relaxed text-body">
            The address may have changed, or the page may never have existed. Everything on this
            site is reachable from the index below.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-[50px] items-center justify-center rounded-[10px] bg-indigo px-7 font-medium text-paper transition-colors hover:bg-indigo-deep"
            >
              Back to the homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center rounded-[10px] border border-ink/25 px-7 font-medium text-ink transition-colors hover:border-ink"
            >
              Start an instruction
            </Link>
          </div>
        </div>

        <nav aria-label="Site index" className="lg:col-span-6">
          <ul className="border-t border-rule">
            {elsewhere.map((item) => (
              <li key={item.href} className="border-b border-rule">
                <Link
                  href={item.href}
                  className="group flex items-baseline justify-between gap-6 py-4"
                >
                  <span>
                    <span className="block font-display text-[1.15rem] text-ink group-hover:text-indigo">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-[14px] text-ink-soft">{item.note}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-ochre transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
