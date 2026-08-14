import Link from "next/link";
import { PRIMARY_CTA, SITE_EMAIL } from "@/lib/constants";

export function CTASection({
  title = "Send the refusal letter and the hearing date",
  description = "That is enough to tell you whether a report will help, what it will cost and when it will land. If it will not help, we will say so.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-ink text-paper">
      <div className="px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
        <span className="kicker kicker-pale">The next step</span>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-[1.7rem] leading-tight text-paper sm:text-[2rem]">
          {title}
        </h2>
        <p className="measure mt-4 text-[16px] leading-relaxed text-paper/70">{description}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-h-[50px] items-center justify-center bg-indigo px-7 font-medium text-paper hover:bg-indigo-deep"
          >
            {PRIMARY_CTA}
          </Link>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="inline-flex min-h-[50px] items-center justify-center border border-paper/30 px-7 font-medium text-paper hover:border-paper"
          >
            {SITE_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
