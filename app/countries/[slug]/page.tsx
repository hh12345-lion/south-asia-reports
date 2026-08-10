import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { countries, getCountry } from "@/data/countries";
import { getCountryRelatedLinks } from "@/data/related-links";
import { getAsylumProfile } from "@/data/asylum-profiles";
import { getCountryPageFaqs } from "@/data/faq";

export function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = getCountry(slug);
  if (!country) return {};
  return createMetadata({
    title: country.metaTitle,
    description: country.metaDescription,
    path: `/countries/${slug}`,
  });
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = getCountry(slug);
  if (!country) notFound();

  const allFaqs = getCountryPageFaqs(country.faqs);

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Countries", href: "/countries" },
    { label: country.title },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={allFaqs} />
      <PageShell title={country.h1} breadcrumbs={crumbs}>
        {country.content.map((p, i) => (
          <p key={i} className="mb-4 text-sm text-body leading-relaxed sm:text-base">
            {p}
          </p>
        ))}

        <ResponsiveTableWrap label="Swipe to view country statistics">
          <table className="w-full min-w-[320px] border-collapse text-sm">
            <tbody>
              <tr className="border-b border-rule">
                <td className="px-3 py-3 text-ink sm:px-4">UK Asylum Claim Volume</td>
                <td className="px-3 py-3 text-body sm:px-4">{country.claimVolume}</td>
              </tr>
              <tr className="border-b border-rule">
                <td className="px-3 py-3 text-ink sm:px-4">Key Profiles</td>
                <td className="px-3 py-3 text-body sm:px-4">{country.keyProfiles}</td>
              </tr>
              <tr className="border-b border-rule">
                <td className="px-3 py-3 text-ink sm:px-4">UK Country Guidance</td>
                <td className="px-3 py-3 text-body sm:px-4">{country.countryGuidance}</td>
              </tr>
            </tbody>
          </table>
        </ResponsiveTableWrap>

        <h2 className="mt-8 font-display text-xl text-ink">Related Asylum Profiles</h2>
        <ul className="mt-4 space-y-2">
          {country.relatedProfiles.map((s) => {
            const profile = getAsylumProfile(s);
            return (
              <li key={s}>
                <Link
                  href={`/asylum-profiles/${s}`}
                  className="inline-flex min-h-[44px] items-center text-ochre hover:underline"
                >
                  {profile?.title ?? s}
                </Link>
              </li>
            );
          })}
        </ul>

        <FAQSection
          faqs={allFaqs}
          title={`${country.title} Expert Witness: Frequently Asked Questions`}
        />
        <RelatedLinks links={getCountryRelatedLinks(slug)} />
      </PageShell>
    </>
  );
}
