import { SITE_EMAIL, SITE_URL, LINKEDIN_URL } from "./constants";

export type FAQ = { question: string; answer: string };
export type BreadcrumbItem = { name: string; href?: string };

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(
  items: ({ name?: string; label?: string; href?: string })[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name ?? item.label ?? "",
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "South Asia Reports",
    url: SITE_URL,
    email: SITE_EMAIL,
    address: { "@type": "PostalAddress", addressCountry: "GB" },
    areaServed: ["United Kingdom", "United States", "European Union"],
    sameAs: [LINKEDIN_URL],
  };
}

export function professionalServiceSchema() {
  const services = [
    "Bangladesh Country Condition Reports",
    "India Country Reports",
    "Sri Lanka Country Reports",
    "Nepal/Bhutan Country Reports",
    "CPIN Challenge Reports",
    "Internal Relocation Analysis",
    "Post-August 2024 Bangladesh Reports",
    "Oral Evidence at Tribunal",
  ];
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#professional-service`,
    name: "South Asia Expert Report Services",
    url: SITE_URL,
    serviceType: "South Asia Country Expert Reports",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "United Kingdom",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "South Asia Expert Report Services",
      itemListElement: services.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
}

export function homepageGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), professionalServiceSchema()],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "South Asia Reports",
    url: SITE_URL,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/glossary?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function servicesPageGraph(
  services: { id: string; name: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "ItemList",
        name: "South Asia Expert Witness Services",
        itemListElement: services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            "@id": `${SITE_URL}/services#${s.id}`,
            name: s.name,
            description: s.description,
            provider: { "@id": `${SITE_URL}/#organization` },
          },
        })),
      },
    ],
  };
}

export function articleSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function personSchema(expert: {
  name: string;
  jobTitle: string;
  description: string;
  expertise: string[];
}) {
  return {
    "@type": "Person",
    name: expert.name,
    jobTitle: expert.jobTitle,
    description: expert.description,
    knowsAbout: expert.expertise,
    worksFor: { "@id": `${SITE_URL}/#organization` },
  };
}
