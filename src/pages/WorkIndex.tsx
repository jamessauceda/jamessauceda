import { Link } from "react-router-dom";
import { getPublishedCases } from "../data/cases";

export function WorkIndex() {
  const published = getPublishedCases();

  return (
    <div className="work">
      <header className="work__intro">
        <p className="eyebrow">Work</p>
        <h1>What I've been up to</h1>
        <p className="lede">
          Stories about building a design system people can adopt, extend, and
          use correctly across web and native.
        </p>
      </header>

      <div className="case-links case-links--spaced">
        {published.map((c) => (
          <Link key={c.slug} to={`/work/${c.slug}`} className="case-link">
            <span>{c.title}</span>
            <span className="case-link__blurb">{c.blurb}</span>
            <span className="case-link__more">View work</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
