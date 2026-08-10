/**
 * Google Consent Mode v2 defaults — must run before any Google tag.
 * Plain <script> in the root layout so it ships in the initial HTML without
 * relying on next/script beforeInteractive (App Router-safe).
 */
export function ConsentDefaultsScript() {
  return (
    <script
      id="sar-consent-defaults"
      dangerouslySetInnerHTML={{
        __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'functionality_storage': 'denied',
  'personalization_storage': 'denied',
  'security_storage': 'granted',
  'wait_for_update': 500
});
        `.trim(),
      }}
    />
  );
}
