export type ProfileGeoBlock = {
  type: "note" | "highlight";
  title: string;
  content: string;
};

export function getProfileGeoContent(slug: string): ProfileGeoBlock[] {
  const blocks: Record<string, ProfileGeoBlock[]> = {
    "political-persecution-south-asia": [
      {
        type: "highlight",
        title: "Report dating: Bangladesh after August 2024",
        content:
          "Reports on Bangladeshi political claims are written against conditions after the fall of the Awami League government. Earlier country material is cited for background only and the report explains where the position has since reversed.",
      },
    ],
    "religious-minority-persecution": [
      {
        type: "highlight",
        title: "Relocation analysis: India",
        content:
          "Because Hindutva organisations and the RSS operate nationally, India reports test any proposed relocation area against the appellant's faith and profile, including states not governed by the BJP.",
      },
    ],
    "lgbtq-south-asia": [
      {
        type: "highlight",
        title: "Law versus practice: India",
        content:
          "India reports note the 2018 Navtej Singh Johar judgment and then focus on family, community and workplace treatment, which is where most risk now arises.",
      },
    ],
    "diaspora-activity-risk-on-return": [
      {
        type: "highlight",
        title: "Applying KK [2021]: Sri Lanka",
        content:
          "Sri Lanka reports map the appellant's UK activity, such as demonstrations, fundraising or organisational roles, onto the risk categories in KK [2021] and the evidence on monitoring of the Tamil diaspora.",
      },
    ],
    "failed-asylum-seekers-return": [
      {
        type: "highlight",
        title: "Changed circumstances: Bangladesh",
        content:
          "Return reports for Bangladesh identify profiles whose risk has increased since the 2024 transition, which can support a fresh claim or a renewed appeal.",
      },
    ],
    "caste-discrimination": [
      {
        type: "highlight",
        title: "Regional evidence: India and Nepal",
        content:
          "Caste reports use state- and district-level evidence on Dalit communities, and on how police handle their complaints, rather than national averages.",
      },
    ],
    "women-gender-based-violence": [
      {
        type: "highlight",
        title: "Enforcement focus: Bangladesh",
        content:
          "Bangladesh reports on acid attacks and honour violence concentrate on district enforcement and support services, since the legal framework itself is rarely in dispute.",
      },
    ],
    "journalists-human-rights-defenders": [
      {
        type: "highlight",
        title: "Legal tools used against reporters: Bangladesh and India",
        content:
          "Reports explain how sedition, digital security and anti-terror laws have been applied to journalists and activists, and compare those cases with the appellant's own work.",
      },
    ],
  };
  return blocks[slug] ?? [];
}
