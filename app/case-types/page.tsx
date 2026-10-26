import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { caseTypes } from "@/data/case-types";

export const metadata = createMetadata({
  title: "Country Reports by Case Type | South Asia Reports",
  description:
    "Country condition reports for First-tier and Upper Tribunal appeals, fresh claims, certification challenges and deportation cases involving South Asian nationals.",
  path: "/case-types",
});

export default function CaseTypesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Case Types" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Country Reports by Case Type"
        subtitle="How the stage and type of proceedings change what a country report needs to do."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-body leading-relaxed">
          A report for a first appeal, a fresh claim or a certification challenge each has a different job. The pages
          below explain what the report should focus on at each stage, from First-tier and Upper Tribunal appeals to
          Tamil claims under KK [2021], Bangladeshi and Indian claims, and removal cases.
        </p>
        <CardGrid
          items={caseTypes.map((c) => ({
            title: c.title,
            description: c.content[0].slice(0, 140) + "...",
            href: `/case-types/${c.slug}`,
          }))}
        />
        <p className="mt-8 text-body">
          See also our{" "}
          <Link href="/asylum-profiles" className="font-semibold text-ochre hover:underline">
            asylum profiles hub
          </Link>{" "}
          and{" "}
          <Link href="/countries" className="font-semibold text-ochre hover:underline">
            country pages
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
