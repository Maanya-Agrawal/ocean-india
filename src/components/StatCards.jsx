// components/StatCards.jsx
import { STAT_CARDS } from '../data/oceanData';
import './StatCards.css';

const ARROWS = { up: '↑', down: '↓', neutral: '→' };

export default function StatCards() {
  return (
    <div className="stat-grid">
      {STAT_CARDS.map((card, i) => (
        <div key={i} className={`stat-card stat-card--${card.status}`}>
          <div className="sc-label">{card.label}</div>
          <div className="sc-value">
            {card.value}
            <span className="sc-unit">{card.unit}</span>
          </div>
          <div className={`sc-delta sc-delta--${card.trend}`}>
            {ARROWS[card.trend]} {card.delta}
          </div>
          <div className="sc-bar">
            <div
              className={`sc-bar-fill sc-bar-fill--${card.status}`}
              style={{ width: `${card.pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
