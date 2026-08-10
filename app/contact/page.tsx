import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE_EMAIL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Instruct a South Asia Country Expert Report",
  description:
    "Submit your case details to instruct a qualified South Asia country expert report for UK immigration tribunals. Legal Aid compatible. Response within 1 business day.",
  path: "/contact",
  noindex: true,
});

const whatHappensNext = [
  {
    step: "Same day",
    detail: "We confirm receipt and tell you if the deadline is workable.",
  },
  {
    step: "One working day",
    detail: "You get a named expert, a scope, a fee and a delivery date in writing.",
  },
  {
    step: "Before any work",
    detail: "Nothing is charged until you confirm the scope, or LAA prior authority is granted.",
  },
];

export default function ContactPage() {
  return (
    <PageShell
      title="Send us the case"
      subtitle="Five fields. If an expert report will not help this appeal, we will tell you that rather than take the instruction."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      rail={false}
    >
      <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <div className="min-w-0">
          <ContactForm />
        </div>

        <aside className="min-w-0">
          <span className="kicker">What happens next</span>
          <ol className="mt-4 space-y-5 border-t border-rule pt-5">
            {whatHappensNext.map((item) => (
              <li key={item.step}>
                <p className="font-display text-[15px] text-ink">{item.step}</p>
                <p className="mt-0.5 text-[14px] leading-snug text-ink-soft">{item.detail}</p>
              </li>
            ))}
          </ol>

          <p className="mt-8 border-t border-rule pt-5 text-[14px] leading-relaxed text-ink-soft">
            Prefer email? Write to{" "}
            <a href={`mailto:${SITE_EMAIL}`} className="link-rule text-indigo">
              {SITE_EMAIL}
            </a>{" "}
            with the refusal letter attached.
          </p>
        </aside>
      </div>
    </PageShell>
  );
}
