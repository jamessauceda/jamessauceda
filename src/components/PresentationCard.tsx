import type { Presentation } from "../data/presentations";

type PresentationCardProps = {
  deck: Presentation;
};

export function presentationHref(deck: Presentation): string {
  return deck.prototypeUrl ?? deck.figmaUrl;
}

export function PresentationCard({ deck }: PresentationCardProps) {
  return (
    <a
      href={presentationHref(deck)}
      className="presentation-teaser"
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="presentation-teaser__thumb"
        src={deck.thumbnail}
        alt=""
        loading="lazy"
      />
      <span className="presentation-teaser__copy">
        <span className="presentation-teaser__title">{deck.title}</span>
        <span className="presentation-teaser__blurb">{deck.blurb}</span>
        <span className="presentation-teaser__more">View presentation</span>
      </span>
    </a>
  );
}
