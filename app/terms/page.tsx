import { PageShell } from "@/components/layout/PageShell";
import { UK_SERVICE_SCOPE_DETAIL, UK_SERVICE_SCOPE_INTRO } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Use",
  description:
    "Terms governing use of South Asia Reports, a UK expert report referral service for immigration solicitors. Not legal advice or a law firm.",
  path: "/terms",
  noindex: true,
  follow: true,
});

export default function TermsPage() {
  return (
    <PageShell title="Terms of Use" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}>
      <p className="text-body leading-relaxed">
        South Asia Reports.com is an expert witness matching service for UK immigration solicitors. We are not a law firm
        and do not provide legal advice. Expert witnesses instructed through this service provide independent evidence
        to tribunals; their duty is to the tribunal, not to either party.
      </p>
      <h2 className="mt-10 font-display text-xl text-ink">Geographic scope</h2>
      <p className="mt-4 text-body leading-relaxed">{UK_SERVICE_SCOPE_INTRO}</p>
      <p className="mt-4 text-body leading-relaxed">{UK_SERVICE_SCOPE_DETAIL}</p>
      <p className="mt-4 text-body leading-relaxed">
        By using this website you agree to use it for legitimate instruction enquiries only. We reserve the right to
        decline instructions that fall outside our scope or expertise. Content on this site is for general information
        and does not constitute legal advice.
      </p>
    </PageShell>
  );
}
