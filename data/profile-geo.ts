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
        title: "Bangladesh post-August 2024 reversal",
        content:
          "The August 2024 fall of Sheikh Hasina's Awami League government has reversed the persecution dynamic for many Bangladesh political claimants. Expert witnesses must assess current post-transition conditions, not pre-2024 country information.",
      },
    ],
    "religious-minority-persecution": [
      {
        type: "highlight",
        title: "Hindutva national reach (India)",
        content:
          "Hindutva networks and the RSS have national reach in India, challenging internal relocation arguments. Muslim and Christian minority claimants may face risk even in non-BJP governed states due to national-level anti-minority rhetoric and violence.",
      },
    ],
    "lgbtq-south-asia": [
      {
        type: "highlight",
        title: "Post-decriminalisation India claims",
        content:
          "India decriminalised same-sex conduct in 2018 (Navtej Singh Johar), but social persecution, family honour violence, and employment discrimination continue. Expert witnesses apply the HJ (Iran) standard to assess real risk despite legal decriminalisation.",
      },
    ],
    "diaspora-activity-risk-on-return": [
      {
        type: "highlight",
        title: "Tamil diaspora surveillance (Sri Lanka)",
        content:
          "Sri Lankan intelligence services monitor UK-based Tamil political activities. Diaspora demonstrations, fundraising, and leadership roles in Tamil organisations can create or enhance risk profiles for Tamil asylum claimants on return under KK [2021].",
      },
    ],
    "failed-asylum-seekers-return": [
      {
        type: "highlight",
        title: "Post-2024 Bangladesh return risk",
        content:
          "Given the August 2024 political transition, some Bangladesh profiles previously assessed as low risk may now face genuine persecution on return. Expert witnesses provide current country condition analysis for individual return risk assessment.",
      },
    ],
    "caste-discrimination": [
      {
        type: "highlight",
        title: "Dalit vulnerability (India and Nepal)",
        content:
          "Caste-based persecution claims require expert analysis of the appellant's specific caste status, regional enforcement patterns, and the gap between constitutional protections and practical state protection. Dalit communities face systemic discrimination in both India and Nepal.",
      },
    ],
    "women-gender-based-violence": [
      {
        type: "highlight",
        title: "Acid attacks and honour violence (Bangladesh)",
        content:
          "Bangladesh generates significant gender-based violence asylum claims including acid attacks and honour-based violence. Expert witnesses assess district-level enforcement, family and community dynamics, and the practical availability of state protection beyond statutory frameworks.",
      },
    ],
    "journalists-human-rights-defenders": [
      {
        type: "highlight",
        title: "Shrinking civic space (Bangladesh and India)",
        content:
          "Journalists and human rights defenders face targeted persecution under sedition, digital security, and anti-terror laws in Bangladesh and India. Expert witnesses assess the appellant's visibility, prior targeting, and whether state protection is available where security forces are complicit.",
      },
    ],
  };
  return blocks[slug] ?? [];
}
