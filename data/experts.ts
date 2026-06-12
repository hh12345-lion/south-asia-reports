export type Expert = {
  name: string;
  jobTitle: string;
  description: string;
  expertise: string[];
  countries: string[];
};

export const experts: Expert[] = [
  {
    name: "Dr Priya Sharma",
    jobTitle: "India Country Expert",
    description:
      "Academic specialist in Indian politics and minority rights with 15 years of field research. Provides Hindutva/RSS risk analysis, Muslim and Sikh persecution reports, caste discrimination assessment, and internal relocation feasibility analysis for UK tribunals.",
    expertise: ["Hindutva/RSS", "Muslim Minorities", "Sikh Claims", "Caste Discrimination", "Internal Relocation"],
    countries: ["India"],
  },
  {
    name: "Dr Farid Ahmed",
    jobTitle: "Bangladesh Country Expert",
    description:
      "Political scientist specialising in Bangladesh party politics and minority rights. Provides post-August 2024 transition analysis, BNP/Awami League persecution reports, Hindu minority risk assessment, and LGBTQ+ criminalisation analysis.",
    expertise: ["BNP/Awami Politics", "Post-2024 Transition", "Hindu Minorities", "LGBTQ+", "Journalists"],
    countries: ["Bangladesh"],
  },
  {
    name: "Dr Kavitha Senthil",
    jobTitle: "Sri Lanka Country Expert",
    description:
      "Tamil studies specialist with expertise in KK [2021] country guidance framework. Provides LTTE association analysis, diaspora activism risk assessment, Tamil persecution reports, and post-civil war conditions analysis.",
    expertise: ["KK [2021] Framework", "Tamil/LTTE", "Diaspora Risk", "Political Opposition", "HRDs"],
    countries: ["Sri Lanka"],
  },
  {
    name: "Dr Rajesh Thapa",
    jobTitle: "Nepal & Bhutan Country Expert",
    description:
      "South Asian anthropologist specialising in Nepal and Bhutan. Provides Maoist-linked claim analysis, Dalit caste discrimination reports, Madhesi and Janajati ethnic minority assessment, and Lhotshampa persecution analysis.",
    expertise: ["Maoist Claims", "Caste/Dalit", "Ethnic Minorities", "Lhotshampa", "Political Persecution"],
    countries: ["Nepal", "Bhutan"],
  },
  {
    name: "Dr Ananya Banerjee",
    jobTitle: "Cross-Cutting South Asia Expert",
    description:
      "Human rights researcher covering gender-based violence, LGBTQ+ persecution, and journalist/HRD risk across South Asia. Provides cross-country thematic analysis and multi-jurisdiction reports for complex South Asian asylum claims.",
    expertise: ["GBV/Honour Violence", "LGBTQ+", "Journalists/HRDs", "Diaspora Risk", "CPIN Challenge"],
    countries: ["Bangladesh", "India", "Sri Lanka", "Nepal", "Bhutan"],
  },
];
