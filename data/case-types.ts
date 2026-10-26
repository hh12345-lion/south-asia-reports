import type { FAQ } from "@/lib/schema";

export type CaseType = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
};

export const caseTypes: CaseType[] = [
  {
    slug: "ftt-south-asia-appeal",
    title: "First-tier Tribunal Appeals",
    metaTitle: "Country Report for a First-tier Tribunal Appeal | South Asia Reports",
    metaDescription:
      "Country condition reports for First-tier Tribunal asylum appeals involving Bangladesh, India, Sri Lanka, Nepal and Bhutan: scope, documents needed and timing.",
    h1: "Country Reports for First-tier Tribunal Appeals",
    content: [
      "A report for a First-tier Tribunal appeal is built around the refusal letter. It takes each country-related reason the decision-maker gave, such as reliance on a CPIN, an internal relocation finding or the application of KK [2021] for a Tamil appellant, and responds to it with sourced analysis. Points that are not in dispute are kept short.",
      "The report is written to meet the tribunal's practice direction on expert evidence and CPR Part 35 principles: it states the instructions received, sets out the expert's qualifications and sources, distinguishes fact from opinion, and includes the required declaration of independence.",
      "Timing matters. Where the case turns on fast-moving conditions, such as Bangladesh after August 2024 or current events in India, the report is dated as close to the hearing as the directions allow, so that the tribunal is not working from out-of-date material.",
    ],
    faqs: [
      {
        question: "What documents are needed to start an FTT appeal report?",
        answer:
          "The asylum interview record, refusal letter, the appellant's witness statement and any CPINs relied on. A standard report usually takes 2 to 4 weeks from full instructions; urgent reports within 72 hours may be possible depending on availability.",
      },
    ],
  },
  {
    slug: "upper-tribunal-south-asia",
    title: "Upper Tribunal Appeals",
    metaTitle: "Country Report for an Upper Tribunal Appeal | South Asia Reports",
    metaDescription:
      "Country condition reports for Upper Tribunal asylum appeals from South Asia: addressing grounds of appeal, country guidance and updated conditions.",
    h1: "Country Reports for Upper Tribunal Appeals",
    content: [
      "At the Upper Tribunal the report is usually needed once an error of law has been found and the appeal is to be remade, or where updated evidence is admitted. Its scope follows the grounds: it addresses the country issues the First-tier decision got wrong and brings the evidence up to date.",
      "For Tamil appellants the report applies KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245 to the appellant's profile and explains any evidence suggesting the risk categories should be read in a particular way.",
      "For Bangladesh, India, Nepal and Bhutan, where there is no current country guidance, the tribunal relies more heavily on the expert material in front of it. Reports for these countries set out their method in full so that each conclusion can be followed back to its sources.",
    ],
    faqs: [
      {
        question: "Is a new report needed when an appeal reaches the Upper Tribunal?",
        answer:
          "Not always. If the earlier report is recent and covers the issues in the grounds, an addendum updating conditions may be enough. A fresh report is better where the issues have shifted or conditions have changed significantly.",
      },
    ],
  },
  {
    slug: "sri-lanka-tamil-claims",
    title: "Sri Lankan Tamil Claims",
    metaTitle: "Sri Lanka Tamil Country Report | KK [2021] | South Asia Reports",
    metaDescription:
      "Country condition reports for Sri Lankan Tamil asylum claims applying KK [2021] UKUT 00245: LTTE association, diaspora activity and risk on return.",
    h1: "Country Reports for Sri Lankan Tamil Claims",
    content: [
      "Every Sri Lankan Tamil report is organised around KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245. The report identifies which of the country guidance risk categories the appellant may fall within and gives the evidence for and against each.",
      "The profiles most often in issue are actual or perceived LTTE links, prominent diaspora activism, people who have given evidence against the Sri Lankan state, and those whose UK activities may be known to the authorities. The report explains how the appellant's history maps onto these.",
      "The report also updates the tribunal on the current security situation for Tamils and records any developments since KK that bear on how the guidance should be applied.",
    ],
    faqs: [
      {
        question: "Can the report depart from KK [2021]?",
        answer:
          "Country guidance must be followed unless there is strong evidence that it no longer applies. A report can set out that evidence, but most reports work within KK and show where the appellant fits.",
      },
    ],
  },
  {
    slug: "bangladesh-political-claims",
    title: "Bangladeshi Political Claims",
    metaTitle: "Bangladesh Political Claim Country Report | South Asia Reports",
    metaDescription:
      "Country condition reports for Bangladeshi political asylum claims after August 2024: BNP, Jamaat and Awami League profiles, police and court protection.",
    h1: "Country Reports for Bangladeshi Political Claims",
    content: [
      "Bangladeshi political reports are written for the situation after August 2024, when the Awami League government fell. Many existing claims were built on evidence from before that date, so the report states clearly how the appellant's party affiliation is treated now.",
      "For former BNP and Jamaat supporters, the report addresses whether the risk they faced has fallen away or continues locally. For Awami League supporters and former officials, it documents the new risks they face under the changed balance of power.",
      "The report covers the appellant's role and visibility in the party, the conduct of police and courts towards people of that affiliation, and conditions in the appellant's home district.",
    ],
    faqs: [
      {
        question: "Our client claimed asylum before August 2024. Does the report need updating?",
        answer:
          "Almost certainly. Any report written before the transition describes a different political landscape. An updated report or addendum should address conditions at the date of the hearing.",
      },
    ],
  },
  {
    slug: "india-minority-claims",
    title: "Indian Minority Claims",
    metaTitle: "India Minority Claim Country Report | South Asia Reports",
    metaDescription:
      "Country condition reports for Indian minority asylum claims: Muslims, Sikhs, Christians and Dalits, Hindutva organisations and internal relocation.",
    h1: "Country Reports for Indian Minority Claims",
    content: [
      "Indian minority reports cover Muslim appellants facing Hindutva and RSS-linked violence, Sikh appellants with perceived Khalistan links, Christians, and Dalits facing caste discrimination. The report is limited to the group and region relevant to the appellant.",
      "Refusals in Indian cases very often rely on relocation to a large city. The report tests that argument directly: whether the people or organisations feared operate nationally, whether the appellant could be traced, and what life would realistically look like for them in the proposed location.",
      "It also considers protection in the appellant's own state, since police responses to complaints from minorities differ considerably between regions.",
    ],
    faqs: [
      {
        question: "How does the report respond to an internal relocation finding?",
        answer:
          "It addresses reach (whether the threat follows the appellant), identifiability (how they would be recognised) and reasonableness (support networks, work and housing in the proposed city), with sources for each.",
      },
    ],
  },
  {
    slug: "deportation-return-south-asia",
    title: "Deportation & Return Cases",
    metaTitle: "Deportation & Return Country Report | South Asia Reports",
    metaDescription:
      "Country condition reports on risk on return for South Asian nationals facing deportation or removal: Bangladesh, India, Sri Lanka, Nepal and Bhutan.",
    h1: "Country Reports for Deportation & Return Cases",
    content: [
      "In deportation and removal cases the report concentrates on what would happen after return: how the person would be received, whether their profile would attract attention, and how conditions have moved since the original asylum decision.",
      "Bangladesh is the clearest example of changed conditions, with some profiles carrying more risk after August 2024 than before. The report identifies whether the appellant falls into one of those groups.",
      "Reports for these cases are often used in certification challenges, fresh claims or judicial review, so they are written to stand on their own and to show plainly what has changed.",
    ],
    faqs: [
      {
        question: "Can a return report be used to support a fresh claim?",
        answer:
          "Yes. If it shows a material change in conditions or a newly identified risk, it can form part of further submissions considered under paragraph 353 of the Immigration Rules.",
      },
    ],
  },
  {
    slug: "fresh-claims-south-asia",
    title: "Fresh Claims",
    metaTitle: "Fresh Claim Country Report | South Asia Reports",
    metaDescription:
      "Country condition reports for fresh asylum claims from South Asia: identifying material change since the last decision, including post-2024 Bangladesh.",
    h1: "Country Reports for Fresh Claims",
    content: [
      "A fresh claim report has a narrow job: to show what is new. It identifies the date of the last decision, sets out what the country evidence said then, and explains what has changed since, either in conditions or in the appellant's known profile.",
      "Changed conditions in Bangladesh after August 2024 are the most common basis. New personal factors also qualify, such as newly evidenced political roles, religious activity, UK diaspora activity or caste status that was not documented before.",
      "Because further submissions are judged on whether they create a realistic prospect of success, the report states its conclusions plainly and links each one to evidence that post-dates the previous decision.",
    ],
    faqs: [
      {
        question: "How is a fresh claim report different from an appeal report?",
        answer:
          "It is comparative. Rather than assessing risk from scratch, it focuses on the difference between the position at the last decision and the position now, which is what the decision-maker must consider.",
      },
    ],
  },
  {
    slug: "certification-challenge",
    title: "Certification Challenges",
    metaTitle: "Country Report to Challenge Certification | South Asia Reports",
    metaDescription:
      "Urgent country condition reports to challenge clearly unfounded certification under section 94 for asylum claims from Bangladesh, India and Nepal.",
    h1: "Country Reports for Certification Challenges",
    content: [
      "When a claim is certified as clearly unfounded under section 94 of the Nationality, Immigration and Asylum Act 2002, the in-country right of appeal is lost. The certificate can be challenged if the claim has a realistic prospect of success, and a country report is often the strongest evidence for that.",
      "The report takes the reasons given for certification and shows, with sources, where the country evidence is genuinely disputed. This is particularly useful for Bangladesh after 2024, Indian minority claims and Nepali claims, where there is no country guidance to rely on.",
      "These reports are usually urgent and kept focused, addressing only what is needed to show the claim is not bound to fail.",
    ],
    faqs: [
      {
        question: "How fast can a certification report be produced?",
        answer:
          "Urgent reports within 72 hours may be possible depending on availability. Send the certification decision, refusal letter, witness statement and any CPINs relied on at the outset, because the time limits are short.",
      },
    ],
  },
];

export function getCaseType(slug: string): CaseType | undefined {
  return caseTypes.find((c) => c.slug === slug);
}
