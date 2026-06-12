#!/usr/bin/env python3
from pathlib import Path
ROOT = Path(__file__).parent.parent

def w(path, content):
    (ROOT / path).parent.mkdir(parents=True, exist_ok=True)
    (ROOT / path).write_text(content.strip() + "\n", encoding="utf-8")
    print("wrote", path)

w("app/what-is-an-africa-expert-witness/page.tsx", """
import { PageShell } from "@/components/layout/PageShell";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "What Is an Africa Expert Witness? | Role, Reports & UK Tribunal Standards",
  description: "An Africa expert witness provides country condition reports and testimony for UK immigration tribunals, asylum appeals, and international investment arbitration. Learn their role.",
  path: "/what-is-an-africa-expert-witness",
});

export default function WhatIsPage() {
  return (
    <PageShell title="What Is an Africa Expert Witness?" subtitle="Independent expert evidence for UK legal proceedings involving African countries." breadcrumbs={[{ label: "Home", href: "/" }, { label: "What Is an Africa Expert Witness?" }]}>
      <p className="mb-4 text-[#374151] leading-relaxed">An Africa expert witness is an independent specialist instructed to provide expert evidence on country conditions, African law, or sector-specific matters in UK immigration tribunals, asylum appeals, and international arbitration. Unlike witnesses of fact, experts have an overriding duty to the court under CPR Part 35 to provide objective, impartial analysis.</p>
      <p className="mb-4 text-[#374151] leading-relaxed">In asylum and immigration cases, Africa experts produce country condition reports addressing whether a claimant faces a well-founded fear of persecution on return. Reports analyse state protection, internal relocation, and consistency with country guidance cases such as MOJ Somalia and MA Eritrea.</p>
      <p className="mb-4 text-[#374151] leading-relaxed">In investment treaty arbitration, Africa experts provide evidence on country conditions relevant to fair and equitable treatment and expropriation claims, regulatory frameworks, and African legal systems governing ICSID and UNCITRAL disputes.</p>
      <h2 className="mt-8 text-xl font-bold text-[#0D3B2E]">When to instruct an Africa expert</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">
        <li>Home Office refusal or appeal to the First-tier Tribunal</li>
        <li>Upper Tribunal country guidance or departure applications</li>
        <li>LGBTQI+, FGM, trafficking, or political persecution claims</li>
        <li>ICSID, UNCITRAL, or commercial arbitration involving African states</li>
        <li>Rebuttal of Home Office CPIN positions</li>
      </ul>
      <Link href="/how-to-instruct" className="mt-8 inline-flex min-h-[44px] items-center text-[#C8922A] font-semibold hover:underline">How to instruct an expert →</Link>
    </PageShell>
  );
}
""")

w("app/faq/page.tsx", """
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { faqs } from "@/data/faq";

export const metadata = createMetadata({
  title: "Africa Expert Witness FAQ UK | Common Questions Answered",
  description: "Answers to common questions about Africa expert witnesses - turnaround times, Legal Aid, LGBTQI+ asylum, country guidance, arbitration, and CPR Part 35.",
  path: "/faq",
});

export default function FAQPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "FAQ" }];
  return (
    <>
      <JsonLd data={[faqSchema(faqs), breadcrumbSchema(crumbs)]} />
      <PageShell title="Africa Expert Witness FAQ for UK Solicitors" breadcrumbs={crumbs}>
        <FAQSection faqs={faqs} title="" />
      </PageShell>
    </>
  );
}
""")

w("app/fees/page.tsx", """
import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Africa Expert Witness Fees UK | Country Report Costs & Hourly Rates",
  description: "Africa expert witness fees: country report costs from £800–£2,500, Legal Aid rates, arbitration hourly rates, and what affects total engagement costs.",
  path: "/fees",
});

export default function FeesPage() {
  return (
    <PageShell title="Africa Expert Witness Fees UK" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Fees" }]}>
      <h2 className="text-xl font-bold text-[#0D3B2E]">Country Condition Report Fees</h2>
      <ul className="mt-4 space-y-2 text-[#374151]">
        <li><strong>Standard single-country report:</strong> £800–£1,500</li>
        <li><strong>Complex multi-issue report (LGBTQI+, FGM, trafficking):</strong> £1,200–£2,500</li>
        <li><strong>Multi-country/regional report:</strong> £1,500–£3,000</li>
        <li><strong>Rebuttal report:</strong> £500–£1,200</li>
        <li><strong>Supplementary/updating report:</strong> £300–£800</li>
      </ul>
      <h2 className="mt-10 text-xl font-bold text-[#0D3B2E]">Legal Aid</h2>
      <p className="mt-4 text-[#374151] leading-relaxed">AfricaExpertWitness works with Legal Aid funded cases. Prior authority from the Legal Aid Agency is required above standard thresholds. Our rates are compatible with LAA prior authority requirements. See our <a href="/guides/instructing-africa-experts-legal-aid" className="text-[#C8922A] hover:underline">Legal Aid instruction guide</a> for the prior authority process.</p>
      <h2 className="mt-10 text-xl font-bold text-[#0D3B2E]">Arbitration & Commercial</h2>
      <ul className="mt-4 space-y-2 text-[#374151]">
        <li><strong>African law expert evidence:</strong> £250–£600/hour</li>
        <li><strong>Investment arbitration country expert:</strong> £350–£700/hour</li>
        <li><strong>Senior/leading African law experts:</strong> can exceed £1,000/hour</li>
      </ul>
      <h2 className="mt-10 text-xl font-bold text-[#0D3B2E]">Sources</h2>
      <p className="mt-4 text-sm text-[#374151]">Fees reflect market rates for qualified country conditions experts with PhD-level credentials and tribunal acceptance records. Final fees depend on complexity, urgency, and scope. Contact us for a quote tailored to your case.</p>
    </PageShell>
  );
}
""")

w("app/contact/page.tsx", """
import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Instruct an Africa Expert Witness | AfricaExpertWitness UK",
  description: "Submit your case details to be matched with the right Africa expert witness for your country and case type. Confidential, Legal Aid compatible. Response within 1 business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell title="Instruct an Africa Expert Witness" subtitle="Confidential case submission - response within one business day." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}>
      <motion className="grid gap-12 lg:grid-cols-3">
        <motion className="lg:col-span-2"><ContactForm /></motion>
        <aside className="rounded-[8px] border border-[#D1E3D8] bg-[#F7F9F7] p-6 h-fit">
          <h2 className="font-bold text-[#0D3B2E]">Why instruct through us</h2>
          <ul className="mt-4 space-y-4 text-sm text-[#374151]">
            <li>✓ 54 African countries covered</li>
            <li>✓ Legal Aid rates available</li>
            <li>✓ Reports accepted by UK tribunals</li>
            <li>✓ Response within 1 business day</li>
          </ul>
        </aside>
      </motion>
    </PageShell>
  );
}
""".replace("motion", "div"))

w("app/thank-you/page.tsx", """
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank You | AfricaExpertWitness",
  description: "Your instruction request has been received.",
  path: "/thank-you",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <section className="bg-[#0D3B2E] py-20">
      <motion className="mx-auto max-w-2xl px-4 text-center">
        <h1 className="text-3xl font-bold text-white">Thank You</h1>
        <p className="mt-4 text-white/80">Your instruction request has been received. We will respond within one business day.</p>
        <Link href="/" className="mt-8 inline-flex min-h-[44px] items-center rounded-[4px] bg-[#C8922A] px-8 py-3 font-semibold text-white">Return to Homepage</Link>
      </motion>
    </section>
  );
}
""".replace("motion", "motion").replace("motion", "div"))

w("app/not-found.tsx", """
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="bg-[#0D3B2E] py-20 text-center">
        <p className="text-8xl font-bold text-[#C8922A]">404</p>
        <h1 className="mt-4 text-3xl font-bold text-white">Page Not Found</h1>
        <p className="mt-4 text-white/80">This page does not exist or may have moved.</p>
        <motion className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="inline-flex min-h-[44px] items-center rounded-[4px] bg-[#C8922A] px-8 py-3 font-semibold text-white">Return to Homepage</Link>
          <Link href="/contact" className="inline-flex min-h-[44px] items-center rounded-[4px] border-2 border-white px-8 py-3 font-semibold text-white">Instruct an Expert</Link>
        </motion>
        <nav className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-white/70">
          <Link href="/regions" className="hover:text-white min-h-[44px] inline-flex items-center">Regions</Link>
          <Link href="/countries" className="hover:text-white min-h-[44px] inline-flex items-center">Countries</Link>
          <Link href="/expertise-areas" className="hover:text-white min-h-[44px] inline-flex items-center">Expertise Areas</Link>
          <Link href="/contact" className="hover:text-white min-h-[44px] inline-flex items-center">Contact</Link>
        </nav>
      </section>
    </>
  );
}
""".replace("motion", "div"))

w("app/privacy/page.tsx", """
import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy | AfricaExpertWitness",
  description: "Privacy policy for AfricaExpertWitness.com",
  path: "/privacy",
  noindex: true,
  follow: true,
});

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}>
      <p className="text-[#374151] leading-relaxed">AfricaExpertWitness.com is operated to connect UK solicitors with qualified Africa expert witnesses. We collect personal data submitted through our contact form (name, organisation, email, phone, and case details) solely to respond to instruction requests and match appropriate experts.</p>
      <p className="mt-4 text-[#374151] leading-relaxed">Data is processed via Formspree and retained only as long as necessary to fulfil your request. We do not sell personal data. You may request deletion by emailing info@africaexpertwitness.com. We use cookies only where necessary for site functionality and analytics if enabled.</p>
    </PageShell>
  );
}
""")

w("app/terms/page.tsx", """
import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Use | AfricaExpertWitness",
  description: "Terms of use for AfricaExpertWitness.com",
  path: "/terms",
  noindex: true,
  follow: true,
});

export default function TermsPage() {
  return (
    <PageShell title="Terms of Use" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}>
      <p className="text-[#374151] leading-relaxed">AfricaExpertWitness.com is an expert witness matching service. We are not a law firm and do not provide legal advice. Expert witnesses instructed through our service operate independently and owe their primary duty to the court under CPR Part 35.</p>
      <p className="mt-4 text-[#374151] leading-relaxed">Fees quoted are indicative and confirmed on instruction. Cancellation terms are agreed between the instructing solicitor and the expert at the point of engagement.</p>
    </PageShell>
  );
}
""")

w("app/experts/page.tsx", """
import { PageShell } from "@/components/layout/PageShell";
import { JsonLd } from "@/components/ui/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { personSchema } from "@/lib/schema";
import { experts } from "@/data/experts";

export const metadata = createMetadata({
  title: "Our Africa Expert Witnesses | Country Specialists UK",
  description: "AfricaExpertWitness.com connects UK solicitors with qualified Africa country experts across all 54 nations - asylum, immigration, and international arbitration.",
  path: "/experts",
});

export default function ExpertsPage() {
  return (
    <>
      <JsonLd data={experts.map((e) => personSchema(e))} />
      <PageShell title="Our Africa Expert Witnesses" subtitle="Qualified country specialists with tribunal and arbitration experience." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Experts" }]}>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experts.map((expert) => (
            <article key={expert.name} className="rounded-[8px] border border-[#D1E3D8] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)]">
              <h2 className="text-lg font-bold text-[#0D3B2E]">{expert.name}</h2>
              <p className="text-sm font-medium text-[#C8922A]">{expert.jobTitle}</p>
              <p className="mt-3 text-sm text-[#374151] leading-relaxed">{expert.description}</p>
              <p className="mt-3 text-xs text-[#374151]"><strong>Expertise:</strong> {expert.expertise.join(", ")}</p>
            </article>
          ))}
        </div>
      </PageShell>
    </>
  );
}
""")

w("components/glossary/GlossarySearch.tsx", """
"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import type { GlossaryTerm } from "@/data/glossary";

export function GlossarySearch({ terms }: { terms: GlossaryTerm[] }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const query = q.toLowerCase().trim();
    if (!query) return terms;
    return terms.filter((t) => t.term.toLowerCase().includes(query) || t.definition.toLowerCase().includes(query));
  }, [q, terms]);

  return (
    <>
      <label htmlFor="glossary-search" className="sr-only">Search glossary</label>
      <input id="glossary-search" type="search" placeholder="Search terms…" value={q} onChange={(e) => setQ(e.target.value)}
        className="mb-8 w-full max-w-md rounded-[4px] border border-[#D1E3D8] px-4 py-3 min-h-[44px] focus:border-[#0D3B2E] focus:outline-none focus:ring-1 focus:ring-[#0D3B2E]" />
      <dl className="space-y-6">
        {filtered.map((t) => (
          <div key={t.term} id={t.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="rounded-[8px] border border-[#D1E3D8] bg-white p-5">
            <dt className="font-semibold text-[#0D3B2E]">{t.term}</dt>
            <dd className="mt-2 text-[#374151] leading-relaxed">
              {t.definition}
              {t.link && <> <Link href={t.link} className="text-[#C8922A] hover:underline">Learn more →</Link></>}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
""")

w("app/glossary/page.tsx", """
import { PageShell } from "@/components/layout/PageShell";
import { GlossarySearch } from "@/components/glossary/GlossarySearch";
import { JsonLd } from "@/components/ui/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { glossaryTerms } from "@/data/glossary";

export const metadata = createMetadata({
  title: "Africa Expert Witness Glossary | Key Terms for UK Legal Proceedings",
  description: "Definitions of key Africa expert witness and asylum law terms - from country guidance to FGM, LGBTQI+ persecution, ICSID, and CPR Part 35.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const faqs = glossaryTerms.map((t) => ({ question: `What is ${t.term}?`, answer: t.definition }));
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageShell title="Africa Expert Witness & Asylum Law Glossary" subtitle="Key terms for UK immigration and arbitration practitioners." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Glossary" }]}>
        <GlossarySearch terms={glossaryTerms} />
      </PageShell>
    </>
  );
}
""")

# qualifications and how-to-instruct - longer content
w("app/qualifications/page.tsx", """
import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Africa Expert Witness Qualifications UK | Credentials & Vetting Standards",
  description: "What qualifications should an Africa expert witness hold? Academic credentials, field research, language skills, CPR Part 35, and Legal Aid compliance explained.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  return (
    <PageShell title="Africa Expert Witness Qualifications & Vetting Standards" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Qualifications" }]}>
      <h2 className="text-xl font-bold text-[#0D3B2E]">Country Conditions Experts</h2>
      <p className="mt-4 text-[#374151]">PhD or research degree in African Studies, Political Science, International Relations, Anthropology, or Law. Field research in relevant African countries. Language skills including French, Swahili, Arabic, Amharic, Hausa, and Somali. Tribunal acceptance history and OSCOLA citation standard.</p>
      <h2 className="mt-8 text-xl font-bold text-[#0D3B2E]">African Law Experts</h2>
      <p className="mt-4 text-[#374151]">Qualified in relevant African jurisdiction(s). Knowledge of OHADA, ECOWAS, and SADC legal frameworks. Experience with BIT obligations. CPR Part 35 compliant.</p>
      <h2 className="mt-8 text-xl font-bold text-[#0D3B2E]">Investment Arbitration Experts</h2>
      <p className="mt-4 text-[#374151]">ICSID, UNCITRAL, ICC, and LCIA experience. Sector expertise in mining, energy, and infrastructure. African country and law knowledge.</p>
      <h2 className="mt-8 text-xl font-bold text-[#0D3B2E]">LGBTQI+ Specialists</h2>
      <p className="mt-4 text-[#374151]">Human rights advocacy and research background. Country-specific expertise. Training in sexuality and gender identity evidence standards.</p>
      <h2 className="mt-8 text-xl font-bold text-[#0D3B2E]">CPR Part 35</h2>
      <p className="mt-4 text-[#374151]">Experts owe an overriding duty to the court to provide independent, objective evidence. Reports must state material instructions, distinguish fact from opinion, and not omit material facts. Africa country evidence is subject to the same rigorous standards as any UK expert evidence.</p>
      <h2 className="mt-8 text-xl font-bold text-[#0D3B2E]">Legal Aid Compliance</h2>
      <p className="mt-4 text-[#374151]">Experts on our panel work within LAA prior authority frameworks. Standard country reports from £800 are compatible with typical prior authority thresholds. See our Legal Aid guide for the prior authority process.</p>
    </PageShell>
  );
}
""")

w("app/how-to-instruct/page.tsx", """
import { PageShell } from "@/components/layout/PageShell";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How to Instruct an Africa Expert Witness UK | Step-by-Step Solicitor Guide",
  description: "Step-by-step guide for UK solicitors on finding, vetting, and instructing the right Africa expert witness for asylum, immigration, or arbitration cases.",
  path: "/how-to-instruct",
});

const steps = [
  { n: 1, title: "Identify Country and Key Issues", body: "Which African country or region? Asylum or arbitration? LGBTQI+, FGM, trafficking, political persecution, or investment dispute?" },
  { n: 2, title: "Regional and Language Expertise", body: "French-speaking West Africa, East Africa (English), Horn of Africa (Amharic, Somali), North Africa (Arabic), Southern Africa (English/Portuguese)?" },
  { n: 3, title: "Country Guidance Awareness", body: "Which country guidance cases apply? MOJ Somalia, MA Eritrea, RN Zimbabwe? Is the case a departure from guidance?" },
  { n: 4, title: "Submit Your Instruction", body: "Complete our contact form with case type, country, key issues, hearing date, and funding. We match you within one business day." },
  { n: 5, title: "Expert Vetting", body: "Review the expert CV, qualifications, tribunal acceptance record, and proposed scope and fee before confirming instruction." },
  { n: 6, title: "Letter of Instruction", body: "Provide a detailed letter of instruction: factual matrix, specific questions, hearing date, and copies of relevant documents including Home Office refusal and CPIN." },
  { n: 7, title: "Report Delivery", body: "Standard reports in 2–3 weeks. Urgent reports in 5 business days subject to availability. Review and lodge before the hearing deadline." },
];

export default function HowToInstructPage() {
  return (
    <PageShell title="How to Instruct an Africa Expert Witness" subtitle="How AfricaExpertWitness matches specialists to your case." breadcrumbs={[{ label: "Home", href: "/" }, { label: "How to Instruct" }]}>
      <div className="space-y-6">
        {steps.map((s) => (
          <div key={s.n} className="flex gap-4 rounded-[8px] border border-[#D1E3D8] bg-white p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0D3B2E] font-bold text-white">{s.n}</span>
            <div><h2 className="font-bold text-[#0D3B2E]">{s.title}</h2><p className="mt-2 text-[#374151]">{s.body}</p></div>
          </div>
        ))}
      </div>
      <h2 className="mt-12 text-xl font-bold text-[#0D3B2E]">Red Flags</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">
        <li>Expert claims expertise across the entire continent without country-specific specialism</li>
        <li>No field research history in the relevant African country</li>
        <li>Reports written from secondary sources only</li>
        <li>No tribunal acceptance record</li>
        <li>Unable to address country guidance case factors specifically</li>
      </ul>
      <Link href="/contact" className="mt-8 inline-flex min-h-[44px] items-center rounded-[4px] bg-[#C8922A] px-6 py-3 font-semibold text-white">Instruct an Expert</Link>
    </PageShell>
  );
}
""")

w("app/sitemap.ts", """
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { regions } from "@/data/regions";
import { countries } from "@/data/countries";
import { expertiseAreas } from "@/data/expertise-areas";
import { caseTypes } from "@/data/case-types";
import { guides } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/regions`, changeFrequency: "monthly", priority: 0.93 },
    { url: `${SITE_URL}/countries`, changeFrequency: "monthly", priority: 0.93 },
    { url: `${SITE_URL}/expertise-areas`, changeFrequency: "monthly", priority: 0.92 },
    { url: `${SITE_URL}/case-types`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/what-is-an-africa-expert-witness`, changeFrequency: "monthly", priority: 0.88 },
    { url: `${SITE_URL}/qualifications`, changeFrequency: "monthly", priority: 0.88 },
    { url: `${SITE_URL}/how-to-instruct`, changeFrequency: "monthly", priority: 0.88 },
    { url: `${SITE_URL}/fees`, changeFrequency: "monthly", priority: 0.87 },
    { url: `${SITE_URL}/faq`, changeFrequency: "monthly", priority: 0.87 },
    { url: `${SITE_URL}/guides`, changeFrequency: "monthly", priority: 0.87 },
    { url: `${SITE_URL}/experts`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/glossary`, changeFrequency: "monthly", priority: 0.75 },
  ];
  const dynamic = [
    ...regions.map((r) => ({ url: `${SITE_URL}/regions/${r.slug}`, priority: 0.88 })),
    ...countries.map((c) => ({ url: `${SITE_URL}/countries/${c.slug}`, priority: 0.88 })),
    ...expertiseAreas.map((e) => ({ url: `${SITE_URL}/expertise-areas/${e.slug}`, priority: 0.86 })),
    ...caseTypes.map((c) => ({ url: `${SITE_URL}/case-types/${c.slug}`, priority: 0.86 })),
    ...guides.map((g) => ({ url: `${SITE_URL}/guides/${g.slug}`, priority: 0.8 })),
  ].map((e) => ({ ...e, lastModified: new Date(), changeFrequency: "monthly" as const }));
  return [...staticPages, ...dynamic];
}
""")

w("app/robots.ts", """
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/thank-you"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
""")

print("All static pages written")
