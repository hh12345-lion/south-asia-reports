import type { FAQ } from "@/lib/schema";

export type Country = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
  relatedProfiles: string[];
  claimVolume: string;
  keyProfiles: string;
  countryGuidance: string;
};

export const countries: Country[] = [
  {
    slug: "bangladesh",
    title: "Bangladesh",
    metaTitle: "Bangladesh Country Condition Report | South Asia Reports",
    metaDescription:
      "Bangladesh country condition reports for asylum appeals: post-August 2024 politics, BNP, Jamaat and Awami League profiles, Hindu minorities, LGBTQ+ and acid violence.",
    h1: "Bangladesh Country Condition Reports",
    claimVolume: "High",
    keyProfiles: "Party politics, Hindu minority, LGBTQ+, gender violence",
    countryGuidance: "No current CG",
    content: [
      "Bangladesh is one of the largest sources of South Asian asylum appeals, second only to Pakistan. Our Bangladesh reports most often deal with party-political risk, the treatment of Hindu and other religious minorities, LGBTQ+ claims under section 377 of the Penal Code, and violence against women including acid attacks.",
      "Every Bangladesh report now has to address the change of government in August 2024, when Sheikh Hasina left the country after mass student-led protests. The report explains how this affects the appellant's specific affiliation: some Awami League supporters now face more risk than before, while some BNP and Jamaat supporters may face arguments that their circumstances have changed. Because the situation is still developing, reports are dated as near to the hearing as possible.",
      "For minority and LGBTQ+ claims, the report looks at the appellant's district and community, including land disputes and communal attacks against Hindus, and explains how the availability of police protection depends on who holds local political power.",
    ],
    faqs: [
      {
        question: "What should a Bangladesh country report cover after August 2024?",
        answer:
          "The current position of the appellant's party or group, how police and local power structures have shifted since the transition, conditions in the home district, and an explanation of where older country material no longer applies.",
      },
      {
        question: "Can a Bangladesh report address a Hindu minority claim?",
        answer:
          "Yes. It covers communal violence, land disputes and attacks during political upheaval, and assesses protection at district level, since it varies with local political control.",
      },
    ],
    relatedProfiles: [
      "political-persecution-south-asia",
      "religious-minority-persecution",
      "lgbtq-south-asia",
      "journalists-human-rights-defenders",
    ],
  },
  {
    slug: "india",
    title: "India",
    metaTitle: "India Country Condition Report | South Asia Reports",
    metaDescription:
      "India country condition reports for asylum appeals: Muslim and Christian minorities, Sikh claims, Dalits, CAA/NRC, dissidents and internal relocation.",
    h1: "India Country Condition Reports",
    claimVolume: "Growing",
    keyProfiles: "Muslim and Sikh minorities, Dalits, dissidents",
    countryGuidance: "No current CG",
    content: [
      "Indian appeals are increasing, and the reports we prepare cover a wide range: Muslims targeted by Hindutva and RSS-linked groups, Sikhs with perceived Khalistan links, Christians, political dissidents, Dalits, and people affected by the Citizenship Amendment Act and the National Register of Citizens.",
      "For Muslim appellants the report documents the risks that matter in practice, such as mob violence, uneven application of the law and the effect of national political rhetoric, and pays particular attention to whether the appellant is visibly Muslim and which state they come from.",
      "Most Indian refusals argue that the appellant could move to another city. The report addresses this directly, assessing whether the groups feared operate nationally, how the appellant might be identified, and whether relocation would be unduly harsh for someone in their position.",
    ],
    faqs: [
      {
        question: "Is India treated as a safe country of return?",
        answer:
          "No. India is not designated as safe in asylum law and each claim is decided on its facts. Although India has functioning courts, protection for some minorities is uneven, particularly in BJP-governed states, and the report addresses that for the appellant's profile.",
      },
      {
        question: "What does an India report need from the appellant?",
        answer:
          "Their state and town of origin, religion or caste, details and dates of any incidents, any police complaints, and the relocation areas named in the refusal letter.",
      },
    ],
    relatedProfiles: [
      "religious-minority-persecution",
      "caste-discrimination",
      "political-persecution-south-asia",
      "lgbtq-south-asia",
    ],
  },
  {
    slug: "sri-lanka",
    title: "Sri Lanka",
    metaTitle: "Sri Lanka Country Condition Report | KK [2021] | South Asia Reports",
    metaDescription:
      "Sri Lanka country condition reports for asylum appeals applying KK [2021] UKUT 00245: Tamil and LTTE profiles, UK diaspora activity, opposition and HRDs.",
    h1: "Sri Lanka Country Condition Reports",
    claimVolume: "Significant",
    keyProfiles: "Tamil and LTTE-linked, diaspora activists",
    countryGuidance: "KK [2021] UKUT 245",
    content: [
      "Sri Lanka reports are anchored in KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245, which remains the leading country guidance for Tamil appellants. Reports also cover political opposition, human rights defenders and the effects of Sinhalese Buddhist nationalism.",
      "The core of most Sri Lanka reports is a profile assessment: whether the appellant has actual or perceived LTTE links, has been a prominent diaspora activist, or has given evidence against the state, and how the current security situation affects people with that history.",
      "Where the appellant has been active in the UK, the report examines what they did, such as attending demonstrations, fundraising or holding roles in Tamil organisations, and whether that activity is likely to be known to the Sri Lankan authorities.",
    ],
    faqs: [
      {
        question: "How does a Sri Lanka report use KK [2021]?",
        answer:
          "It sets out the risk categories in KK and explains, with evidence, which of them the appellant may fall within and why.",
      },
      {
        question: "What evidence of UK activity should be sent?",
        answer:
          "Photographs from events, social media posts, records of roles in Tamil organisations and any media coverage, all with dates, so the report can assess visibility.",
      },
    ],
    relatedProfiles: [
      "diaspora-activity-risk-on-return",
      "political-persecution-south-asia",
      "journalists-human-rights-defenders",
      "failed-asylum-seekers-return",
    ],
  },
  {
    slug: "nepal",
    title: "Nepal",
    metaTitle: "Nepal Country Condition Report | South Asia Reports",
    metaDescription:
      "Nepal country condition reports for asylum appeals: Maoist-linked claims, Dalit caste discrimination, Madhesi, Tharu and Janajati minorities, journalists.",
    h1: "Nepal Country Condition Reports",
    claimVolume: "Moderate",
    keyProfiles: "Maoist-linked, Dalits, Madhesi and Janajati",
    countryGuidance: "No current CG",
    content: [
      "There is no current Upper Tribunal country guidance on Nepal, so the tribunal has no binding starting point and depends on the country evidence put before it. A well-sourced report therefore carries more weight in Nepali cases than in many others.",
      "Nepal reports cover claims connected to the Maoist conflict, from people targeted by Maoists during the insurgency and from former combatants facing reprisals. They also cover caste discrimination against Dalits, discrimination against Madhesi, Tharu and Janajati communities, and risks to journalists and human rights defenders.",
      "Each report is focused on the appellant's region, ethnicity and caste, because conditions in Nepal vary considerably between the hills, the Terai and the Kathmandu valley.",
    ],
    faqs: [
      {
        question: "Why does a Nepal report carry particular weight?",
        answer:
          "Without country guidance, the tribunal decides risk on the evidence in front of it. A detailed, sourced report is often the most authoritative material available.",
      },
      {
        question: "What kinds of Nepal claims do reports cover?",
        answer:
          "Maoist-related claims on both sides of the conflict, Dalit caste discrimination, Madhesi, Tharu and Janajati minority claims, and claims by journalists and human rights defenders.",
      },
    ],
    relatedProfiles: [
      "caste-discrimination",
      "political-persecution-south-asia",
      "journalists-human-rights-defenders",
      "women-gender-based-violence",
    ],
  },
  {
    slug: "bhutan",
    title: "Bhutan",
    metaTitle: "Bhutan Country Condition Report | South Asia Reports",
    metaDescription:
      "Bhutan country condition reports for asylum appeals: Lhotshampa Nepali-speaking minority, loss of citizenship, political dissidents and return risk.",
    h1: "Bhutan Country Condition Reports",
    claimVolume: "Low",
    keyProfiles: "Lhotshampa, political dissidents",
    countryGuidance: "No current CG",
    content: [
      "Bhutanese appeals are rare, and public country information on Bhutan is limited. Reports therefore draw together the scattered sources that exist and explain clearly how much weight each can bear.",
      "Most Bhutan reports concern the Lhotshampa, the Nepali-speaking community of whom around 100,000 left for Nepal in the 1990s after losing citizenship under Bhutan's nationality laws. Reports address continuing discrimination against Nepali speakers who remained, and the position of people displaced to Nepal who fear being returned to Bhutan.",
      "Reports also cover political dissidents and religious minority claims, and explain how Bhutan's political system affects the protection available to people with those profiles.",
    ],
    faqs: [
      {
        question: "What is the background to Lhotshampa claims?",
        answer:
          "In the 1990s around 100,000 Nepali-speaking Lhotshampa left Bhutan for Nepal after being stripped of citizenship. Current claims involve discrimination against those who stayed and the risks facing those who would be returned.",
      },
      {
        question: "Can a report be prepared when information on Bhutan is scarce?",
        answer:
          "Yes. The report sets out the sources available, explains their limits, and states its conclusions with appropriate caution so the tribunal can weigh them.",
      },
    ],
    relatedProfiles: [
      "religious-minority-persecution",
      "political-persecution-south-asia",
      "failed-asylum-seekers-return",
    ],
  },
];

export function getCountry(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}
