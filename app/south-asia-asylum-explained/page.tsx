import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { UkServiceScope } from "@/components/ui/UkServiceScope";
import { getPillarRelatedLinks } from "@/data/related-links";
import { createMetadata } from "@/lib/metadata";
import { countries } from "@/data/countries";
import { articleSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata = createMetadata({
  title: "Country Reports for South Asian Asylum Appeals | A Guide",
  description:
    "How country condition reports work in South Asian asylum appeals: what changed in Bangladesh in 2024, India relocation issues, KK [2021] for Sri Lanka, and CPIN gaps.",
  path: "/south-asia-asylum-explained",
});

export default function SouthAsiaAsylumExplainedPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "South Asia Asylum Explained" },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <JsonLd
        data={articleSchema({
          title: "Commissioning Country Reports in South Asian Asylum Appeals",
          description:
            "A practical guide for counsel on commissioning country condition reports for Bangladesh, India, Sri Lanka, Nepal and Bhutan.",
          path: "/south-asia-asylum-explained",
        })}
      />
      <PageShell
        title="Commissioning Country Reports in South Asian Asylum Appeals"
        subtitle="What each country report needs to address, where official material falls short, and how to get the most from an instruction."
        breadcrumbs={crumbs}
      >
        <p className="text-body leading-relaxed">
          After Sub-Saharan Africa, South Asia is the region producing the most asylum appeals, and in the year to
          September 2025 Bangladesh, India and Sri Lanka were among the leading nationalities for claims made by visa
          holders. This page explains, country by country, what a country condition report for these appeals has to
          deal with and how to frame the instruction so the report answers the questions the tribunal will ask.
        </p>

        <UkServiceScope className="mt-8" />

        <h2 className="mt-10 font-display text-xl text-ink">At a Glance: Five Countries</h2>
        <div className="mt-4 table-scroll overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-rule bg-oat">
                <th className="px-4 py-3 text-left text-ink">Country</th>
                <th className="px-4 py-3 text-left text-ink">Appeal Volume</th>
                <th className="px-4 py-3 text-left text-ink">Profiles Reports Most Often Cover</th>
                <th className="px-4 py-3 text-left text-ink">Country Guidance</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((c) => (
                <tr key={c.slug} className="border-b border-rule">
                  <td className="px-4 py-3">
                    <Link href={`/countries/${c.slug}`} className="font-medium text-ochre hover:underline">
                      {c.title}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-body">{c.claimVolume}</td>
                  <td className="px-4 py-3 text-body">{c.keyProfiles}</td>
                  <td className="px-4 py-3 text-body">{c.countryGuidance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 font-display text-xl text-ink">Bangladesh: Reports Must Post-Date August 2024</h2>
        <p className="mt-4 text-body leading-relaxed">
          When student-led protests forced Sheikh Hasina from office and she left for India, the political position
          of the main parties was turned around. A report on a Bangladeshi political claim now has to say where the
          appellant&apos;s affiliation stands under the new arrangements: Awami League supporters and former officials
          may face risks they did not face before, while BNP and Jamaat supporters may meet the argument that their
          circumstances have improved.
        </p>
        <p className="mt-4 text-body leading-relaxed">
          Reports written before the transition should be updated before a hearing. Claims based on Hindu minority
          status, or on LGBTQ+ identity under section 377 of the Penal Code, need their own analysis and do not depend
          on the political change.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">India: Answering the Relocation Argument</h2>
        <p className="mt-4 text-body leading-relaxed">
          Indian appeals cover Muslims facing Hindutva and RSS-linked hostility, Sikhs, Christians, Dalits and political
          dissidents. Because India is so large, refusal letters almost always propose relocation to another city, so a
          useful India report spends real time on that issue: who the persecutors are, whether they operate nationally,
          and how the appellant would manage in the place suggested.
        </p>
        <p className="mt-4 text-body leading-relaxed">
          Muslim appellants from Assam and border areas may also need the CAA and NRC addressed. The report should deal
          with the appellant&apos;s own state, since protection on the ground varies widely between states.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">Sri Lanka: Working Within KK [2021]</h2>
        <p className="mt-4 text-body leading-relaxed">
          Tamil appeals are governed by KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245. A Sri Lanka report should
          take the risk categories in that decision, including LTTE links, prominent diaspora activism and giving
          evidence against the state, and show with evidence which of them apply to the appellant.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">Bangladesh, India, Nepal and Bhutan: No Guidance to Fall Back On</h2>
        <p className="mt-4 text-body leading-relaxed">
          There is no current country guidance for these four countries. The tribunal has no settled starting point,
          so the report&apos;s method matters: it should name its sources, explain how reliable each is, and connect
          every conclusion to the appellant&apos;s circumstances rather than to the country in general.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">Where CPINs Fall Short</h2>
        <p className="mt-4 text-body leading-relaxed">
          Home Office CPINs exist for Bangladeshi political parties and religious minorities, Sikh separatism and
          Muslims in India, and Tamils in Sri Lanka, with more general coverage of Nepal and very little on Bhutan.
          They are updated slowly, which is a particular problem for Bangladesh after 2024. Our{" "}
          <Link href="/cpin-country-guidance" className="font-semibold text-ochre hover:underline">
            CPIN & Country Guidance page
          </Link>{" "}
          lists them by country and notes what each one leaves out.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">Getting the Most from an Instruction</h2>
        <p className="mt-4 text-body leading-relaxed">
          Reports are prepared under CPR Part 35 principles and the tribunal&apos;s practice direction on expert
          evidence. The most effective instructions identify the disputed country issues from the refusal letter, ask
          specific questions about them, and leave enough time before the hearing for an up-to-date analysis.
        </p>

        <RelatedLinks links={getPillarRelatedLinks()} />
      </PageShell>
    </>
  );
}
