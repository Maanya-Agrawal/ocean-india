// components/AlertsPanel.jsx
import { ALERTS } from '../data/oceanData';
import './AlertsPanel.css';

export default function AlertsPanel() {
  return (
    <div className="panel alerts-panel">
      <div className="panel-header">
        <h2 className="panel-title">Active Alerts</h2>
      </div>
      <div className="alerts-list">
        {ALERTS.map((a, i) => (
          <div key={i} className={`alert-card alert-card--${a.status}`}>
            <div className="ac-top">
              <span className="ac-icon">{a.icon}</span>
              <div>
                <div className="ac-type">{a.type}</div>
                <div className="ac-region">{a.region}</div>
              </div>
              <span className="ac-time">{a.time}</span>
            </div>
            <p className="ac-detail">{a.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
