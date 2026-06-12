import Link from "next/link";

export function CTASection({
  title = "Instruct a South Asia Country Expert Report",
  description = "Submit your case details for a confidential response within one business day. Legal Aid compatible rates available for all major South Asian asylum profiles.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-[#00796B] py-12 sm:py-14 md:py-16">
      <div className="mx-auto min-w-0 max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/90 sm:text-base">{description}</p>
        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] bg-[#1B2A4A] px-6 py-3 font-semibold text-white transition hover:bg-[#152238] sm:w-auto sm:min-w-[200px] sm:px-8"
          >
            Instruct a Report
          </Link>
          <Link
            href="/how-to-instruct"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:min-w-[200px] sm:px-8"
          >
            How to Instruct
          </Link>
        </div>
      </div>
    </section>
  );
}
