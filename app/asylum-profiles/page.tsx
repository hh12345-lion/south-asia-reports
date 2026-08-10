import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { asylumProfiles } from "@/data/asylum-profiles";

export const metadata = createMetadata({
  title: "South Asian Asylum Profiles | Expert Witness Evidence UK",
  description:
    "All major South Asian asylum profiles covered by qualified expert witnesses: political persecution, religious minorities, LGBTQ+, caste, GBV, journalists, diaspora, and failed asylum seekers.",
  path: "/asylum-profiles",
});

export default function AsylumProfilesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Asylum Profiles" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="South Asian Asylum Profiles"
        subtitle="Dedicated expert witness evidence for each major South Asian asylum profile in UK immigration tribunals."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-body leading-relaxed">
          South Asia generates significant asylum claim volumes across Bangladesh, India, Sri Lanka, Nepal, and Bhutan.
          Each profile below links to a dedicated page with country-specific analysis, CPIN references, and
          profile-specific expert evidence guidance for solicitors and Legal Aid practitioners.
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
