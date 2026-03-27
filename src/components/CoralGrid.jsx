// components/CoralGrid.jsx
import { CORAL_REEFS } from '../data/oceanData';
import './CoralGrid.css';

const STATUS_META = {
  critical: { label: 'Critical Bleaching', color: 'var(--critical)', bg: 'var(--critical-lt)' },
  warning:  { label: 'Bleaching Watch',    color: 'var(--warning)',  bg: 'var(--warning-lt)' },
  safe:     { label: 'Healthy',            color: 'var(--safe)',     bg: 'var(--safe-lt)' },
};

export default function CoralGrid() {
  const counts = {
    critical: CORAL_REEFS.filter(r => r.status === 'critical').length,
    warning:  CORAL_REEFS.filter(r => r.status === 'warning').length,
    safe:     CORAL_REEFS.filter(r => r.status === 'safe').length,
  };

  return (
    <div className="page-section">
      <div className="page-section-header">
        <h1 className="page-title">🪸 Coral Reef Status</h1>
        <p className="page-sub">Lakshadweep & Andaman Islands — Marine Heatwave Bleaching Assessment</p>
      </div>

      <div className="ft-info-strip">
        <div className="ft-info-card ft-info--critical">
          <span className="ft-info-label">Critical</span>
          <span className="ft-info-value">{counts.critical}</span>
        </div>
        <div className="ft-info-card ft-info--warning">
          <span className="ft-info-label">On Watch</span>
          <span className="ft-info-value">{counts.warning}</span>
        </div>
        <div className="ft-info-card ft-info--safe">
          <span className="ft-info-label">Healthy</span>
          <span className="ft-info-value">{counts.safe}</span>
        </div>
        <div className="ft-info-card ft-info--neutral">
          <span className="ft-info-label">Reefs Monitored</span>
          <span className="ft-info-value">{CORAL_REEFS.length}</span>
        </div>
      </div>

      <div className="coral-grid">
        {CORAL_REEFS.map((reef, i) => {
          const meta = STATUS_META[reef.status];
          return (
            <div key={i} className={`coral-card coral-card--${reef.status}`}>
              <div className="cc-header">
                <div>
                  <div className="cc-name">{reef.name}</div>
                  <div className="cc-loc">📍 {reef.location}</div>
                </div>
                <span
                  className="cc-status-pill"
                  style={{ background: meta.bg, color: meta.color }}
                >
                  {meta.label}
                </span>
              </div>

              <div className="cc-temp">
                {reef.temp}
                <span className="cc-temp-unit">°C</span>
              </div>

              <div className="cc-bleach">{reef.bleaching}</div>
              <p className="cc-detail">{reef.detail}</p>

              <div className="cc-bar">
                <div
                  className={`cc-bar-fill cc-bar-fill--${reef.status}`}
                  style={{ width: reef.status === 'critical' ? '85%' : reef.status === 'warning' ? '50%' : '15%' }}
                />
              </div>
              <div className="cc-bar-label">Bleaching Severity</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
