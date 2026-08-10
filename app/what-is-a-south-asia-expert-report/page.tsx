import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { UkServiceScope } from "@/components/ui/UkServiceScope";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "What Is a South Asia Expert Report? | Country Condition Reports for UK Tribunals",
  description:
    "A South Asia expert report provides independent country condition analysis for UK asylum appeals. Learn what reports should contain, tribunal standards, and when to instruct.",
  path: "/what-is-a-south-asia-expert-report",
});

const checklist = [
  "Expert qualifications and independence statement",
  "Sources (CPINs, UNHCR, field research, OSCOLA citations)",
  "Profile-specific risk analysis",
  "State protection assessment",
  "Internal relocation analysis (where relevant)",
  "Consistency with country guidance (KK [2021] etc.)",
  "Conclusion on risk on return",
  "Practice Direction compliance",
];

export default function WhatIsSouthAsiaExpertReportPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "What Is a South Asia Expert Report?" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="What Is a South Asia Expert Report?"
        subtitle="Independent country condition analysis for UK asylum appeals and immigration tribunal proceedings."
        breadcrumbs={crumbs}
      >
        <p className="text-body leading-relaxed">
          A South Asia expert report is an independent, written analysis of country conditions in
          Bangladesh, India, Sri Lanka, Nepal, or Bhutan, prepared for UK immigration tribunals in England, Wales,
          Scotland, and Northern Ireland. It assesses whether an appellant faces a real risk on return based on their
          specific profile, with OSCOLA-cited sources and Practice Direction compliant methodology.
        </p>

        <UkServiceScope className="mt-8" showDetail={false} />

        <h2 className="mt-10 font-display text-xl text-ink">
          What a Tribunal-Ready South Asia Expert Report Should Contain
        </h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-body">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

        <h2 className="mt-10 font-display text-xl text-ink">When to Instruct a South Asia Expert Report</h2>
        <p className="mt-4 text-body leading-relaxed">
          Instruct a South Asia expert report when the Home Office refusal relies on generic CPIN
          positions that do not address the appellant&apos;s specific country, profile, or personal risk
          factors. Expert reports are particularly valuable in post-August 2024 Bangladesh claims,
          India minority and internal relocation cases, Sri Lanka Tamil claims under KK [2021], and
          Nepal/Bhutan claims where no UK country guidance exists.
        </p>

        <p className="mt-8">
          <Link href="/how-to-instruct" className="font-semibold text-ochre hover:underline">
            How to instruct
          </Link>
          {" · "}
          <Link href="/services" className="font-semibold text-ochre hover:underline">
            View services
          </Link>
          {" · "}
          <Link href="/contact" className="font-semibold text-ochre hover:underline">
            Instruct a report
          </Link>
        </p>
      </PageShell>
    </>
  );
}
