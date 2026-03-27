// components/Glossary.jsx
import { useState } from 'react';
import { GLOSSARY } from '../data/oceanData';
import './Glossary.css';

export default function Glossary() {
  const [search, setSearch] = useState('');
  const [open, setOpen]     = useState(null);

  const filtered = GLOSSARY.filter(
    g => g.term.toLowerCase().includes(search.toLowerCase()) ||
         g.def.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-section">
      <div className="page-section-header">
        <h1 className="page-title">📖 Ocean Science Glossary</h1>
        <p className="page-sub">Key terms used in ocean state monitoring</p>
      </div>

      <div className="glossary-search-wrap">
        <span className="gs-icon">🔍</span>
        <input
          className="glossary-search"
          type="text"
          placeholder="Search terms..."
          value={search}
          onChange={e => { setSearch(e.target.value); setOpen(null); }}
        />
        {search && (
          <button className="gs-clear" onClick={() => setSearch('')}>✕</button>
        )}
      </div>

      {filtered.length === 0 && (
        <div className="glossary-empty">No terms match "{search}"</div>
      )}

      <div className="glossary-list">
        {filtered.map((g, i) => (
          <div
            key={i}
            className={`glossary-item ${open === i ? 'open' : ''}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="gi-header">
              <span className="gi-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="gi-term">{g.term}</span>
              <span className="gi-arrow">{open === i ? '−' : '+'}</span>
            </div>
            {open === i && (
              <p className="gi-def">{g.def}</p>
            )}
          </div>
        ))}
      </div>

      <p className="glossary-credit">
        Definitions adapted from INCOIS, MoES, and NOAA educational resources.
      </p>
    </div>
  );
}
