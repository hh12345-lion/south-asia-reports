import type { FAQ } from "@/lib/schema";

/** Merge country-specific FAQs with site-wide FAQs (deduplicated by question) */
export function getCountryPageFaqs(countryFaqs: FAQ[]): FAQ[] {
  const seen = new Set<string>();
  const merged: FAQ[] = [];
  for (const faq of [...countryFaqs, ...faqs]) {
    if (seen.has(faq.question)) continue;
    seen.add(faq.question);
    merged.push(faq);
  }
  return merged;
}

export const faqs: FAQ[] = [
  {
    question: "Which countries do South Asia Reports cover?",
    answer:
      "Bangladesh, India, Sri Lanka, Nepal and Bhutan. Pakistan reports are handled separately at pakistancountryexpert.com.",
  },
  {
    question: "What is in a country condition report?",
    answer:
      "The instructions and documents received, the expert's qualifications and sources, an account of current conditions relevant to the appellant, answers to each question in the letter of instruction, and a declaration of independence and truth.",
  },
  {
    question: "How long does a report take?",
    answer:
      "Usually 2 to 4 weeks once full instructions are received. Reports with several issues, such as a minority claim with internal relocation, tend to take the full 4 weeks. Urgent reports within 72 hours may be possible depending on availability.",
  },
  {
    question: "What should we send with the instructions?",
    answer:
      "The asylum interview record, refusal letter, witness statement, any CPINs relied on and a letter of instruction listing the questions. Anything specific to the claim, such as party membership or evidence of UK activity, should also be included.",
  },
  {
    question: "Can reports be funded by Legal Aid?",
    answer:
      "Yes. Rates are set to work within Legal Aid Agency limits. Prior authority must be obtained before instruction, and we can supply a CV, proposed scope and fee estimate for the application.",
  },
  {
    question: "Do Bangladesh reports written before August 2024 need updating?",
    answer:
      "In most cases. The fall of Sheikh Hasina's government changed the position of the main political parties, so an addendum or new report addressing conditions at the hearing date is usually needed.",
  },
  {
    question: "Can you update a report we already have?",
    answer:
      "Yes. Where the original report is sound but conditions have moved on, an addendum focused on what has changed is often quicker and cheaper than a new report.",
  },
  {
    question: "Are reports suitable for the Upper Tribunal?",
    answer:
      "Yes. Upper Tribunal reports follow the grounds of appeal and set out their method in detail, which matters most for countries without country guidance.",
  },
  {
    question: "Can the expert give oral evidence?",
    answer:
      "Where the tribunal directs it, the report's author can attend in person or remotely to be questioned on the report. Attendance is arranged and quoted separately.",
  },
  {
    question: "Which languages can the experts work in?",
    answer:
      "The network includes experts able to work with sources in Bengali, Hindi, Tamil, Nepali, Sinhala and Dzongkha, which allows them to use local media and documents directly.",
  },
  {
    question: "What is the EIN directory?",
    answer:
      "A directory of country experts covering Bangladesh, Bhutan, India, Myanmar, Nepal, Pakistan, Sri Lanka and Tibet. South Asia Reports instructs suitably qualified experts from this network.",
  },
];
