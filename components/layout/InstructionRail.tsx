import Link from "next/link";
import { SITE_EMAIL } from "@/lib/constants";

const standingFacts = [
  { term: "Standard", detail: "Practice Direction para 10 and CPR Part 35 duties" },
  { term: "Funding", detail: "LAA prior authority rates, or fixed private fee" },
  { term: "Scope", detail: "Fee and delivery date agreed in writing before work starts" },
];

/**
 * Sticky rail carried alongside every inner page. Keeps the standing terms of
 * instruction in view so a solicitor never has to go looking for them.
 */
export function InstructionRail() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-32 py-12">
        <div className="panel p-5">
          <span className="kicker">Instructing</span>
          <p className="mt-3 text-[15px] leading-relaxed text-body">
            Send the refusal letter and your hearing date. You will have a scope, a fee and a
            delivery date within one working day.
          </p>
          <Link
            href="/contact"
            className="mt-5 flex min-h-[46px] items-center justify-center rounded-[10px] bg-indigo px-4 text-[15px] font-medium text-paper transition-colors hover:bg-indigo-deep"
          >
            Start an instruction
          </Link>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="link-rule mt-3 block break-words text-center text-[13px] text-ink-soft hover:text-ink"
          >
            {SITE_EMAIL}
          </a>
        </div>

        <dl className="mt-6 space-y-4 border-t border-rule pt-6">
          {standingFacts.map((fact) => (
            <div key={fact.term}>
              <dt className="font-display text-[15px] text-ink">{fact.term}</dt>
              <dd className="mt-0.5 text-[13.5px] leading-snug text-ink-soft">{fact.detail}</dd>
            </div>
          ))}
        </dl>

        <Link
          href="/how-to-instruct"
          className="link-rule mt-6 inline-block text-[14px] text-indigo"
        >
          The seven steps in full
        </Link>
      </div>
    </aside>
  );
}
