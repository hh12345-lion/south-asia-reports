import type { FAQ } from "@/lib/schema";

export type Guide = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs?: FAQ[];
};

export const guides: Guide[] = [
  {
    slug: "bangladesh-asylum-2024-guide",
    metaTitle: "Bangladesh Asylum Post-August 2024 Guide | Expert Evidence for UK Solicitors",
    metaDescription:
      "Guide to Bangladesh asylum claims after the August 2024 political transition. Changed country conditions, BNP/AL reversal, Hindu minority, expert report approach.",
    h1: "Bangladesh Asylum Claims Post-August 2024: Expert Evidence Guide",
    content: [
      "The August 2024 fall of Sheikh Hasina's Awami League government has fundamentally changed the landscape for Bangladesh asylum claims in UK tribunals. This guide explains the political transition, its impact on existing and new claims, and how expert evidence should address post-transition conditions.",
      "Before August 2024, BNP and Jamaat supporters formed the majority of Bangladesh political persecution claims, with Awami League supporters generally considered safe. The transition has reversed this dynamic for many profiles. Former Awami League officials, supporters, and journalists who backed the previous government may now face genuine risk.",
      "Expert reports for Bangladesh claims must assess conditions as of the instruction date, not the pre-2024 position. Reports should address the appellant's specific party affiliations, district of origin, minority status (where relevant), and the current political power structure's attitude toward their profile.",
      "Hindu minority claims require separate analysis from political claims, as communal violence against Hindus may intensify during political transitions regardless of which party holds power. LGBTQ+ claims under section 377 PPC require analysis of both legal criminalisation and social persecution.",
    ],
    faqs: [
      {
        question: "Should I obtain a new expert report for pending Bangladesh appeals?",
        answer:
          "If your expert report pre-dates August 2024 and addresses political persecution, consider obtaining an updated report or supplementary analysis addressing post-transition conditions. The tribunal may regard pre-2024 country information as outdated for political claims.",
      },
    ],
  },
  {
    slug: "india-asylum-guide",
    metaTitle: "India Asylum Claims Guide | Expert Evidence for UK Solicitors",
    metaDescription:
      "Guide to India asylum claims in UK tribunals. Hindutva, CAA/NRC, Sikhs, internal relocation, state protection analysis, and expert evidence methodology.",
    h1: "India Asylum Claims: Expert Evidence Guide for UK Solicitors",
    content: [
      "India generates growing asylum claim volumes in the UK, driven by Hindutva targeting of Muslims, Sikh claims, Christian minority persecution, caste discrimination, and political dissident persecution. This guide explains how expert evidence addresses the key legal challenges in India asylum claims.",
      "The Home Office frequently argues that internal relocation within India is available, particularly to major cities. Expert witnesses challenge this where Hindutva networks and RSS have national reach, where the appellant's profile is identifiable nationwide, or where relocation would be unduly harsh.",
      "Muslim persecution claims require analysis of state-level variation: BJP-governed states present higher risk profiles than non-BJP states, but national-level Hindutva rhetoric creates risk even in opposition-governed states. Expert witnesses assess both local and national risk factors.",
      "CAA and NRC concerns affect primarily Muslim appellants from Assam and other border states. Sikh claims require analysis of Khalistan associations, historical persecution, and current Punjab conditions. Caste discrimination claims require regional and community-specific Dalit risk analysis.",
    ],
    faqs: [
      {
        question: "How do experts address the 'safe country' argument for India?",
        answer:
          "India is not a designated safe third country. Expert witnesses assess whether state protection is realistically available for the specific appellant's profile, addressing the gap between formal legal protections and practical enforcement, particularly for minorities in BJP-governed states.",
      },
    ],
  },
  {
    slug: "sri-lanka-kk-guide",
    metaTitle: "Sri Lanka Tamil Asylum Guide | KK [2021] Country Guidance Framework",
    metaDescription:
      "Guide to Sri Lanka Tamil asylum claims under KK [2021] UKUT 00245. LTTE association profiles, diaspora risk, expert role in Tamil persecution claims.",
    h1: "Sri Lanka Tamil Asylum Claims: KK Country Guidance Guide",
    content: [
      "KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245 is the binding country guidance for Sri Lanka Tamil asylum claims in UK tribunals. This guide explains the KK framework, the risk profiles it identifies, and how expert evidence supports Tamil persecution claims.",
      "The KK country guidance identifies several risk profiles: Tamils with actual LTTE associations, those with imputed LTTE associations, high-profile diaspora activists, those who have given evidence against the Sri Lankan government, and individuals whose UK-based activities have attracted the attention of Sri Lankan intelligence.",
      "Expert witnesses assess the appellant's profile against each KK risk category, providing analysis of LTTE associations (actual or imputed), diaspora political activities, and current conditions for Tamils with similar profiles on return to Sri Lanka.",
      "Diaspora activism risk is a growing area of Sri Lanka Tamil claims. Expert witnesses assess the visibility of UK-based Tamil political activities, the capacity of Sri Lankan intelligence to monitor diaspora networks, and the consequences for the appellant on return.",
    ],
    faqs: [
      {
        question: "Does KK [2021] still apply to current Sri Lanka Tamil claims?",
        answer:
          "Yes. KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245 remains the leading country guidance for Tamil claims. Expert witnesses should assess the appellant's profile against the KK framework while noting any material changes in Sri Lankan conditions since 2021.",
      },
    ],
  },
  {
    slug: "south-asia-cpin-guide",
    metaTitle: "South Asia CPINs 2025 Guide | Solicitor's Guide to Country Policy Information",
    metaDescription:
      "Guide to current South Asia CPINs for UK solicitors. CPIN coverage gaps, expert evidence filling gaps, Bangladesh post-2024, India, Sri Lanka, Nepal, Bhutan.",
    h1: "South Asia CPINs 2025: A Solicitor's Guide",
    content: [
      "Home Office Country Policy and Information Notes (CPINs) provide the starting point for country conditions analysis in UK asylum proceedings. This guide maps current CPIN coverage for South Asian countries and identifies where expert evidence is needed to fill gaps.",
      "Bangladesh CPINs cover political parties, religious minorities, and LGBTQ+ issues, but may not reflect post-August 2024 conditions. India CPINs address Sikh separatism, Muslims, LGBTQ+, and caste, but internal relocation analysis often requires expert supplementation. Sri Lanka CPINs cover Tamils, LTTE, and human rights defenders, aligned with KK [2021].",
      "Nepal has only general background CPIN coverage. Bhutan has limited CPIN coverage. For both countries, expert evidence is particularly valuable as there is no UK Upper Tribunal country guidance to supplement the CPINs.",
      "Expert witnesses challenge CPIN positions where they do not reflect the appellant's specific profile, provide updated analysis beyond CPIN publication dates, and address district-specific or community-specific risk factors that generic CPINs cannot cover.",
    ],
    faqs: [
      {
        question: "Are South Asia CPINs updated for post-2024 Bangladesh conditions?",
        answer:
          "CPIN updates may lag behind rapidly changing conditions. Expert witnesses provide current analysis that supplements or challenges CPIN positions, particularly for Bangladesh political claims where the August 2024 transition has materially changed country conditions.",
      },
    ],
  },
  {
    slug: "nepal-bhutan-expert-guide",
    metaTitle: "Nepal and Bhutan Asylum Guide | Expert Evidence for UK Solicitors",
    metaDescription:
      "Guide to Nepal and Bhutan asylum claims. No UK country guidance, Maoist claims, Dalits, Lhotshampa, why expert evidence is essential for tribunal proceedings.",
    h1: "Nepal and Bhutan Asylum Claims: Expert Evidence Guide",
    content: [
      "Nepal and Bhutan present unique challenges for UK asylum practitioners because neither country has current UK Upper Tribunal country guidance. Without binding country guidance, tribunals must rely on the quality and independence of expert evidence to assess country conditions and individual risk.",
      "Nepal claims arise from Maoist-linked persecution (both victims of Maoists and former combatants facing retaliation), Dalit caste discrimination, ethnic minority persecution (Madhesi, Tharu, Janajati), and political persecution of journalists and human rights defenders.",
      "Bhutan claims primarily involve the Lhotshampa (ethnic Nepali minority expelled in the 1990s), continuing discrimination against Nepali speakers, Buddhist religious minority claims, and political dissident persecution. Claim volumes are low but cases are often complex.",
      "Expert witnesses for Nepal and Bhutan cases should have field research experience, language capability (Nepali, Dzongkha), and academic expertise in the relevant political, ethnic, or caste dynamics. Reports must be particularly rigorous given the absence of country guidance presumptions.",
    ],
    faqs: [
      {
        question: "Why is there no UK country guidance for Nepal?",
        answer:
          "The UK Upper Tribunal has not issued binding country guidance on Nepal conditions. This means tribunals assess Nepal claims entirely on the merits of the evidence presented, making independent expert reports especially important compared to countries with established country guidance like Sri Lanka.",
      },
    ],
  },
  {
    slug: "instructing-south-asia-expert",
    metaTitle: "Instructing a South Asia Expert Guide | Solicitor's Instruction Guide",
    metaDescription:
      "Guide to instructing South Asia country experts for UK tribunals. Language experts, field research, letter of instruction, Legal Aid, tribunal requirements.",
    h1: "Instructing a South Asia Country Expert: A Solicitor's Guide",
    content: [
      "This guide explains the instruction process for South Asia country expert witnesses in UK asylum and immigration proceedings, covering expert selection, letter of instruction, Legal Aid requirements, and tribunal compliance.",
      "Select an expert with relevant country expertise, language capability, and field research experience. For Bangladesh post-2024 claims, ensure the expert can address current political conditions. For India minority claims, ensure expertise in Hindutva dynamics and internal relocation analysis. For Sri Lanka Tamil claims, ensure familiarity with KK [2021].",
      "The letter of instruction should include: the appellant's full history, specific risk factors, relevant CPINs and country guidance, questions for the expert to address, hearing date, and report deadline. Attach the AIR, RFRL, witness statement, and any supporting documents.",
      "For Legal Aid cases, obtain LAA prior authority before instruction. Include the expert CV, proposed scope, estimated hours, and fee estimate in your application. South Asia Reports provides LAA-compatible rates for all major South Asian asylum profiles.",
    ],
    faqs: [
      {
        question: "What documents should I send with a South Asia expert instruction?",
        answer:
          "Send the AIR, RFRL, witness statement, relevant CPINs, any previous expert reports, country guidance cases (e.g. KK [2021] for Sri Lanka), and a detailed letter of instruction specifying the questions the expert should address and the report deadline.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
