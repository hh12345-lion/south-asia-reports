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
    metaTitle: "Bangladesh Expert Witness UK | BNP, Hindus, LGBTQ+ & Political Persecution",
    metaDescription:
      "Bangladesh expert witness for UK asylum tribunals. Post-August 2024 political transition, BNP/Awami League persecution, Hindu minority, LGBTQ+ criminalisation, and garment worker rights.",
    h1: "Bangladesh Country Expert Witness UK",
    claimVolume: "High (top 5 visa holder claims)",
    keyProfiles: "BNP/AL politics, Hindus, LGBTQ+",
    countryGuidance: "No current CG",
    content: [
      "Bangladesh generates one of the highest volumes of South Asian asylum claims in the UK, after Pakistan. Claims arise from political persecution linked to the Bangladesh Nationalist Party (BNP) and Awami League rivalry, persecution of Hindu and other religious minorities, LGBTQ+ criminalisation under section 377 of the Penal Code, and gender-based violence including acid attacks.",
      "The fall of Sheikh Hasina's Awami League government in August 2024, following mass student protests, has fundamentally changed the asylum landscape for Bangladesh. Expert witnesses must assess post-August 2024 conditions, which may mean former Awami League supporters now face greater risk than before, while BNP and Jamaat claimants who were genuinely persecuted under Hasina may have a changed country conditions argument. Expert evidence on current conditions is more important than ever as the political situation continues to evolve.",
      "Hindu minority communities face communal violence, land disputes, and targeted persecution, particularly during and after political transitions. State protection for minorities is inconsistent and depends significantly on the political context. LGBTQ+ individuals face criminalisation and severe social persecution. Expert witnesses provide community-specific and district-specific analysis of risk profiles for UK immigration tribunals.",
    ],
    faqs: [
      {
        question: "How has the fall of Sheikh Hasina's government in 2024 affected Bangladesh asylum claims?",
        answer:
          "The August 2024 political transition, following mass protests that led Sheikh Hasina to flee to India, has fundamentally altered the asylum landscape for Bangladesh. Former BNP and Jamaat supporters who were genuinely persecuted under the Awami League government may now face a changed country conditions argument. Conversely, Awami League supporters and former officials face new risks. Expert witnesses must assess conditions as of the current date, not the position under the previous government.",
      },
      {
        question: "What persecution do Hindus face in Bangladesh?",
        answer:
          "Hindu minority communities in Bangladesh face communal violence, land disputes, and targeted persecution, particularly during and after political transitions. State protection for minorities is inconsistent and depends significantly on the political context. Expert witnesses provide community-specific and district-specific analysis of minority risk.",
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
    metaTitle: "India Expert Witness UK | Muslim, Sikh, Christian & Minority Asylum Reports",
    metaDescription:
      "India expert witness for UK asylum tribunals. Hindutva/RSS targeting of Muslims, Sikh Khalistan claims, Christian minorities, CAA/NRC, caste discrimination, and internal relocation analysis.",
    h1: "India Country Expert Witness UK",
    claimVolume: "Growing",
    keyProfiles: "Muslims/Hindutva, Sikhs, HRDs",
    countryGuidance: "No current CG",
    content: [
      "India generates growing asylum claim volumes and presents unique legal challenges for UK tribunals. Claims arise from Hindutva and RSS targeting of Muslims, Sikh claims linked to Khalistan associations and historical persecution, Christian minority targeting, political dissident persecution, caste discrimination against Dalits, and concerns linked to the Citizenship Amendment Act (CAA) and National Register of Citizens (NRC).",
      "Hindutva ideology, promoted by the BJP and associated organisations including the RSS, identifies Muslims as targets in certain contexts, particularly identifiably Muslim individuals in states governed by BJP-aligned administrations. Mob lynching, discriminatory application of laws, and the cumulative effect of anti-Muslim rhetoric at the national level create serious risk profiles.",
      "India's size means internal relocation arguments are heavily deployed by the Home Office, but expert evidence can challenge this where the persecutor has national reach (Hindutva networks, RSS) or where internal relocation would be unduly harsh. Expert witnesses assess whether state protection is available and whether internal relocation within India is viable given the nationwide reach of Hindutva networks and the specific profile of the appellant.",
    ],
    faqs: [
      {
        question: "What persecution do Muslims face in India?",
        answer:
          "Muslim asylum claims from India typically involve targeted violence by Hindutva groups with political protection, mob lynching in some states, discriminatory application of laws, and the cumulative effect of anti-Muslim rhetoric at the national level. Expert witnesses assess whether state protection is available and whether internal relocation within India is viable given the nationwide reach of Hindutva networks.",
      },
      {
        question: "Is India a safe country for return?",
        answer:
          "India is not a designated safe third country in UK asylum law and claims must be assessed on their merits. While India has a functioning state and judiciary, state protection is inconsistent for certain minority groups, particularly in states governed by BJP-aligned administrations. Expert witnesses assess the specific profile, the pattern of state complicity, and the viability of internal relocation.",
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
    metaTitle: "Sri Lanka Expert Witness UK | Tamil Persecution & LTTE Association Claims",
    metaDescription:
      "Sri Lanka expert witness for UK asylum tribunals. KK [2021] UKUT 00245 country guidance, Tamil persecution, LTTE associations, diaspora activism risk, and political opposition.",
    h1: "Sri Lanka Country Expert Witness UK",
    claimVolume: "Significant",
    keyProfiles: "Tamil/LTTE, political opposition",
    countryGuidance: "KK [2021] UKUT 245",
    content: [
      "Sri Lanka asylum claims in the UK are shaped by KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245, which remains the leading country guidance on Tamil persecution. Claims arise from actual or imputed LTTE associations, Tamil diaspora activism risk, political opposition persecution, human rights defender targeting, and Sinhalese Buddhist nationalism.",
      "Post-civil war, Tamil asylum seekers with certain profiles face real risk on return, particularly those with actual or imputed LTTE associations, high-profile diaspora activists, or those who have given evidence against the Sri Lankan government. Expert witnesses assess the individual's profile against this country guidance framework.",
      "UK-based Tamil diaspora activities, including demonstrations, fundraising, and leadership roles in Tamil organisations, can create or enhance a risk profile where they have come to the attention of Sri Lankan intelligence services. Expert witnesses assess the nature and visibility of UK-based activities and the risk they generate on return.",
    ],
    faqs: [
      {
        question: "What is the KK country guidance on Sri Lanka?",
        answer:
          "KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245 established that Tamil asylum seekers with certain profiles face real risk on return, particularly those with actual or imputed LTTE associations, high-profile diaspora activists, or those who have given evidence against the Sri Lankan government. Expert witnesses assess the individual's profile against this country guidance.",
      },
      {
        question: "Does diaspora Tamil activism in the UK create risk on return?",
        answer:
          "Yes. Where Tamil diaspora activities in the UK (demonstrations, fundraising, leadership roles in Tamil organisations) have come to the attention of Sri Lankan intelligence services, they can create or enhance a risk profile. Expert witnesses assess the nature and visibility of the UK-based activities and the risk they generate.",
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
    metaTitle: "Nepal Expert Witness UK | Maoist, Caste & Ethnic Minority Asylum Reports",
    metaDescription:
      "Nepal expert witness for UK asylum tribunals. No current UK country guidance, Maoist-linked claims, Dalit caste discrimination, Madhesi and Janajati ethnic minorities, and political persecution.",
    h1: "Nepal Country Expert Witness UK",
    claimVolume: "Moderate",
    keyProfiles: "Maoists, Dalits, ethnic minorities",
    countryGuidance: "No current CG",
    content: [
      "Unlike Somalia, Pakistan, or Sri Lanka, Nepal has no current UK Upper Tribunal country guidance. There are no binding country guidance findings from the UK tribunal on conditions in Nepal. This makes independent expert evidence especially valuable, as the tribunal must rely on the merits of expert analysis rather than country guidance presumptions.",
      "Nepal asylum claims include Maoist-linked claims, both those persecuted by Maoists during the insurgency and former Maoist combatants facing retaliation from opponents. Dalit caste discrimination claims arise from systematic social exclusion and violence. Ethnic minority claims from Madhesi, Tharu, and Janajati groups reflect continuing discrimination and political marginalisation.",
      "Political persecution claims from journalists and human rights defenders also arise from Nepal. Expert witnesses provide country conditions analysis addressing the specific regional, ethnic, and caste context of each appellant's claim, with particular attention to the absence of binding UK country guidance.",
    ],
    faqs: [
      {
        question: "Why is expert evidence particularly important in Nepal cases?",
        answer:
          "Unlike Somalia, Pakistan, or Sri Lanka, Nepal has no current UK Upper Tribunal country guidance. There are no binding country guidance findings from the UK tribunal on conditions in Nepal. This makes independent expert evidence especially valuable, as the tribunal must rely on the merits of expert analysis rather than country guidance presumptions.",
      },
      {
        question: "What asylum claims arise from Nepal?",
        answer:
          "Nepal asylum claims include Maoist-linked claims (both those persecuted by Maoists during the insurgency and former Maoist combatants facing retaliation from opponents), Dalit caste discrimination claims, ethnic minority claims from Madhesi, Tharu, and Janajati groups, and political persecution claims from journalists and human rights defenders.",
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
    metaTitle: "Bhutan Expert Witness UK | Lhotshampa & Nepali-Speaking Minority Asylum Reports",
    metaDescription:
      "Bhutan expert witness for UK asylum tribunals. Lhotshampa ethnic Nepali minority, citizenship stripping, continuing discrimination, and political dissident persecution.",
    h1: "Bhutan Country Expert Witness UK",
    claimVolume: "Low",
    keyProfiles: "Lhotshampa, political",
    countryGuidance: "No current CG",
    content: [
      "The Lhotshampa are ethnic Nepali-speaking people who were expelled from Bhutan in the 1990s. Approximately 100,000 fled to Nepal following citizenship stripping under Bhutan's nationality laws. Residual claims from Bhutan involve continuing discrimination against Nepali speakers who remain, political opposition persecution, and in some cases claims from individuals previously displaced to Nepal who fear return to Bhutan.",
      "Bhutan generates relatively low claim volumes in the UK compared to other South Asian countries. However, those claims that do arise are often complex, requiring specialist knowledge of Bhutanese politics, the Lhotshampa situation, and the limited publicly available country information.",
      "Buddhist religious minority claims and political dissident persecution also arise from Bhutan. Expert witnesses provide analysis of Bhutan's unique political system, the residual effects of the 1990s expulsion policy, and the practical risks facing specific appellant profiles on return.",
    ],
    faqs: [
      {
        question: "Who are the Lhotshampa and what asylum claims arise?",
        answer:
          "The Lhotshampa are ethnic Nepali-speaking people who were expelled from Bhutan in the 1990s. Approximately 100,000 fled to Nepal following citizenship stripping. Residual claims from Bhutan involve continuing discrimination against Nepali speakers who remain, political opposition persecution, and in some cases claims from individuals previously displaced to Nepal who fear return to Bhutan.",
      },
      {
        question: "How common are Bhutan asylum claims in the UK?",
        answer:
          "Bhutan generates relatively low claim volumes in the UK compared to other South Asian countries. However, those claims that do arise are often complex, requiring specialist knowledge of Bhutanese politics, the Lhotshampa situation, and the limited publicly available country information.",
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
