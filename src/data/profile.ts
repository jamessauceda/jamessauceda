import type { Signal } from "./signal";

export type { Signal };

export type Accomplishment = {
  label: string;
  detail: string;
  slug: string;
};

export const profile = {
  name: "James Sauceda",
  title: "Design Systems Product Designer",
  summary:
    "I lead the design side of design systems: foundations, components, contribution models, and the guidance that helps product teams ship consistent UI without reinventing it.",
  focus: [
    "System strategy and prioritization",
    "Contribution models, governance, and operating workflows",
    "Tokens, components, and usage guidance",
    "Design tooling, lint, prototypes, and partner automation",
  ],
  accomplishments: [
    {
      label: "Building an Agentic Design System",
      detail:
        "Built the design systems operating system: governance, intake, agent workflows, docs sync, Slack loops, design lint, and ahead-of-eng prototyping.",
      slug: "operating-hub",
    },
    {
      label: "Design System Lint",
      detail:
        "Brought Design System principles into Figma as on-canvas lint feedback, paired with Design Check, so designers get actionable system guidance while they work.",
      slug: "mint-lint",
    },
  ] satisfies Accomplishment[],
  /**
   * Landing signals should prove the two active work stories:
   * runnable operating model (skills) and on-canvas system guidance (Design System Lint).
   */
  signals: [
    {
      id: "skills",
      value: "28",
      label: "Agent skills that make design systems ops runnable day to day",
      why: "Principal-level systems work includes the operating model, not only the components.",
      detail:
        "I built skills for intake, briefs, gates, design review, release, docs sync, Slack filing, guild capture, and more inside the contribution hub. That turned governance from a document into a workflow the team can actually run, and it is a core proof point for how I work as a design systems designer who ships process and tooling.",
      relatedWork: {
        slug: "operating-hub",
        title: "Building an Agentic Design System",
      },
    },
    {
      id: "mint-lint",
      value: "On-canvas",
      label: "Design System Lint feedback that teaches system compliance while designers work",
      why: "A design system only scales if guidance shows up in the file, not only in the docs.",
      detail:
        "I led the Design System Lint guidance model so tokens, spacing, components, and color rules land as an annotation on the exact layers that need change. Paired with Figma Design Check, it raises quality before handoff instead of relying on review stamina.",
      relatedWork: {
        slug: "mint-lint",
        title: "Design System Lint: agentic design system guidance",
      },
    },
  ] satisfies Signal[],
};
