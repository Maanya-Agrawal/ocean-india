// components/Header.jsx
import { useState, useEffect } from 'react';
import { REGIONS } from '../data/oceanData';
import './Header.css';

const NAV_TABS = ['Dashboard', 'Fishing Zones', 'Coral Reefs', 'News', 'Glossary'];

export default function Header({ activeTab, setActiveTab, region, setRegion }) {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    function tick() {
      // IST = UTC + 5:30
      const now   = new Date();
      const utc   = now.getTime() + now.getTimezoneOffset() * 60000;
      const ist   = new Date(utc + 5.5 * 3600000);
      const hh    = String(ist.getHours()).padStart(2, '0');
      const mm    = String(ist.getMinutes()).padStart(2, '0');
      const ss    = String(ist.getSeconds()).padStart(2, '0');
      setTime(`${hh}:${mm}:${ss} IST`);
      setDate(ist.toLocaleDateString('en-IN', { weekday:'short', day:'numeric', month:'short', year:'numeric' }));
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <span className="logo-wave">〰</span>
          <div>
            <div className="logo-name">OceanIndia</div>
            <div className="logo-sub">Ocean State Monitoring Dashboard · INCOIS</div>
          </div>
        </div>

        <div className="header-right">
          <div className="live-pill"><span className="live-dot" />LIVE</div>
          <div className="clock-block">
            <span className="clock-time">{time}</span>
            <span className="clock-date">{date}</span>
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <div className="nav-tabs">
          {NAV_TABS.map(tab => (
            <button
              key={tab}
              className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Dashboard' && (
          <div className="region-tabs">
            {REGIONS.map(r => (
              <button
                key={r}
                className={`region-tab ${region === r ? 'active' : ''}`}
                onClick={() => setRegion(r)}
              >
                {r}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
