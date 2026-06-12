#!/usr/bin/env python3
from pathlib import Path
ROOT = Path(__file__).parent.parent

def w(path, content):
    p = ROOT / path
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(content.strip() + "\n", encoding="utf-8")

# Homepage
w("app/page.tsx", '''
import Link from "next/link";
import Image from "next/image";
import { CTASection } from "@/components/ui/CTASection";
import { CardGrid } from "@/components/ui/CardGrid";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph } from "@/lib/schema";
import { regions } from "@/data/regions";
import { countries } from "@/data/countries";
import { services } from "@/data/services";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageGraph()} />
      <section className="bg-[#0D3B2E] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wide text-[#C8922A]">UK Immigration & International Arbitration</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl">Africa Expert Witness Services for UK Solicitors</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">Country condition reports, LGBTQI+ asylum evidence, and investment treaty arbitration expertise across all 54 African nations.</p>
          <motion className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] bg-[#C8922A] px-8 py-3 font-semibold text-white hover:bg-[#b07f22]">Instruct an Expert</Link>
            <Link href="/services" className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10">View Services</Link>
          </motion>
        </motion>
      </section>

      <section className="bg-[#F7F9F7] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0D3B2E] sm:text-3xl">Three Markets We Serve</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { title: "Asylum & Immigration", desc: "Country condition reports for UK tribunals across 54 African countries. Highest volume.", href: "/case-types/asylum-appeal-first-tier-tribunal" },
              { title: "Investment Treaty Arbitration", desc: "ICSID and UNCITRAL disputes in mining, oil, gas, and infrastructure. Highest value per case.", href: "/expertise-areas/investment-treaty-arbitration-africa" },
              { title: "LGBTQI+ Asylum", desc: "Specialist evidence for Uganda, Nigeria, Ghana, and 30+ criminalising states. Fast-growing niche.", href: "/expertise-areas/lgbtqi-asylum-africa" },
            ].map((m) => (
              <Link key={m.href} href={m.href} className="rounded-[8px] border border-[#D1E3D8] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)] hover:border-[#0D3B2E]">
                <h3 className="font-semibold text-[#0D3B2E]">{m.title}</h3>
                <p className="mt-2 text-sm text-[#374151]">{m.desc}</p>
              </Link>
            ))}
          </motion>
        </motion>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0D3B2E]">Expert Witness Services</h2>
          <p className="mt-2 text-[#374151]">CPR Part 35 compliant reports accepted by UK tribunals and arbitration panels.</p>
          <div className="mt-8">
            <CardGrid items={services.map((s) => ({ title: s.title, description: s.description, href: s.href }))} />
          </motion>
        </motion>
      </section>

      <section className="bg-[#F7F9F7] py-16">
        <motion className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0D3B2E]">Coverage by Region</h2>
          <CardGrid items={regions.map((r) => ({ title: r.title, description: r.countries, href: `/regions/${r.slug}` }))} />
        </motion>
      </section>

      <section className="py-16">
        <motion className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0D3B2E]">Key Country Specialists</h2>
          <CardGrid items={countries.slice(0, 6).map((c) => ({ title: c.name, description: `Expert witness evidence for ${c.name} asylum and arbitration cases.`, href: `/countries/${c.slug}` }))} />
          <Link href="/countries" className="mt-8 inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">View all 12 country pages →</Link>
        </motion>
      </section>

      <CTASection />
    </>
  );
}
''')

# Dynamic route template - regions
w("app/regions/[slug]/page.tsx", '''
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { regions, getRegion } from "@/data/regions";

export function generateStaticParams() { return regions.map((r) => ({ slug: r.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getRegion(slug);
  if (!r) return {};
  return createMetadata({ title: r.metaTitle, description: r.metaDescription, path: `/regions/${slug}` });
}

export default async function RegionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region) notFound();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Regions", href: "/regions" }, { label: region.title }];
  return (
  <>
    <JsonLd data={[faqSchema(region.faqs), breadcrumbSchema(crumbs)]} />
    <PageShell title={region.h1} subtitle={`Expert witnesses covering ${region.countries}.`} breadcrumbs={crumbs}>
      {region.overview.map((p, i) => <p key={i} className="mb-4 text-[#374151] leading-relaxed">{p}</p>)}
      <h2 className="mt-10 text-xl font-bold text-[#0D3B2E]">Key Issues</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">{region.keyIssues.map((k) => <li key={k}>{k}</li>)}</ul>
      {region.countryGuidance && <p className="mt-6 rounded-[8px] border border-[#D1E3D8] bg-[#F7F9F7] p-4 text-sm"><strong>Country guidance:</strong> {region.countryGuidance}</p>}
      <FAQSection faqs={region.faqs} />
      <Link href="/contact" className="mt-8 inline-flex min-h-[44px] items-center rounded-[4px] bg-[#C8922A] px-6 py-3 font-semibold text-white">Instruct an Expert</Link>
    </PageShell>
  </>
  );
}
''')

# Countries dynamic
w("app/countries/[slug]/page.tsx", '''
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { countries, getCountry } from "@/data/countries";

export function generateStaticParams() { return countries.map((c) => ({ slug: c.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCountry(slug);
  if (!c) return {};
  return createMetadata({ title: c.metaTitle, description: c.metaDescription, path: `/countries/${slug}` });
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = getCountry(slug);
  if (!country) notFound();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Countries", href: "/countries" }, { label: country.name }];
  return (
  <>
    <JsonLd data={[faqSchema(country.faqs), breadcrumbSchema(crumbs)]} />
    <PageShell title={country.h1} subtitle={`Country-specific expert witness evidence for UK solicitors.`} breadcrumbs={crumbs}>
      <h2 className="text-xl font-bold text-[#0D3B2E]">Overview</h2>
      {country.overview.map((p, i) => <p key={i} className="mt-4 text-[#374151] leading-relaxed">{p}</p>)}
      <h2 className="mt-10 text-xl font-bold text-[#0D3B2E]">Key Issues</h2>
      <ul className="mt-4 space-y-4">{country.keyIssues.map((k) => (
        <li key={k.title} className="rounded-[8px] border border-[#D1E3D8] p-4"><strong className="text-[#0D3B2E]">{k.title}:</strong> <span className="text-[#374151]">{k.description}</span></li>
      ))}</ul>
      {country.countryGuidance && <p className="mt-6 rounded-[8px] border border-[#D1E3D8] bg-[#F7F9F7] p-4"><strong>Country guidance:</strong> {country.countryGuidance}</p>}
      {country.investmentContext && <p className="mt-4 rounded-[8px] border border-[#D1E3D8] bg-[#F7F9F7] p-4"><strong>Investment arbitration:</strong> {country.investmentContext}</p>}
      <FAQSection faqs={country.faqs} />
      <Link href={`/regions/${country.regionSlug}`} className="mt-6 inline-block text-[#C8922A] hover:underline">View {country.regionSlug.replace(/-/g, " ")} region →</Link>
    </PageShell>
  </>
  );
}
''')

# Expertise areas dynamic
w("app/expertise-areas/[slug]/page.tsx", '''
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { expertiseAreas, getExpertiseArea } from "@/data/expertise-areas";

export function generateStaticParams() { return expertiseAreas.map((e) => ({ slug: e.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getExpertiseArea(slug);
  if (!e) return {};
  return createMetadata({ title: e.metaTitle, description: e.metaDescription, path: `/expertise-areas/${slug}` });
}

export default async function ExpertisePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getExpertiseArea(slug);
  if (!area) notFound();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Expertise Areas", href: "/expertise-areas" }, { label: area.title }];
  return (
  <>
    <JsonLd data={[faqSchema(area.faqs), breadcrumbSchema(crumbs)]} />
    <PageShell title={area.h1} breadcrumbs={crumbs}>
      {area.content.map((p, i) => <p key={i} className="mb-4 text-[#374151] leading-relaxed">{p}</p>)}
      {area.keyPoints && <ul className="my-6 list-disc space-y-2 pl-6 text-[#374151]">{area.keyPoints.map((k) => <li key={k}>{k}</li>)}</ul>}
      <FAQSection faqs={area.faqs} />
      {area.relatedSlugs && area.relatedSlugs.length > 0 && (
        <div className="mt-8"><h3 className="font-semibold text-[#0D3B2E]">Related case types</h3>
        <ul className="mt-2 space-y-1">{area.relatedSlugs.map((s) => <li key={s}><Link href={`/case-types/${s}`} className="text-[#C8922A] hover:underline">{s.replace(/-/g, " ")}</Link></li>)}</ul></div>
      )}
    </PageShell>
  </>
  );
}
''')

# Case types dynamic
w("app/case-types/[slug]/page.tsx", '''
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { caseTypes, getCaseType } from "@/data/case-types";

export function generateStaticParams() { return caseTypes.map((c) => ({ slug: c.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseType(slug);
  if (!c) return {};
  return createMetadata({ title: c.metaTitle, description: c.metaDescription, path: `/case-types/${slug}` });
}

export default async function CaseTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ct = getCaseType(slug);
  if (!ct) notFound();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Case Types", href: "/case-types" }, { label: ct.title }];
  return (
  <>
    <JsonLd data={[faqSchema(ct.faqs), breadcrumbSchema(crumbs)]} />
    <PageShell title={ct.h1} breadcrumbs={crumbs}>
      {ct.content.map((p, i) => <p key={i} className="mb-4 text-[#374151] leading-relaxed">{p}</p>)}
      <FAQSection faqs={ct.faqs} />
      <h3 className="mt-8 font-semibold text-[#0D3B2E]">Related expertise areas</h3>
      <ul className="mt-2 space-y-1">{ct.relatedExpertise.map((s) => <li key={s}><Link href={`/expertise-areas/${s}`} className="text-[#C8922A] hover:underline">{s.replace(/-/g, " ")}</Link></li>)}</ul>
    </PageShell>
  </>
  );
}
''')

# Guides dynamic
w("app/guides/[slug]/page.tsx", '''
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { JsonLd } from "@/components/ui/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { guides, getGuide } from "@/data/guides";

export function generateStaticParams() { return guides.map((g) => ({ slug: g.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return createMetadata({ title: g.metaTitle, description: g.metaDescription, path: `/guides/${slug}` });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const path = `/guides/${slug}`;
  const crumbs = [{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: guide.h1 }];
  return (
  <>
    <JsonLd data={[articleSchema({ headline: guide.h1, description: guide.metaDescription, path, aboutServiceId: guide.aboutServiceId }), breadcrumbSchema(crumbs)]} />
    <PageShell title={guide.h1} breadcrumbs={crumbs}>
      {guide.sections.map((s) => (
        <section key={s.heading} className="mb-10">
          <h2 className="text-xl font-bold text-[#0D3B2E]">{s.heading}</h2>
          {s.content.map((p, i) => <p key={i} className="mt-4 text-[#374151] leading-relaxed">{p}</p>)}
        </section>
      ))}
      <Link href="/contact" className="inline-flex min-h-[44px] items-center rounded-[4px] bg-[#C8922A] px-6 py-3 font-semibold text-white">Instruct an Expert</Link>
    </PageShell>
  </>
  );
}
''')

# Hub pages
hubs = {
"regions/page.tsx": ('''import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { createMetadata } from "@/lib/metadata";
import { regions } from "@/data/regions";
export const metadata = createMetadata({ title: "Africa Expert Witnesses by Region | East, West, Southern, North & Horn of Africa", description: "Find Africa expert witnesses by region: East Africa, West Africa, Southern Africa, North Africa, and Horn of Africa country condition specialists.", path: "/regions" });
export default function RegionsPage() {
  return (
    <PageShell title="Africa Expert Witnesses by Region" subtitle="Regional specialists for UK immigration tribunals and investment arbitration." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Regions" }]}>
      <CardGrid items={regions.map((r) => ({ title: r.title, description: r.countries, href: `/regions/${r.slug}` }))} />
    </PageShell>
  );
}'''),
"countries/page.tsx": ('''import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { createMetadata } from "@/lib/metadata";
import { countries } from "@/data/countries";
export const metadata = createMetadata({ title: "Africa Expert Witnesses by Country | Nigeria, Somalia, Eritrea & More", description: "Country-specific Africa expert witnesses for UK immigration tribunals and arbitration: Nigeria, Somalia, Eritrea, Ethiopia, Sudan, Zimbabwe, DRC, Ghana, Kenya, Uganda and more.", path: "/countries" });
export default function CountriesPage() {
  return (
    <PageShell title="Africa Expert Witnesses by Country" subtitle="Country-specific expert witnesses targeting [country] expert witness search queries." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Countries" }]}>
      <CardGrid items={countries.map((c) => ({ title: c.name, description: c.metaDescription.slice(0, 120) + "...", href: `/countries/${c.slug}` }))} />
    </PageShell>
  );
}'''),
"expertise-areas/page.tsx": ('''import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { createMetadata } from "@/lib/metadata";
import { expertiseAreas } from "@/data/expertise-areas";
export const metadata = createMetadata({ title: "Africa Expert Witness Expertise Areas | Asylum, LGBTQI+, Mining & More", description: "Africa expert witness expertise: political persecution, LGBTQI+ asylum, trafficking, mining arbitration, African law, FGM, nationality disputes, and country conditions.", path: "/expertise-areas" });
export default function ExpertiseHubPage() {
  return (
    <PageShell title="Africa Expert Witness Expertise Areas" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Expertise Areas" }]}>
      <CardGrid items={expertiseAreas.map((e) => ({ title: e.title, description: e.metaDescription.slice(0, 140), href: `/expertise-areas/${e.slug}` }))} />
    </PageShell>
  );
}'''),
"case-types/page.tsx": ('''import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { createMetadata } from "@/lib/metadata";
import { caseTypes } from "@/data/case-types";
export const metadata = createMetadata({ title: "Case Types Requiring an Africa Expert Witness | UK Immigration & Arbitration Guide", description: "Which legal cases need an Africa expert witness? Asylum appeals, LGBTQI+ claims, trafficking, ICSID arbitration, and commercial disputes explained.", path: "/case-types" });
export default function CaseTypesHubPage() {
  return (
    <PageShell title="Case Types Requiring an Africa Expert Witness" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Types" }]}>
      <CardGrid items={caseTypes.map((c) => ({ title: c.title, description: c.metaDescription.slice(0, 140), href: `/case-types/${c.slug}` }))} />
    </PageShell>
  );
}'''),
"guides/page.tsx": ('''import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { createMetadata } from "@/lib/metadata";
import { guides } from "@/data/guides";
export const metadata = createMetadata({ title: "Solicitor Guides: Africa Expert Witnesses | Asylum, Arbitration & Country Reports", description: "In-depth guides for UK solicitors on Africa expert witnesses - country guidance cases, LGBTQI+ asylum, ICSID arbitration, and Legal Aid instruction.", path: "/guides" });
export default function GuidesHubPage() {
  return (
    <PageShell title="Solicitor Guides: Africa Expert Witnesses" subtitle="In-depth guides for UK immigration and arbitration practitioners." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}>
      <CardGrid items={guides.map((g) => ({ title: g.h1, description: g.metaDescription.slice(0, 140), href: `/guides/${g.slug}` }))} />
    </PageShell>
  );
}'''),
}

for path, content in hubs.items():
    w(f"app/{path}", content)

# Fix all motion -> div in generated files
import re
for p in ROOT.rglob("*.tsx"):
    if "scripts" in str(p): continue
    t = p.read_text(encoding="utf-8")
    n = t.replace("<motion", "<motion").replace("</motion>", "</motion>")
    n = n.replace("<motion", "<div").replace("</motion>", "</motion>")
    # final
    n2 = re.sub(r"</?motion\b", lambda m: m.group(0).replace("motion","div"), t)
    if "motion" in t:
        n2 = t.replace("motion", "div") if "<motion" in t or "</motion>" in t else t
        n2 = re.sub(r"<div\b", "<div", n2)
        n2 = re.sub(r"</?motion\b", lambda m: m.group(0).replace("motion","motion"), t)
    n2 = t
    for a,b in [("<motion","<div"),("</motion>","</div>")]:
        n2 = n2.replace(a,b)
    if n2 != t:
        p.write_text(n2, encoding="utf-8")

print("Generated pages - run motion fix separately")
