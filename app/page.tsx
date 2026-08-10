import Link from "next/link";
import Image from "next/image";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { asylumProfiles } from "@/data/asylum-profiles";
import { caseTypes } from "@/data/case-types";
import { countries } from "@/data/countries";
import { asylumProfilesNavLinks, caseTypesNavLinks } from "@/data/navigation";
import { createMetadata } from "@/lib/metadata";
import deltaPlate from "@/public/images/almanac-plate-delta.webp";
import strataPlate from "@/public/images/almanac-plate-strata.webp";

export const metadata = createMetadata({
  title:
    "South Asia Expert Reports UK | Bangladesh, India, Sri Lanka & Nepal Country Condition Reports",
  description:
    "United Kingdom South Asia expert reports for asylum appeals: Bangladesh, India, Sri Lanka, Nepal, and Bhutan. UK immigration tribunals, CPINs, and Legal Aid.",
  path: "/",
});

const standingFacts = [
  { term: "Countries", detail: "Bangladesh, India, Sri Lanka, Nepal, Bhutan" },
  { term: "Forums", detail: "First-tier Tribunal (IAC) and Upper Tribunal" },
  { term: "Funding", detail: "LAA prior authority rates or fixed private fee" },
  { term: "Standard", detail: "Practice Direction para 10, CPR Part 35 duties" },
];

const canDo = [
  "Set out what happens to someone with this appellant's specific profile, in this specific region, now.",
  "Answer a CPIN passage directly, with sourced material the CPIN omitted, misread or has been overtaken by.",
  "Test internal relocation on the facts: whether the appellant could actually live in the proposed city, not just reach it.",
  "Explain state protection in practice, including whether police and courts function for this group.",
  "Put documents in context: what a first information report, party card or court summons looks like, and what forgery is common.",
  "Explain conduct a UK judge may read as implausible but which is ordinary in the country of origin.",
];

const cannotDo = [
  "Decide whether the appellant is telling the truth. Credibility is for the judge, and an expert who strays into it weakens the report.",
  "Advise on UK law, or argue the appeal. The report gives the tribunal country facts and reasoned opinion, not submissions.",
  "Guarantee an outcome, or write to a conclusion supplied in the instructions.",
  "Stand in for the appellant's own evidence, witness statements or medical evidence.",
];

const instructionQuestions = [
  {
    q: "What is the risk to a person with this profile, in this district, at the date of hearing?",
    note: "Profile and place, not the country in the abstract. Risk in Dhaka is not risk in Sylhet.",
  },
  {
    q: "Does the CPIN reflect the current position, and where does the underlying source material differ?",
    note: "Ask the expert to engage with the CPIN by paragraph rather than talk past it.",
  },
  {
    q: "Could this appellant relocate internally, and what would their life actually be like there?",
    note: "Housing, work, documentation, community and whether the original agent of persecution has reach.",
  },
  {
    q: "Is there sufficiency of protection for this group from the police, courts and authorities?",
    note: "Including whether making a complaint itself creates risk.",
  },
  {
    q: "Would this appellant's activity in the UK be known to the authorities on return?",
    note: "Sur place claims turn on monitoring, diaspora informants and airport screening practice.",
  },
  {
    q: "How would a returnee be processed at the airport, and what documents would they need?",
    note: "Relevant to Article 3, to failed asylum seeker claims and to removal directions.",
  },
];

const developments = [
  {
    marker: "Bangladesh",
    title: "The August 2024 transition reversed who is at risk",
    body: "The fall of the Awami League government changed the direction of political risk. Former Awami League supporters may now face danger they did not face before, while BNP and Jamaat appellants refused years ago may have a changed-circumstances argument. A report written on pre-2024 conditions is not just dated, it may be backwards.",
    href: "/countries/bangladesh",
  },
  {
    marker: "Sri Lanka",
    title: "KK [2021] sets the risk categories, and the categories are narrow",
    body: "Sri Lanka is the one country here with current UK country guidance. That makes the expert's task specific: place the appellant inside or outside the KK risk categories on the evidence, and address what has changed on the ground since the guidance was given.",
    href: "/case-types/sri-lanka-tamil-claims",
  },
  {
    marker: "India",
    title: "Minority and caste claims meet an assumption of state capacity",
    body: "Refusals often rest on India's size and democratic institutions, treating internal relocation as self-evident. The evidence has to deal with regional variation, local police practice and whether a Muslim, Sikh, Christian or Dalit appellant can in fact resettle elsewhere.",
    href: "/countries/india",
  },
];

const featuredProfileSlugs = [
  "political-persecution-south-asia",
  "religious-minority-persecution",
  "lgbtq-south-asia",
  "caste-discrimination",
  "women-gender-based-violence",
  "diaspora-activity-risk-on-return",
] as const;

export default function HomePage() {
  const noCg = countries.filter((c) => c.countryGuidance === "No current CG").length;
  const featuredProfiles = featuredProfileSlugs
    .map((slug) => ({
      profile: asylumProfiles.find((p) => p.slug === slug),
      nav: asylumProfilesNavLinks.find((n) => n.href.endsWith(slug)),
    }))
    .filter((x) => x.profile);

  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      {/* Opening brief */}
      <section className="border-b border-rule bg-oat/50">
        <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <span className="kicker">UK asylum and immigration tribunals</span>
              <h1 className="mt-5 text-balance font-display text-[2.1rem] leading-[1.08] text-ink min-[375px]:text-[2.4rem] sm:text-[3.1rem] lg:text-[3.6rem]">
                Country evidence for South Asian asylum appeals
              </h1>
              <p className="measure-wide mt-6 text-[17px] leading-relaxed text-body sm:text-[19px]">
                Independent expert reports on Bangladesh, India, Sri Lanka, Nepal and Bhutan,
                written for UK immigration solicitors and Legal Aid practitioners. The job is
                narrow and specific: answer the country findings the refusal relies on, for the
                appellant actually in front of the tribunal.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-[10px] bg-indigo px-7 font-medium text-paper transition-colors hover:bg-indigo-deep"
                >
                  Start an instruction
                </Link>
                <Link
                  href="/south-asia-asylum-explained"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-[10px] border border-ink/25 px-7 font-medium text-ink transition-colors hover:border-ink hover:bg-surface"
                >
                  Read the full guide
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="overflow-hidden rounded-[14px] border border-rule bg-surface">
                <Image
                  src={deltaPlate}
                  alt="Abstract survey plate of Himalayan contours draining into the delta"
                  priority
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="h-auto w-full"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Standing facts */}
      <section className="border-b border-rule bg-surface">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <dl className="grid divide-rule sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
            {standingFacts.map((fact) => (
              <div key={fact.term} className="border-b border-rule py-6 sm:border-b-0 sm:px-6 sm:first:pl-0 lg:last:pr-0">
                <dt className="kicker">{fact.term}</dt>
                <dd className="mt-2 text-[15px] leading-snug text-ink">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The gap this evidence fills */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="kicker">The problem</span>
              <h2 className="mt-4 text-balance font-display text-[1.8rem] leading-tight text-ink sm:text-[2.2rem]">
                For {noCg} of these five countries, there is no current UK country guidance
              </h2>
            </div>
            <div className="measure-wide lg:col-span-7">
              <p className="text-[17px] leading-relaxed text-body">
                Where the Upper Tribunal has given country guidance, everyone knows the framework.
                Sri Lanka has that in <span className="text-ink">KK [2021] UKUT 245</span>. Bangladesh,
                India, Nepal and Bhutan do not. In those appeals the Home Office Country Policy and
                Information Note effectively becomes the country evidence, and a refusal built on it
                stands unless something answers it.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-body">
                A CPIN is a summary written at a national level and at a point in time. It is not
                wrong so much as general, and general is precisely what an individual asylum claim is
                not. Expert evidence closes that distance: it takes the specific profile, the
                specific region and the current position, and puts them where the refusal made an
                assumption.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-body">
                In the year ending September 2025, Bangladesh, India and Sri Lanka were among the
                nationalities with the highest number of asylum claims from visa holders, making
                South Asia the second most significant claim region after Sub-Saharan Africa.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <ResponsiveTableWrap label="Swipe to see claim volume and country guidance">
              <table className="w-full min-w-[42rem] border-collapse text-left">
                <caption className="sr-only">
                  South Asian countries covered, with claim volume, principal asylum profiles and
                  current UK country guidance
                </caption>
                <thead>
                  <tr className="border-b border-rule bg-oat/60">
                    <th scope="col" className="px-4 py-3 font-display text-[15px] font-normal text-ink">
                      Country
                    </th>
                    <th scope="col" className="px-4 py-3 font-display text-[15px] font-normal text-ink">
                      Claim volume
                    </th>
                    <th scope="col" className="px-4 py-3 font-display text-[15px] font-normal text-ink">
                      Principal profiles
                    </th>
                    <th scope="col" className="px-4 py-3 font-display text-[15px] font-normal text-ink">
                      UK country guidance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {countries.map((c) => (
                    <tr key={c.slug} className="border-b border-rule-soft last:border-0">
                      <th scope="row" className="px-4 py-4 text-[15px] font-medium">
                        <Link href={`/countries/${c.slug}`} className="link-rule text-ink hover:text-indigo">
                          {c.title}
                        </Link>
                      </th>
                      <td className="px-4 py-4 text-[14.5px] text-body">{c.claimVolume}</td>
                      <td className="px-4 py-4 text-[14.5px] text-body">{c.keyProfiles}</td>
                      <td className="px-4 py-4 text-[14.5px]">
                        {c.countryGuidance === "No current CG" ? (
                          <span className="text-ochre">None current</span>
                        ) : (
                          <span className="text-ink">{c.countryGuidance}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ResponsiveTableWrap>
          </div>
        </div>
      </section>

      {/* What a report can and cannot do */}
      <section className="border-b border-rule bg-oat/50">
        <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <span className="kicker">Scope</span>
          <h2 className="mt-4 max-w-3xl text-balance font-display text-[1.8rem] leading-tight text-ink sm:text-[2.2rem]">
            What a country expert report can do, and what it cannot
          </h2>
          <p className="measure-wide mt-5 text-[17px] leading-relaxed text-body">
            Reports get less weight when they overreach. Knowing the limits before you instruct is
            the difference between evidence a judge relies on and evidence a judge sets aside.
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="border-b border-ochre pb-2 font-display text-lg text-ink">
                Properly within scope
              </h3>
              <ul className="mt-5 space-y-4">
                {canDo.map((item) => (
                  <li key={item} className="flex gap-3 text-[15.5px] leading-relaxed text-body">
                    <span aria-hidden="true" className="mt-3 h-px w-3.5 flex-none bg-ochre" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="border-b border-rule pb-2 font-display text-lg text-ink">
                Outside an expert&rsquo;s remit
              </h3>
              <ul className="mt-5 space-y-4">
                {cannotDo.map((item) => (
                  <li key={item} className="flex gap-3 text-[15.5px] leading-relaxed text-ink-soft">
                    <span aria-hidden="true" className="mt-3 h-px w-3.5 flex-none bg-rule" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Instruction questions */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="kicker">Drafting instructions</span>
            <h2 className="mt-4 text-balance font-display text-[1.8rem] leading-tight text-ink sm:text-[2.2rem]">
              Six questions worth putting to a South Asia expert
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-body">
              A report is only as good as the questions it is asked. Broad instructions produce
              broad country background; precise instructions produce findings a judge can use.
              Adapt these to your facts.
            </p>
          </div>

          <ol className="mt-10 border-t border-rule">
            {instructionQuestions.map((item, i) => (
              <li
                key={item.q}
                className="grid gap-1 border-b border-rule py-6 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-8"
              >
                <span aria-hidden="true" className="numeral">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="measure-wide">
                  <p className="font-display text-[1.2rem] leading-snug text-ink">{item.q}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{item.note}</p>
                </div>
              </li>
            ))}
          </ol>

          <Link href="/how-to-instruct" className="link-rule mt-8 inline-block text-[16px] text-indigo">
            The full instruction process, step by step
          </Link>
        </div>
      </section>

      {/* Developments, over the strata plate */}
      <section className="relative border-b border-rule bg-ink text-paper">
        <Image
          src={strataPlate}
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-[0.16]"
        />
        <div className="relative mx-auto max-w-[1180px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <span className="kicker kicker-pale">What has moved</span>
          <h2 className="mt-4 max-w-3xl text-balance font-display text-[1.8rem] leading-tight text-paper sm:text-[2.2rem]">
            Three shifts that change how these appeals are argued
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-12">
            {developments.map((item) => (
              <article key={item.marker} className="border-t border-paper/25 pt-5">
                <p className="font-display text-[15px] italic text-ochre-pale">{item.marker}</p>
                <h3 className="mt-2 font-display text-[1.25rem] leading-snug text-paper">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-paper/70">{item.body}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-[14.5px] text-ochre-pale hover:text-paper"
                >
                  Read the detail
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Index: profiles and case types */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="kicker">By profile</span>
              <h2 className="mt-4 font-display text-[1.6rem] leading-tight text-ink sm:text-[1.9rem]">
                Risk is profile-specific
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-body">
                The same country can be safe for one appellant and not for another. These pages set
                out how each profile is assessed across the five countries.
              </p>

              <ul className="mt-8 border-t border-rule">
                {featuredProfiles.map(({ profile, nav }) => (
                  <li key={profile!.slug} className="border-b border-rule">
                    <Link
                      href={`/asylum-profiles/${profile!.slug}`}
                      className="group flex items-baseline justify-between gap-6 py-4"
                    >
                      <span className="min-w-0">
                        <span className="block font-display text-[1.1rem] text-ink group-hover:text-indigo">
                          {profile!.title}
                        </span>
                        {nav?.note && (
                          <span className="mt-0.5 block text-[14px] leading-snug text-ink-soft">
                            {nav.note}
                          </span>
                        )}
                      </span>
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-ochre transition-transform group-hover:translate-x-1"
                      >
                        &rarr;
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <Link href="/asylum-profiles" className="link-rule mt-6 inline-block text-[15px] text-indigo">
                All eight profiles
              </Link>
            </div>

            <div className="lg:col-span-5">
              <span className="kicker">By posture</span>
              <h2 className="mt-4 font-display text-[1.6rem] leading-tight text-ink sm:text-[1.9rem]">
                What the tribunal needs changes with the stage
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-body">
                A first appeal, an error of law hearing and a paragraph 353 fresh claim each call for
                a different report.
              </p>

              <ul className="mt-8 border-t border-rule">
                {caseTypes.slice(0, 6).map((c) => {
                  const nav = caseTypesNavLinks.find((n) => n.href.endsWith(c.slug));
                  return (
                    <li key={c.slug} className="border-b border-rule-soft">
                      <Link
                        href={`/case-types/${c.slug}`}
                        className="flex min-h-[56px] flex-col justify-center py-2.5 text-ink transition-colors hover:text-indigo"
                      >
                        <span className="text-[15.5px]">{c.title}</span>
                        {nav?.note && (
                          <span className="text-[13.5px] leading-snug text-ink-soft">{nav.note}</span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <Link href="/case-types" className="link-rule mt-6 inline-block text-[15px] text-indigo">
                All case types
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
