import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { CookieSettingsButton } from "@/components/cookies";
import { createMetadata } from "@/lib/metadata";
import { CATEGORY_META } from "@/lib/cookies/constants";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Cookie Policy | South Asia Reports",
  description:
    "How South Asia Reports.com uses cookies and similar technologies, your choices under UK GDPR and ePrivacy, and how to manage preferences.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Cookie Policy" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell title="Cookie Policy" subtitle="Last updated: June 2026" breadcrumbs={crumbs}>
        <p className="text-body leading-relaxed">
          This Cookie Policy explains how South Asia Reports.com (&quot;we&quot;, &quot;us&quot;) uses
          cookies and similar technologies when you visit our website. It should be read alongside
          our{" "}
          <Link href="/privacy" className="font-semibold text-ochre hover:underline">
            Privacy Policy
          </Link>
          . We comply with the UK GDPR, the Privacy and Electronic Communications Regulations
          (PECR), and apply CCPA-aligned transparency for California visitors.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">What are cookies?</h2>
        <p className="mt-4 text-body leading-relaxed">
          Cookies are small text files stored on your device when you visit a website. We also use
          local storage to remember your cookie consent choices (with a 12-month expiry) and may
          load third-party tags only after you grant consent.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">Google Consent Mode</h2>
        <p className="mt-4 text-body leading-relaxed">
          Before you make a choice, we set Google Consent Mode v2 defaults that deny analytics,
          advertising, and personalization storage. When you accept or customise preferences, we
          update consent signals immediately so Google tags respect your choices.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">Cookie categories</h2>
        <div className="mt-4 space-y-4">
          {(Object.keys(CATEGORY_META) as Array<keyof typeof CATEGORY_META>).map((key) => {
            const meta = CATEGORY_META[key];
            return (
              <section key={key} className="rounded-[12px] border border-rule bg-oat p-4">
                <h3 className="text-ink">{meta.label}</h3>
                <p className="mt-2 text-sm text-body">{meta.description}</p>
                {meta.required && (
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ochre">
                    Always active
                  </p>
                )}
              </section>
            );
          })}
        </div>

        <h2 className="mt-10 font-display text-xl text-ink">Third-party services</h2>
        <p className="mt-4 text-body leading-relaxed">
          Depending on your consent choices, we may load:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-body">
          <li>Google Analytics and Google Tag Manager (analytics)</li>
          <li>Meta Pixel (marketing)</li>
          <li>LinkedIn Insight Tag (marketing)</li>
          <li>Hotjar (analytics and experience insights)</li>
        </ul>
        <p className="mt-4 text-sm text-body">
          These providers may process data outside the UK. We do not load non-essential scripts until
          you opt in via our cookie banner.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">Your choices</h2>
        <p className="mt-4 text-body leading-relaxed">
          On your first visit you can Accept All, Reject Non-Essential, or Customize Preferences.
          Change your mind anytime using Cookie Settings in the website footer, or open preferences
          directly:
        </p>
        <p className="mt-3">
          <CookieSettingsButton variant="inline" />
        </p>
        <p className="mt-3 text-body leading-relaxed">
          Consent is stored in your browser for up to 12 months, after which we will ask again.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">California residents (CCPA)</h2>
        <p className="mt-4 text-body leading-relaxed">
          We do not sell personal information. Non-essential cookies used for analytics or marketing
          are disabled until you provide consent. You may withdraw consent at any time via Cookie
          Settings.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">Browser controls</h2>
        <p className="mt-4 text-body leading-relaxed">
          You can block or delete cookies through your browser settings. Blocking necessary cookies
          may prevent us from remembering your consent preferences.
        </p>

        <h2 className="mt-10 font-display text-xl text-ink">Contact</h2>
        <p className="mt-4 text-body leading-relaxed">
          Questions about cookies:{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-ochre hover:underline">
            {SITE_EMAIL}
          </a>
        </p>
      </PageShell>
    </>
  );
}
