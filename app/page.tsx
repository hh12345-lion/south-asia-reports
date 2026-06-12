import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { CardGrid } from "@/components/ui/CardGrid";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { asylumProfiles } from "@/data/asylum-profiles";
import { services } from "@/data/services";
import { caseTypes } from "@/data/case-types";
import { countries } from "@/data/countries";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title:
    "South Asia Expert Reports UK | Bangladesh, India, Sri Lanka & Nepal Country Condition Reports",
  description:
    "Commission qualified South Asian country expert reports in the UK: Bangladesh, India, Sri Lanka, Nepal, and Bhutan. Country condition reports for asylum appeals and immigration tribunals. Legal Aid compatible.",
  path: "/",
});

const featuredProfileSlugs = [
  "political-persecution-south-asia",
  "religious-minority-persecution",
  "lgbtq-south-asia",
  "failed-asylum-seekers-return",
] as const;

const featuredProfiles = featuredProfileSlugs
  .map((slug) => asylumProfiles.find((p) => p.slug === slug))
  .filter(Boolean);

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />
      <section className="bg-[#1B2A4A] py-14 md:py-20">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-wide text-[#C4793A] sm:text-sm">
            UK Immigration & Asylum Tribunals
          </p>
          <h1 className="mt-4 max-w-4xl break-words text-2xl font-bold text-white min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            South Asia Expert Reports UK: Bangladesh, India, Sri Lanka & Nepal Country Condition Reports
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            South Asia Reports connects UK immigration solicitors, law firms, and Legal Aid practitioners with qualified
            South Asian country experts for tribunal-ready expert reports: Bangladesh political persecution, India Hindutva
            minorities, Sri Lanka Tamil claims, Nepal caste discrimination, and Bhutan Lhotshampa persecution.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] bg-[#00796B] px-6 py-3 font-semibold text-white hover:bg-[#00695C] sm:w-auto sm:px-8"
            >
              Instruct a Report
            </Link>
            <Link
              href="/how-to-instruct"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] border-2 border-white px-6 py-3 text-center font-semibold text-white hover:bg-white/10 sm:w-auto sm:px-8"
            >
              How to Instruct
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F4F8] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1B2A4A] sm:text-2xl md:text-3xl">Why South Asia Expert Evidence Matters</h2>
          <p className="mt-4 max-w-3xl text-[#374151] leading-relaxed">
            In the year ending September 2025, Bangladesh, India, and Sri Lanka were among the nationalities with the
            highest number of asylum claims from visa holders, making South Asia the second most significant asylum
            claim region after Sub-Saharan Africa. Home Office refusals often rely on generic CPIN positions that do not
            reflect the appellant&apos;s specific country, profile, or personal risk factors. Independent expert
            evidence is essential.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "CPR Part 35 Compliant",
                desc: "Reports comply with Immigration Tribunal Practice Direction paragraph 10 and current expert evidence standards for asylum proceedings.",
              },
              {
                title: "Five Country Coverage",
                desc: "Dedicated expert witnesses for Bangladesh, India, Sri Lanka, Nepal, and Bhutan. Pakistan covered separately at pakistancountryexpert.com.",
              },
              {
                title: "Legal Aid Compatible",
                desc: "LAA prior authority rates available for all major South Asian asylum profiles in FTT and Upper Tribunal proceedings.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[8px] border border-[#D1DCE6] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <h3 className="font-semibold text-[#1B2A4A]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#374151]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1B2A4A] sm:text-2xl">Key South Asian Asylum Profiles</h2>
          <p className="mt-2 max-w-3xl text-[#374151]">
            Expert witness pages for the highest-volume South Asian asylum profiles in UK tribunals.
          </p>
          <div className="mt-8">
            <CardGrid
              items={featuredProfiles.map((p) => ({
                title: p!.title,
                description: p!.metaDescription.slice(0, 120) + "...",
                href: `/asylum-profiles/${p!.slug}`,
              }))}
            />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/asylum-profiles" className="inline-flex min-h-[44px] items-center font-semibold text-[#C4793A] hover:underline">
              View all asylum profiles
            </Link>
            <Link href="/south-asia-asylum-explained" className="inline-flex min-h-[44px] items-center font-semibold text-[#C4793A] hover:underline">
              South Asia Asylum Explained
            </Link>
            <Link href="/countries" className="inline-flex min-h-[44px] items-center font-semibold text-[#C4793A] hover:underline">
              Country pages
            </Link>
            <Link href="/guides" className="inline-flex min-h-[44px] items-center font-semibold text-[#C4793A] hover:underline">
              Solicitor guides
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F4F8] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1B2A4A] sm:text-2xl">South Asia by Country</h2>
          <p className="mt-2 max-w-3xl text-[#374151]">
            Dedicated country pages for Bangladesh, India, Sri Lanka, Nepal, and Bhutan. Each page targets specific
            country expert witness queries and provides profile-specific risk analysis.
          </p>
          <div className="mt-8">
            <CardGrid
              items={countries.map((c) => ({
                title: c.title,
                description: c.metaDescription.slice(0, 120) + "...",
                href: `/countries/${c.slug}`,
              }))}
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1B2A4A] sm:text-2xl">Expert Witness Services</h2>
          <CardGrid
            items={services.map((s) => ({
              title: s.title,
              description: s.description,
              href: "/services",
            }))}
          />
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1B2A4A] sm:text-2xl">Case Types</h2>
          <CardGrid
            items={caseTypes.slice(0, 6).map((c) => ({
              title: c.title,
              description: c.metaDescription.slice(0, 100) + "...",
              href: `/case-types/${c.slug}`,
            }))}
          />
          <Link href="/case-types" className="mt-8 inline-flex min-h-[44px] items-center font-semibold text-[#C4793A] hover:underline">
            View all case types
          </Link>
        </div>
      </section>

      <section className="bg-[#F0F4F8] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1B2A4A] sm:text-2xl">CPIN & Country Guidance</h2>
          <p className="mt-4 max-w-3xl text-[#374151] leading-relaxed">
            Stay current with South Asia CPINs and country guidance including KK [2021] for Sri Lanka Tamil claims.
            Our pillar guide explains South Asian asylum claims in the UK context, with expert analysis beyond generic
            CPIN positions for Bangladesh, India, Nepal, and Bhutan where no current UK country guidance exists.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/south-asia-asylum-explained"
              className="inline-flex min-h-[44px] items-center rounded-[8px] bg-[#1B2A4A] px-6 py-3 font-semibold text-white hover:bg-[#152238]"
            >
              South Asia Asylum Explained
            </Link>
            <Link
              href="/cpin-country-guidance"
              className="inline-flex min-h-[44px] items-center rounded-[8px] border-2 border-[#1B2A4A] px-6 py-3 font-semibold text-[#1B2A4A] hover:bg-[#F0F4F8]"
            >
              CPIN & Country Guidance
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
