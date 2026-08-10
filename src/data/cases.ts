import type { Signal } from "./signal";

export type CaseVisual = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  blurb: string;
  role: string;
  problem: string;
  approach: string[];
  outcome: string;
  metrics: Signal[];
  /** Visual after the intro, before Problem */
  heroVisual?: CaseVisual;
  /** Visual after Impact */
  proofVisual?: CaseVisual;
  /** Hidden from Home and Work index; route still works */
  archived?: boolean;
};

export const cases: CaseStudy[] = [
  {
    slug: "usage-guidance",
    archived: true,
    title: "Usage guidance that scales",
    blurb:
      "Components were shipping. Clear guidance on when to use them was not. I built a lightweight practice to close that gap.",
    role: "Led the proposal and facilitation model",
    problem:
      "Product teams could find components, but still had to guess when to use them, when not to, and what good looked like in context. Adoption tools only measured whether a component appeared (~38% in one scan, ~75% in another). Neither measured whether it was the right choice.",
    approach: [
      "Formed a small cross-team group of designers and engineers who build with the system.",
      "Wrote guidance from real product questions, with clear when-to-use and when-not-to-use boundaries.",
      "Published guidance where people already work, so search and support channels could answer without escalating every question.",
      "Measured outcomes: fewer repeat questions, better appropriate use, more self-serve answers.",
    ],
    outcome:
      "The practice reframed adoption as quality of use, not just presence. A five-component pilot kept the cost small while proving the loop before scaling it.",
    metrics: [
      {
        id: "pilot",
        value: "5",
        label: "Components in the first pilot",
        why: "A small pilot made the practice real without turning it into a docs factory.",
        detail:
          "We started with five released components that already had product demand behind them: Input, Checkbox, Select, Action Sheet / Modal, and Combobox. The goal was to prove we could turn recurring usage questions into durable guidance before scaling the model across the library.",
      },
      {
        id: "cost",
        value: "~2 hrs/mo",
        label: "Time asked of each contributor",
        why: "Low overhead was the difference between a practice teams could sustain and one they would ignore.",
        detail:
          "The ask was intentionally tiny: roughly two hours a month per contributor across short working sessions. That kept designers and engineers engaged while we validated whether published guidance actually reduced repeat questions and improved appropriate use.",
      },
      {
        id: "baseline",
        value: "~38% / ~75%",
        label: "Presence tools that disagreed on the baseline",
        why: "If presence numbers conflict, you need a better definition of adoption success.",
        detail:
          "One scanner reported about 38% system presence. Another reported about 75%. That disagreement made a single adoption percentage unreliable and clarified the real gap: neither tool could tell whether a component was used correctly. Usage guidance was designed to close that quality gap.",
      },
    ],
  },
  {
    slug: "contribution-model",
    archived: true,
    title: "Contribution without gatekeeping",
    blurb:
      "I redesigned how teams contribute so the system can grow without becoming a bottleneck or a junk drawer.",
    role: "Owned the contribution model and recipes proposal",
    problem:
      "Every request was treated like a new system-wide component. Experiments and vertical-specific patterns had no good home. Gatekeeping slowed teams down. Building locally created undocumented copies.",
    approach: [
      "Split ownership: product design defines the problem and experience; design systems owns architecture, tokens, and build quality.",
      "Replaced vague tickets with a shared design spec before assessment.",
      "Gave every request one of four outcomes: new component, variant, recipe, or redirect.",
      "Added a recipes lane for vertical compositions that reuse system parts without entering the core set.",
    ],
    outcome:
      "Teams got a clearer path in. The core stayed protected. Vertical work could be documented and reused without pretending every experiment was a global standard.",
    metrics: [
      {
        id: "paths",
        value: "4",
        label: "Decision paths for every proposal",
        why: "Clear outcomes stop every ask from becoming a new component by default.",
        detail:
          "Each proposal lands in one of four paths: build a new component, extend an existing one, document a vertical recipe, or redirect to a current pattern or local solution. That taxonomy protects the core while still giving product teams a real answer.",
      },
      {
        id: "open",
        value: "618",
        label: "Open requests made visible by intake work",
        why: "You cannot improve contribution if the backlog is invisible.",
        detail:
          "Intake visibility work surfaced hundreds of open system requests that had accumulated across support channels, meetings, and the tracker. Making the true queue visible was the first step toward clearer prioritization and a contribution model teams could trust.",
      },
      {
        id: "stale",
        value: "453",
        label: "Stale items surfaced for cleanup",
        why: "Stale work is a tax on trust. Teams stop contributing when requests disappear into silence.",
        detail:
          "More than four hundred items had gone stale for over a year. Exposing that number made the cost of unclear ownership and weak intake concrete, and helped justify a lighter, more honest contribution path instead of an ever-growing unmanaged backlog.",
      },
    ],
  },
  {
    slug: "system-strategy",
    archived: true,
    title: "From legacy library to system strategy",
    blurb:
      "I turned lessons from a brittle legacy library into the design strategy for a modern multi-surface system.",
    role: "Owned principles, pitfalls, and the design-side integration plan",
    problem:
      "The legacy library grew without strong principles, lagged on documentation, and was easy to bypass under delivery pressure. A full freeze-and-rebuild would have stalled product teams. The company needed a path that improved consistency while protecting velocity.",
    approach: [
      "Documented what failed: weak principles, over-flexible components, missing contribution culture, docs that trailed releases.",
      "Wrote principles that put accessibility, clarity, and shared decision-making first.",
      "Planned the design work backwards from real screens to patterns, components, and semantic tokens.",
      "Kept engineering options open so product delivery did not have to stop for a multi-year rewrite.",
    ],
    outcome:
      "Design had a clear method and north star. The broader program could choose a vertical rollout path estimated at roughly one quarter to value, instead of a multi-year horizontal migration.",
    metrics: [
      {
        id: "overhead",
        value: "~30%",
        label: "Delivery overhead cited for the legacy approach",
        why: "This framed the rebuild as a velocity investment, not a visual refresh.",
        detail:
          "Program strategy materials estimated that the legacy library added roughly 30% delivery overhead through customization and uneven reuse. That number helped align design and engineering around a system that could reduce repeated UI work without asking product teams to pause.",
      },
      {
        id: "vertical",
        value: "~1 qtr",
        label: "Estimated time to value for a vertical rollout",
        why: "Shipping one surface at a time creates proof faster than waiting for perfect coverage.",
        detail:
          "A vertical rollout was estimated at about one quarter to show value on a priority surface. That sequencing let teams adopt the system where it mattered first, while design worked backwards from real screens instead of an abstract component wishlist.",
      },
      {
        id: "horizontal",
        value: ">2 yrs",
        label: "Estimated cost of an all-at-once migration",
        why: "The alternative made the tradeoff obvious: completeness later, or usefulness sooner.",
        detail:
          "A full horizontal migration was estimated at more than two years before value appeared. Keeping that comparison visible helped the program reject a freeze-and-rebuild mindset and choose a path that protected product delivery while the new system matured.",
      },
    ],
  },
  {
    slug: "multi-surface-delivery",
    archived: true,
    title: "Shipping the system across web and native",
    blurb:
      "I owned the design side of core component delivery so product teams could build on one system across platforms.",
    role: "Owned design definition, specs, and release readiness for core sets",
    problem:
      "Priority product surfaces needed shared primitives across web and native at the same time. Without a clear design-side pipeline, engineering waited on incomplete specs, and teams filled gaps with one-offs.",
    approach: [
      "Prioritized the component set that unblocked the highest-demand product flows.",
      "Wrote design specs that covered states, tokens, interaction, and accessibility before handoff.",
      "Partnered with platform engineering on review, QA, and release sequencing across web and native.",
      "Published foundations and component guidance teams could apply without asking Core every time.",
    ],
    outcome:
      "Core components landed as a usable multi-surface set. Product teams could adopt shared inputs, selection, overlays, and related primitives instead of waiting for a complete library or inventing local versions.",
    metrics: [
      {
        id: "platforms",
        value: "2",
        label: "Platforms in scope for core delivery",
        why: "Multi-surface delivery is where design systems either hold together or fragment.",
        detail:
          "Web and native were treated as one design problem with shared intent, not two separate libraries. That forced clearer decisions about anatomy, states, and tokens before engineering split the implementation work.",
      },
      {
        id: "core-set",
        value: "Core set",
        label: "Inputs, selection, overlays, and related primitives delivered for priority flows",
        why: "Shipping the blocking set matters more than waiting for perfect coverage.",
        detail:
          "The design-side focus was the components product teams needed first: text input patterns, selection controls, overlays like sheets and modals, and supporting primitives. That unblocked adoption on live surfaces while the broader library continued to grow.",
      },
      {
        id: "foundations",
        value: "Live",
        label: "Foundations and usage guidance published with the components",
        why: "A shipped component without usable guidance still creates support load.",
        detail:
          "Color, spacing, motion, and component guidance were published alongside delivery so teams could apply the system without reverse-engineering Figma or pinging Design Systems for every decision.",
      },
    ],
  },
  {
    slug: "operating-hub",
    title: "Building an Agentic Design System",
    blurb:
      "I built the contribution repo and agent workflows that turn design systems work into a repeatable loop: intake, governance, design, prototype, publish, announce, and improve.",
    role: "Primary author of the operating hub: process, tooling, docs, automation, and design-led prototypes",
    problem:
      "Design systems work was scattered across chat threads, tickets, Figma comments, and tribal knowledge. Contribution steps lived in people's heads. Docs drifted from the source of truth. Tooling and AI helpers went stale when tokens changed. The team needed an operating system, not another wiki page.",
    approach: [
      "Codified governance as executable workflows: need-first intake, brief lifecycle, design review, gates, release, and maintenance lanes.",
      "Built agent skills and rules so discovery, tracking, drafting, QA, and publishing could run as a system instead of one-off heroics.",
      "Kept one markdown source of truth and projected it into Figma docs, the docs site, and a design-led Storybook prototype ahead of engineering.",
      "Connected Slack into the loop for intake, review feedback, release announcements, meeting recaps, and partner callouts.",
      "Pushed design lint and AI design tooling to stay bound to live tokens and components, including work that shaped Figma plugin reliability.",
    ],
    outcome:
      "The design systems team could run contribution, guidance, and delivery from one hub. Design could prototype and document ahead of eng, surface downstream work for code partners, and keep announcements and feedback flowing without losing decisions in chat. That operating model is now shaping what the team builds next.",
    metrics: [
      {
        id: "skills",
        value: "28",
        label: "Agent skills encoding intake, briefs, review, release, sync, and guild ops",
        why: "Process only scales when it is runnable, not just written down.",
        detail:
          "I authored an agent skill surface covering need-first triage, brief qualification and gates, design review open/close, lifecycle advances, Figma and docs sync, Confluence publish, Slack filing, guild capture, and release announcements. The point was to make the operating model usable in day-to-day work, not trapped in a handbook nobody opens.",
      },
      {
        id: "prototype",
        value: "77",
        label: "Storybook stories and MDX docs in the design-led prototype",
        why: "Getting ahead of engineering changed what the team could prioritize next.",
        detail:
          "I stood up a contribution Storybook with foundations and component docs so design could prototype, QA, and explore coverage before production implementation. That ahead-of-dev surface helped shape near-term roadmap work, including where the system still needed components, guidance, and partner engineering follow-through.",
      },
      {
        id: "changelog",
        value: "~47",
        label: "Dated Figma working sessions logged in the operating hub",
        why: "Design systems work needs a trail: what changed, why, and what partners still owe.",
        detail:
          "The hub tracks design sessions, token changes, component docs, and downstream callouts for engineering. That made it easier to announce progress, capture feedback, and identify code-partner work instead of losing decisions across Figma branches and Slack threads.",
      },
    ],
    heroVisual: {
      src: "/work/operating-hub-claude-v2.png",
      alt: "Claude at the center of Storybook, Confluence, Figma, GitHub, Slack, and Jira",
      caption: "One agent surface wired into the tools the system already runs on",
    },
    proofVisual: {
      src: "/work/operating-hub-readme.png",
      alt: "Contribution hub README showing source of truth and chat intake paths",
      caption: "The contribution hub README: need in chat, tracked outcome out",
    },
  },
  {
    slug: "mint-lint",
    title: "Design System Lint: agentic design system guidance",
    blurb:
      "I helped turn Design System principles into on-canvas lint feedback in Figma, so designers get specific, actionable system guidance while they work, not after review.",
    role: "Design systems lead for lint rules, guidance quality, and the designer-facing feedback model",
    problem:
      "Design system rules lived in docs, reviews, and tribal knowledge. Designers could ship frames that looked polished and still miss tokens, spacing scale, component intent, or brand color use. Figma's native Design Check catches a class of local issues, but it does not encode the Design System. Without feedback that knows the Design System, compliance depended on reviewer stamina.",
    approach: [
      "Encoded Design System principles as lintable rules across tokens, spacing, components, and color, bound to the live system instead of a static checklist.",
      "Surfaced feedback as overlays on the exact layers that need change: what is wrong, what to do, and why it matters.",
      "Paired Design System Lint with Figma Design Check so native quality checks and Design System compliance run as one quality loop in the canvas.",
      "Kept guidance actionable and specific: bind this fill to a semantic token, snap this gap to the space scale, use a Link for navigation, reserve brand teal for money moments.",
      "Treated lint as part of the operating system: the same source of truth that powers specs and skills should also teach designers in the moment.",
    ],
    outcome:
      "Designers can raise quality before handoff. Design System Lint makes system compliance visible on the frame, Design Check covers Figma-native hygiene, and reviews spend less time restating rules that the canvas can already teach.",
    metrics: [
      {
        id: "categories",
        value: "4+",
        label: "Rule families live in the canvas: tokens, spacing, components, color",
        why: "Coverage has to match how designers actually break the system.",
        detail:
          "Design System Lint looks past generic polish. It flags unbound text fills, off-scale spacing, nested gap hierarchy problems, component misuse like tertiary buttons used for navigation, and brand color choices that miss money-moment intent.",
      },
      {
        id: "feedback",
        value: "3-part",
        label: "Feedback model: issue, suggestion, and why on the exact layer",
        why: "A lint finding only helps if it tells someone what to change next.",
        detail:
          "Each overlay names the problem, proposes a concrete fix, and explains the system reason. That turns design system knowledge into something you can act on without leaving the frame or waiting for a review comment.",
      },
      {
        id: "pairing",
        value: "Native +",
        label: "Paired with Figma Design Check for a full quality pass",
        why: "Design System rules and Figma hygiene solve different failure modes.",
        detail:
          "Design Check catches a useful set of local design issues. Design System Lint adds system-specific compliance. Together they push frames toward the highest quality bar before engineering ever sees them.",
      },
    ],
    heroVisual: {
      src: "/work/mint-lint.png",
      alt: "Design System Toolkit Skills panel with Design System Lint selected, auditing a Confirm offer frame with on-canvas annotations",
      caption:
        "Design System Toolkit Skills: Design System Lint audits the current frame and leaves issue, suggestion, and why annotations on the canvas",
    },
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

/** Active case studies shown on Home and Work */
export function getPublishedCases(): CaseStudy[] {
  const order = ["operating-hub", "mint-lint"] as const;
  const published = cases.filter((c) => !c.archived);
  return [
    ...order.map((slug) => published.find((c) => c.slug === slug)).filter((c) => c != null),
    ...published.filter((c) => !order.includes(c.slug as (typeof order)[number])),
  ];
}
