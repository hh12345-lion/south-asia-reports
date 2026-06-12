# AfricaExpertWitness.com — Project Summary

**Domain:** https://www.africaexpertwitness.com  
**Last updated:** May 2026  
**Status:** Production-ready static site (62 pages), SEO architecture implemented

This document summarises everything built for the website UI and SEO, aligned with [SEO-ARCHITECTURE.md](./SEO-ARCHITECTURE.md).

---

## 1. Website overview

AfricaExpertWitness.com is a **lead-generation website** for UK immigration solicitors, law firms, and international arbitration counsel who need **Africa expert witnesses**. It targets three markets:

1. **Asylum & immigration** (primary volume) — 54 African countries, UK tribunals  
2. **Investment treaty & commercial arbitration** (highest value) — ICSID, mining, energy  
3. **LGBTQI+ asylum** (fast-growing niche) — Uganda, Nigeria, Ghana, and 30+ criminalising states  

**Primary SEO goal:** Rank #1 for “Africa expert witness” and related country/region-specific queries.

---

## 2. Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router), TypeScript |
| Styling | Tailwind CSS v4 |
| Hosting model | Static site generation (SSG), no custom backend |
| Forms | Formspree (`NEXT_PUBLIC_FORMSPREE_FORM_ID`) |
| Canonical URL | `https://www.africaexpertwitness.com` |
| Locale | `en-GB` |
| Redirect | Apex → www via `middleware.ts` (301) |

---

## 3. UI & design system

### Brand colours

| Token | Hex | Use |
|-------|-----|-----|
| Primary (forest green) | `#0D3B2E` | Header, heroes, headings |
| Accent (gold) | `#C8922A` | CTAs, highlights |
| Background | `#FFFFFF` | Page background |
| Section alt | `#F7F9F7` | Alternating sections |
| Border | `#D1E3D8` | Cards, inputs |
| Body text | `#374151` | Paragraphs |

### Typography & components

- **Font:** Inter (Google Fonts)  
- **Border radius:** 8px cards, 4px small elements  
- **Card shadow:** `0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)`  
- **Sticky header** with desktop nav + mobile hamburger (grouped menu)  
- **Gold CTA:** “Instruct an Expert” on every page (header + bottom `CTASection`)

### Responsive behaviour

- **Mobile (320–767px):** Single column, hamburger nav, 44px minimum touch targets  
- **Tablet (768–1023px):** Adapted grids (2-column cards)  
- **Desktop (1024px+):** Full horizontal nav, multi-column layouts  
- No horizontal scroll at any breakpoint  

### Shared UI components

| Component | Path | Purpose |
|-----------|------|---------|
| `Header` | `components/layout/Header.tsx` | Sticky nav, mobile menu |
| `Footer` | `components/layout/Footer.tsx` | 4-column links + disclaimer |
| `PageShell` | `components/layout/PageShell.tsx` | Hero + main + CTA wrapper |
| `PageHero` | `components/ui/PageHero.tsx` | Forest green hero, breadcrumbs |
| `Breadcrumbs` | `components/ui/Breadcrumbs.tsx` | White/opacity trail on hero |
| `CTASection` | `components/ui/CTASection.tsx` | Gold bottom CTA block |
| `CardGrid` | `components/ui/CardGrid.tsx` | Hub page card grids |
| `FAQSection` | `components/ui/FAQSection.tsx` | Q&A cards |
| `RelatedLinks` | `components/ui/RelatedLinks.tsx` | Internal linking block |
| `GeoTable` | `components/ui/GeoTable.tsx` | Accessible SEO/GEO tables |
| `ContactForm` | `components/forms/ContactForm.tsx` | Formspree multi-field form |
| `GlossarySearch` | `components/glossary/GlossarySearch.tsx` | Client-side term filter |

### Navigation (current)

**Desktop:** Home, Services, Regions, Countries, Expertise Areas, Case Types, Guides, How to Instruct, Qualifications, Fees, FAQ + gold **Instruct an Expert** CTA.

**Removed from navbar (per request):** Experts (page remains at `/experts`, linked from footer).

**Mobile groups:** Find an Expert, Case Types, Resources, About, Process, Contact.

---

## 4. Pages built (62 routes)

### Core & utility (14)

| Route | Purpose |
|-------|---------|
| `/` | Homepage — markets, services, regions, top 6 countries, all 8 expertise areas |
| `/services` | 8 services with methodology tables + Service schema |
| `/what-is-an-africa-expert-witness` | Pillar definition page |
| `/qualifications` | Expert credentials, CPR Part 35, Legal Aid |
| `/how-to-instruct` | 7-step process + red flags |
| `/fees` | Report and hourly rate bands |
| `/faq` | 12 solicitor Q&As |
| `/experts` | 3 expert profiles (not in navbar) |
| `/glossary` | 34 searchable terms with anchor IDs |
| `/contact` | Full instruction form + trust sidebar |
| `/thank-you` | Post-submit confirmation (noindex, nofollow) |
| `/privacy` | Privacy policy (noindex, follow) |
| `/terms` | Terms of use (noindex, follow) |
| `not-found` | Custom 404 with quick links |

### Hubs (4)

`/regions`, `/countries`, `/expertise-areas`, `/case-types`, `/guides`

### Dynamic content (39 SSG pages)

| Pattern | Count | Data source |
|---------|-------|-------------|
| `/regions/[slug]` | 5 | `data/regions.ts` |
| `/countries/[slug]` | 12 | `data/countries.ts` |
| `/expertise-areas/[slug]` | 8 | `data/expertise-areas.ts` |
| `/case-types/[slug]` | 8 | `data/case-types.ts` |
| `/guides/[slug]` | 6 | `data/guides.ts` |

**12 country pages:** Nigeria, Somalia, Eritrea, Ethiopia, Sudan, Zimbabwe, DRC, Ghana, Kenya, Uganda, Guinea, Libya.

---

## 5. SEO implementation (per SEO-ARCHITECTURE.md)

### 5.1 Keyword strategy

- **Tier 1 transactional** mapped to `/`, `/countries/*`, `/regions/*`, `/expertise-areas/*`  
- **Tier 2 informational** mapped to `/guides/*`, `/faq`  
- **Tier 3 long-tail** covered on country, expertise, and case-type pages  
- Each entity has dedicated `metaTitle`, `metaDescription`, and `h1` in data files  

### 5.2 Content clusters (8 hubs)

Internal linking implemented via `data/related-links.ts` + `RelatedLinks` component:

1. Somalia & Horn of Africa  
2. LGBTQI+ Asylum Africa  
3. FGM & Gender-Based Violence  
4. West Africa Mining Arbitration  
5. Home Office CPIN Challenges  
6. Legal Aid Instruction  
7. Southern Africa  
8. North Africa & Investment  

**Rule enforcement:**

- Every **country page** links to region, ≥2 expertise areas, ≥1 guide, case types, contact  
- Every **region page** links to countries in region, guides, expertise, contact  
- **Expertise** and **guide** pages have cluster-specific related link sets  
- **Homepage** links to all 5 regions, top 6 countries (NG, SO, ER, UG, ZW, DRC), all 8 expertise areas, guides, FAQ, what-is, contact  

### 5.3 Structured data (JSON-LD)

| Schema | Where |
|--------|-------|
| `Organization` | All pages via `PageJsonLd` / `homepageGraph` |
| `ProfessionalService` | Homepage |
| `Service` ×8 | `/services` with fragment IDs |
| `Article` | Each `/guides/[slug]` with `aboutServiceId` where applicable |
| `Person` ×3 | `/experts` |
| `FAQPage` | FAQ, glossary, regions, countries, expertise, case-types |
| `BreadcrumbList` | All non-home pages |
| `WebSite` + `SearchAction` | Homepage |

**Helpers:** `lib/schema.ts`, `components/seo/PageJsonLd.tsx`, `components/ui/JsonLd.tsx`

### 5.4 GEO (Generative Engine Optimization)

Extractable tables and definition-first content:

| Page | Artifact |
|------|----------|
| `/` | African asylum statistics table |
| `/expertise-areas/lgbtqi-asylum-africa` | Criminalisation by-country table |
| `/expertise-areas/fgm-gender-based-violence` | FGM prevalence table |
| `/guides/somalia-country-guidance-moj` | MOJ framework table |
| `/guides/west-africa-mining-arbitration` | West Africa ICSID claims table |
| `/guides/home-office-cpin-africa-rebuttal` | Numbered rebuttal methodology |
| `/glossary` | 34 definition-first terms |

**Data:** `data/geo-tables.ts` · **Component:** `components/ui/GeoTable.tsx`

### 5.5 Glossary SEO

- **34 terms** with canonical anchor IDs (`lib/glossary.ts` → `glossaryAnchorId()`)  
- **All 34 terms** now have internal `link` to relevant country, guide, or expertise page  
- Glossary page emits **FAQPage** schema from term definitions  

### 5.6 Technical SEO

| Item | Status |
|------|--------|
| `createMetadata()` canonical URLs | Done — `lib/metadata.ts` |
| `app/sitemap.ts` | Done — priorities per architecture |
| `app/robots.ts` | Done — disallows `/thank-you`, sitemap URL |
| Apex → www 301 | Done — `middleware.ts` |
| Google/Bing verification | Ready — env vars in `app/layout.tsx` |
| GA4 | Ready — `components/seo/GoogleAnalytics.tsx` (needs `NEXT_PUBLIC_GA_MEASUREMENT_ID`) |
| Thank-you / privacy / terms robots | noindex configured where specified |

### 5.7 Not yet automated (manual / post-launch)

Per SEO-ARCHITECTURE.md Sections 6–8:

- Directory submissions (jspubs, EIN, EWI, ARC)  
- Publication outreach / digital PR  
- Monthly competitor monitoring log  
- **Future:** 18+ additional country pages (Cameroon, Mali, Sierra Leone, etc.) for 30+ country moat  

---

## 6. Content & data layer

All production copy lives in typed data files (no placeholders):

| File | Contents |
|------|----------|
| `data/countries.ts` | 12 countries — overview, key issues, FAQs, guidance |
| `data/regions.ts` | 5 regions — issues, FAQs, overviews |
| `data/expertise-areas.ts` | 8 expertise areas — content, FAQs |
| `data/case-types.ts` | 8 case types — content, FAQs, related expertise |
| `data/guides.ts` | 6 long-form guides (800–1200 word sections) |
| `data/services.ts` | 8 services + methodology tables |
| `data/faq.ts` | 12 site-wide FAQs |
| `data/glossary.ts` | 34 terms + links |
| `data/experts.ts` | 3 expert profiles |
| `data/related-links.ts` | Appendix D internal link matrix |
| `data/geo-tables.ts` | GEO tables for homepage and key pages |
| `data/navigation.ts` | Main + mobile nav |
| `data/african-countries.ts` | 54 countries for contact dropdown |

---

## 7. Forms & conversion

**Contact form** (`/contact`):

- Full name, firm, email, phone  
- Country dropdown (54 + “Multiple countries”)  
- Case type, key issues (multi-select), deadline, funding, urgency  
- Brief case summary  
- Submits to Formspree → redirects to `/thank-you`  

**Trust signals on contact page:**

- 54 African countries covered  
- Legal Aid rates available  
- Reports accepted by UK tribunals  
- Response within 1 business day  

---

## 8. Environment variables

Copy `.env.example` to `.env.local`:

```env
NEXT_PUBLIC_FORMSPREE_FORM_ID=
NEXT_PUBLIC_SITE_URL=https://www.africaexpertwitness.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=
GOOGLE_SITE_VERIFICATION=
BING_SITE_VERIFICATION=
```

---

## 9. Deployment checklist

| Task | Status |
|------|--------|
| `npm run build` passes (62 pages) | Done |
| Connect Vercel / hosting | Pending |
| DNS apex → www | Middleware ready |
| Set production env vars | Pending |
| Submit sitemap to GSC + Bing | Pending post-deploy |
| LinkedIn `sameAs` in schema | URL in `lib/constants.ts` |
| Directory submissions | Manual |

---

## 10. File structure (key paths)

```
app/                    # All routes (page.tsx per route)
components/
  layout/               # Header, Footer, PageShell
  ui/                   # Hero, CTA, FAQ, RelatedLinks, GeoTable
  forms/                # ContactForm
  glossary/             # GlossarySearch
  seo/                  # PageJsonLd, GoogleAnalytics
data/                   # All content (countries, regions, etc.)
lib/
  constants.ts          # SITE_URL, colours, LinkedIn
  metadata.ts           # createMetadata()
  schema.ts             # JSON-LD helpers
  glossary.ts           # Anchor ID generator
docs/
  SEO-ARCHITECTURE.md   # SEO source of truth
  PROJECT-SUMMARY.md  # This document
middleware.ts           # Apex → www redirect
```

---

## 11. Recent changes (this session)

1. **Removed “Experts” from navbar** (desktop + mobile About group); `/experts` remains accessible.  
2. **Enhanced `/thank-you`** — confirmation UI, next steps, noindex/nofollow, shared header/footer.  
3. **Enhanced 404** — gold 404, dual CTAs, quick links (Regions, Countries, Expertise, Contact).  
4. **Full SEO architecture execution:**
   - `RelatedLinks` on all country, region, expertise, guide, and case-type pages  
   - GEO tables on homepage and key expertise/guide pages  
   - Glossary: all 34 terms linked + canonical anchor IDs  
   - `PageJsonLd` with Organization on all major routes  
   - `WebSite` + `SearchAction` on homepage  
   - Homepage hub links per Section 3 Rule 6  
   - Google Analytics component wired in layout  

---

## 12. How to run locally

```bash
npm install
cp .env.example .env.local
# Add Formspree form ID
npm run dev
```

Open http://localhost:3000

---

## 13. Related documentation

- **[SEO-ARCHITECTURE.md](./SEO-ARCHITECTURE.md)** — Keyword tiers, cluster map, internal linking rules, schema matrix, GEO targets, off-page plan, expansion roadmap  
- **[README.md](../README.md)** — Quick setup and build commands  

For questions about SEO implementation status, see **Appendix F** in SEO-ARCHITECTURE.md (updated to reflect current build).
