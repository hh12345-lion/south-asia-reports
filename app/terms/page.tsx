import { PageShell } from "@/components/layout/PageShell";
import { UK_SERVICE_SCOPE_DETAIL, UK_SERVICE_SCOPE_INTRO } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Use | South Asia Reports",
  description: "Terms of use for South Asia Reports.com",
  path: "/terms",
  noindex: true,
  follow: true,
});

export default function TermsPage() {
  return (
    <PageShell title="Terms of Use" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}>
      <p className="text-[#374151] leading-relaxed">
        South Asia Reports.com is an expert witness matching service for UK immigration solicitors. We are not a law firm
        and do not provide legal advice. Expert witnesses instructed through this service provide independent evidence
        to tribunals; their duty is to the tribunal, not to either party.
      </p>
      <h2 className="mt-10 text-xl font-bold text-[#1B2A4A]">Geographic scope</h2>
      <p className="mt-4 text-[#374151] leading-relaxed">{UK_SERVICE_SCOPE_INTRO}</p>
      <p className="mt-4 text-[#374151] leading-relaxed">{UK_SERVICE_SCOPE_DETAIL}</p>
      <p className="mt-4 text-[#374151] leading-relaxed">
        By using this website you agree to use it for legitimate instruction enquiries only. We reserve the right to
        decline instructions that fall outside our scope or expertise. Content on this site is for general information
        and does not constitute legal advice.
      </p>
    </PageShell>
  );
}
