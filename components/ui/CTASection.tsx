import Link from "next/link";
import { SITE_EMAIL } from "@/lib/constants";

export function CTASection({
  title = "Send us the refusal letter and the hearing date",
  description = "That is enough to tell you whether an expert report will help, what it will cost and when it will land. If it will not help your appeal, we will say so.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-indigo text-paper">
      <div className="mx-auto min-w-0 max-w-[1180px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <span className="kicker kicker-pale">Instructing</span>
            <h2 className="mt-3 text-balance font-display text-[1.7rem] leading-tight text-paper sm:text-[2.1rem]">
              {title}
            </h2>
            <p className="measure mt-4 text-[16px] leading-relaxed text-paper/75">{description}</p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
            <Link
              href="/contact"
              className="inline-flex min-h-[50px] w-full items-center justify-center rounded-[10px] bg-paper px-7 font-medium text-ink transition-colors hover:bg-ochre-pale sm:w-auto"
            >
              Start an instruction
            </Link>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="inline-flex min-h-[50px] w-full items-center justify-center rounded-[10px] border border-paper/35 px-7 font-medium text-paper transition-colors hover:border-paper sm:w-auto"
            >
              {SITE_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
