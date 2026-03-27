// components/AlertBanner.jsx
import './AlertBanner.css';

export default function AlertBanner() {
  return (
    <div className="alert-banner">
      <span className="ab-icon">⚠</span>
      <span className="ab-text">
        <strong>CYCLONE WATCH</strong> — Bay of Bengal: Depression forming near 12°N, 88°E.
        Fishermen advised NOT to venture into sea. Coastal districts of Andhra Pradesh and Odisha on alert.
      </span>
      <span className="ab-tag">BOBMEX ZONE</span>
    </div>
  );
}
