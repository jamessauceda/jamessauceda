import { PresentationCard } from "../components/PresentationCard";
import { presentations } from "../data/presentations";

export function Presentations() {
  return (
    <div className="presentations">
      <header className="presentations__intro">
        <p className="eyebrow">Presentations</p>
        <h1>Talks and decks</h1>
        <p className="lede">
          Design systems presentations on strategy, accessibility, and how the
          program reports progress.
        </p>
      </header>

      <div className="presentation-teasers">
        {presentations.map((deck) => (
          <PresentationCard key={deck.slug} deck={deck} />
        ))}
      </div>
    </div>
  );
}
