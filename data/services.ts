import type { FAQ } from "@/lib/schema";

export type ServicePhase = {
  phase: string;
  whatWeDo: string;
  deliverable: string;
};

export type Service = {
  id: string;
  title: string;
  navLabel: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  content: string[];
  relatedHref: string;
  methodology: ServicePhase[];
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    id: "bangladesh-country-reports",
    title: "Bangladesh Country Condition Reports UK",
    navLabel: "Bangladesh Reports",
    description:
      "General Bangladesh country condition reports covering state protection, internal relocation, profile-specific risk, and post-August 2024 political conditions.",
    metaTitle: "Bangladesh Country Condition Reports UK | Asylum Expert Reports",
    metaDescription:
      "Bangladesh country condition expert reports for UK asylum appeals. BNP/Awami League politics, Hindu minorities, LGBTQ+ persecution, and post-August 2024 conditions.",
    content: [
      "Bangladesh country condition reports provide independent, tribunal-ready analysis for UK asylum appeals involving political persecution, religious minority risk, LGBTQ+ criminalisation, and journalist persecution.",
      "Reports assess profile-specific risk against current Home Office CPINs, district-level conditions, and the fundamental political transition following Sheikh Hasina's departure in August 2024. All reports comply with Immigration Tribunal Practice Direction paragraph 10.",
    ],
    relatedHref: "/countries/bangladesh",
    methodology: [
      { phase: "Case scoping", whatWeDo: "Identify asylum profile, relevant CPINs, and post-2024 political context", deliverable: "Scope confirmation and expert match" },
      { phase: "Research", whatWeDo: "Field research, Home Office COI, UNHCR, and primary sources", deliverable: "Source bibliography" },
      { phase: "Report drafting", whatWeDo: "OSCOLA-cited report addressing profile-specific risk and state protection", deliverable: "Practice Direction compliant expert report" },
    ],
    faqs: [
      {
        question: "What should a Bangladesh country condition report include?",
        answer:
          "Reports address profile-specific risk, state protection analysis, internal relocation feasibility where relevant, and current post-August 2024 political conditions, with OSCOLA-cited sources and field research.",
      },
      {
        question: "How has the fall of Sheikh Hasina's government affected Bangladesh reports?",
        answer:
          "The August 2024 transition fundamentally altered risk profiles. Former Awami League supporters may now face greater risk, while BNP/Jamaat claimants persecuted under Hasina may face changed country conditions arguments. Reports must assess conditions as of the current date.",
      },
      {
        question: "Are Bangladesh expert reports Legal Aid compatible?",
        answer: "Yes. Most reports in asylum proceedings are Legal Aid funded. LAA prior authority is required before instruction.",
      },
    ],
  },
  {
    id: "india-country-reports",
    title: "India Country Expert Reports UK",
    navLabel: "India Reports",
    description:
      "Hindutva/Muslim minority reports, Sikh claims, internal relocation analysis, and CAA/NRC context for UK immigration tribunals.",
    metaTitle: "India Country Expert Reports UK | Muslim, Sikh & Minority Asylum",
    metaDescription:
      "India country expert reports for UK tribunals. Hindutva targeting of Muslims, Sikh Khalistan claims, Christian minorities, caste discrimination, and internal relocation analysis.",
    content: [
      "India country expert reports address the growing volume of UK asylum claims involving Hindutva/RSS targeting of Muslims, Sikh persecution, Christian minority claims, caste discrimination, and political dissident profiles.",
      "India's size means internal relocation arguments are heavily deployed by the Home Office. Expert reports challenge this where persecutors have national reach through Hindutva networks or where relocation would be unduly harsh.",
    ],
    relatedHref: "/countries/india",
    methodology: [
      { phase: "Profile analysis", whatWeDo: "Assess minority, political, or caste profile against current enforcement patterns", deliverable: "Risk profile summary" },
      { phase: "Protection assessment", whatWeDo: "State complicity, BJP-aligned administration patterns, police response", deliverable: "State protection analysis" },
      { phase: "Report", whatWeDo: "Internal relocation and national persecutor reach assessment", deliverable: "Tribunal-ready expert report" },
    ],
    faqs: [
      {
        question: "What persecution do Muslims face in India?",
        answer:
          "Muslim asylum claims typically involve targeted violence by Hindutva groups with political protection, mob lynching in some states, discriminatory application of laws, and the cumulative effect of anti-Muslim rhetoric at the national level.",
      },
      {
        question: "Can expert reports challenge internal relocation in India cases?",
        answer:
          "Yes. Where Hindutva networks have national reach or the appellant's profile creates risk across multiple states, expert reports assess whether internal relocation is safe, reasonable, and not unduly harsh.",
      },
      {
        question: "Is India a safe country for return?",
        answer:
          "India is not a designated safe third country in UK asylum law. State protection is inconsistent for certain minority groups, particularly in BJP-aligned states. Expert reports assess the specific profile and pattern of state complicity.",
      },
    ],
  },
  {
    id: "sri-lanka-country-reports",
    title: "Sri Lanka Country Expert Reports UK",
    navLabel: "Sri Lanka Reports",
    description:
      "KK [2021] framework analysis, Tamil/LTTE association reports, and diaspora activity risk assessment for UK tribunals.",
    metaTitle: "Sri Lanka Country Expert Reports UK | Tamil & LTTE Association",
    metaDescription:
      "Sri Lanka country expert reports for UK tribunals. KK [2021] UKUT 245 country guidance, Tamil persecution, LTTE associations, and diaspora activism risk.",
    content: [
      "Sri Lanka country expert reports apply the KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245 framework to assess Tamil persecution, LTTE associations, diaspora activism risk, and political opposition profiles.",
      "Reports assess whether the appellant's specific profile creates a real risk on return, including those with actual or imputed LTTE associations, high-profile diaspora activists, or those who have given evidence against the Sri Lankan government.",
    ],
    relatedHref: "/countries/sri-lanka",
    methodology: [
      { phase: "CG framework", whatWeDo: "Map appellant profile against KK [2021] country guidance findings", deliverable: "Country guidance applicability analysis" },
      { phase: "Diaspora risk", whatWeDo: "Assess UK-based Tamil activities and intelligence service awareness", deliverable: "Diaspora activity risk section" },
      { phase: "Report", whatWeDo: "Profile-specific risk on return conclusion with OSCOLA citations", deliverable: "Tribunal-ready expert report" },
    ],
    faqs: [
      {
        question: "What is the KK country guidance on Sri Lanka?",
        answer:
          "KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245 established that Tamil asylum seekers with certain profiles face real risk on return, particularly those with LTTE associations, diaspora activists, or those who gave evidence against the government.",
      },
      {
        question: "Does diaspora Tamil activism in the UK create risk on return?",
        answer:
          "Yes. Where Tamil diaspora activities in the UK have come to the attention of Sri Lankan intelligence services, they can create or enhance a risk profile. Expert reports assess the nature and visibility of UK-based activities.",
      },
      {
        question: "Are Sri Lanka expert reports consistent with current CPINs?",
        answer:
          "Yes. Reports address Home Office CPIN positions on Tamils, LTTE associations, and human rights defenders while applying the KK [2021] country guidance framework.",
      },
    ],
  },
  {
    id: "nepal-bhutan-country-reports",
    title: "Nepal & Bhutan Country Expert Reports UK",
    navLabel: "Nepal & Bhutan Reports",
    description:
      "Expert reports where no UK country guidance exists: Maoist claims, Dalit/caste discrimination, ethnic minorities, and Lhotshampa persecution.",
    metaTitle: "Nepal & Bhutan Country Expert Reports UK | No Country Guidance",
    metaDescription:
      "Nepal and Bhutan country expert reports for UK tribunals. Maoist-linked claims, Dalit caste discrimination, Madhesi minorities, and Lhotshampa persecution where no UK country guidance exists.",
    content: [
      "Unlike Somalia, Pakistan, or Sri Lanka, Nepal and Bhutan have no current UK Upper Tribunal country guidance. Independent expert reports are especially valuable as tribunals must rely on expert analysis rather than binding country guidance presumptions.",
      "Reports address Maoist-linked claims, Dalit caste discrimination, Madhesi, Tharu, and Janajati ethnic minorities in Nepal, and Lhotshampa and Nepali-speaking minority persecution in Bhutan.",
    ],
    relatedHref: "/countries/nepal",
    methodology: [
      { phase: "Profile mapping", whatWeDo: "Identify Maoist, caste, ethnic, or Lhotshampa profile and claim grounds", deliverable: "Claim matrix summary" },
      { phase: "Country research", whatWeDo: "Field research, UN reports, and limited publicly available COI", deliverable: "Source bibliography" },
      { phase: "Report", whatWeDo: "Independent country conditions analysis without CG presumptions", deliverable: "Tribunal-ready expert report" },
    ],
    faqs: [
      {
        question: "Why are expert reports particularly important in Nepal cases?",
        answer:
          "Nepal has no current UK Upper Tribunal country guidance. Tribunals must rely on the merits of expert analysis rather than binding country guidance findings, making independent expert reports especially valuable.",
      },
      {
        question: "What asylum claims arise from Nepal?",
        answer:
          "Claims include Maoist-linked persecution, Dalit caste discrimination, ethnic minority claims from Madhesi, Tharu, and Janajati groups, and political persecution of journalists and human rights defenders.",
      },
      {
        question: "Who are the Lhotshampa and what claims arise from Bhutan?",
        answer:
          "The Lhotshampa are ethnic Nepali-speaking people expelled from Bhutan in the 1990s. Residual claims involve continuing discrimination against Nepali speakers, political opposition persecution, and complex return-risk analysis.",
      },
    ],
  },
  {
    id: "cpin-challenge-reports",
    title: "South Asia CPIN Challenge Expert Reports UK",
    navLabel: "CPIN Challenge",
    description:
      "Challenging Home Office CPIN positions on South Asian countries through gap analysis and independent country condition analysis.",
    metaTitle: "South Asia CPIN Challenge Expert Reports UK",
    metaDescription:
      "Independent expert reports challenging Home Office CPIN positions on Bangladesh, India, Sri Lanka, Nepal, and Bhutan. Gap analysis and profile-specific country conditions.",
    content: [
      "Home Office CPINs provide general country background but may not address the appellant's specific profile, district, or the cumulative effect of multiple risk factors. CPIN challenge reports provide independent analysis identifying gaps in CPIN coverage.",
      "Reports are particularly valuable for Bangladesh post-August 2024 claims, India minority profiles, and Nepal/Bhutan cases where CPIN coverage is limited or outdated.",
    ],
    relatedHref: "/cpin-country-guidance",
    methodology: [
      { phase: "CPIN review", whatWeDo: "Identify relevant CPINs and gaps relative to the appellant's profile", deliverable: "CPIN gap analysis" },
      { phase: "Independent research", whatWeDo: "Field research, UNHCR, and primary sources beyond CPIN coverage", deliverable: "Supplementary source bibliography" },
      { phase: "Report", whatWeDo: "Independent country conditions analysis challenging CPIN positions", deliverable: "CPIN challenge expert report" },
    ],
    faqs: [
      {
        question: "When should solicitors instruct a CPIN challenge report?",
        answer:
          "When the Home Office refusal relies on generic CPIN positions that do not address the appellant's specific profile, district, political affiliation, or the cumulative effect of multiple risk factors.",
      },
      {
        question: "Which South Asian countries have limited CPIN coverage?",
        answer:
          "Nepal and Bhutan have limited CPIN coverage. Bangladesh CPINs may not reflect post-August 2024 conditions. India CPINs may not fully address Hindutva network reach or profile-specific minority risk.",
      },
      {
        question: "Do CPIN challenge reports replace country condition reports?",
        answer:
          "CPIN challenge reports are a specialist subset of country condition reports focused on identifying and addressing gaps in Home Office CPIN positions. They include full profile-specific risk analysis.",
      },
    ],
  },
  {
    id: "internal-relocation-analysis",
    title: "South Asia Internal Relocation Expert Reports UK",
    navLabel: "Internal Relocation",
    description:
      "India nationwide persecutor reach, Bangladesh district-specific analysis, and viability and undue harshness assessments.",
    metaTitle: "South Asia Internal Relocation Expert Reports UK",
    metaDescription:
      "Internal relocation expert reports for South Asian asylum appeals. India Hindutva network reach, Bangladesh district analysis, and undue harshness assessments.",
    content: [
      "Internal relocation is a central issue in South Asian asylum appeals, particularly from India where the Home Office argues appellants can relocate to another state. Expert reports assess whether persecutors have national reach and whether relocation would be unduly harsh.",
      "For Bangladesh, district-specific analysis is critical given regional political dynamics. For India, Hindutva/RSS networks operate nationally, challenging generic internal relocation arguments.",
    ],
    relatedHref: "/asylum-profiles/religious-minority-persecution",
    methodology: [
      { phase: "Persecutor reach", whatWeDo: "Assess whether persecutors operate locally, regionally, or nationally", deliverable: "Persecutor reach analysis" },
      { phase: "Relocation viability", whatWeDo: "Assess safety, reasonableness, and undue harshness of proposed relocation", deliverable: "Internal relocation feasibility section" },
      { phase: "Report", whatWeDo: "Conclusion on internal relocation with OSCOLA-cited sources", deliverable: "Tribunal-ready expert report" },
    ],
    faqs: [
      {
        question: "How do expert reports challenge internal relocation in India cases?",
        answer:
          "Reports assess whether Hindutva/RSS networks have national reach, whether the appellant's profile creates risk across multiple states, and whether relocation would be unduly harsh given economic, social, and protection factors.",
      },
      {
        question: "Is internal relocation analysis relevant for Bangladesh?",
        answer:
          "Yes. Bangladesh political dynamics vary significantly by district. Expert reports provide district-specific analysis of whether relocation would place the appellant at risk from opposing political factions or communal violence.",
      },
      {
        question: "What legal test applies to internal relocation?",
        answer:
          "Tribunals apply the test from HJ (Iran) [2010] UKSC 31: internal relocation must be safe, reasonable, and not unduly harsh. Expert reports provide the country conditions evidence to assess each element.",
      },
    ],
  },
  {
    id: "bangladesh-post-2024-reports",
    title: "Post-August 2024 Bangladesh Expert Reports UK",
    navLabel: "Post-2024 Bangladesh",
    description:
      "Specialist reports on the political transition, reversed BNP/AL dynamics, and current conditions analysis following Sheikh Hasina's departure.",
    metaTitle: "Post-August 2024 Bangladesh Expert Reports UK",
    metaDescription:
      "Post-August 2024 Bangladesh expert reports for UK tribunals. Political transition analysis, reversed BNP/Awami League dynamics, and current country conditions.",
    content: [
      "The fall of Sheikh Hasina's Awami League government in August 2024, following mass student protests, has fundamentally changed the asylum landscape for Bangladesh. Expert reports must assess post-August 2024 conditions, not the position under the previous government.",
      "Former Awami League supporters and officials may now face greater risk. BNP and Jamaat supporters who were genuinely persecuted under Hasina may face a changed country conditions argument. Timely expert evidence is essential as conditions continue to evolve.",
    ],
    relatedHref: "/guides/bangladesh-asylum-2024-guide",
    methodology: [
      { phase: "Transition analysis", whatWeDo: "Assess current political landscape and reversed persecution dynamics", deliverable: "Post-2024 political context section" },
      { phase: "Profile risk", whatWeDo: "Map appellant's political affiliation and minority status to current risk", deliverable: "Profile-specific risk analysis" },
      { phase: "Report", whatWeDo: "Dated country conditions conclusion as of instruction date", deliverable: "Timely tribunal-ready expert report" },
    ],
    faqs: [
      {
        question: "Why are post-August 2024 Bangladesh reports especially important?",
        answer:
          "The political transition reversed persecution dynamics. Reports based on pre-2024 conditions may be outdated. Tribunals need current analysis of who faces risk under the new political order.",
      },
      {
        question: "How does the political transition affect existing Bangladesh claims?",
        answer:
          "Existing claims may need supplementary expert evidence addressing changed conditions. Awami League supporters may have strengthened claims; some BNP/Jamaat claims may require reassessment of country conditions arguments.",
      },
      {
        question: "How quickly can post-2024 Bangladesh reports be prepared?",
        answer:
          "Standard turnaround is 2 to 3 weeks. Urgent reports may be available subject to expert availability. Post-2024 reports are prioritised given the rapidly evolving political situation.",
      },
    ],
  },
  {
    id: "oral-evidence-tribunal",
    title: "Oral Evidence at Immigration Tribunal UK",
    navLabel: "Oral Evidence",
    description:
      "Expert witness oral evidence at FTT and Upper Tribunal hearings, Practice Direction compliance, and cross-examination readiness.",
    metaTitle: "Oral Evidence at Immigration Tribunal UK | South Asia Expert Witness",
    metaDescription:
      "South Asia expert witness oral evidence at UK immigration tribunals. Practice Direction compliance, FTT and Upper Tribunal attendance, and cross-examination readiness.",
    content: [
      "In addition to written country condition reports, qualified South Asia experts can attend immigration tribunal hearings to give oral evidence, respond to cross-examination, and assist the tribunal with country conditions analysis.",
      "Oral evidence requires Practice Direction paragraph 10 compliance, advance disclosure of the expert report, and preparation for cross-examination on methodology, sources, and conclusions. Experts attend as independent witnesses with a paramount duty to the tribunal.",
    ],
    relatedHref: "/qualifications",
    methodology: [
      { phase: "Report preparation", whatWeDo: "Draft tribunal-ready written report as foundation for oral evidence", deliverable: "Practice Direction compliant expert report" },
      { phase: "Hearing preparation", whatWeDo: "Review skeleton arguments, Home Office evidence, and cross-examination topics", deliverable: "Pre-hearing briefing" },
      { phase: "Tribunal attendance", whatWeDo: "Give oral evidence, respond to cross-examination, assist the tribunal", deliverable: "Oral expert evidence at hearing" },
    ],
    faqs: [
      {
        question: "When is oral expert evidence needed at immigration tribunals?",
        answer:
          "Oral evidence is appropriate where the tribunal needs to test the expert's methodology, where country conditions are contested, or where the Home Office has instructed a competing expert. Written reports alone may suffice in straightforward cases.",
      },
      {
        question: "What Practice Direction requirements apply to oral expert evidence?",
        answer:
          "Immigration Tribunal Practice Direction paragraph 10 requires advance disclosure of the expert report, a statement of truth, qualifications, independence, and identification of sources. Experts must distinguish fact from opinion.",
      },
      {
        question: "Can the same expert provide both a written report and oral evidence?",
        answer:
          "Yes. The standard approach is to instruct a written country condition report first, with oral evidence at the hearing if required. This is more cost-effective than instructing oral evidence alone.",
      },
    ],
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
