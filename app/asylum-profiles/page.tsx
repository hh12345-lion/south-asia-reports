import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { asylumProfiles } from "@/data/asylum-profiles";

export const metadata = createMetadata({
  title: "Country Reports by Asylum Profile | South Asia Reports",
  description:
    "What a South Asia country condition report covers for each type of claim: political, religious minority, LGBTQ+, caste, gender-based violence, journalists, diaspora and return.",
  path: "/asylum-profiles",
});

export default function AsylumProfilesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Asylum Profiles" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Country Reports by Asylum Profile"
        subtitle="The scope, sources and supporting documents for a report on each type of South Asian claim."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-body leading-relaxed">
          The kind of claim shapes the report. Choose the profile closest to your client&apos;s case to see what a
          country report for Bangladesh, India, Sri Lanka, Nepal or Bhutan would address, which sources it draws on
          and what to send with the instruction.
        </p>
        <CardGrid
          items={asylumProfiles.map((p) => ({
            title: p.h1,
            description: p.content[0].slice(0, 150) + "...",
            href: `/asylum-profiles/${p.slug}`,
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
