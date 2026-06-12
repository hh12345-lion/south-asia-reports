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
    question: "What is a CPIN in UK asylum law?",
    answer:
      "A Country Policy Information Note (CPIN) is a Home Office document setting out the UK government's position on country conditions for asylum decision-making. CPINs are not binding on immigration tribunals but carry significant weight. South Asia has CPINs covering Bangladesh, India, Sri Lanka, Nepal, and Bhutan.",
  },
  {
    question: "Which South Asian countries have UK country guidance?",
    answer:
      "Only Sri Lanka has current UK Upper Tribunal country guidance: KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245. Bangladesh, India, Nepal, and Bhutan have no current binding country guidance, making expert evidence especially important for these countries.",
  },
  {
    question: "Can expert evidence challenge Home Office CPIN findings on South Asia?",
    answer:
      "Yes. Expert witnesses provide independent analysis beyond CPIN reproduction. Where the CPIN does not reflect the appellant's profile or current conditions (such as post-August 2024 Bangladesh), the expert may challenge findings with field research, UN reports, and profile-specific evidence.",
  },
];

export const metadata = createMetadata({
  title: "South Asia CPIN & Country Guidance 2025 | UK Asylum Solicitor Guide",
  description:
    "Current Home Office CPINs and country guidance on South Asia for UK asylum practitioners: Bangladesh, India, Sri Lanka KK [2021], Nepal, Bhutan, and expert evidence gaps.",
  path: "/cpin-country-guidance",
});

export default function CpinCountryGuidancePage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "CPIN & Country Guidance" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={cpinFaqs} />
      <JsonLd
        data={articleSchema({
          title: "South Asia CPIN & Country Guidance 2025: A Guide for UK Asylum Solicitors",
          description:
            "Current Home Office CPINs and country guidance on South Asia for UK asylum practitioners.",
          path: "/cpin-country-guidance",
        })}
      />
      <PageShell
        title="South Asia CPIN & Country Guidance 2025: A Guide for UK Asylum Solicitors"
        subtitle="Current Home Office CPINs, country guidance cases, and the expert witness role beyond generic country policy."
        breadcrumbs={crumbs}
      >
        <p className="text-[#374151] leading-relaxed">
          South Asia is the second most significant asylum claim region in the UK after Sub-Saharan Africa. Multiple
          CPINs cover Bangladesh, India, Sri Lanka, Nepal, and Bhutan, but only Sri Lanka has binding UK Upper Tribunal
          country guidance. Expert evidence is essential to fill gaps in CPIN coverage and address rapidly changing
          conditions, particularly post-August 2024 Bangladesh.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1B2A4A]">Current South Asia CPINs</h2>
        <div className="mt-4">
          <ResponsiveTableWrap>
            <table className="w-full min-w-[500px] border-collapse text-sm">
              <caption className="mb-3 text-left text-base font-semibold text-[#1B2A4A]">
                South Asia CPIN quick reference for UK asylum practitioners (2025)
              </caption>
              <thead>
                <tr className="border-b border-[#D1DCE6] bg-[#F0F4F8]">
                  <th className="px-4 py-3 text-left font-semibold text-[#1B2A4A]">Country</th>
                  <th className="px-4 py-3 text-left font-semibold text-[#1B2A4A]">CPIN Topics Available</th>
                </tr>
              </thead>
              <tbody>
                {cpinRows.map((row) => (
                  <tr key={row.country} className="border-b border-[#D1DCE6]">
                    <td className="px-4 py-3 font-medium text-[#374151]">{row.country}</td>
                    <td className="px-4 py-3 text-[#374151]">{row.topics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ResponsiveTableWrap>
        </div>
        <p className="mt-4 text-sm text-[#374151] italic">{cpinNote}</p>

        <h2 className="mt-10 text-xl font-bold text-[#1B2A4A]">Country Guidance Cases</h2>
        <ul className="mt-4 space-y-4">
          {countryGuidanceCases.map((cg) => (
            <li key={cg.citation} className="rounded-[8px] border border-[#D1DCE6] bg-[#F0F4F8] p-4">
              <p className="font-semibold text-[#1B2A4A]">{cg.citation}</p>
              <p className="mt-1 text-sm text-[#374151]">{cg.summary}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[#374151]">
          For a detailed analysis of South Asian asylum claims, see our{" "}
          <Link href="/south-asia-asylum-explained" className="font-semibold text-[#C4793A] hover:underline">
            South Asia asylum explained pillar page
          </Link>
          .
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1B2A4A]">Post-August 2024 Bangladesh CPIN Gap</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          The August 2024 fall of Sheikh Hasina&apos;s government has materially changed Bangladesh country conditions.
          Existing CPINs on political parties may not reflect post-transition dynamics where Awami League supporters now
          face risk and BNP supporters may have changed country conditions arguments. Expert witnesses provide current
          analysis beyond CPIN publication dates.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1B2A4A]">How Expert Reports Relate to CPINs</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Expert witnesses do not simply reproduce CPIN content. The expert&apos;s role is to provide independent,
          objective analysis of whether the appellant&apos;s specific profile creates a real risk, applying current field
          research and source citations beyond the CPIN. Where the CPIN supports the appellant, the expert confirms and
          applies it to the individual profile. Where it does not, the expert challenges CPIN findings with verifiable
          evidence.
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
