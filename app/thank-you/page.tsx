import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Thank You | South Asia Reports",
  description: "Your instruction request has been received.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

const next = [
  {
    step: "Today",
    detail:
      "We read the case details and check whether the hearing date is workable for a report of the scope you need.",
  },
  {
    step: "Within one working day",
    detail:
      "You receive a named expert, a defined scope, a fee and a delivery date, in writing.",
  },
  {
    step: "Before work begins",
    detail:
      "Nothing is charged until you confirm the scope. On Legal Aid matters, we wait for LAA prior authority.",
  },
];

export default function ThankYouPage() {
  return (
    <section className="mx-auto max-w-[1180px] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <span className="kicker">Received</span>
          <h1 className="mt-4 font-display text-[2.2rem] leading-tight text-ink sm:text-[2.8rem]">
            We have your case
          </h1>
          <p className="measure mt-5 text-[17px] leading-relaxed text-body">
            You will hear back within one working day. If your hearing is sooner than that allows,
            email{" "}
            <a href={`mailto:${SITE_EMAIL}`} className="link-rule text-indigo">
              {SITE_EMAIL}
            </a>{" "}
            with the date in the subject line and we will move it up.
          </p>
          <Link
            href="/how-to-instruct"
            className="link-rule mt-8 inline-block text-[16px] text-indigo"
          >
            The instruction process in full
          </Link>
        </div>

        <div className="lg:col-span-6">
          <span className="kicker">What happens next</span>
          <ol className="mt-5 border-t border-rule">
            {next.map((item, i) => (
              <li
                key={item.step}
                className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:gap-6"
              >
                <span aria-hidden="true" className="numeral text-[1.5rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-[1.05rem] text-ink">{item.step}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
