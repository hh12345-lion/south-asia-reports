import type { FAQ } from "@/lib/schema";

export type AsylumProfile = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
  relatedCaseTypes: string[];
};

export const asylumProfiles: AsylumProfile[] = [
  {
    slug: "political-persecution-south-asia",
    title: "Political Persecution South Asia",
    metaTitle: "Political Persecution Expert Witness UK | South Asia Asylum Reports",
    metaDescription:
      "Political persecution expert witness for South Asian asylum claims in UK tribunals. Bangladesh BNP/Awami post-2024, India opposition, Sri Lanka Tamil politics, Nepal Maoists.",
    h1: "Political Persecution Expert Witness UK | South Asia",
    content: [
      "Political persecution claims from South Asia require expert evidence to establish whether the political party or movement at issue actually persecutes opponents, whether state protection is available (particularly where police are complicit), and whether the individual's profile creates a real risk rather than a generalised political claim.",
      "Bangladesh political claims have been fundamentally affected by the August 2024 fall of Sheikh Hasina's government. BNP supporters who were genuinely persecuted may now find their home country conditions have changed materially. Conversely, Awami League supporters face new risks under the post-transition power structure. Expert evidence on current post-transition conditions is essential in all Bangladesh political persecution claims.",
      "India political opposition claims, Sri Lanka Tamil political profiles, and Nepal Maoist-linked claims each require country-specific analysis. Expert witnesses assess the political context, the appellant's visibility and affiliations, and the practical availability of state protection in the relevant jurisdiction.",
    ],
    faqs: [
      {
        question: "Why is expert evidence important in South Asian political persecution claims?",
        answer:
          "South Asian political persecution claims require expert evidence to establish whether the political party or movement at issue actually persecutes opponents, whether state protection is available (particularly where police are complicit), and whether the individual's profile creates a real risk rather than a generalised political claim.",
      },
      {
        question: "How has Bangladesh's 2024 political transition affected asylum claims?",
        answer:
          "The August 2024 fall of Sheikh Hasina's government has reversed many previously straightforward Bangladesh political claims. BNP supporters who were genuinely persecuted may now find their home country conditions have changed materially. Expert evidence on current post-transition conditions is essential in all Bangladesh political persecution claims.",
      },
    ],
    relatedCaseTypes: ["bangladesh-political-claims", "ftt-south-asia-appeal", "fresh-claims-south-asia"],
  },
  {
    slug: "religious-minority-persecution",
    title: "Religious Minority Persecution",
    metaTitle: "Religious Minority Persecution Expert Witness UK | South Asia",
    metaDescription:
      "Religious minority persecution expert witness for South Asian asylum claims. Indian Muslims, Bangladeshi Hindus, Sri Lankan Christians, state protection analysis.",
    h1: "Religious Minority Persecution Expert Witness UK | South Asia",
    content: [
      "South Asia generates significant religious minority asylum claims. Indian Muslims face Hindutva violence and systemic discrimination. Bangladeshi Hindus face communal attacks, particularly during political transitions. Christians in Sri Lanka and India face targeted violence. Ahmadis in Bangladesh and India face discrimination under blasphemy and religious laws.",
      "Expert witnesses assess the specific religious profile and country conditions, distinguishing between individual targeting by known persecutors and systemic discrimination from the cumulative effect of majority community hostility and state failure to protect.",
      "State protection for religious minorities varies significantly across South Asian countries and within regions. Expert witnesses provide granular analysis of whether effective protection is realistically available for the specific appellant in their community and district of origin.",
    ],
    faqs: [
      {
        question: "What religious minority claims arise from South Asia?",
        answer:
          "South Asia generates significant religious minority asylum claims: Indian Muslims facing Hindutva violence; Bangladeshi Hindus facing communal attacks; Christians in Sri Lanka and India facing targeted violence; and Ahmadis in Bangladesh and India facing discrimination. Expert witnesses assess the specific religious profile and country conditions.",
      },
      {
        question: "Is there pattern-based religious persecution or only individual targeting?",
        answer:
          "Both exist across South Asian religious minority claims. Some appellants face individual targeting by known persecutors; others face systemic discrimination and risk from the cumulative effect of majority community hostility and state failure to protect. Expert witnesses distinguish between the two and assess both the individual and systemic risk.",
      },
    ],
    relatedCaseTypes: ["india-minority-claims", "ftt-south-asia-appeal", "upper-tribunal-south-asia"],
  },
  {
    slug: "lgbtq-south-asia",
    title: "LGBTQ+ South Asia",
    metaTitle: "LGBTQ+ Persecution Expert Witness UK | South Asia Asylum Reports",
    metaDescription:
      "LGBTQ+ persecution expert witness for South Asian asylum claims. Bangladesh s377, India post-decriminalisation, Sri Lanka, Nepal, HJ (Iran) standard analysis.",
    h1: "LGBTQ+ Persecution Expert Witness UK | South Asia",
    content: [
      "The legal framework for LGBTQ+ individuals varies significantly across South Asia. Bangladesh still criminalises same-sex conduct under section 377 of the Penal Code. India decriminalised in 2018 (Navtej Singh Johar) but social persecution and family violence continue. Sri Lanka retains criminalisation. Nepal has made limited progressive steps but practical protection remains limited.",
      "Expert witnesses provide country-specific analysis of both legal framework and social reality, applying the HJ (Iran) standard to assess whether openly living as LGBTQ+ would create a real risk even in the absence of criminalisation.",
      "Family honour violence, community ostracism, and employment discrimination remain serious risks for LGBTQ+ individuals across South Asia. Expert witnesses assess the specific social context, family dynamics, and regional attitudes relevant to each appellant's claim.",
    ],
    faqs: [
      {
        question: "How does LGBTQ+ persecution from South Asia differ country by country?",
        answer:
          "The legal framework varies significantly: Bangladesh still criminalises same-sex conduct (s377 PPC); India decriminalised in 2018 (Navtej Singh Johar) but social persecution and family violence continue; Sri Lanka retains criminalisation; Nepal has made limited progressive steps. Expert witnesses provide country-specific analysis of both legal framework and social reality.",
      },
      {
        question: "Can LGBTQ+ claimants from India asylum succeed post-2018 decriminalisation?",
        answer:
          "Yes. Decriminalisation does not eliminate persecution. Family honour violence, community ostracism, and employment discrimination remain serious risks for LGBTQ+ individuals in India. Expert witnesses apply the HJ (Iran) standard to assess whether openly living as LGBTQ+ would create a real risk even in the absence of criminalisation.",
      },
    ],
    relatedCaseTypes: ["india-minority-claims", "ftt-south-asia-appeal", "certification-challenge"],
  },
  {
    slug: "caste-discrimination",
    title: "Caste Discrimination",
    metaTitle: "Caste Discrimination Expert Witness UK | South Asia Asylum Reports",
    metaDescription:
      "Caste discrimination expert witness for South Asian asylum claims. Dalit persecution in India and Nepal, caste as PSG, state protection failures, upper-caste violence.",
    h1: "Caste Discrimination Expert Witness UK | South Asia",
    content: [
      "Caste-based discrimination can constitute persecution where it reaches the threshold of seriousness, particularly where accompanied by physical violence, systematic economic exclusion, or forced practices that violate fundamental rights. Dalits in India and Nepal may constitute a particular social group (PSG) for asylum purposes.",
      "Expert witnesses assess the severity of caste-based harm in the specific regional and community context, providing both country conditions analysis and assessment of the plausibility of claimed caste status and the risk it creates.",
      "Caste persecution claims require evidence both of the general pattern of caste-based harm in the relevant country and of the individual's specific risk profile. Upper-caste violence, state protection failures, and economic and social exclusion are key themes in South Asian caste discrimination claims.",
    ],
    faqs: [
      {
        question: "Can caste discrimination constitute persecution in asylum law?",
        answer:
          "Caste-based discrimination can constitute persecution where it reaches the threshold of seriousness, particularly where accompanied by physical violence, systematic economic exclusion, or forced practices that violate fundamental rights. Dalits in India and Nepal may constitute a particular social group (PSG) for asylum purposes. Expert witnesses assess the severity of caste-based harm in the specific regional and community context.",
      },
      {
        question: "What level of proof is needed for a caste persecution claim?",
        answer:
          "Caste persecution claims require evidence both of the general pattern of caste-based harm in the relevant country and of the individual's specific risk profile. Expert witnesses provide country conditions analysis and, where relevant, assessment of the plausibility of claimed caste status and the risk it creates.",
      },
    ],
    relatedCaseTypes: ["india-minority-claims", "ftt-south-asia-appeal", "upper-tribunal-south-asia"],
  },
  {
    slug: "women-gender-based-violence",
    title: "Women & Gender-Based Violence",
    metaTitle: "Women & Gender-Based Violence Expert Witness UK | South Asia",
    metaDescription:
      "Gender-based violence expert witness for South Asian asylum claims. Honour killings, dowry violence, acid attacks, trafficking from Nepal, state protection failures.",
    h1: "Women & Gender-Based Violence Expert Witness UK | South Asia",
    content: [
      "South Asian gender-based violence asylum claims include honour killings and forced marriage across the region, dowry violence in India and Bangladesh, acid attacks in Bangladesh, trafficking from Nepal and India, and domestic violence with inadequate state protection across all South Asian countries.",
      "Despite formal legal protections in many South Asian jurisdictions, enforcement is inconsistent, particularly in rural areas and where perpetrators are from dominant castes or majority communities. Expert witnesses assess the specific state and region of origin and the practical availability of protection.",
      "Expert witnesses provide analysis of cultural and legal context, assessing whether the appellant faces a real risk of gender-based harm on return and whether state protection is realistically available given local social dynamics and institutional failures.",
    ],
    faqs: [
      {
        question: "What gender-based violence claims arise from South Asia?",
        answer:
          "South Asian gender-based violence asylum claims include honour killings and forced marriage across the region; dowry violence in India and Bangladesh; acid attacks in Bangladesh; trafficking from Nepal and India; and domestic violence with inadequate state protection across all South Asian countries.",
      },
      {
        question: "Does India have adequate protection for women facing gender-based violence?",
        answer:
          "Despite formal legal protections, enforcement is inconsistent across India, particularly in rural areas and where the perpetrators are from dominant castes or majority communities. Expert witnesses assess the specific state and region of origin and the practical availability of protection.",
      },
    ],
    relatedCaseTypes: ["ftt-south-asia-appeal", "deportation-return-south-asia", "fresh-claims-south-asia"],
  },
  {
    slug: "journalists-human-rights-defenders",
    title: "Journalists & Human Rights Defenders",
    metaTitle: "Journalists & Human Rights Defenders Expert Witness UK | South Asia",
    metaDescription:
      "Journalist and human rights defender expert witness for South Asian asylum claims. Bangladesh post-2024 media persecution, India press freedom, Sri Lanka HRD claims.",
    h1: "Journalists & Human Rights Defenders Expert Witness UK | South Asia",
    content: [
      "The August 2024 political transition in Bangladesh has created a complex situation for journalists. Those who previously supported the Awami League government through their reporting now face risks from the new power structure, while those who were previously persecuted by the Awami League may have found their position improved. Expert witnesses assess the current media environment and individual journalists' specific risk profiles.",
      "India's press freedom ranking has declined significantly in recent years. Journalists critical of the BJP government or covering sensitive topics (Hindu nationalism, Kashmir, Manipur) face harassment, legal threats under UAPA, and in some cases physical danger. Expert witnesses assess the individual journalist's profile and the current media environment.",
      "Sri Lanka human rights defender claims and Nepal media freedom issues also require specialist expert analysis. Expert witnesses provide country-specific assessment of the risks facing journalists and HRDs based on their reporting history, affiliations, and visibility.",
    ],
    faqs: [
      {
        question: "What risks do journalists face in Bangladesh post-2024?",
        answer:
          "The August 2024 political transition in Bangladesh has created a complex situation for journalists. Those who previously supported the Awami League government through their reporting now face risks from the new power structure, while those who were previously persecuted by the Awami League may have found their position improved. Expert witnesses assess the current media environment and individual journalists' specific risk profiles.",
      },
      {
        question: "Are Indian journalists at risk?",
        answer:
          "India's press freedom ranking has declined significantly in recent years. Journalists critical of the BJP government or covering sensitive topics (Hindu nationalism, Kashmir, Manipur) face harassment, legal threats (UAPA), and in some cases physical danger. Expert witnesses assess the individual journalist's profile and the current media environment.",
      },
    ],
    relatedCaseTypes: ["bangladesh-political-claims", "india-minority-claims", "ftt-south-asia-appeal"],
  },
  {
    slug: "diaspora-activity-risk-on-return",
    title: "Diaspora Activity Risk on Return",
    metaTitle: "Diaspora Activity Risk on Return Expert Witness UK | South Asia",
    metaDescription:
      "Diaspora activity risk expert witness for South Asian asylum claims. UK-based Tamil activism, Bangladeshi political activity, Sikh Khalistan, surveillance capacity analysis.",
    h1: "Diaspora Activity Risk on Return Expert Witness UK | South Asia",
    content: [
      "UK-based diaspora political or human rights activities can create or enhance a risk profile on return, where the authorities in the country of origin have the capacity and motivation to monitor diaspora activity. Expert witnesses assess both the nature and visibility of the UK activities and the intelligence capacity of the relevant state to monitor and respond.",
      "Tamil diaspora activism in the UK can create risk on return to Sri Lanka where activities have come to the attention of Sri Lankan intelligence services. Bangladeshi authorities have demonstrated capacity and motivation to monitor diaspora political activities in the UK, particularly activities by prominent BNP, Jamaat, or Awami League figures.",
      "Indian diaspora activities, including Sikh Khalistan advocacy and Muslim minority advocacy, may also generate risk profiles. Post-August 2024, Bangladesh monitoring priorities may have shifted. Expert witnesses assess current intelligence capacity and the specific profile of the appellant.",
    ],
    faqs: [
      {
        question: "How does UK-based diaspora activism affect South Asian asylum claims?",
        answer:
          "UK-based diaspora political or human rights activities can create or enhance a risk profile on return, where the authorities in the country of origin have the capacity and motivation to monitor diaspora activity. Expert witnesses assess both the nature and visibility of the UK activities and the intelligence capacity of the relevant state to monitor and respond.",
      },
      {
        question: "Does Bangladesh monitor UK-based political activists?",
        answer:
          "Bangladeshi authorities have demonstrated capacity and motivation to monitor diaspora political activities in the UK, particularly activities by prominent BNP, Jamaat, or Awami League figures. Post-August 2024, the monitoring priorities may have shifted. Expert witnesses assess current intelligence capacity and the specific profile of the appellant.",
      },
    ],
    relatedCaseTypes: ["sri-lanka-tamil-claims", "bangladesh-political-claims", "deportation-return-south-asia"],
  },
  {
    slug: "failed-asylum-seekers-return",
    title: "Failed Asylum Seekers Return",
    metaTitle: "Failed Asylum Seekers Return Expert Witness UK | South Asia",
    metaDescription:
      "Failed asylum seeker return risk expert witness for South Asian claims. Country-specific return risk analysis, Home Office certification challenge, post-2024 Bangladesh conditions.",
    h1: "Failed Asylum Seekers Return Expert Witness UK | South Asia",
    content: [
      "Return risk for South Asian failed asylum seekers depends heavily on the individual's profile and current country conditions. Given the August 2024 political transition in Bangladesh, some profiles that were previously lower risk may now face genuine risk on return. Expert witnesses provide current country condition analysis for individual risk assessment.",
      "The Home Office has powers to certify asylum claims from certain countries as clearly unfounded, removing the right of appeal in-country. However, certification is inappropriate where a claim has a realistic prospect of success. Expert witnesses help solicitors challenge certification by providing independent country condition analysis supporting the claim.",
      "Expert witnesses provide country-specific return risk analysis for failed asylum seekers across Bangladesh, India, Sri Lanka, Nepal, and Bhutan, assessing how the individual's profile interacts with current conditions and any changes since the original refusal.",
    ],
    faqs: [
      {
        question: "Are South Asian asylum claims certifiable as clearly unfounded?",
        answer:
          "The Home Office has powers to certify asylum claims from certain countries as clearly unfounded, removing the right of appeal in-country. However, certification is inappropriate where a claim has a realistic prospect of success. Expert witnesses help solicitors challenge certification by providing independent country condition analysis supporting the claim.",
      },
      {
        question: "What is the return risk for failed Bangladesh asylum seekers?",
        answer:
          "Return risk for Bangladesh failed asylum seekers depends heavily on the individual's profile and current country conditions. Given the August 2024 political transition, some profiles that were previously lower risk may now face genuine risk on return. Expert witnesses provide current country condition analysis for individual risk assessment.",
      },
    ],
    relatedCaseTypes: ["deportation-return-south-asia", "certification-challenge", "fresh-claims-south-asia"],
  },
];

export function getAsylumProfile(slug: string): AsylumProfile | undefined {
  return asylumProfiles.find((p) => p.slug === slug);
}
