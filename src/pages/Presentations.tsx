import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { figmaEmbedSrc, presentations } from "../data/presentations";

export function Presentations() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <div className="presentations">
      <header className="presentations__intro">
        <p className="eyebrow">Presentations</p>
        <h1>Talks and decks</h1>
        <p className="lede">
          Design systems presentations on strategy, layout, accessibility, and
          how the program reports progress.
        </p>
      </header>

      <div className="presentation-cards">
        {presentations.map((deck) => (
          <article key={deck.slug} className="presentation-card" id={deck.slug}>
            <div className="presentation-card__copy">
              <h2 className="presentation-card__title">{deck.title}</h2>
              <p className="presentation-card__blurb">{deck.blurb}</p>
              <a
                className="text-link"
                href={deck.figmaUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open in Figma
              </a>
            </div>
            <div className="presentation-card__embed">
              <iframe
                title={`${deck.title} Figma presentation`}
                src={figmaEmbedSrc(deck.figmaUrl)}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
