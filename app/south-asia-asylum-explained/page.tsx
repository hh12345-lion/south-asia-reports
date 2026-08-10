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
  title: "South Asian Asylum Claims UK | Bangladesh, India, Sri Lanka & Nepal Expert Evidence Guide",
  description:
    "Complete guide to South Asian asylum claims in UK tribunals: Bangladesh political persecution, India Hindutva/minorities, Sri Lanka Tamil claims, Nepal caste, and expert evidence methodology.",
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
          title: "South Asian Asylum Claims in the UK: The Complete Guide for Solicitors",
          description:
            "Complete guide to South Asian asylum claims in UK tribunals covering Bangladesh, India, Sri Lanka, Nepal, and Bhutan.",
          path: "/south-asia-asylum-explained",
        })}
      />
      <PageShell
        title="South Asian Asylum Claims in the UK: The Complete Guide for Solicitors"
        subtitle="Expert evidence, country guidance, CPINs, and profile-specific risk analysis for South Asian asylum appeals."
        breadcrumbs={crumbs}
      >
        <p className="text-body leading-relaxed">
          South Asia is the second most significant asylum claim region in the UK after Sub-Saharan Africa. In the year
          ending September 2025, Bangladesh, India, and Sri Lanka were among the nationalities with the highest number
          of asylum claims from visa holders. This guide explains the legal landscape, key profiles, country guidance
          framework, and the critical role of expert evidence for UK immigration solicitors instructing reports for
          First-tier Tribunal and Upper Tribunal proceedings only.
        </p>

        <UkServiceScope className="mt-8" />

        <h2 className="mt-10 font-display text-xl text-ink">South Asia: Key Asylum Statistics</h2>
        <div className="mt-4 table-scroll overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-rule bg-oat">
                <th className="px-4 py-3 text-left text-ink">Country</th>
                <th className="px-4 py-3 text-left text-ink">UK Asylum Claim Volume</th>
                <th className="px-4 py-3 text-left text-ink">Key Profiles</th>
                <th className="px-4 py-3 text-left text-ink">Country Guidance?</th>
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

        <h2 className="mt-10 font-display text-xl text-ink">Bangladesh: The Post-2024 Landscape</h2>
        <p className="mt-4 text-body leading-relaxed">
          The most important recent development in South Asian asylum case law is the August 2024 fall of Sheikh
          Hasina&apos;s Awami League government. Following mass student protests, Hasina fled to India, fundamentally
          altering the asylum landscape. Former BNP and Jamaat supporters who were genuinely persecuted under the
          Awami League may now face changed country conditions arguments. Conversely, Awami League supporters and
          former officials face new risks under the transitional government.
        </p>
        <p className="mt-4 text-body leading-relaxed">
          Expert witnesses must assess post-August 2024 conditions in all Bangladesh claims. Pre-2024 country
          information may no longer accurately reflect risk for either BNP or Awami League supporters. Hindu minority
          persecution and LGBTQ+ criminalisation under section 377 PPC remain significant independent claim bases.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">India: The Hindutva Question</h2>
        <p className="mt-4 text-body leading-relaxed">
          India generates growing asylum claim volumes driven by Hindutva and RSS targeting of Muslims, Sikh claims,
          Christian minority persecution, caste discrimination, and political dissident persecution. The Home Office
          frequently deploys internal relocation arguments given India&apos;s size, but expert evidence can challenge
          this where Hindutva networks have national reach.
        </p>
        <p className="mt-4 text-body leading-relaxed">
          CAA and NRC concerns affect Muslim appellants from Assam and border states. Expert witnesses assess
          state-level variation in risk, the nationwide reach of Hindutva organisations, and the gap between formal
          legal protections and practical enforcement for minority communities.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">Sri Lanka: The KK Country Guidance Framework</h2>
        <p className="mt-4 text-body leading-relaxed">
          KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245 remains the leading country guidance for Tamil
          asylum claims. It established that Tamil asylum seekers with actual or imputed LTTE associations, high-profile
          diaspora activists, and those who have given evidence against the government face real risk on return.
          Expert witnesses assess individual profiles against this binding framework.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">Expert Evidence Without Country Guidance</h2>
        <p className="mt-4 text-body leading-relaxed">
          For Bangladesh, India, Nepal, and Bhutan, where no current UK country guidance exists, independent expert
          evidence is especially important. Expert reports provide detailed, country-specific analysis that goes beyond
          what Home Office CPINs or standard country information covers, addressing the individual risk profile from
          the start. Tribunals must assess these claims on the merits of expert analysis rather than country guidance
          presumptions.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">CPIN Coverage for South Asia</h2>
        <p className="mt-4 text-body leading-relaxed">
          Home Office CPINs cover political parties and religious minorities for Bangladesh, Sikh separatism and
          Muslims for India, Tamils and LTTE for Sri Lanka, and general background for Nepal. Bhutan has limited
          coverage. CPINs may lag behind rapidly changing conditions, particularly for post-August 2024 Bangladesh.
          See our{" "}
          <Link href="/cpin-country-guidance" className="font-semibold text-ochre hover:underline">
            CPIN & Country Guidance page
          </Link>{" "}
          for the full South Asia CPIN table.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">The Role of Expert Evidence</h2>
        <p className="mt-4 text-body leading-relaxed">
          Expert witnesses provide independent, objective country condition reports compliant with CPR Part 35 and
          Immigration Tribunal Practice Direction paragraph 10. Reports address profile-specific risk, challenge generic
          CPIN positions, assess internal relocation viability, and provide current analysis of evolving conditions.
          Early instruction allows sufficient time for granular country analysis consistent with tribunal timetables.
        </p>

        <RelatedLinks links={getPillarRelatedLinks()} />
      </PageShell>
    </>
  );
}
