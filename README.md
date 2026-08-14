# South Asia Reports

SEO lead-generation site for [southasiareports.com](https://www.southasiareports.com) — country expert
reports for UK asylum and immigration tribunals covering Bangladesh, India, Sri Lanka, Nepal and
Bhutan. Pakistan is handled separately at pakistanexpertreports.com.

Audience is UK immigration solicitors, law firms and Legal Aid practitioners. The site is UK-only:
it does not serve US, Canadian or EU immigration systems.

## Stack

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- Static generation via `generateStaticParams` (~48 indexable routes)
- Lead capture posts to `/api/submit-lead` → Google Sheets (+ optional webhook)
- Deployed on Netlify

## Commands

```bash
npm install
npm run dev
npm run build          # runs seo:generate first
npm run seo:generate
npm run seo:verify
npx eslint .
```

## Design system — landing ledger

Landing-page chrome: a sticky left rail on desktop, a compact mobile bar, no mega-nav, no
Instruct/Retain/Brief CTAs. Primary action is **Lodge a case**.

Do not copy ABC / Astra / Axiom / Expert Consultancy / South Asia Expert: no dual Contact+Retain
nav, no 4-column dark footer, no teal/gold/acid palettes, no Fraunces/Figtree/Inter pairings.

| Token | Value | Role |
| --- | --- | --- |
| `ink` | `#2B2118` | Walnut. Rail, headings |
| `paper` | `#EDE8DF` | Stone page ground |
| `indigo` | `#8B2942` | Garnet actions (token name is historical) |
| `ochre` | `#5A6B3A` | Olive markers |

Type is **Petrona** over **Lexend**. Leads write to **one** Google Sheet tab (`GOOGLE_SHEET_TAB_NAME`).

## Environment

Copy `.env.example` to `.env.local`:

- `NEXT_PUBLIC_SITE_URL=https://www.southasiareports.com`
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_SHEET_ID`, `GOOGLE_SHEET_TAB_NAME`
- `Lead_notification_url` (optional webhook)
- `GOOGLE_SITE_VERIFICATION` / `BING_SITE_VERIFICATION` (optional)
- Analytics IDs are all optional and consent-gated

## SEO

`scripts/generate-seo.ts` writes `public/sitemap.xml` and `public/robots.txt` from
`lib/seo/publicUrlInventory.ts`, and runs automatically on `prebuild`. Run `npm run seo:generate`
after adding routes.
