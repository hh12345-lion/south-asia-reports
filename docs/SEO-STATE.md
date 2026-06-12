# AfricaExpertWitness — SEO State Document

Generated: 15 May 2026

---

## 1. SITE OVERVIEW

| Field | Value |
|-------|--------|
| **Domain (canonical)** | `https://www.africaexpertwitness.com` |
| **Apex redirect** | `africaexpertwitness.com` → `www` (301 via `middleware.ts`) |
| **Framework** | Next.js 16.2.6 (App Router), React 19, TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Rendering** | Static Site Generation (SSG); `generateStaticParams` on all `[slug]` routes |
| **Locale** | `en-GB` (`<html lang="en-GB">`) |
| **Target markets** | UK immigration & asylum tribunals (primary volume); international investment treaty arbitration (ICSID/UNCITRAL); LGBTQI+ asylum niche |
| **Deployment status** | Production-ready build (`npm run build` succeeds). Prebuild runs `npm run seo:generate` → `public/sitemap.xml` + `public/robots.txt`. Also serves dynamic `app/sitemap.ts`. Not yet deployed to production hosting in this repo snapshot — configure DNS, env vars, and analytics before go-live. |
| **Lead capture** | Formspree (`/contact` → `/thank-you`) |
| **Cookie compliance** | GDPR/ePrivacy banner + `/cookie-policy`; Consent Mode v2 defaults |

---

## 2. ALL ROUTES

**Route count:** 58 user-facing content routes (54 indexable in XML sitemap + 4 `noindex` utility pages). The original project brief cited 62 pages; the current build also emits `/opengraph-image`, `/sitemap.xml`, and `/_not-found` as additional app outputs (61 static routes in last build).

**Canonical base:** `https://www.africaexpertwitness.com`  
**Metadata source:** `lib/metadata.ts` → `createMetadata()` (except homepage, which uses `app/layout.tsx` defaults).

| URL path | Page title (exact) | Meta description (exact) | Canonical URL | Robots | Sitemap priority |
|----------|-------------------|--------------------------|-----------------|--------|------------------|
| `/` | Africa Expert Witness UK \| Country Reports, Asylum & Investment Arbitration | Find a qualified Africa expert witness in the UK. Country condition reports for asylum, LGBTQI+ cases, investment arbitration, and commercial disputes across 54 African nations. | https://www.africaexpertwitness.com/ | index, follow | 1.0 |
| `/services` | Africa Expert Witness Services UK \| Asylum, Arbitration & Country Reports | Africa expert witness services: country condition reports, LGBTQI+ asylum, investment treaty arbitration, African law, trafficking, and political persecution. | https://www.africaexpertwitness.com/services | index, follow | 0.95 |
| `/regions` | Africa Expert Witnesses by Region \| East, West, Southern, North & Horn of Africa | Find Africa expert witnesses by region: East Africa, West Africa, Southern Africa, North Africa, and Horn of Africa country condition specialists. | https://www.africaexpertwitness.com/regions | index, follow | 0.93 |
| `/countries` | Africa Expert Witnesses by Country \| Nigeria, Somalia, Eritrea & More | Country-specific Africa expert witnesses for UK immigration tribunals and arbitration: Nigeria, Somalia, Eritrea, Ethiopia, Sudan, Zimbabwe, DRC, Ghana, Kenya, Uganda and more. | https://www.africaexpertwitness.com/countries | index, follow | 0.93 |
| `/expertise-areas` | Africa Expert Witness Expertise Areas \| Asylum, LGBTQI+, Mining & More | Africa expert witness expertise: political persecution, LGBTQI+ asylum, trafficking, mining arbitration, African law, FGM, nationality disputes, and country conditions. | https://www.africaexpertwitness.com/expertise-areas | index, follow | 0.92 |
| `/case-types` | Case Types Requiring an Africa Expert Witness \| UK Immigration & Arbitration Guide | Which legal cases need an Africa expert witness? Asylum appeals, LGBTQI+ claims, trafficking, ICSID arbitration, and commercial disputes explained. | https://www.africaexpertwitness.com/case-types | index, follow | 0.90 |
| `/what-is-an-africa-expert-witness` | What Is an Africa Expert Witness? \| Role, Reports & UK Tribunal Standards | An Africa expert witness provides country condition reports and testimony for UK immigration tribunals, asylum appeals, and international investment arbitration. Learn their role. | https://www.africaexpertwitness.com/what-is-an-africa-expert-witness | index, follow | 0.88 |
| `/qualifications` | Africa Expert Witness Qualifications UK \| Credentials & Vetting Standards | What qualifications should an Africa expert witness hold? Academic credentials, field research, language skills, CPR Part 35, and Legal Aid compliance explained. | https://www.africaexpertwitness.com/qualifications | index, follow | 0.88 |
| `/how-to-instruct` | How to Instruct an Africa Expert Witness UK \| Step-by-Step Solicitor Guide | Step-by-step guide for UK solicitors on finding, vetting, and instructing the right Africa expert witness for asylum, immigration, or arbitration cases. | https://www.africaexpertwitness.com/how-to-instruct | index, follow | 0.88 |
| `/fees` | Africa Expert Witness Fees UK \| Country Report Costs & Hourly Rates | Africa expert witness fees: country report costs from £800–£2,500, Legal Aid rates, arbitration hourly rates, and what affects total engagement costs. | https://www.africaexpertwitness.com/fees | index, follow | 0.87 |
| `/faq` | Africa Expert Witness FAQ UK \| Common Questions Answered | Answers to common questions about Africa expert witnesses — turnaround times, Legal Aid, LGBTQI+ asylum, country guidance, arbitration, and CPR Part 35. | https://www.africaexpertwitness.com/faq | index, follow | 0.87 |
| `/guides` | Solicitor Guides: Africa Expert Witnesses \| Asylum, Arbitration & Country Reports | In-depth guides for UK solicitors on Africa expert witnesses — country guidance cases, LGBTQI+ asylum, ICSID arbitration, and Legal Aid instruction. | https://www.africaexpertwitness.com/guides | index, follow | 0.87 |
| `/experts` | Our Africa Expert Witnesses \| Country Specialists UK | AfricaExpertWitness.com connects UK solicitors with qualified Africa country experts across all 54 nations — asylum, immigration, and international arbitration. | https://www.africaexpertwitness.com/experts | index, follow | 0.80 |
| `/glossary` | Africa Expert Witness Glossary \| Key Terms for UK Legal Proceedings | Definitions of key Africa expert witness and asylum law terms — from country guidance to FGM, LGBTQI+ persecution, ICSID, and CPR Part 35. | https://www.africaexpertwitness.com/glossary | index, follow | 0.75 |
| `/cookie-policy` | Cookie Policy \| AfricaExpertWitness | How AfricaExpertWitness.com uses cookies and similar technologies, your choices under UK GDPR and ePrivacy, and how to manage preferences. | https://www.africaexpertwitness.com/cookie-policy | index, follow | 0.50 |
| `/contact` | Instruct an Africa Expert Witness \| AfricaExpertWitness UK | Submit your case details to be matched with the right Africa expert witness for your country and case type. Confidential, Legal Aid compatible. Response within 1 business day. | https://www.africaexpertwitness.com/contact | noindex, follow | — (excluded) |
| `/thank-you` | Thank You \| AfricaExpertWitness | Your instruction request has been received. | https://www.africaexpertwitness.com/thank-you | noindex, follow | — (excluded) |
| `/privacy` | Privacy Policy \| AfricaExpertWitness | Privacy policy for AfricaExpertWitness.com | https://www.africaexpertwitness.com/privacy | noindex, follow | — (excluded) |
| `/terms` | Terms of Use \| AfricaExpertWitness | Terms of use for AfricaExpertWitness.com | https://www.africaexpertwitness.com/terms | noindex, follow | — (excluded) |
| `/regions/east-africa` | East Africa Expert Witness UK \| Kenya, Tanzania, Uganda & Rwanda | East Africa expert witnesses for UK immigration tribunals and investment arbitration. Kenya, Tanzania, Uganda, Rwanda, Burundi, Malawi, Zambia, Zimbabwe specialists. | https://www.africaexpertwitness.com/regions/east-africa | index, follow | 0.88 |
| `/regions/west-africa` | West Africa Expert Witness UK \| Nigeria, Ghana, Guinea & Sahel | West Africa expert witnesses for UK solicitors. Nigeria, Ghana, Guinea, Mali, Senegal, Sierra Leone, Gambia, Burkina Faso, Niger, and Côte d'Ivoire country specialists. | https://www.africaexpertwitness.com/regions/west-africa | index, follow | 0.88 |
| `/regions/horn-of-africa` | Horn of Africa Expert Witness UK \| Somalia, Eritrea, Ethiopia & Sudan | Horn of Africa expert witnesses for UK immigration and arbitration. Somalia, Eritrea, Ethiopia, Sudan, South Sudan, and Djibouti country condition specialists. | https://www.africaexpertwitness.com/regions/horn-of-africa | index, follow | 0.88 |
| `/regions/southern-africa` | Southern Africa Expert Witness UK \| Zimbabwe, South Africa & DRC | Southern Africa expert witnesses for UK tribunals and arbitration. Zimbabwe, South Africa, DRC, Mozambique, Angola, Namibia, and Botswana specialists. | https://www.africaexpertwitness.com/regions/southern-africa | index, follow | 0.88 |
| `/regions/north-africa` | North Africa Expert Witness UK \| Egypt, Libya, Morocco & Algeria | North Africa expert witnesses for UK immigration and ICSID arbitration. Egypt, Libya, Morocco, Algeria, Tunisia, and Mauritania specialists. | https://www.africaexpertwitness.com/regions/north-africa | index, follow | 0.88 |
| `/countries/nigeria` | Nigeria Expert Witness UK \| Asylum, LGBTQI+ & Boko Haram Evidence | Nigeria expert witness for UK immigration tribunals. Boko Haram, LGBTQI+ SSMPA, FGM, Biafra/IPOB, and state-specific country condition reports. | https://www.africaexpertwitness.com/countries/nigeria | index, follow | 0.88 |
| `/countries/somalia` | Somalia Expert Witness UK \| MOJ Country Guidance & Clan Evidence | Somalia expert witness for UK tribunals. MOJ country guidance, clan structure, Al-Shabaab, Mogadishu conditions, and Somaliland/Puntland analysis. | https://www.africaexpertwitness.com/countries/somalia | index, follow | 0.88 |
| `/countries/eritrea` | Eritrea Expert Witness UK \| National Service & MA Country Guidance | Eritrea expert witness for UK asylum appeals. Indefinite military conscription, MA country guidance, religious persecution, and treatment of returnees. | https://www.africaexpertwitness.com/countries/eritrea | index, follow | 0.88 |
| `/countries/ethiopia` | Ethiopia Expert Witness UK \| Tigray, Oromo & Ethnic Conflict Evidence | Ethiopia expert witness for UK immigration tribunals. Tigray conflict, Oromo persecution, ethnic federalism, and political opposition cases. | https://www.africaexpertwitness.com/countries/ethiopia | index, follow | 0.88 |
| `/countries/sudan` | Sudan Expert Witness UK \| Civil War, Darfur & RSF Atrocities | Sudan expert witness for UK asylum cases. April 2023 civil war, Darfur genocide, RSF atrocities, and state-specific country condition reports. | https://www.africaexpertwitness.com/countries/sudan | index, follow | 0.88 |
| `/countries/zimbabwe` | Zimbabwe Expert Witness UK \| RN Country Guidance & Political Persecution | Zimbabwe expert witness for UK tribunals. RN country guidance, ZANU-PF persecution, MDC/CCC supporters, LGBTQI+, and post-Mugabe conditions. | https://www.africaexpertwitness.com/countries/zimbabwe | index, follow | 0.88 |
| `/countries/democratic-republic-of-congo` | DRC Expert Witness UK \| Eastern Conflict & Mining Arbitration | DRC expert witness for UK asylum and ICSID arbitration. M23 conflict, Kasai violence, ethnic persecution, and mining sector disputes. | https://www.africaexpertwitness.com/countries/democratic-republic-of-congo | index, follow | 0.88 |
| `/countries/ghana` | Ghana Expert Witness UK \| LGBTQI+ Legislation & Asylum Evidence | Ghana expert witness for UK immigration tribunals. LGBTQI+ Human Sexual Rights Bill, political disputes, and energy arbitration. | https://www.africaexpertwitness.com/countries/ghana | index, follow | 0.88 |
| `/countries/kenya` | Kenya Expert Witness UK \| Political Persecution & LGBTQI+ Asylum | Kenya expert witness for UK tribunals. Election violence, LGBTQI+ criminalisation, Al-Shabaab, and Somali-Kenyan refugee issues. | https://www.africaexpertwitness.com/countries/kenya | index, follow | 0.88 |
| `/countries/uganda` | Uganda Expert Witness UK \| Anti-Homosexuality Act 2023 Evidence | Uganda expert witness for UK tribunals. Anti-Homosexuality Act 2023, Bobi Wine/NUP persecution, and Museveni government country reports. | https://www.africaexpertwitness.com/countries/uganda | index, follow | 0.88 |
| `/countries/guinea` | Guinea Expert Witness UK \| Mining Arbitration & FGM Evidence | Guinea expert witness for UK asylum and ICSID arbitration. Bauxite mining disputes, FGM prevalence, post-2021 coup, and LGBTQI+ persecution. | https://www.africaexpertwitness.com/countries/guinea | index, follow | 0.88 |
| `/countries/libya` | Libya Expert Witness UK \| Civil War, Militias & Oil Arbitration | Libya expert witness for UK asylum and ICSID arbitration. Civil war, militia violence, migrant detention, and oil sector investment disputes. | https://www.africaexpertwitness.com/countries/libya | index, follow | 0.88 |
| `/expertise-areas/political-persecution-state-protection` | Political Persecution Africa Expert Witness UK \| State Protection Analysis | Africa expert witness evidence on political persecution and state protection failures for UK asylum tribunals across 54 African nations. | https://www.africaexpertwitness.com/expertise-areas/political-persecution-state-protection | index, follow | 0.86 |
| `/expertise-areas/lgbtqi-asylum-africa` | LGBTQI+ Asylum Africa Expert Witness UK \| Uganda, Nigeria & Ghana | LGBTQI+ Africa expert witness for UK asylum tribunals. Uganda Anti-Homosexuality Act, Nigerian SSMPA, Ghana legislation, and country conditions reports. | https://www.africaexpertwitness.com/expertise-areas/lgbtqi-asylum-africa | index, follow | 0.86 |
| `/expertise-areas/fgm-gender-based-violence` | FGM Africa Expert Witness UK \| Gender-Based Violence Reports | FGM and gender-based violence Africa expert witness for UK asylum tribunals. Guinea, Somalia, Mali, Nigeria, and prevalence analysis. | https://www.africaexpertwitness.com/expertise-areas/fgm-gender-based-violence | index, follow | 0.86 |
| `/expertise-areas/trafficking-modern-slavery-africa` | Trafficking Africa Expert Witness UK \| Modern Slavery Evidence | Trafficking and modern slavery Africa expert witness for UK asylum and NRM cases. Route analysis, juju rituals, and country conditions. | https://www.africaexpertwitness.com/expertise-areas/trafficking-modern-slavery-africa | index, follow | 0.86 |
| `/expertise-areas/investment-treaty-arbitration-africa` | Africa Investment Treaty Arbitration Expert Witness UK \| ICSID | Africa investment treaty arbitration expert witness. ICSID, Guinea mining, West Africa licence revocations, and country conditions evidence. | https://www.africaexpertwitness.com/expertise-areas/investment-treaty-arbitration-africa | index, follow | 0.86 |
| `/expertise-areas/african-law-legal-systems` | African Law Expert Witness UK \| OHADA, ECOWAS & Legal Systems | African law expert witness for UK commercial litigation and arbitration. Domestic law, OHADA, ECOWAS, SADC, and BIT obligations. | https://www.africaexpertwitness.com/expertise-areas/african-law-legal-systems | index, follow | 0.86 |
| `/expertise-areas/nationality-statelessness` | Nationality & Statelessness Africa Expert Witness UK | Nationality and statelessness Africa expert witness for UK immigration tribunals. Citizenship law, documentation, and statelessness across Africa. | https://www.africaexpertwitness.com/expertise-areas/nationality-statelessness | index, follow | 0.86 |
| `/expertise-areas/country-conditions-human-rights` | Country Conditions Africa Expert Witness UK \| Human Rights Reports | Country conditions and human rights Africa expert witness for UK tribunals. Authoritative reports citing Home Office COI, UN, and field research. | https://www.africaexpertwitness.com/expertise-areas/country-conditions-human-rights | index, follow | 0.86 |
| `/case-types/asylum-appeal-first-tier-tribunal` | Africa Expert Witness for Asylum Appeals \| First-tier Tribunal UK | Africa expert witness for First-tier Tribunal asylum appeals. Country condition reports for UK immigration cases across 54 African nations. | https://www.africaexpertwitness.com/case-types/asylum-appeal-first-tier-tribunal | index, follow | 0.86 |
| `/case-types/upper-tribunal-country-guidance` | Africa Expert Witness Upper Tribunal \| Country Guidance Cases UK | Africa expert witness for Upper Tribunal country guidance cases. MOJ Somalia, MA Eritrea, RN Zimbabwe, and departure applications. | https://www.africaexpertwitness.com/case-types/upper-tribunal-country-guidance | index, follow | 0.86 |
| `/case-types/lgbtqi-asylum-africa-cases` | LGBTQI+ Africa Asylum Expert Witness UK \| Uganda, Nigeria & Ghana | LGBTQI+ Africa asylum expert witness for UK tribunals. Uganda Anti-Homosexuality Act, Nigerian SSMPA, and sexuality evidence standards. | https://www.africaexpertwitness.com/case-types/lgbtqi-asylum-africa-cases | index, follow | 0.86 |
| `/case-types/fgm-asylum-cases` | FGM Africa Asylum Expert Witness UK \| Expert Evidence Guide | FGM Africa asylum expert witness for UK tribunals. Prevalence analysis, daughters at risk, and state protection in Guinea, Somalia, Mali, and Nigeria. | https://www.africaexpertwitness.com/case-types/fgm-asylum-cases | index, follow | 0.86 |
| `/case-types/trafficking-modern-slavery-cases` | Trafficking Africa Expert Witness UK \| NRM & Asylum Evidence | Trafficking and modern slavery Africa expert witness for UK NRM and asylum cases. Nigeria, Ghana, and West African route analysis. | https://www.africaexpertwitness.com/case-types/trafficking-modern-slavery-cases | index, follow | 0.86 |
| `/case-types/investment-treaty-icsid-arbitration` | ICSID Africa Expert Witness UK \| Investment Treaty Arbitration | ICSID and investment treaty arbitration Africa expert witness. Guinea mining, West Africa licence revocations, and country conditions evidence. | https://www.africaexpertwitness.com/case-types/investment-treaty-icsid-arbitration | index, follow | 0.86 |
| `/case-types/commercial-litigation-african-law` | African Law Expert Witness UK \| Commercial Litigation | African law expert witness for UK commercial litigation. Domestic law, OHADA, court procedures, and governing law analysis. | https://www.africaexpertwitness.com/case-types/commercial-litigation-african-law | index, follow | 0.86 |
| `/case-types/extradition-africa` | Africa Extradition Expert Witness UK \| Country Conditions Evidence | Africa extradition expert witness for UK courts. Country conditions, torture risk, fair trial, and prison conditions evidence. | https://www.africaexpertwitness.com/case-types/extradition-africa | index, follow | 0.86 |
| `/guides/somalia-country-guidance-moj` | Somalia Country Guidance MOJ [2014] \| Solicitor Guide UK | Guide to MOJ & Ors Somalia country guidance for UK solicitors. Clan analysis, Mogadishu return, Al-Shabaab, and expert witness role. | https://www.africaexpertwitness.com/guides/somalia-country-guidance-moj | index, follow | 0.80 |
| `/guides/lgbtqi-africa-asylum-evidence` | LGBTQI+ Asylum from Africa \| Expert Evidence Guide UK | LGBTQI+ asylum from Africa expert evidence guide. Uganda AHA 2023, Nigerian SSMPA, criminalisation, and HJ (Iran) standard. | https://www.africaexpertwitness.com/guides/lgbtqi-africa-asylum-evidence | index, follow | 0.80 |
| `/guides/fgm-expert-evidence-africa` | FGM Expert Evidence in African Asylum Cases \| Solicitor Guide | FGM expert evidence guide for African asylum cases. Prevalence, daughters at risk, state protection, and report structure. | https://www.africaexpertwitness.com/guides/fgm-expert-evidence-africa | index, follow | 0.80 |
| `/guides/west-africa-mining-arbitration` | West Africa Mining Arbitration Expert Witness Guide 2025 | West Africa mining arbitration guide. Guinea, Mali, Burkina Faso, Niger ICSID claims, licence revocations, and expert evidence. | https://www.africaexpertwitness.com/guides/west-africa-mining-arbitration | index, follow | 0.80 |
| `/guides/home-office-cpin-africa-rebuttal` | Challenging Home Office CPINs on Africa \| Expert Evidence Guide | Guide to challenging Home Office CPINs on African countries. Common weaknesses, rebuttal methodology, and expert instruction. | https://www.africaexpertwitness.com/guides/home-office-cpin-africa-rebuttal | index, follow | 0.80 |
| `/guides/instructing-africa-experts-legal-aid` | Instructing Africa Expert Witnesses Under Legal Aid \| Guide | Legal Aid guide for instructing Africa expert witnesses. LAA prior authority, rates, urgent cases, and multi-country reports. | https://www.africaexpertwitness.com/guides/instructing-africa-experts-legal-aid | index, follow | 0.80 |

**Additional app outputs (not in content route table above):**

| Path | Purpose |
|------|---------|
| `/opengraph-image` | Default OG image (1200×630) |
| `/sitemap.xml` | Generated from `app/sitemap.ts` + `public/sitemap.xml` |
| `/_not-found` | Custom 404 (noindex via Next.js default for errors) |

**OpenGraph / Twitter:** All routes using `createMetadata()` receive full OpenGraph (title, description, url, siteName, locale `en_GB`, type `website`, image) and Twitter `summary_large_image`. Homepage inherits `metadataBase` and layout defaults; OG image URL is set site-wide via `OPEN_GRAPH_IMAGE` in `lib/metadata.ts`.

---

## 3. SCHEMA MARKUP INVENTORY

**Implementation files:** `lib/schema.ts`, `components/seo/PageJsonLd.tsx`, `components/ui/JsonLd.tsx`

| Page path | Schema @type(s) | Key fields | @id references |
|-----------|-----------------|------------|----------------|
| `/` | `@graph`: Organization, ProfessionalService; separate WebSite | Org: name, email, areaServed (UK, US, EU), sameAs LinkedIn; ProfService: serviceType, hasOfferCatalog; WebSite: SearchAction → `/glossary?q=` | `#organization`, `#professional-service`, `#website` |
| `/services` | `@graph`: Organization + 8× Service | Each Service: name, description, provider, areaServed UK | `#organization`; services at `#country-condition-reports`, `#lgbtqi-asylum`, `#fgm-gbv`, `#trafficking`, `#investment-arbitration`, `#african-law`, `#nationality-statelessness`, `#rebuttal-sje` |
| `/faq` | Organization, BreadcrumbList, FAQPage | 12 Q&A pairs from `data/faq.ts` | `#organization` |
| `/glossary` | Organization, BreadcrumbList, FAQPage | 34 terms as Question/Answer (definition-first) | `#organization` |
| `/experts` | Organization, BreadcrumbList, 3× Person | Dr Amara Okafor, Dr Hassan Abdi, Advocate Thandiwe Mthembu | `#organization` (worksFor) |
| `/cookie-policy` | Organization, BreadcrumbList | — | `#organization` |
| `/how-to-instruct` | Organization, BreadcrumbList | — | `#organization` |
| `/regions/[slug]` (×5) | Organization, BreadcrumbList, FAQPage | Region-specific FAQs (2 per region) | `#organization` |
| `/countries/[slug]` (×12) | Organization, BreadcrumbList, FAQPage | Country-specific FAQs (2 per country) | `#organization` |
| `/expertise-areas/[slug]` (×8) | Organization, BreadcrumbList, FAQPage | Area FAQs where defined | `#organization` |
| `/case-types/[slug]` (×8) | Organization, BreadcrumbList, FAQPage | 2 FAQs per case type | `#organization` |
| `/guides/[slug]` (×6) | Organization, BreadcrumbList, Article | headline, description, url; optional `about` → Service | `#organization`; Article `about` → Service `@id` when set (see §6) |
| Hub pages (`/regions`, `/countries`, `/expertise-areas`, `/case-types`, `/guides`) | — (none) | Visual breadcrumbs only in UI | — |
| `/services`, `/what-is`, `/qualifications`, `/fees`, `/contact`, legal pages | — (none) or partial | `/services` has Service graph only (no BreadcrumbList) | — |

**Note:** `PageJsonLd` always includes `organizationSchema()` on pages that use it. Homepage uses raw `JsonLd` with `homepageGraph()` + `websiteSchema()` (not `PageJsonLd`).

---

## 4. INTERNAL LINKING MAP

### Country pages (`data/related-links.ts` → `getCountryRelatedLinks`)

| Source | Destination | Anchor text |
|--------|-------------|-------------|
| `/countries/nigeria` | `/regions/west-africa` | West Africa region |
| `/countries/nigeria` | `/expertise-areas/lgbtqi-asylum-africa` | LGBTQI+ asylum expertise |
| `/countries/nigeria` | `/expertise-areas/fgm-gender-based-violence` | FGM & gender-based violence |
| `/countries/nigeria` | `/expertise-areas/political-persecution-state-protection` | Political persecution |
| `/countries/nigeria` | `/guides/lgbtqi-africa-asylum-evidence` | LGBTQI+ asylum evidence guide |
| `/countries/nigeria` | `/guides/fgm-expert-evidence-africa` | FGM expert evidence guide |
| `/countries/nigeria` | `/case-types/lgbtqi-asylum-africa-cases` | LGBTQI+ asylum cases |
| `/countries/nigeria` | `/case-types/fgm-asylum-cases` | FGM asylum cases |
| `/countries/nigeria` | `/case-types/asylum-appeal-first-tier-tribunal` | Asylum appeal (FTT) |
| `/countries/nigeria` | `/contact` | Instruct an expert |
| *(Similar patterns for all 12 countries — see `countryRelatedLinks` in `data/related-links.ts`)* | | |

**Country link audit (automated):** All 12 country pages link to ✅ region, ✅ ≥1 expertise area, ✅ ≥1 guide, ✅ `/contact`.

### Region pages (`regionRelatedLinks`)

| Source | Destination | Anchor text |
|--------|-------------|-------------|
| `/regions/east-africa` | `/countries/kenya`, `/countries/uganda` | Kenya / Uganda expert witness |
| `/regions/west-africa` | `/countries/nigeria`, `/countries/ghana`, `/countries/guinea` | Country expert witness links |
| `/regions/horn-of-africa` | `/countries/somalia`, `/countries/eritrea`, `/countries/ethiopia`, `/countries/sudan` | Country expert witness links |
| `/regions/southern-africa` | `/countries/zimbabwe`, `/countries/democratic-republic-of-congo` | Country expert witness links |
| `/regions/north-africa` | `/countries/libya` | Libya expert witness |

**Region → countries:** ✅ Every region page links to its dedicated country pages via `RelatedLinks`.

### Guide pages (`guideLinks` in `app/guides/[slug]/page.tsx`)

Each guide has 5–7 contextual links (countries, regions, expertise, case types, glossary anchors, `/guides`, `/how-to-instruct`, `/contact`).

### Expertise pages (`expertiseLinks` in `app/expertise-areas/[slug]/page.tsx`)

Custom link sets for `lgbtqi-asylum-africa`, `fgm-gender-based-violence`, `investment-treaty-arbitration-africa`; others use fallback (countries hub, how-to-instruct, contact).

### Case-type pages

Dynamic links to related expertise slugs + how-to-instruct + contact.

### Footer (`components/layout/Footer.tsx`)

Services column now points to `/services#[fragment]` (country-condition-reports, lgbtqi-asylum, fgm-gbv, trafficking, investment-arbitration, african-law, nationality-statelessness, rebuttal-sje).

### Homepage

Card grids link to regions, countries, services, expertise areas; hub links to guides, FAQ, how-to-instruct, fees, contact.

---

## 5. GLOSSARY

- **Total terms:** 34
- **Pattern:** Definition-first; each term rendered as FAQPage microdata on `/glossary` via `PageJsonLd`
- **Client search:** `GlossarySearch` filters terms on page

| # | Term | Internal link |
|---|------|---------------|
| 1 | Al-Shabaab | `/countries/somalia` |
| 2 | Anti-Homosexuality Act 2023 (Uganda) | `/countries/uganda` |
| 3 | But-For Analysis | `/expertise-areas/political-persecution-state-protection` |
| 4 | Clan Structure (Somalia) | `/guides/somalia-country-guidance-moj` |
| 5 | Complementary Protection | `/case-types/asylum-appeal-first-tier-tribunal` |
| 6 | Country Guidance Case | `/case-types/upper-tribunal-country-guidance` |
| 7 | Country of Origin Information (COI) | `/expertise-areas/country-conditions-human-rights` |
| 8 | Country Policy Information Note (CPIN) | `/guides/home-office-cpin-africa-rebuttal` |
| 9 | CPR Part 35 | `/qualifications` |
| 10 | Diaspora Remittances (MOJ Somalia context) | `/guides/somalia-country-guidance-moj` |
| 11 | FGM (Female Genital Mutilation) | `/expertise-areas/fgm-gender-based-violence` |
| 12 | Forced Military Conscription (Eritrea) | `/countries/eritrea` |
| 13 | HJ (Iran) Standard (LGBTQI+ asylum test) | `/expertise-areas/lgbtqi-asylum-africa` |
| 14 | Home Office Refusal | `/case-types/asylum-appeal-first-tier-tribunal` |
| 15 | ICSID (International Centre for Settlement of Investment Disputes) | `/expertise-areas/investment-treaty-arbitration-africa` |
| 16 | Internal Relocation Alternative | `/expertise-areas/country-conditions-human-rights` |
| 17 | Kanun | `/expertise-areas/african-law-legal-systems` |
| 18 | Legal Aid | `/guides/instructing-africa-experts-legal-aid` |
| 19 | MA (draft evaders) Eritrea CG [2019] | `/countries/eritrea` |
| 20 | MOJ & Ors Somalia CG [2014] | `/guides/somalia-country-guidance-moj` |
| 21 | Modern Slavery | `/expertise-areas/trafficking-modern-slavery-africa` |
| 22 | National Referral Mechanism (NRM) | `/case-types/trafficking-modern-slavery-cases` |
| 23 | Non-State Actor Persecution | `/expertise-areas/political-persecution-state-protection` |
| 24 | OHADA (Organisation for the Harmonisation of Business Law in Africa) | `/expertise-areas/african-law-legal-systems` |
| 25 | OSCOLA Citation Standard | `/qualifications` |
| 26 | Particular Social Group (PSG) | `/case-types/fgm-asylum-cases` |
| 27 | Persecution | `/expertise-areas/country-conditions-human-rights` |
| 28 | Political Opinion (asylum ground) | `/countries/zimbabwe` |
| 29 | Refugee Convention 1951 | `/what-is-an-africa-expert-witness` |
| 30 | RN Zimbabwe CG [2008] | `/countries/zimbabwe` |
| 31 | Single Joint Expert (SJE) | `/services#rebuttal-sje` |
| 32 | State Protection | `/expertise-areas/political-persecution-state-protection` |
| 33 | Upper Tribunal (UKUT) | `/case-types/upper-tribunal-country-guidance` |
| 34 | Well-Founded Fear | `/what-is-an-africa-expert-witness` |

**All 34 terms have internal links.**

---

## 6. GUIDES

| slug | H1 (exact) | Metadata title (exact) | Article JSON-LD | aboutServiceId value |
|------|------------|--------------------------|-----------------|----------------------|
| `somalia-country-guidance-moj` | Somalia Country Guidance: MOJ & Ors [2014] — A Guide for UK Solicitors | Somalia Country Guidance MOJ [2014] \| Solicitor Guide UK | ✅ Yes | *(none — no `about` field)* |
| `lgbtqi-africa-asylum-evidence` | LGBTQI+ Asylum from Africa: Expert Evidence Guide for UK Solicitors | LGBTQI+ Asylum from Africa \| Expert Evidence Guide UK | ✅ Yes | `lgbtqi-asylum` → `https://www.africaexpertwitness.com/services#lgbtqi-asylum` |
| `fgm-expert-evidence-africa` | FGM Expert Evidence in African Asylum Cases: Solicitor Guide | FGM Expert Evidence in African Asylum Cases \| Solicitor Guide | ✅ Yes | `fgm-gbv` → `.../services#fgm-gbv` |
| `west-africa-mining-arbitration` | West Africa Mining Arbitration: Expert Witness Guide 2025 | West Africa Mining Arbitration Expert Witness Guide 2025 | ✅ Yes | `investment-arbitration` → `.../services#investment-arbitration` |
| `home-office-cpin-africa-rebuttal` | Challenging Home Office CPINs on African Countries: Expert Evidence Guide | Challenging Home Office CPINs on Africa \| Expert Evidence Guide | ✅ Yes | `rebuttal-sje` → `.../services#rebuttal-sje` |
| `instructing-africa-experts-legal-aid` | Instructing Africa Expert Witnesses Under Legal Aid | Instructing Africa Expert Witnesses Under Legal Aid \| Guide | ✅ Yes | *(none — no `about` field)* |

---

## 7. COUNTRY PAGES

| slug | H1 | Region linked | Expertise areas linked | Guide linked | FAQPage schema |
|------|-----|---------------|------------------------|--------------|----------------|
| nigeria | Nigeria Expert Witness UK | ✅ `/regions/west-africa` | ✅ Multiple | ✅ LGBTQI+, FGM guides | ✅ |
| somalia | Somalia Expert Witness UK | ✅ horn-of-africa | ✅ | ✅ MOJ guide | ✅ |
| eritrea | Eritrea Expert Witness UK | ✅ horn-of-africa | ✅ | ✅ (MOJ context guide) | ✅ |
| ethiopia | Ethiopia Expert Witness UK | ✅ horn-of-africa | ✅ | ✅ | ✅ |
| sudan | Sudan Expert Witness UK | ✅ horn-of-africa | ✅ | ✅ CPIN rebuttal | ✅ |
| zimbabwe | Zimbabwe Expert Witness UK | ✅ southern-africa | ✅ | ✅ CPIN rebuttal | ✅ |
| democratic-republic-of-congo | DRC Expert Witness UK | ✅ southern-africa | ✅ | ✅ mining guide | ✅ |
| ghana | Ghana Expert Witness UK | ✅ west-africa | ✅ | ✅ LGBTQI+ guide | ✅ |
| kenya | Kenya Expert Witness UK | ✅ east-africa | ✅ | ✅ LGBTQI+ guide | ✅ |
| uganda | Uganda Expert Witness UK | ✅ east-africa | ✅ | ✅ LGBTQI+ guide | ✅ |
| guinea | Guinea Expert Witness UK | ✅ west-africa | ✅ | ✅ FGM + mining guides | ✅ |
| libya | Libya Expert Witness UK | ✅ north-africa | ✅ | ✅ mining guide | ✅ |

---

## 8. REGION PAGES

| slug | H1 | Countries linked | Guides linked | FAQPage schema |
|------|-----|------------------|---------------|----------------|
| east-africa | East Africa Expert Witness Services for UK Solicitors | ✅ Kenya, Uganda | ✅ LGBTQI+ asylum evidence | ✅ |
| west-africa | West Africa Expert Witness Services for UK Solicitors | ✅ Nigeria, Ghana, Guinea | ✅ Mining + FGM guides | ✅ |
| horn-of-africa | Horn of Africa Expert Witness Services for UK Solicitors | ✅ Somalia, Eritrea, Ethiopia, Sudan | ✅ Somalia MOJ guide | ✅ |
| southern-africa | Southern Africa Expert Witness Services for UK Solicitors | ✅ Zimbabwe, DRC | ⚠️ Glossary anchor only (no `/guides/` URL) | ✅ |
| north-africa | North Africa Expert Witness Services for UK Solicitors | ✅ Libya | ✅ West Africa mining guide | ✅ |

---

## 9. TECHNICAL SEO CHECKLIST

| Item | Status |
|------|--------|
| XML sitemap valid, noindex pages excluded | ✅ `public/sitemap.xml` (54 URLs); `app/sitemap.ts` uses same inventory; `/contact`, `/thank-you`, `/privacy`, `/terms` excluded via `NON_INDEXABLE_PATHS` |
| robots.txt allows crawlers | ✅ `Allow: /`; `Disallow: /thank-you`, `/api/`; Sitemap URL declared |
| hreflang en-GB, en-US, x-default | ❌ Not implemented (no `alternates.languages` in metadata) |
| html lang="en-GB" | ✅ `app/layout.tsx` |
| Canonical on all static pages | ✅ Via `createMetadata()` → `alternates.canonical` |
| Canonical on all dynamic [slug] pages | ✅ `generateMetadata` on all `[slug]` routes |
| OpenGraph on all pages | ✅ `createMetadata()` includes full OG + image; homepage via `metadataBase` |
| Twitter card on all pages | ✅ `summary_large_image` in `createMetadata()` |
| metadataBase set | ✅ `https://www.africaexpertwitness.com` in `app/layout.tsx` |
| noindex on /contact | ✅ |
| noindex on /thank-you | ✅ |
| noindex on /privacy | ✅ |
| noindex on /terms | ✅ |
| BreadcrumbList on all non-homepage pages | ❌ JSON-LD BreadcrumbList only where `PageJsonLd` is used; hub pages (`/regions`, `/countries`, `/fees`, etc.) have UI breadcrumbs but no BreadcrumbList schema |
| FAQPage on /faq | ✅ |
| FAQPage on /glossary | ✅ (34 definition Q&As) |
| FAQPage on all /regions/[slug] | ✅ (5/5) |
| FAQPage on all /countries/[slug] | ✅ (12/12) |
| FAQPage on all /expertise-areas/[slug] | ✅ (8/8; areas with `faqs` in data) |
| FAQPage on all /case-types/[slug] | ✅ (8/8) |
| Article JSON-LD on all /guides/[slug] | ✅ (6/6) |
| Service JSON-LD on /services (×8) | ✅ `@graph` with 8 Service nodes |
| Organization on homepage | ✅ In `homepageGraph()` |
| ProfessionalService on homepage | ✅ In `homepageGraph()` |
| WebSite + SearchAction on homepage | ✅ `websiteSchema()` |
| Person JSON-LD on /experts (×3) | ✅ |
| @graph used on homepage | ✅ Organization + ProfessionalService |
| areaServed set (UK + US + EU) | ✅ On Organization schema |
| sameAs populated | ✅ LinkedIn URL |
| Service @id fragments aligned with page section ids | ✅ `data/services.ts` ids match `article id={service.id}` on `/services` and footer `#` links |
| Article aboutServiceId correct per guide | ✅ Per May 2026 fix (see §6) |
| opengraph-image route exists | ✅ `app/opengraph-image.tsx` (1200×630) |

---

## 10. GEO CONTENT CHECKLIST

| Item | Status | Location |
|------|--------|----------|
| African asylum stats table (homepage) | ✅ | `homepageAsylumStats` → `app/page.tsx` |
| LGBTQI+ criminalisation table | ✅ | `lgbtqiCriminalisationTable` → `/expertise-areas/lgbtqi-asylum-africa` |
| FGM prevalence table | ✅ | `fgmPrevalenceTable` → `/expertise-areas/fgm-gender-based-violence` |
| West Africa ICSID claims table | ✅ | `westAfricaIcsidTable` → `/guides/west-africa-mining-arbitration` |
| MOJ Somalia framework table | ✅ | `mojFrameworkTable` → `/guides/somalia-country-guidance-moj` |
| CPIN rebuttal methodology | ✅ | `cpinRebuttalSteps` (ordered list) → `/guides/home-office-cpin-africa-rebuttal` |
| Instruction timeline (/how-to-instruct) | ✅ | 7-step numbered timeline in `app/how-to-instruct/page.tsx` |
| Glossary definition-first pattern | ✅ | Term = question, definition = answer in FAQPage schema |
| Country page key issues (definition-first) | ✅ | `keyIssues[]` with title + description per country |
| Region page overviews (definition-first) | ✅ | `overview[]` lead paragraphs per region |

---

## 11. ENVIRONMENT VARIABLES

| Variable | Purpose | Status |
|----------|---------|--------|
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Formspree form ID for `/contact` | Pending (set in production) |
| `NEXT_PUBLIC_SITE_URL` | Public site URL override (defaults to canonical in code) | Documented; `lib/constants.ts` hardcodes production URL |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 (loads after cookie consent) | Pending |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console HTML verification | Pending |
| `BING_SITE_VERIFICATION` | Bing Webmaster verification | Pending |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager (optional, consent-gated) | Pending |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel (optional, consent-gated) | Pending |
| `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` | LinkedIn Insight Tag (optional) | Pending |
| `NEXT_PUBLIC_HOTJAR_ID` | Hotjar (optional, consent-gated) | Pending |

---

## 12. KNOWN GAPS & NEXT STEPS

| Gap | Detail |
|-----|--------|
| **hreflang** | No `en-GB` / `en-US` / `x-default` alternate links; UK-focused site may not need en-US, but spec mentioned it |
| **BreadcrumbList JSON-LD on hub/utility pages** | `/regions`, `/countries`, `/expertise-areas`, `/case-types`, `/guides`, `/fees`, `/what-is`, `/qualifications`, `/services` lack `PageJsonLd` |
| **Route count vs brief** | 58 content routes + technical routes; brief cited 62 — likely includes deprecated or planned pages |
| **Southern Africa region → guides** | No direct `/guides/` link in `regionRelatedLinks` (glossary anchor only) |
| **Glossary search query param** | WebSite SearchAction targets `/glossary?q=` but glossary filter is client-side only (no SSR search results page) |
| **Expert profiles** | `/experts` shows 3 illustrative experts; not a full directory CMS |
| **54 vs 62 African countries** | Marketing copy references 54 countries; only 12 dedicated country landing pages built |
| **Middleware deprecation warning** | Next.js 16 warns `middleware.ts` convention deprecated in favour of `proxy` |
| **Duplicate sitemap sources** | Both `public/sitemap.xml` (prebuild script) and `app/sitemap.ts` exist; keep in sync via `npm run seo:verify` |
| **Playwright responsive tests** | `npm run test:responsive` available; not wired to CI by default |
| **Experts removed from navbar** | `/experts` page exists but not in main nav (by design) |

---

## 13. DEPLOYMENT READINESS

### DNS & hosting

- [ ] Point `www.africaexpertwitness.com` to hosting (Vercel/Netlify/similar)
- [ ] Point apex `africaexpertwitness.com` to host (middleware issues 301 to www)
- [ ] Enable HTTPS / SSL certificate
- [ ] Confirm `SITE_URL` / `NEXT_PUBLIC_SITE_URL` match production

### Environment variables (production)

- [ ] `NEXT_PUBLIC_FORMSPREE_FORM_ID`
- [ ] `GOOGLE_SITE_VERIFICATION`
- [ ] `BING_SITE_VERIFICATION`
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` (if using GA4)
- [ ] Optional: GTM, Meta Pixel, LinkedIn, Hotjar IDs

### Third-party accounts

- [ ] Formspree — form created and tested end-to-end
- [ ] Google Search Console — property verified, sitemap submitted
- [ ] Bing Webmaster Tools — sitemap submitted
- [ ] Analytics platforms — configured only after cookie consent tested

### Pre-launch verification

- [ ] Run `npm run build` (passes)
- [ ] Run `npm run seo:generate && npm run seo:verify`
- [ ] Run `npm run test:responsive` (optional)
- [ ] Manual test: contact form → thank-you
- [ ] Manual test: cookie banner Accept / Reject / Customize
- [ ] Spot-check OG tags (Facebook Debugger, Twitter Card Validator)
- [ ] Submit `https://www.africaexpertwitness.com/sitemap.xml` to GSC/Bing

### Build warnings to address (non-blocking)

- Next.js middleware → proxy migration notice (informational)
- `npm audit` moderate vulnerabilities in dev dependencies (review before production if policy requires)

---

## Reference files

| Area | Path |
|------|------|
| URL inventory | `lib/seo/publicUrlInventory.ts` |
| Sitemap generator | `scripts/generate-seo.ts`, `app/sitemap.ts` |
| Metadata helper | `lib/metadata.ts` |
| Schema helpers | `lib/schema.ts` |
| Internal links | `data/related-links.ts` |
| SEO architecture spec | `docs/SEO-ARCHITECTURE.md` |
| Sitemap/robots docs | `docs/SITEMAP-AND-ROBOTS.md` |
| Project summary | `docs/PROJECT-SUMMARY.md` |

---

*This document reflects the repository state as of 15 May 2026. Regenerate route metadata from `lib/seo/publicUrlInventory.ts` and page `createMetadata()` calls after substantive changes.*
