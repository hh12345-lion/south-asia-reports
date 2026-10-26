import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { UkServiceScope } from "@/components/ui/UkServiceScope";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How to Commission a South Asia Country Report",
  description:
    "Seven steps to commissioning a country condition report for a South Asian asylum appeal: scope, Legal Aid prior authority, documents, timing and follow-up.",
  path: "/how-to-instruct",
});

const steps = [
  {
    n: 1,
    title: "Pin Down What the Report Must Answer",
    body: "Start from the refusal letter. Note the country (Bangladesh, India, Sri Lanka, Nepal or Bhutan), the profile the claim rests on, and every country-related reason for refusal. These become the questions the report is commissioned to answer.",
  },
  {
    n: 2,
    title: "Confirm How the Report Is Funded",
    body: "Most reports in these appeals are paid for under Legal Aid, but some are private. Tell us which at the outset, as the fee basis and paperwork differ.",
  },
  {
    n: 3,
    title: "Obtain Prior Authority (Legal Aid Cases)",
    body: "Apply to the Legal Aid Agency before the report is commissioned. We can provide the author's CV, a proposed scope, estimated hours and a fee quote. Hourly rates for report preparation typically fall between £50 and £100.",
  },
  {
    n: 4,
    title: "Write the Letter of Instruction",
    body: "List the questions, the hearing or deadline date and the funding position. Mention any country guidance that applies, such as KK [2021] for Tamil appellants, and the CPINs relied on in the refusal.",
  },
  {
    n: 5,
    title: "Send the Case Papers",
    body: "The screening and asylum interview records, refusal letter, the appellant's statement, any earlier country reports, and the CPINs and guidance cases referred to. Missing papers are the most common cause of delay.",
  },
  {
    n: 6,
    title: "Receive the Report",
    body: "A standard report is delivered 2 to 4 weeks after full instructions. Where a deadline is very tight, a report within 72 hours may be possible depending on author availability.",
  },
  {
    n: 7,
    title: "Follow-Up Questions and Hearing Attendance",
    body: "The author can answer written questions on the report and, where the tribunal directs, attend to give oral evidence, which is most likely in complex political cases and Tamil appeals under KK [2021].",
  },
];

export default function HowToInstructPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "How to Instruct" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="How to Commission a South Asia Country Report"
        subtitle="From refusal letter to finished report: seven steps for immigration counsel and Legal Aid practitioners."
        breadcrumbs={crumbs}
      >
        <UkServiceScope className="mb-8" />
        <div className="space-y-6">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-4 rounded-[12px] border border-rule bg-surface p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink font-bold text-white">
                {s.n}
              </span>
              <div>
                <h2 className="text-ink">{s.title}</h2>
                <p className="mt-2 text-body">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <RelatedLinks
          links={[
            { label: "Instructing guide", href: "/guides/instructing-south-asia-expert" },
            { label: "Qualifications", href: "/qualifications" },
            { label: "Contact us", href: "/contact" },
          ]}
        />
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[50px] items-center rounded-[10px] bg-indigo px-7 font-medium text-paper transition-colors hover:bg-indigo-deep"
        >
          Lodge a case
        </Link>
      </PageShell>
    </>
  );
}
