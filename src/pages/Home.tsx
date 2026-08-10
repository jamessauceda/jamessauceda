import { Link } from "react-router-dom";
import { Signals } from "../components/Signals";
import { presentations } from "../data/presentations";
import { profile } from "../data/profile";

export function Home() {
  return (
    <div className="home">
      <section className="home__intro">
        <p className="eyebrow">{profile.title}</p>
        <h1>{profile.name}</h1>
        <p className="lede">{profile.summary}</p>
      </section>

      <section className="home__block">
        <h2>What I do</h2>
        <ul className="plain-list">
          {profile.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="home__block">
        <div className="section-head">
          <h2>What I've been up to</h2>
          <Link to="/work" className="text-link">
            View all work
          </Link>
        </div>
        <div className="case-links">
          {profile.accomplishments.map((item) => (
            <Link
              key={item.slug}
              to={`/work/${item.slug}`}
              className="case-link"
            >
              <span>{item.label}</span>
              <span className="case-link__blurb">{item.detail}</span>
              <span className="case-link__more">View work</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home__block">
        <div className="section-head">
          <h2>Presentations</h2>
          <Link to="/presentations" className="text-link">
            View all presentations
          </Link>
        </div>
        <div className="case-links">
          {presentations.slice(0, 3).map((deck) => (
            <Link
              key={deck.slug}
              to={`/presentations#${deck.slug}`}
              className="case-link"
            >
              <span>{deck.title}</span>
              <span className="case-link__blurb">{deck.blurb}</span>
              <span className="case-link__more">View presentation</span>
            </Link>
          ))}
        </div>
      </section>

      <Signals title="Signals" signals={profile.signals} />
    </div>
  );
}
