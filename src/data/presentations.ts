export type Presentation = {
  slug: string;
  title: string;
  blurb: string;
  /** Full Figma design URL used for embed + open-in-Figma */
  figmaUrl: string;
  /** Cover slide thumbnail hosted in /public/presentations */
  thumbnail: string;
  /** Optional proto/slideshow URL for the Home card CTA */
  prototypeUrl?: string;
};

export const presentations: Presentation[] = [
  {
    slug: "scaling-system",
    title: "Scaling system",
    blurb:
      "An exploratory look at exponential px scaling instead of a flat 8px grid: spacing that grows as options get larger, stronger vertical rhythm, and hierarchy in space.",
    figmaUrl:
      "https://www.figma.com/design/iSziUx2mtHgk18AvTf0Ls7/250929-Scaling-system?node-id=0-1",
    thumbnail: "/presentations/scaling-system.png",
    prototypeUrl:
      "https://www.figma.com/proto/iSziUx2mtHgk18AvTf0Ls7/250929-Scaling-system?node-id=1-87&scaling=contain&content-scaling=fixed&page-id=0%3A1",
  },
  {
    slug: "accessibility",
    title: "Accessibility in Forms",
    blurb:
      "Accessibility expectations for the system: what “done” looks like for inclusive UI delivery.",
    figmaUrl:
      "https://www.figma.com/design/fC9HsKlJkJQKyRzDWEkQ3N/250422-Accessibility-Preso?node-id=8-979",
    thumbnail: "/presentations/accessibility.png",
    prototypeUrl:
      "https://www.figma.com/proto/fC9HsKlJkJQKyRzDWEkQ3N/250422-Accessibility-Preso?node-id=0-1&scaling=contain&content-scaling=fixed&page-id=0%3A1",
  },
  {
    slug: "bds-report-q2-23",
    title: "DS Report",
    blurb:
      "Quarterly design systems report: progress, adoption signals, and where the program focused next.",
    figmaUrl:
      "https://www.figma.com/design/dw06vTa2xfe74xYtVmaMXL/BDS-Report-Q2-23?node-id=0-1",
    thumbnail: "/presentations/bds-report-q2-23.png",
    prototypeUrl:
      "https://www.figma.com/proto/dw06vTa2xfe74xYtVmaMXL/BDS-Report-Q2-23?node-id=1-89&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A89&page-id=0%3A1",
  },
];

export function getPresentation(slug: string): Presentation | undefined {
  return presentations.find((p) => p.slug === slug);
}
