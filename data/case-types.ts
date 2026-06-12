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
    title: "FTT South Asia Appeal",
    metaTitle: "FTT South Asia Appeal Expert Witness UK | First-tier Tribunal Reports",
    metaDescription:
      "South Asia expert witness reports for First-tier Tribunal asylum appeals. Bangladesh, India, Sri Lanka, Nepal, Bhutan country condition reports for FTT proceedings.",
    h1: "FTT South Asia Appeal Expert Witness UK",
    content: [
      "First-tier Tribunal (FTT) asylum appeals from South Asian nationals require country condition reports that address the specific risk profile of the appellant against current conditions in Bangladesh, India, Sri Lanka, Nepal, or Bhutan. Expert reports must comply with Immigration Tribunal Practice Direction paragraph 10 and CPR Part 35.",
      "South Asian FTT appeals frequently involve challenges to Home Office CPIN positions, internal relocation arguments (particularly in India), and the application of country guidance (KK [2021] for Sri Lanka Tamil claims). Expert witnesses provide independent analysis that goes beyond generic country information.",
      "Early instruction allows sufficient time for profile-specific research, particularly where post-August 2024 Bangladesh conditions or evolving India Hindutva dynamics require current analysis. Reports should be served in accordance with tribunal directions and hearing timetables.",
    ],
    faqs: [
      {
        question: "When should I instruct a South Asia expert for an FTT appeal?",
        answer:
          "Instruct as early as possible after grounds of appeal are filed. Allow 2 to 4 weeks for a standard country condition report. Urgent reports (within 72 hours) may be available subject to expert availability. Provide the AIR, RFRL, witness statement, and relevant CPINs with the instruction.",
      },
    ],
  },
  {
    slug: "upper-tribunal-south-asia",
    title: "Upper Tribunal South Asia",
    metaTitle: "Upper Tribunal South Asia Expert Witness UK | UT Appeal Reports",
    metaDescription:
      "South Asia expert witness reports for Upper Tribunal appeals. Country guidance analysis, CPIN challenge, and specialist evidence for UT proceedings.",
    h1: "Upper Tribunal South Asia Expert Witness UK",
    content: [
      "Upper Tribunal (UT) appeals from South Asian asylum claims require expert evidence that addresses the legal errors identified in the FTT decision and provides updated country conditions analysis. UT proceedings demand rigorous, well-sourced expert reports with clear methodology.",
      "For Sri Lanka Tamil claims, UT appeals frequently engage KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245. Expert witnesses must assess whether the FTT correctly applied this country guidance to the appellant's specific profile.",
      "For Bangladesh, India, Nepal, and Bhutan claims where no current UK country guidance exists, UT appeals rely heavily on the quality and independence of expert evidence. Expert witnesses provide analysis that addresses both general country conditions and the individual risk profile.",
    ],
    faqs: [
      {
        question: "What additional requirements apply to UT expert reports?",
        answer:
          "UT expert reports should address the specific grounds of appeal, cite current country information sources, and provide clear reasoning on risk assessment methodology. Where the FTT erred in applying country guidance or CPIN positions, the expert report should address the correct legal framework.",
      },
    ],
  },
  {
    slug: "sri-lanka-tamil-claims",
    title: "Sri Lanka Tamil Claims",
    metaTitle: "Sri Lanka Tamil Expert Witness UK | KK [2021] Country Guidance Reports",
    metaDescription:
      "Sri Lanka Tamil expert witness for UK asylum tribunals. KK [2021] UKUT 00245 framework, LTTE associations, diaspora activism risk, Tamil persecution analysis.",
    h1: "Sri Lanka Tamil Claims Expert Witness UK",
    content: [
      "Sri Lanka Tamil asylum claims are governed by KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245, which established that Tamil asylum seekers with certain profiles face real risk on return. Expert witnesses assess the appellant's profile against this country guidance framework.",
      "Key risk profiles include actual or imputed LTTE associations, high-profile diaspora activists, those who have given evidence against the Sri Lankan government, and individuals whose UK-based Tamil political activities have come to the attention of Sri Lankan intelligence.",
      "Expert witnesses provide analysis of the appellant's Tamil community profile, political affiliations, diaspora activities, and the current security environment in Sri Lanka for Tamils with similar profiles.",
    ],
    faqs: [
      {
        question: "How does KK [2021] affect Sri Lanka Tamil expert evidence?",
        answer:
          "KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245 provides the binding country guidance framework for Tamil claims. Expert witnesses must assess the appellant's profile against the risk categories identified in this case, providing analysis of LTTE associations, diaspora activism, and current conditions for Tamils on return.",
      },
    ],
  },
  {
    slug: "bangladesh-political-claims",
    title: "Bangladesh Political Claims",
    metaTitle: "Bangladesh Political Expert Witness UK | Post-August 2024 BNP/AL Reports",
    metaDescription:
      "Bangladesh political persecution expert witness for UK tribunals. Post-August 2024 transition, BNP/Awami League reversal, Jamaat, Hindu minority, expert evidence.",
    h1: "Bangladesh Political Claims Expert Witness UK",
    content: [
      "Bangladesh political asylum claims have been fundamentally reshaped by the August 2024 fall of Sheikh Hasina's Awami League government. Expert witnesses must assess current post-transition conditions rather than relying on pre-2024 country information.",
      "Former BNP and Jamaat supporters who were genuinely persecuted under the Awami League may now face changed country conditions arguments. Conversely, Awami League supporters and former officials face new risks under the post-transition power structure.",
      "Expert witnesses provide analysis of the current political landscape, the appellant's party affiliations and visibility, police and judicial complicity, and district-specific risk factors for political persecution in Bangladesh.",
    ],
    faqs: [
      {
        question: "Why is post-August 2024 expert evidence essential for Bangladesh political claims?",
        answer:
          "The August 2024 political transition has reversed the persecution dynamic for many Bangladesh political claimants. Expert witnesses must assess conditions as of the current date, not under the previous Awami League government. Pre-2024 country information may no longer accurately reflect risk for either BNP or Awami League supporters.",
      },
    ],
  },
  {
    slug: "india-minority-claims",
    title: "India Minority Claims",
    metaTitle: "India Minority Expert Witness UK | Muslim, Sikh, Christian & Caste Reports",
    metaDescription:
      "India minority expert witness for UK asylum tribunals. Hindutva targeting, Muslim persecution, Sikh Khalistan, Christian minorities, caste discrimination, internal relocation.",
    h1: "India Minority Claims Expert Witness UK",
    content: [
      "India minority asylum claims require expert evidence addressing Hindutva and RSS targeting of Muslims, Sikh claims linked to Khalistan associations, Christian minority persecution, caste discrimination against Dalits, and the viability of internal relocation within India.",
      "The Home Office frequently argues that internal relocation to major cities is available for Indian appellants. Expert witnesses challenge this where the persecutor has national reach (Hindutva networks, RSS) or where relocation would be unduly harsh given the appellant's profile and resources.",
      "Expert witnesses assess state protection availability in the specific state and region of origin, the nationwide reach of Hindutva organisations, and the cumulative effect of anti-minority rhetoric and violence on the appellant's specific risk profile.",
    ],
    faqs: [
      {
        question: "How do experts challenge internal relocation arguments in India cases?",
        answer:
          "Expert witnesses assess whether the persecutor has national reach (Hindutva networks, RSS), whether the appellant's profile is identifiable nationwide, and whether relocation to a proposed city would be unduly harsh given social networks, economic circumstances, and continuing risk from national-level persecution networks.",
      },
    ],
  },
  {
    slug: "deportation-return-south-asia",
    title: "Deportation Return South Asia",
    metaTitle: "Deportation Return Expert Witness UK | South Asia Risk Assessment",
    metaDescription:
      "Deportation and return risk expert witness for South Asian failed asylum seekers. Country-specific return risk analysis for Bangladesh, India, Sri Lanka, Nepal, Bhutan.",
    h1: "Deportation Return South Asia Expert Witness UK",
    content: [
      "Deportation and return proceedings for South Asian nationals require expert evidence on the risk the individual would face on return to their country of origin. Return risk depends on the individual's profile, current country conditions, and any material changes since the original asylum decision.",
      "Post-August 2024 Bangladesh conditions may mean profiles previously assessed as low risk now face genuine persecution. Expert witnesses provide current country condition analysis for individual return risk assessment.",
      "Expert witnesses address certification challenges, fresh claim support, and judicial review proceedings where return to South Asia would create a real risk of persecution or serious harm for the specific appellant.",
    ],
    faqs: [
      {
        question: "Can expert evidence support a fresh claim after failed South Asian asylum?",
        answer:
          "Yes. Where country conditions have changed materially (such as the August 2024 Bangladesh transition) or new evidence has emerged about the appellant's risk profile, expert witnesses can provide country condition analysis supporting a fresh claim under paragraph 353 of the Immigration Rules.",
      },
    ],
  },
  {
    slug: "fresh-claims-south-asia",
    title: "Fresh Claims South Asia",
    metaTitle: "Fresh Claims Expert Witness UK | South Asia Country Conditions",
    metaDescription:
      "Fresh claim expert witness for South Asian asylum seekers. Post-2024 Bangladesh conditions, evolving India Hindutva risk, updated country analysis for fresh claims.",
    h1: "Fresh Claims South Asia Expert Witness UK",
    content: [
      "Fresh asylum claims from South Asian nationals require evidence that was not and could not reasonably have been provided at the time of the original decision. Expert country condition reports can establish that conditions have changed materially or that new risk factors have emerged.",
      "The August 2024 Bangladesh political transition is a prime example of materially changed country conditions affecting existing claims. Expert witnesses provide updated analysis addressing the current political landscape and its impact on the appellant's specific profile.",
      "Fresh claims may also arise from new evidence about the appellant's political affiliations, religious visibility, diaspora activities, or caste status that was not previously documented. Expert witnesses assess how this new information affects the risk assessment.",
    ],
    faqs: [
      {
        question: "What makes a fresh claim expert report different from an appeal report?",
        answer:
          "Fresh claim reports must address what has changed since the original decision: new country conditions, newly discovered risk factors, or evidence that could not reasonably have been provided earlier. The expert must clearly identify the material change and its impact on the appellant's risk profile.",
      },
    ],
  },
  {
    slug: "certification-challenge",
    title: "Certification Challenge",
    metaTitle: "Certification Challenge Expert Witness UK | South Asia Asylum Claims",
    metaDescription:
      "Certification challenge expert witness for South Asian asylum claims. Challenge clearly unfounded certification with independent country condition analysis.",
    h1: "Certification Challenge Expert Witness UK | South Asia",
    content: [
      "The Home Office may certify South Asian asylum claims as clearly unfounded under section 94 of the Nationality, Immigration and Asylum Act 2002, removing the right of in-country appeal. Certification is inappropriate where a claim has a realistic prospect of success.",
      "Expert witnesses help solicitors challenge certification by providing independent country condition analysis demonstrating that the claim has merit. This is particularly important for Bangladesh post-2024 claims, India minority claims, and Nepal claims where no country guidance exists.",
      "Expert reports for certification challenges should address the specific reasons the Home Office considers the claim unfounded and provide evidence-based analysis of why the appellant's profile creates a realistic prospect of success.",
    ],
    faqs: [
      {
        question: "How quickly can an expert report be prepared for a certification challenge?",
        answer:
          "Urgent certification challenge reports may be available within 72 hours subject to expert availability. Provide the certification notice, RFRL, witness statement, and any relevant CPINs with the instruction. Early instruction is critical given the shortened appeal window.",
      },
    ],
  },
];

export function getCaseType(slug: string): CaseType | undefined {
  return caseTypes.find((c) => c.slug === slug);
}
