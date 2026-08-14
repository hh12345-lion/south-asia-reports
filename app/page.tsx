import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { countries } from "@/data/countries";
import { PRIMARY_CTA } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import deltaPlate from "@/public/images/almanac-plate-delta.webp";

export const metadata = createMetadata({
  title:
    "South Asia Expert Reports UK | Bangladesh, India, Sri Lanka & Nepal Country Condition Reports",
  description:
    "United Kingdom South Asia expert reports for asylum appeals: Bangladesh, India, Sri Lanka, Nepal, and Bhutan. UK immigration tribunals, CPINs, and Legal Aid.",
  path: "/",
});

const facts = [
  { term: "Forums", detail: "First-tier Tribunal (IAC) and Upper Tribunal" },
  { term: "Funding", detail: "LAA prior authority, or a fixed private fee" },
  { term: "Duty", detail: "Practice Direction para 10 — duty is to the tribunal" },
];

const canDo = [
  "Set out risk for this profile, in this district, at the date of hearing.",
  "Answer a CPIN passage with sourced material it omitted or that has been overtaken.",
  "Test internal relocation on the facts, not as a map exercise.",
];

const cannotDo = [
  "Decide credibility. That is for the judge.",
  "Advise on UK law, or write to a conclusion supplied in the papers.",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      <main id="main">
        <section className="border-b border-rule">
          <div className="grid lg:grid-cols-2">
            <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
              <span className="kicker">UK asylum tribunals</span>
              <h1 className="mt-4 text-balance font-display text-[2.2rem] leading-[1.05] text-ink sm:text-[2.8rem] lg:text-[3.2rem]">
                Country evidence for South Asian appeals
              </h1>
              <p className="measure mt-5 text-[17px] leading-relaxed text-body">
                Independent reports on Bangladesh, India, Sri Lanka, Nepal and Bhutan, written for
                UK solicitors. Four of these five countries have no current UK country guidance —
                the CPIN stands unless something answers it.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#lodge"
                  className="inline-flex min-h-[50px] items-center justify-center bg-indigo px-7 font-medium text-paper hover:bg-indigo-deep"
                >
                  {PRIMARY_CTA}
                </a>
                <Link
                  href="/south-asia-asylum-explained"
                  className="inline-flex min-h-[50px] items-center justify-center border border-ink/20 px-7 font-medium text-ink hover:border-ink"
                >
                  Read the guide
                </Link>
              </div>
            </div>
            <figure className="min-h-[220px] border-t border-rule bg-oat lg:border-l lg:border-t-0">
              <Image
                src={deltaPlate}
                alt="Abstract survey plate of Himalayan contours draining into the delta"
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </section>

        <section className="grid border-b border-rule sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.term} className="border-b border-rule px-4 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:px-6 lg:px-8">
              <p className="kicker">{fact.term}</p>
              <p className="mt-2 text-[15px] leading-snug text-ink">{fact.detail}</p>
            </div>
          ))}
        </section>

        <section className="border-b border-rule px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
          <span className="kicker">Coverage</span>
          <h2 className="mt-3 font-display text-[1.7rem] text-ink">Five countries. One sheet of facts.</h2>
          <ul className="mt-8 divide-y divide-rule border-y border-rule">
            {countries.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/countries/${c.slug}`}
                  className="grid gap-1 py-4 sm:grid-cols-[8rem_minmax(0,1fr)_10rem] sm:items-baseline sm:gap-6"
                >
                  <span className="font-display text-lg text-ink">{c.title}</span>
                  <span className="text-[14.5px] text-ink-soft">{c.keyProfiles}</span>
                  <span className="text-[13.5px] text-indigo sm:text-right">
                    {c.countryGuidance === "No current CG" ? "No country guidance" : c.countryGuidance}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid border-b border-rule md:grid-cols-2">
          <div className="border-b border-rule px-4 py-12 sm:px-6 md:border-b-0 md:border-r lg:px-10">
            <h2 className="font-display text-xl text-ink">What a report can do</h2>
            <ul className="mt-5 space-y-3">
              {canDo.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-body">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 flex-none bg-indigo" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-4 py-12 sm:px-6 lg:px-10">
            <h2 className="font-display text-xl text-ink">What it cannot</h2>
            <ul className="mt-5 space-y-3">
              {cannotDo.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 flex-none bg-rule" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="lodge" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
          <span className="kicker">Lodge a case</span>
          <h2 className="mt-3 font-display text-[1.7rem] text-ink">Five fields. One working day.</h2>
          <p className="measure mt-3 text-[16px] text-body">
            If a report will not help this appeal, we will tell you that rather than take the work.
          </p>
          <div className="mt-8 max-w-2xl">
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
