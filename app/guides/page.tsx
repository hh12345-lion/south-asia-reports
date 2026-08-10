import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { guides } from "@/data/guides";

export const metadata = createMetadata({
  title: "South Asia Asylum Solicitor Guides | Expert Evidence Resources",
  description:
    "Solicitor guides on Bangladesh post-2024, India Hindutva, Sri Lanka KK [2021], South Asia CPINs, Nepal/Bhutan, and instructing South Asia expert witnesses.",
  path: "/guides",
});

export default function GuidesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Guides" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Solicitor Guides: South Asia Expert Evidence"
        subtitle="Practical guides for UK immigration solicitors instructing South Asia country expert witnesses."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-body leading-relaxed">
          These guides cover Bangladesh post-August 2024 conditions, India Hindutva and minority claims, Sri Lanka KK
          [2021] framework, South Asia CPINs, Nepal and Bhutan expert evidence, and the instruction process for Legal
          Aid and privately funded cases.
        </p>
        <CardGrid
          items={guides.map((g) => ({
            title: g.h1,
            description: g.metaDescription.slice(0, 120) + "...",
            href: `/guides/${g.slug}`,
          }))}
        />
        <p className="mt-8 text-body">
          For a complete overview, see our{" "}
          <Link href="/south-asia-asylum-explained" className="font-semibold text-ochre hover:underline">
            South Asia asylum explained pillar page
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
