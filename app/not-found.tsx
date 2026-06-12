import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-[#1B2A4A] py-14 text-center md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-7xl font-bold text-[#C4793A] sm:text-8xl" aria-hidden="true">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Page Not Found</h1>
        <p className="mt-4 text-lg text-white/80">
          This page does not exist or may have moved.
        </p>

        <div className="mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <Link
            href="/"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] bg-[#00796B] px-6 py-3 font-semibold text-white transition hover:bg-[#00695C] sm:w-auto sm:min-w-[200px] sm:px-8"
          >
            Return to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:min-w-[200px] sm:px-8"
          >
            Instruct a Report
          </Link>
        </div>

        <nav
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60"
          aria-label="Quick links"
        >
          <Link href="/countries" className="inline-flex min-h-[44px] items-center hover:text-white">
            Countries
          </Link>
          <Link href="/asylum-profiles" className="inline-flex min-h-[44px] items-center hover:text-white">
            Asylum Profiles
          </Link>
          <Link href="/south-asia-asylum-explained" className="inline-flex min-h-[44px] items-center hover:text-white">
            Asylum Explained
          </Link>
          <Link href="/case-types" className="inline-flex min-h-[44px] items-center hover:text-white">
            Case Types
          </Link>
          <Link href="/contact" className="inline-flex min-h-[44px] items-center hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </section>
  );
}
