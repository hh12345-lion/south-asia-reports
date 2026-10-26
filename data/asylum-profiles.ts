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
    title: "Political Persecution Reports",
    metaTitle: "Political Persecution Country Report | South Asia Reports",
    metaDescription:
      "What a South Asia political persecution country report covers: party affiliation risk, post-August 2024 Bangladesh, Tamil political profiles and police complicity.",
    h1: "Political Persecution Country Condition Reports",
    content: [
      "A political persecution report answers three questions for the tribunal: does the party or movement in question face targeting, could the appellant obtain protection from the police or courts, and does this appellant's role make them visible enough to be at real risk. The report treats each question separately so that a judge can accept one finding without having to accept them all.",
      "For Bangladesh, the report has to be dated after August 2024. The fall of Sheikh Hasina's government changed who holds power locally, so material describing the position of BNP or Awami League supporters before that date can no longer carry the analysis on its own. Reports set out what has changed and what has not, district by district where the evidence allows.",
      "For India, Sri Lanka and Nepal the report focuses on the specific movement involved, whether opposition activism, Tamil political association or Maoist-linked history. Counsel should send the appellant's account of their role, any membership documents and arrest or FIR records, as these determine how the country evidence is applied.",
    ],
    faqs: [
      {
        question: "What does a political persecution country report contain?",
        answer:
          "It typically has an overview of the political situation at the date of the report, an assessment of how parties and movements of the appellant's type are treated, an analysis of police and judicial protection, and a profile-specific risk section. Each opinion is tied to cited sources so the tribunal can test it.",
      },
      {
        question: "Can a pre-2024 report still be used in a Bangladesh political claim?",
        answer:
          "Usually not on its own. Because the August 2024 transition reversed the position of several political groups, an older report risks describing a situation that no longer exists. An addendum or a fresh report covering post-transition conditions is normally needed.",
      },
    ],
    relatedCaseTypes: ["bangladesh-political-claims", "ftt-south-asia-appeal", "fresh-claims-south-asia"],
  },
  {
    slug: "religious-minority-persecution",
    title: "Religious Minority Reports",
    metaTitle: "Religious Minority Country Report | South Asia Reports",
    metaDescription:
      "Country reports on religious minorities from South Asia: Indian Muslims and Christians, Bangladeshi Hindus, Ahmadis. Individual targeting versus systemic risk.",
    h1: "Religious Minority Country Condition Reports",
    content: [
      "Religious minority reports cover the groups that appear most often in South Asian appeals: Muslims and Christians in India, Hindus in Bangladesh, Christians in Sri Lanka, and Ahmadis. The report identifies which of these groups the appellant belongs to and narrows the evidence to that community rather than describing religious freedom in general terms.",
      "A key structural choice is whether the claim rests on targeting by identifiable people, on the cumulative effect of discrimination and community hostility, or on both. The report addresses each route separately, because tribunals assess them under different parts of the legal test.",
      "Where internal relocation is in issue, the report looks at the appellant's home district and at the places the decision-maker has suggested, and explains why conditions there are or are not materially different for a person of the same faith.",
    ],
    faqs: [
      {
        question: "What information should counsel send for a religious minority report?",
        answer:
          "The appellant's faith and denomination, home district, any incidents with dates and the people involved, police complaints or refusals to register them, and the refusal letter's reasoning on state protection and relocation. These let the report focus on the points actually in dispute.",
      },
      {
        question: "Does the report deal with internal relocation?",
        answer:
          "Yes, if instructed. It compares the home area with any proposed relocation areas and explains whether the factors driving the risk, such as national networks or attitudes to the faith, would follow the appellant there.",
      },
    ],
    relatedCaseTypes: ["india-minority-claims", "ftt-south-asia-appeal", "upper-tribunal-south-asia"],
  },
  {
    slug: "lgbtq-south-asia",
    title: "LGBTQ+ Claim Reports",
    metaTitle: "LGBTQ+ Country Report for South Asian Claims | South Asia Reports",
    metaDescription:
      "Country reports for LGBTQ+ asylum claims from Bangladesh, India, Sri Lanka and Nepal: criminal law, social and family risk, and the HJ (Iran) framework.",
    h1: "LGBTQ+ Country Condition Reports",
    content: [
      "An LGBTQ+ report separates the law on paper from what happens in practice. It sets out the current legal position in the country concerned, including section 377 of the Penal Code in Bangladesh, criminalisation in Sri Lanka, India's 2018 decriminalisation in Navtej Singh Johar and the limited reforms in Nepal, and then documents how people are treated regardless of that position.",
      "Because the HJ (Iran) approach asks how the appellant would live on return and why, the report addresses the consequences of living openly, including family honour violence, exclusion from the community and loss of work. It does not assume that a change in criminal law removes risk.",
      "The report is drafted so it can sit alongside the appellant's own evidence about their identity without commenting on credibility, which is a matter for the tribunal.",
    ],
    faqs: [
      {
        question: "Is a report needed for India now that same-sex conduct is legal?",
        answer:
          "Often yes. Decriminalisation in 2018 changed the criminal law but not family or community attitudes in many areas. A report documents those non-state risks and whether police would realistically protect the appellant.",
      },
      {
        question: "Does the report comment on whether the appellant is gay or transgender?",
        answer:
          "No. Identity and credibility are for the tribunal. The report assesses the risk that would arise for a person with the profile the appellant describes.",
      },
    ],
    relatedCaseTypes: ["india-minority-claims", "ftt-south-asia-appeal", "certification-challenge"],
  },
  {
    slug: "caste-discrimination",
    title: "Caste Discrimination Reports",
    metaTitle: "Caste Discrimination Country Report | South Asia Reports",
    metaDescription:
      "Country reports for caste-based asylum claims from India and Nepal: Dalit status as a particular social group, severity of harm and gaps in state protection.",
    h1: "Caste Discrimination Country Condition Reports",
    content: [
      "Caste claims turn on whether the harm described reaches the level of persecution. A caste report therefore documents the kinds of harm reported against Dalit communities in the appellant's region of India or Nepal, such as violence, exclusion from work and land, and coerced practices, and indicates how common and how serious they are.",
      "The report addresses whether Dalits can be treated as a particular social group and explains the gap between constitutional protections and how police respond to complaints from lower-caste people in practice.",
      "Where instructed, it also comments on whether the caste status the appellant describes is consistent with their name, village and community, using published material rather than speculation.",
    ],
    faqs: [
      {
        question: "What makes a caste report persuasive to a tribunal?",
        answer:
          "Specificity. Evidence from the appellant's own state or district, figures on reported incidents and police responses, and a clear explanation of why general anti-discrimination laws do not protect this person in practice.",
      },
      {
        question: "Can the report confirm the appellant's caste?",
        answer:
          "It cannot confirm identity, but it can say whether the details given, such as surname, locality and occupation, are consistent with the claimed caste according to available sources.",
      },
    ],
    relatedCaseTypes: ["india-minority-claims", "ftt-south-asia-appeal", "upper-tribunal-south-asia"],
  },
  {
    slug: "women-gender-based-violence",
    title: "Gender-Based Violence Reports",
    metaTitle: "Gender-Based Violence Country Report | South Asia Reports",
    metaDescription:
      "Country reports for women's asylum claims from South Asia: forced marriage, honour and dowry violence, acid attacks, trafficking, and protection on return.",
    h1: "Gender-Based Violence Country Condition Reports",
    content: [
      "Gender-based violence reports cover forced marriage and honour violence, dowry violence in India and Bangladesh, acid attacks in Bangladesh, trafficking from Nepal and India, and domestic abuse. The report focuses on the type of harm the appellant fears rather than surveying all of them.",
      "Most South Asian countries have laws against these forms of violence, so the central question is usually enforcement. The report looks at how police, courts and shelters respond in the appellant's area, and whether a woman returning alone, or with children, could access them.",
      "It also considers practical factors that affect safety on return: whether the appellant could live independently, find work or housing without family support, and avoid being traced by the people she fears.",
    ],
    faqs: [
      {
        question: "Does the report cover shelters and support services?",
        answer:
          "Yes. It describes what services exist in the relevant region, their capacity and conditions, and whether they offer more than short-term refuge.",
      },
      {
        question: "Is a different report needed for a trafficking claim?",
        answer:
          "Trafficking claims need additional analysis of re-trafficking risk and the reach of the traffickers. This is set out in the instructions so the report covers it from the start.",
      },
    ],
    relatedCaseTypes: ["ftt-south-asia-appeal", "deportation-return-south-asia", "fresh-claims-south-asia"],
  },
  {
    slug: "journalists-human-rights-defenders",
    title: "Journalist & HRD Reports",
    metaTitle: "Journalist & Human Rights Defender Country Report | South Asia Reports",
    metaDescription:
      "Country reports for journalists and human rights defenders from Bangladesh, India and Sri Lanka: media freedom, UAPA and security laws, post-2024 Bangladesh.",
    h1: "Journalist & Human Rights Defender Country Reports",
    content: [
      "Reports for journalists and human rights defenders start from the appellant's own output: what they published or campaigned on, where, and how widely it was seen. The country evidence is then applied to that record, because risk depends heavily on subject matter and visibility.",
      "In Bangladesh the report addresses how the August 2024 change of government has affected journalists on both sides of the previous divide. In India it covers prosecutions and harassment of reporters working on sensitive subjects such as Kashmir, Manipur and Hindu nationalism, including the use of the UAPA.",
      "Sri Lankan and Nepali cases are assessed on the same basis. Counsel should provide copies or links to the appellant's work, any threats received, and any legal proceedings started against them.",
    ],
    faqs: [
      {
        question: "Why does the report need the appellant's published work?",
        answer:
          "Risk for journalists depends on what they covered and who noticed. Seeing the work allows the report to compare it with the reporting that has led to arrests or attacks on others.",
      },
      {
        question: "Does the report address security and anti-terror laws?",
        answer:
          "Yes. Where relevant it explains how laws such as India's UAPA or Bangladesh's digital security legislation have been used against journalists and activists, and what that means for the appellant.",
      },
    ],
    relatedCaseTypes: ["bangladesh-political-claims", "india-minority-claims", "ftt-south-asia-appeal"],
  },
  {
    slug: "diaspora-activity-risk-on-return",
    title: "Diaspora Activity Reports",
    metaTitle: "Diaspora Activity Risk Country Report | South Asia Reports",
    metaDescription:
      "Country reports on risk from UK diaspora activity: Tamil activism and Sri Lanka, Bangladeshi party activity, Sikh and Muslim advocacy, and monitoring capacity.",
    h1: "Diaspora Activity Country Condition Reports",
    content: [
      "A diaspora report assesses two things: how visible the appellant's activity in the UK has been, and whether the authorities at home are able and motivated to notice it. Attendance at a single protest and a leadership role in an organisation are treated very differently.",
      "For Sri Lanka the report applies KK [2021] and the evidence on monitoring of Tamil diaspora activity. For Bangladesh it considers monitoring of BNP, Jamaat and Awami League figures abroad and how priorities may have changed since August 2024. For India it covers Sikh Khalistan and Muslim advocacy.",
      "Counsel should send photographs, social media posts, membership records and any media coverage of the appellant's activities, with dates. The report uses these to place the appellant within the risk categories the tribunal applies.",
    ],
    faqs: [
      {
        question: "What evidence of diaspora activity is most useful for the report?",
        answer:
          "Dated, verifiable material: photographs from events, posts and their reach, roles held in organisations, and any coverage by media or authorities in the country of origin.",
      },
      {
        question: "Does the report consider how the appellant would be identified on return?",
        answer:
          "Yes. It addresses points of exposure such as airport screening, documentation checks and local informants, alongside monitoring abroad.",
      },
    ],
    relatedCaseTypes: ["sri-lanka-tamil-claims", "bangladesh-political-claims", "deportation-return-south-asia"],
  },
  {
    slug: "failed-asylum-seekers-return",
    title: "Return Risk Reports",
    metaTitle: "Return Risk Country Report | South Asia Reports",
    metaDescription:
      "Country reports on return risk for refused asylum seekers from Bangladesh, India, Sri Lanka, Nepal and Bhutan, including clearly unfounded certification challenges.",
    h1: "Return Risk Country Condition Reports",
    content: [
      "A return risk report looks forward from the date it is written. It considers how the appellant's profile would be treated on arrival and afterwards, and records any changes in country conditions since the original refusal, which is especially important for Bangladesh after August 2024.",
      "Where the Home Office has certified a claim as clearly unfounded, the report is written to show whether the claim has a realistic prospect of success on the country evidence, which is the test for challenging certification.",
      "Reports cover Bangladesh, India, Sri Lanka, Nepal and Bhutan. They address the specific return route and documentation where this affects risk, and identify any categories of returnee the authorities are known to question or detain.",
    ],
    faqs: [
      {
        question: "Can a report help challenge a clearly unfounded certificate?",
        answer:
          "Yes. A report that shows a real dispute on the country evidence supports the argument that the claim is not bound to fail, which is what certification requires.",
      },
      {
        question: "How recent does a return risk report need to be?",
        answer:
          "As recent as possible. Tribunals assess risk at the date of the hearing, so a report more than a few months old may need an update, particularly where conditions are changing quickly.",
      },
    ],
    relatedCaseTypes: ["deportation-return-south-asia", "certification-challenge", "fresh-claims-south-asia"],
  },
];

export function getAsylumProfile(slug: string): AsylumProfile | undefined {
  return asylumProfiles.find((p) => p.slug === slug);
}
