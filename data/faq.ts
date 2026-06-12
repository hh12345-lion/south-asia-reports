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
    question: "What countries does South Asia Expert cover?",
    answer:
      "South Asia Reports covers Bangladesh, India, Sri Lanka, Nepal, and Bhutan. Pakistan is covered separately at pakistancountryexpert.com. We provide country condition reports and expert witness evidence for asylum appeals and immigration tribunal proceedings involving nationals of these five South Asian countries.",
  },
  {
    question: "What happened in Bangladesh in August 2024?",
    answer:
      "In August 2024, mass student protests led to the fall of Sheikh Hasina's Awami League government. Hasina fled to India, fundamentally altering the asylum landscape for Bangladesh. Former BNP and Jamaat supporters who were persecuted under Hasina may now face changed country conditions, while Awami League supporters face new risks. Expert evidence on post-August 2024 conditions is essential.",
  },
  {
    question: "What is the KK country guidance on Sri Lanka?",
    answer:
      "KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245 established that Tamil asylum seekers with certain profiles face real risk on return, particularly those with actual or imputed LTTE associations, high-profile diaspora activists, or those who have given evidence against the Sri Lankan government.",
  },
  {
    question: "Is India a safe country for asylum?",
    answer:
      "India is not a designated safe third country in UK asylum law and claims must be assessed on their merits. While India has a functioning state and judiciary, state protection is inconsistent for certain minority groups, particularly in states governed by BJP-aligned administrations. Expert witnesses assess the specific profile and viability of internal relocation.",
  },
  {
    question: "Are LGBTQ+ asylum claims from India valid post-decriminalisation?",
    answer:
      "Yes. India decriminalised same-sex conduct in 2018 (Navtej Singh Johar), but decriminalisation does not eliminate persecution. Family honour violence, community ostracism, and employment discrimination remain serious risks. Expert witnesses apply the HJ (Iran) standard to assess whether openly living as LGBTQ+ would create a real risk.",
  },
  {
    question: "Why is expert evidence especially important in Nepal cases?",
    answer:
      "Unlike Somalia, Pakistan, or Sri Lanka, Nepal has no current UK Upper Tribunal country guidance. There are no binding country guidance findings from the UK tribunal on conditions in Nepal. Independent expert evidence is especially valuable as the tribunal must rely on expert analysis rather than country guidance presumptions.",
  },
  {
    question: "How does the Bangladesh political transition affect existing claims?",
    answer:
      "The August 2024 transition may affect both pending and fresh claims. BNP supporters previously persecuted under Hasina may face changed country conditions arguments. Awami League supporters may now have stronger claims. Expert witnesses must assess conditions as of the current date for all Bangladesh political claims.",
  },
  {
    question: "How do I instruct a South Asia expert witness?",
    answer:
      "Contact us via the instruction form or email. For Legal Aid cases, obtain LAA prior authority before instruction. Provide the AIR, RFRL, witness statement, relevant CPINs, and a detailed letter of instruction. Allow 2 to 4 weeks for a standard report.",
  },
  {
    question: "Are South Asia expert reports Legal Aid compatible?",
    answer:
      "Yes. South Asia Reports provides LAA-compatible rates for all major South Asian asylum profiles. Prior authority must be obtained from the Legal Aid Agency before instruction. Include the expert CV, proposed scope, and fee estimate in your prior authority application.",
  },
  {
    question: "What languages do South Asia experts cover?",
    answer:
      "Our network includes experts with language expertise in Bengali, Hindi, Tamil, Nepali, Sinhala, and Dzongkha, enabling verification of documents, media sources, and community-specific evidence relevant to each country's asylum claims.",
  },
  {
    question: "How long does a South Asia expert report take?",
    answer:
      "Standard country condition reports take 2 to 4 weeks. Complex multi-issue reports (political persecution, minority claims with internal relocation) may take 3 to 4 weeks. Urgent reports within 72 hours may be available subject to expert availability.",
  },
  {
    question: "What is the EIN directory and how does it relate to South Asia experts?",
    answer:
      "The Expert Inquiry Network (EIN) directory lists experts covering Bangladesh, Bhutan, India, Myanmar, Nepal, Pakistan, Sri Lanka, and Tibet. South Asia Reports connects UK solicitors with qualified experts from this network for tribunal-ready country condition reports.",
  },
];
