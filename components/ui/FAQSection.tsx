import type { FAQ } from "@/lib/schema";

/**
 * Questions set as a ruled index rather than a stack of boxes — answers stay in
 * the document for crawlers and for people reading straight through.
 */
export function FAQSection({
  faqs,
  title = "Questions solicitors ask",
  id,
  headingId,
}: {
  faqs: FAQ[];
  title?: string;
  id?: string;
  headingId?: string;
}) {
  return (
    <section id={id} className="scroll-mt-32 py-10 sm:py-12">
      <h2 id={headingId} className="break-words font-display text-2xl text-ink sm:text-[1.75rem]">
        {title}
      </h2>

      <dl className="mt-8 border-t border-rule">
        {faqs.map((faq, i) => (
          <div
            key={faq.question}
            className="grid gap-2 border-b border-rule py-6 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-6"
          >
            <span aria-hidden="true" className="numeral text-[1.35rem] sm:pt-0.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <dt className="break-words font-display text-[1.15rem] leading-snug text-ink">
                {faq.question}
              </dt>
              <dd className="prose-safe measure-wide mt-2 leading-relaxed text-body">
                {faq.answer}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
