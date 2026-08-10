import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import type { Signal } from "../data/signal";

type SignalsProps = {
  title: string;
  signals: Signal[];
  ariaLabel?: string;
};

export function Signals({ title, signals, ariaLabel = title }: SignalsProps) {
  const panelId = useId();
  const [selectedId, setSelectedId] = useState(signals[0]?.id ?? "");

  useEffect(() => {
    setSelectedId(signals[0]?.id ?? "");
  }, [signals]);

  const selected = signals.find((s) => s.id === selectedId) ?? signals[0];

  if (!selected) {
    return null;
  }

  return (
    <section className="signals-block">
      <h2>{title}</h2>

      <div className="signals" role="tablist" aria-label={ariaLabel}>
        {signals.map((signal) => {
          const isSelected = signal.id === selected.id;
          const tabId = `${panelId}-${signal.id}`;
          return (
            <button
              key={signal.id}
              type="button"
              role="tab"
              id={tabId}
              aria-selected={isSelected}
              aria-controls={panelId}
              className={`signal ${isSelected ? "is-selected" : ""}`}
              onClick={() => setSelectedId(signal.id)}
            >
              <span className="signals__value">{signal.value}</span>
              <span className="signals__label">{signal.label}</span>
            </button>
          );
        })}
      </div>

      <div
        className="signal-detail"
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${panelId}-${selected.id}`}
      >
        <p className="signal-detail__why">{selected.why}</p>
        <p className="signal-detail__body">{selected.detail}</p>
        {selected.relatedWork ? (
          <Link
            to={`/work/${selected.relatedWork.slug}`}
            className="text-link signal-detail__link"
          >
            Related Work: {selected.relatedWork.title}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
