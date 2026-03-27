// components/NewsFeed.jsx
import { useState } from 'react';
import { NEWS_ITEMS } from '../data/oceanData';
import './NewsFeed.css';

const SOURCE_COLORS = {
  INCOIS: '#0a4f6e',
  NIOT:   '#1a7a4a',
  MoES:   '#7b3fa0',
  IMD:    '#c0392b',
  CMLRE:  '#d4780a',
};

export default function NewsFeed() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="page-section">
      <div className="page-section-header">
        <h1 className="page-title">📰 Ocean News & Updates</h1>
        <p className="page-sub">Latest from INCOIS · IMD · NIOT · MoES · CMLRE</p>
      </div>

      <div className="news-list">
        {NEWS_ITEMS.map((item, i) => (
          <div
            key={i}
            className={`news-card ${expanded === i ? 'expanded' : ''}`}
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div className="nc-top">
              <div className="nc-meta">
                <span
                  className="nc-source"
                  style={{ background: SOURCE_COLORS[item.source] + '18', color: SOURCE_COLORS[item.source], borderColor: SOURCE_COLORS[item.source] + '33' }}
                >
                  {item.source}
                </span>
                <span className="nc-date">{item.date}</span>
              </div>
              <span className="nc-chevron">{expanded === i ? '↑' : '↓'}</span>
            </div>

            <h3 className="nc-title">{item.title}</h3>

            {expanded === i && (
              <p className="nc-body">{item.body}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
