import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { PAKISTAN_REPORTS_URL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { countries } from "@/data/countries";

export const metadata = createMetadata({
  title: "South Asia Country Expert Reports UK | Bangladesh, India, Sri Lanka, Nepal & Bhutan",
  description:
    "Country expert report pages for Bangladesh, India, Sri Lanka, Nepal, and Bhutan. Dedicated country condition report specialists for UK immigration tribunals.",
  path: "/countries",
});

export default function CountriesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Countries" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="South Asia Country Expert Reports"
        subtitle="Dedicated country pages for the five South Asian nations with significant UK asylum claim volumes."
        breadcrumbs={crumbs}
      >
        <p className="text-[#374151] leading-relaxed">
          South Asia Reports provides dedicated country expert report pages for Bangladesh, India, Sri Lanka, Nepal, and
          Bhutan. Each country page targets specific search queries such as &quot;Bangladesh country expert report UK&quot;
          and &quot;India asylum expert report UK&quot;, providing profile-specific risk analysis for UK immigration
          tribunals. Pakistan is covered separately at{" "}
          <a href={PAKISTAN_REPORTS_URL} className="font-semibold text-[#C4793A] hover:underline" rel="noopener noreferrer">
            pakistanexpertreports.com
          </a>
          .
        </p>
        <div className="mt-10">
          <CardGrid
            items={countries.map((c) => ({
              title: c.title,
              description: `${c.claimVolume} claim volume. Key profiles: ${c.keyProfiles}. Country guidance: ${c.countryGuidance}.`,
              href: `/countries/${c.slug}`,
            }))}
          />
        </div>
      </PageShell>
    </>
  );
}
