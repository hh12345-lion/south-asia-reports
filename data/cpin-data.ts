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
      "The country guidance for Tamil appellants. Sri Lanka reports are organised around its risk categories, which include actual or perceived LTTE links, prominent diaspora activism and giving evidence against the state.",
  },
];

export const cpinNote =
  "Bangladesh, India, Nepal and Bhutan have no current Upper Tribunal country guidance, so for these countries the country report is often the most detailed evidence before the tribunal.";
