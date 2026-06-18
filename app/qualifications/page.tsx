import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "South Asia Expert Witness Qualifications UK | Credentials & Standards",
  description:
    "What qualifications should a South Asia expert witness hold? Bengali, Hindi, Tamil, Nepali language expertise, field research, academic credentials, and tribunal acceptance.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Qualifications" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell title="South Asia Expert Witness Qualifications UK" breadcrumbs={crumbs}>
        <h2 className="text-xl font-bold text-[#1B2A4A]">What Makes a Qualified South Asia Expert</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          A qualified South Asia expert witness holds academic credentials (PhD, MA, or equivalent research background) in
          South Asian Studies, Political Science, Anthropology, International Relations, Religious Studies, or a related
          discipline. Field research experience in the relevant South Asian country is essential, not optional. Experts
          instructed through this service are matched for UK Immigration and Asylum Chamber proceedings and Upper Tribunal
          appeals.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Language expertise demonstrates the ability to assess conditions beyond English-language sources. Current
          knowledge of country conditions, including post-August 2024 Bangladesh dynamics, India Hindutva developments,
          KK [2021] for Sri Lanka, and Nepal/Bhutan conditions, is required. Prior tribunal acceptance in South Asia
          cases demonstrates evidential reliability.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1B2A4A]">Key Qualifications for South Asia Experts</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">
          <li>Language expertise: Bengali, Hindi, Tamil, Nepali, Sinhala, Dzongkha</li>
          <li>Field research experience in South Asian countries</li>
          <li>Academic expertise in South Asian politics, religion, caste, or law</li>
          <li>Prior tribunal acceptance in South Asia asylum cases</li>
          <li>Current CPIN and country guidance knowledge (KK [2021], post-2024 Bangladesh)</li>
          <li>EIN directory listing or equivalent professional recognition</li>
        </ul>

        <h2 className="mt-10 text-xl font-bold text-[#1B2A4A]">
          Immigration Tribunal Practice Direction: Expert Duties
        </h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          An expert&apos;s paramount duty is to the tribunal: to assist it in reaching a decision by providing an
          objective, unbiased opinion on matters within their expertise, not to advocate for either the appellant or
          the Home Office. Expert evidence should be the independent product of the expert, uninfluenced by the
          pressures of litigation.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Reports must address matters within the expert&apos;s expertise, cite verifiable sources, and distinguish
          fact from opinion. The expert must not express views on the credibility of the appellant or the ultimate
          legal conclusion on refugee status.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1B2A4A]">Red Flags</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">
          <li>Expert without current knowledge of the relevant South Asian country</li>
          <li>Reports that simply reproduce CPIN without independent analysis</li>
          <li>No field research or in-country experience</li>
          <li>Cannot distinguish between country-specific conditions (Bangladesh post-2024 vs India Hindutva)</li>
          <li>No prior tribunal acceptance in South Asia cases</li>
        </ul>
      </PageShell>
    </>
  );
}
