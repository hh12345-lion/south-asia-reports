import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { cpinRows, countryGuidanceCases, cpinNote } from "@/data/cpin-data";
import { guides } from "@/data/guides";
import { asylumProfiles } from "@/data/asylum-profiles";
import { HubLinkGrid } from "@/components/ui/HubLinkGrid";
import { JsonLd } from "@/components/ui/JsonLd";
import { getCpinRelatedLinks } from "@/data/related-links";

const cpinFaqs = [
  {
    question: "How much weight does a tribunal give a CPIN?",
    answer:
      "CPINs set out the Home Office's view of country conditions. They are not binding on the tribunal, but they are often the first source a judge reads, so a country report usually needs to engage with the relevant CPIN directly.",
  },
  {
    question: "Which of the five countries has country guidance?",
    answer:
      "Only Sri Lanka, through KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245. Appeals for Bangladesh, India, Nepal and Bhutan are decided without a guidance case, so the country report is often the main evidence on conditions.",
  },
  {
    question: "How does a report respond to a CPIN?",
    answer:
      "It identifies the CPIN passages the refusal relies on, checks their dates and sources, and sets out more recent or more specific evidence where the CPIN is out of date or does not address the appellant's profile, as is common for Bangladesh after August 2024.",
  },
];

export const metadata = createMetadata({
  title: "South Asia CPINs & Country Guidance for Report Instructions",
  description:
    "Which Home Office CPINs and country guidance cases apply to Bangladesh, India, Sri Lanka, Nepal and Bhutan, and where country reports fill the gaps.",
  path: "/cpin-country-guidance",
});

export default function CpinCountryGuidancePage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "CPIN & Country Guidance" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={cpinFaqs} />
      <JsonLd
        data={articleSchema({
          title: "South Asia CPINs and Country Guidance: What Your Country Report Must Address",
          description:
            "The Home Office CPINs and country guidance relevant to South Asian asylum appeals, and where country reports fill the gaps.",
          path: "/cpin-country-guidance",
        })}
      />
      <PageShell
        title="South Asia CPINs and Country Guidance: What Your Country Report Must Address"
        subtitle="The official material a refusal letter is likely to rely on, and the points a country report should answer."
        breadcrumbs={crumbs}
      >
        <p className="text-body leading-relaxed">
          Refusal letters in South Asian cases lean heavily on Home Office CPINs. There are CPINs touching all five
          countries covered here, but only Sri Lanka also has a country guidance case. Knowing what the official
          material says, and what it leaves out, is the starting point for a focused report instruction, especially
          for Bangladesh, where conditions have moved faster than the CPINs since August 2024.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">CPIN Topics by Country</h2>
        <div className="mt-4">
          <ResponsiveTableWrap>
            <table className="w-full min-w-[500px] border-collapse text-sm">
              <caption className="mb-3 text-left text-base text-ink">
                CPIN topics a South Asia report may need to engage with
              </caption>
              <thead>
                <tr className="border-b border-rule bg-oat">
                  <th className="px-4 py-3 text-left text-ink">Country</th>
                  <th className="px-4 py-3 text-left text-ink">CPIN Topics Available</th>
                </tr>
              </thead>
              <tbody>
                {cpinRows.map((row) => (
                  <tr key={row.country} className="border-b border-rule">
                    <td className="px-4 py-3 font-medium text-body">{row.country}</td>
                    <td className="px-4 py-3 text-body">{row.topics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ResponsiveTableWrap>
        </div>
        <p className="mt-4 text-sm text-body italic">{cpinNote}</p>

        <h2 className="mt-10 font-display text-xl text-ink">Country Guidance in Force</h2>
        <ul className="mt-4 space-y-4">
          {countryGuidanceCases.map((cg) => (
            <li key={cg.citation} className="rounded-[12px] border border-rule bg-oat p-4">
              <p className="text-ink">{cg.citation}</p>
              <p className="mt-1 text-sm text-body">{cg.summary}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-body">
          For a country-by-country guide to what reports in these appeals need to cover, see{" "}
          <Link href="/south-asia-asylum-explained" className="font-semibold text-ochre hover:underline">
            commissioning country reports in South Asian appeals
          </Link>
          .
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">Bangladesh: Where the CPINs Lag Behind</h2>
        <p className="mt-4 text-body leading-relaxed">
          The Bangladesh CPINs on political parties were written for a country governed by the Awami League. Since
          Sheikh Hasina&apos;s government fell in August 2024, the same parties sit in very different positions, so a
          refusal relying on those CPINs may misdescribe the risk for both Awami League and BNP supporters. Reports
          address conditions at the date they are written and flag where the CPIN no longer matches them.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">Using a Report Alongside the CPIN</h2>
        <p className="mt-4 text-body leading-relaxed">
          A country report should not repeat the CPIN. It should take the passages the decision-maker relied on and
          test them: are the sources current, do they cover someone with the appellant&apos;s profile, and does other
          evidence point the other way? Where the CPIN helps the appellant, the report shows how it applies to them;
          where it does not, the report explains why, with sources the tribunal can check.
        </p>

        <div className="mt-10 space-y-6">
          <HubLinkGrid
            title="All South Asian Asylum Profiles"
            links={asylumProfiles.map((p) => ({ label: p.title, href: `/asylum-profiles/${p.slug}` }))}
          />
          <HubLinkGrid
            title="Solicitor Guides"
            links={guides.map((g) => ({ label: g.h1.replace(/:.*$/, ""), href: `/guides/${g.slug}` }))}
          />
        </div>

        <FAQSection faqs={cpinFaqs} />
        <RelatedLinks links={getCpinRelatedLinks()} />
      </PageShell>
    </>
  );
}
