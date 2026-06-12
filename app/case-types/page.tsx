import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { caseTypes } from "@/data/case-types";

export const metadata = createMetadata({
  title: "South Asia Asylum Case Types | Expert Witness UK",
  description:
    "South Asia expert witness evidence for FTT appeals, Upper Tribunal, Bangladesh political claims, India minority claims, Sri Lanka Tamil, deportation, and fresh claims.",
  path: "/case-types",
});

export default function CaseTypesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Case Types" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="South Asia Asylum Case Types"
        subtitle="Expert witness evidence for all major UK immigration tribunal proceedings involving South Asian nationals."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#374151] leading-relaxed">
          South Asia Reports provides qualified country expert witnesses for First-tier Tribunal appeals, Upper Tribunal
          proceedings, Bangladesh political claims, India minority claims, Sri Lanka Tamil claims under KK [2021],
          deportation and removal, fresh claims, and certification challenges.
        </p>
        <CardGrid
          items={caseTypes.map((c) => ({
            title: c.title,
            description: c.content[0].slice(0, 140) + "...",
            href: `/case-types/${c.slug}`,
          }))}
        />
        <p className="mt-8 text-[#374151]">
          See also our{" "}
          <Link href="/asylum-profiles" className="font-semibold text-[#C4793A] hover:underline">
            asylum profiles hub
          </Link>{" "}
          and{" "}
          <Link href="/countries" className="font-semibold text-[#C4793A] hover:underline">
            country pages
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
