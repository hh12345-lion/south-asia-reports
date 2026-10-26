import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Who Writes Our South Asia Country Reports | Report Author Standards",
  description:
    "The standards South Asia Reports applies to report authors: research background, fieldwork, language skills, tribunal experience and the duties every report must meet.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Qualifications" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell title="Who Writes Our South Asia Country Reports" breadcrumbs={crumbs}>
        <h2 className="font-display text-xl text-ink">Our Standards for Report Authors</h2>
        <p className="mt-4 text-body leading-relaxed">
          A report is only as good as the person who writes it. Authors instructed through South Asia Reports have
          postgraduate research experience (typically a PhD or MA) in a relevant field such as South Asian studies,
          politics, anthropology, international relations or religious studies, and they have spent time researching in
          the country they write about. Reports are prepared for the Immigration and Asylum Chamber at both First-tier
          and Upper Tribunal level.
        </p>
        <p className="mt-4 text-body leading-relaxed">
          Authors must follow current developments, including Bangladesh since August 2024, Hindutva politics in India,
          the application of KK [2021] in Sri Lanka, and conditions in Nepal and Bhutan, and should be able to read
          local-language sources rather than relying on English-language summaries. A record of reports accepted by
          tribunals in South Asian cases is a strong indicator of reliability.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">What We Look For</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-body">
          <li>Working knowledge of Bengali, Hindi, Tamil, Nepali, Sinhala or Dzongkha, as relevant</li>
          <li>Research carried out in the country concerned</li>
          <li>Published or academic work on the region&apos;s politics, religion, caste or law</li>
          <li>Reports previously relied on by tribunals in South Asian appeals</li>
          <li>Up-to-date familiarity with the relevant CPINs and KK [2021]</li>
          <li>Listing in the EIN directory or comparable professional recognition</li>
        </ul>

        <h2 className="mt-10 font-display text-xl text-ink">The Duties Every Report Meets</h2>
        <p className="mt-4 text-body leading-relaxed">
          Under the tribunal&apos;s practice direction, a report author owes their duty to the tribunal, not to the party
          paying for the report. Their task is to help the tribunal with an objective opinion within their field, and
          the report must be their own independent work, not shaped by the needs of either side.
        </p>
        <p className="mt-4 text-body leading-relaxed">
          In practice this means each report keeps to the author&apos;s expertise, gives sources that can be checked,
          and marks clearly which statements are facts and which are opinions. Reports do not comment on whether the
          appellant is credible or whether they qualify as a refugee; those are decisions for the tribunal.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">Warning Signs in a Country Report</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-body">
          <li>Sources that are out of date for the country concerned</li>
          <li>Long passages copied from the CPIN with no independent analysis</li>
          <li>An author with no first-hand research in the region</li>
          <li>Generic material that does not engage with the appellant&apos;s profile or home area</li>
          <li>No history of the author&apos;s reports being accepted in South Asian cases</li>
        </ul>
      </PageShell>
    </>
  );
}
