export type CpinRow = {
  country: string;
  topics: string;
};

export const cpinRows: CpinRow[] = [
  { country: "Bangladesh", topics: "Political parties; Religious minorities; LGBTQ+" },
  { country: "India", topics: "Sikh separatism; Muslims; LGBTQ+; Caste" },
  { country: "Sri Lanka", topics: "Tamils; LTTE; Human rights defenders" },
  { country: "Nepal", topics: "General background" },
  { country: "Bhutan", topics: "Limited coverage" },
];

export const countryGuidanceCases = [
  {
    citation: "KK and Others (Sri Lanka: Tamil) CG [2021] UKUT 00245",
    summary:
      "Leading country guidance on Sri Lanka Tamil asylum claims. Establishes risk profiles including actual or imputed LTTE associations, diaspora activists, and those who have given evidence against the government.",
  },
];

export const cpinNote =
  "For Bangladesh, India, Nepal, and Bhutan, there is no current country guidance from the UK Upper Tribunal. Expert evidence is particularly valuable to supplement CPIN positions and provide profile-specific risk analysis.";
