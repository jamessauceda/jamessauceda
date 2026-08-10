import { Link, Navigate, useParams } from "react-router-dom";
import { Signals } from "../components/Signals";
import { getCase } from "../data/cases";

export function CaseStudy() {
  const { slug } = useParams();
  const study = slug ? getCase(slug) : undefined;

  if (!study) {
    return <Navigate to="/work" replace />;
  }

  return (
    <article className="study">
      <Link to="/work" className="back-link">
        Work
      </Link>

      <header className="study__intro">
        <h1>{study.title}</h1>
        <p className="lede">{study.blurb}</p>
        <p className="study__role">{study.role}</p>
      </header>

      {study.heroVisual ? (
        <figure className="study-visual">
          <img
            src={study.heroVisual.src}
            alt={study.heroVisual.alt}
            loading="eager"
          />
          {study.heroVisual.caption ? (
            <figcaption>{study.heroVisual.caption}</figcaption>
          ) : null}
        </figure>
      ) : null}

      <section className="study__section">
        <h2>Problem</h2>
        <p>{study.problem}</p>
      </section>

      <section className="study__section">
        <h2>Approach</h2>
        <ul className="plain-list">
          {study.approach.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="study__section">
        <h2>Outcome</h2>
        <p>{study.outcome}</p>
      </section>

      <Signals
        key={study.slug}
        title="Impact"
        ariaLabel={`${study.title} impact`}
        signals={study.metrics}
      />

      {study.proofVisual ? (
        <figure className="study-visual study-visual--proof">
          <img
            src={study.proofVisual.src}
            alt={study.proofVisual.alt}
            loading="lazy"
          />
          {study.proofVisual.caption ? (
            <figcaption>{study.proofVisual.caption}</figcaption>
          ) : null}
        </figure>
      ) : null}
    </article>
  );
}
