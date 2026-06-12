import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank You | South Asia Reports",
  description: "Your instruction request has been received.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-[#1B2A4A] py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#00796B]/20"
            aria-hidden="true"
          >
            <svg className="h-8 w-8 text-[#00796B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Thank You</h1>
          <p className="mt-4 text-lg text-white/80">
            Your instruction request has been received. We will respond within one business day.
          </p>
          <p className="mt-2 text-sm text-white/60">
            A confirmation has been sent if you provided an email address.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-[44px] min-w-[200px] items-center justify-center rounded-[8px] bg-[#00796B] px-8 py-3 font-semibold text-white transition hover:bg-[#00695C]"
            >
              Return to Homepage
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-[44px] min-w-[200px] items-center justify-center rounded-[8px] border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F4F8] py-12">
        <div className="mx-auto max-w-2xl px-4 text-center text-[#374151] sm:px-6">
          <h2 className="text-lg font-semibold text-[#1B2A4A]">What happens next?</h2>
          <ul className="mt-4 space-y-3 text-left text-sm leading-relaxed">
            <li>We review your case details and match you with a qualified South Asia country expert.</li>
            <li>You receive a response within one business day with proposed scope and timeline.</li>
            <li>Legal Aid cases: confirm LAA prior authority before the expert begins work.</li>
          </ul>
          <Link
            href="/how-to-instruct"
            className="mt-6 inline-flex min-h-[44px] items-center font-semibold text-[#C4793A] hover:underline"
          >
            How to instruct a South Asia expert report
          </Link>
        </div>
      </section>
    </>
  );
}
