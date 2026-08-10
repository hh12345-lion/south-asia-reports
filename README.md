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

## Design system — "Almanac"

This site deliberately shares no visual language with the other expert-witness sites in this
portfolio. If you are changing the look, keep it away from the house template (navy `#0E2433`-ish
ink, teal/terracotta accents, dark photo hero with twin CTAs, uppercase mono eyebrow labels,
sticky white bar with a coloured "Instruct" button, four-column dark link-farm footer).

Tokens live in `app/globals.css` under `@theme inline`. Use the token utilities (`bg-oat`,
`text-ink`, `border-rule`) rather than arbitrary hex values.

| Token | Value | Role |
| --- | --- | --- |
| `ink` | `#241C33` | Aubergine-black. Headings, dark bands, footer |
| `ink-soft` | `#5B5268` | Secondary text, annotations |
| `body` | `#453F4E` | Body copy |
| `paper` | `#FBF9F5` | Page background (warm, never pure white) |
| `oat` | `#EFEAE0` | Alternating sections, panels |
| `surface` | `#FFFDF9` | Cards and inputs |
| `rule` | `#DAD2C4` | Hairline borders (shadows are not used) |
| `indigo` | `#4B3FA7` | Primary actions and links |
| `ochre` | `#9C6B1A` | Kickers, marginalia, numerals, underlines |

Type is **Newsreader** (display serif, headings and kickers) over **Archivo** (text). Headings pick
up Newsreader automatically from the base layer, so avoid adding `font-bold` to them.

Base element styles are wrapped in `@layer base` and the editorial helpers in `@layer components`.
Keep them there: unlayered CSS beats every Tailwind utility regardless of specificity, which will
silently break colour utilities on headings.

Editorial helpers: `.kicker` (serif-italic label on a hanging ochre rule), `.numeral` (hanging index
numeral), `.link-rule` (ochre underline), `.measure` / `.measure-wide` (reading widths), `.panel`.

### Layout conventions

- Container width is `max-w-[1180px]`, not `max-w-6xl`/`7xl`.
- Every inner page renders through `components/layout/PageShell.tsx`: a paper masthead
  (`PageHero`) followed by a two-column body with a sticky `InstructionRail`. Pass `rail={false}`
  where a page supplies its own sidebar.
- The header (`components/layout/Header.tsx`) is a two-tier masthead: a dispatch rail plus a
  masthead whose nav opens full-width `NavIndexPanel` panels rather than narrow dropdowns. Panel
  copy comes from `navSections` in `data/navigation.ts`, where each link carries a short `note`.
- The footer is deliberately minimal: email as the focal point, one link row, no copyright or
  "all rights reserved" line.
- Contact form is five fields by design. Do not re-add funding/report-type/phone selects.

### Imagery

`public/images/*.webp` are bespoke "almanac plate" illustrations generated for this project
(abstract survey linework in the site palette). Do not replace them with stock photography, and in
particular avoid the courtroom / scales / globe stock shots reused across the other sites.

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
