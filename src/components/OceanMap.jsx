// components/OceanMap.jsx
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { MAP_MARKERS } from '../data/oceanData';
import './OceanMap.css';

const STATUS_COLOR = { critical: '#c0392b', warning: '#d4780a', safe: '#1a7a4a' };

export default function OceanMap() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapInstance.current) return;

    mapInstance.current = L.map(mapRef.current, {
      center: [12, 78],
      zoom: 3,
      zoomControl: true,
      attributionControl: false,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 18,
    }).addTo(mapInstance.current);

    MAP_MARKERS.forEach(marker => {
      const color = STATUS_COLOR[marker.status];
      const icon = L.divIcon({
        className: '',
        html: `<div style="
          width:13px;height:13px;
          background:${color};
          border-radius:50%;
          border:2.5px solid white;
          box-shadow:0 0 0 2px ${color}55, 0 2px 6px rgba(0,0,0,0.2);
        "></div>`,
        iconSize: [13, 13],
        iconAnchor: [6, 6],
      });

      L.marker([marker.lat, marker.lng], { icon })
        .addTo(mapInstance.current)
        .bindPopup(`
          <div style="font-family:'DM Sans',sans-serif;">
            <strong style="color:${color};display:block;margin-bottom:3px">${marker.label}</strong>
            <span style="color:#4a6070;font-size:12px">${marker.detail}</span>
          </div>
        `, { closeButton: false, maxWidth: 180 });
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="panel ocean-map-panel">
      <div className="panel-header">
        <h2 className="panel-title">Ocean Region Monitor</h2>
        <div className="map-legend">
          <span className="ml-dot" style={{ background: '#c0392b' }} />Critical
          <span className="ml-dot" style={{ background: '#d4780a' }} />Warning
          <span className="ml-dot" style={{ background: '#1a7a4a' }} />Normal
        </div>
      </div>
      <div ref={mapRef} className="map-container" />
    </div>
  );
}
