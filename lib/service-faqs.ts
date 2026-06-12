import type { FAQ } from "@/lib/schema";
import { faqs as globalFaqs } from "@/data/faq";
import type { Service } from "@/data/services";

/** Service-specific FAQs plus site-wide FAQs (deduplicated) for each service detail page */
export function getServicePageFaqs(service: Service): FAQ[] {
  const seen = new Set<string>();
  const merged: FAQ[] = [];

  for (const faq of [...service.faqs, ...globalFaqs]) {
    if (seen.has(faq.question)) continue;
    seen.add(faq.question);
    merged.push(faq);
  }

  return merged;
}
