// components/FishingTable.jsx
import { FISHING_ZONES } from '../data/oceanData';
import './FishingTable.css';

const FISHING_LABEL = {
  unsafe:  { label: '⛔ Unsafe',  cls: 'critical' },
  caution: { label: '⚠ Caution', cls: 'warning' },
  safe:    { label: '✅ Safe',    cls: 'safe' },
};

function sstColor(v) {
  return v >= 30.2 ? 'var(--critical)' : v >= 29.5 ? 'var(--warning)' : 'var(--text)';
}
function waveColor(v) {
  return v >= 4 ? 'var(--critical)' : v >= 3 ? 'var(--warning)' : 'var(--text)';
}
function windColor(v) {
  return v >= 60 ? 'var(--critical)' : v >= 40 ? 'var(--warning)' : 'var(--text)';
}

export default function FishingTable() {
  return (
    <div className="page-section">
      <div className="page-section-header">
        <h1 className="page-title">🐟 Fishing Zone Safety Report</h1>
        <p className="page-sub">Updated every 3 hours · Source: INCOIS Potential Fishing Zone Advisory</p>
      </div>

      <div className="ft-info-strip">
        <div className="ft-info-card ft-info--critical">
          <span className="ft-info-label">Unsafe Zones</span>
          <span className="ft-info-value">
            {FISHING_ZONES.filter(z => z.fishing === 'unsafe').length}
          </span>
        </div>
        <div className="ft-info-card ft-info--warning">
          <span className="ft-info-label">Caution Zones</span>
          <span className="ft-info-value">
            {FISHING_ZONES.filter(z => z.fishing === 'caution').length}
          </span>
        </div>
        <div className="ft-info-card ft-info--safe">
          <span className="ft-info-label">Safe Zones</span>
          <span className="ft-info-value">
            {FISHING_ZONES.filter(z => z.fishing === 'safe').length}
          </span>
        </div>
        <div className="ft-info-card ft-info--neutral">
          <span className="ft-info-label">Total Zones</span>
          <span className="ft-info-value">{FISHING_ZONES.length}</span>
        </div>
      </div>

      <div className="panel">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Zone ID</th>
                <th>Region</th>
                <th>SST (°C)</th>
                <th>Wave Ht (m)</th>
                <th>Wind (km/h)</th>
                <th>Fishing Status</th>
                <th>Cyclone Risk</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {FISHING_ZONES.map((z, i) => (
                <tr key={i}>
                  <td className="mono accent">{z.zone}</td>
                  <td>{z.region}</td>
                  <td className="mono" style={{ color: sstColor(z.sst) }}>{z.sst}</td>
                  <td className="mono" style={{ color: waveColor(z.wave) }}>{z.wave}</td>
                  <td className="mono" style={{ color: windColor(z.wind) }}>{z.wind}</td>
                  <td>
                    <span className={`badge badge-${FISHING_LABEL[z.fishing].cls}`}>
                      {FISHING_LABEL[z.fishing].label}
                    </span>
                  </td>
                  <td><span className={`badge badge-${z.cyclone}`}>{z.cyclone}</span></td>
                  <td className="mono muted">{z.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
