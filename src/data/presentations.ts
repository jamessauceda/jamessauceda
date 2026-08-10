export type Presentation = {
  slug: string;
  title: string;
  blurb: string;
  /** Full Figma design URL used for embed + open-in-Figma */
  figmaUrl: string;
};

export const presentations: Presentation[] = [
  {
    slug: "scaling-system",
    title: "Scaling system",
    blurb:
      "An exploratory look at exponential px scaling instead of a flat 8px grid: spacing that grows as options get larger, stronger vertical rhythm, and hierarchy in space.",
    figmaUrl:
      "https://www.figma.com/design/iSziUx2mtHgk18AvTf0Ls7/250929-Scaling-system?node-id=0-1",
  },
  {
    slug: "layout",
    title: "Layout",
    blurb:
      "Layout principles and patterns for consistent structure across product surfaces.",
    figmaUrl:
      "https://www.figma.com/design/2OKWSCt5bTXU4pUrFpxdS1/250603-Layout?node-id=8-979",
  },
  {
    slug: "accessibility",
    title: "Accessibility",
    blurb:
      "Accessibility expectations for the system: what “done” looks like for inclusive UI delivery.",
    figmaUrl:
      "https://www.figma.com/design/fC9HsKlJkJQKyRzDWEkQ3N/250422-Accessibility-Preso?node-id=8-979",
  },
  {
    slug: "blaze-ds-deck",
    title: "BLAZE Design System",
    blurb:
      "An earlier system narrative covering foundations, components, and how teams were meant to adopt BLAZE.",
    figmaUrl:
      "https://www.figma.com/design/g2lME6ctHQ6I4IlHgwbRZ9/2021-BLAZE-DS-DECK?node-id=0-1",
  },
  {
    slug: "bds-report-q2-23",
    title: "BDS Report Q2 2023",
    blurb:
      "Quarterly design systems report: progress, adoption signals, and where the program focused next.",
    figmaUrl:
      "https://www.figma.com/design/dw06vTa2xfe74xYtVmaMXL/BDS-Report-Q2-23?node-id=0-1",
  },
];

export function getPresentation(slug: string): Presentation | undefined {
  return presentations.find((p) => p.slug === slug);
}

export function figmaEmbedSrc(figmaUrl: string): string {
  return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;
}
