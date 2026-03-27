// components/SSTChart.jsx
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale,
  PointElement, LineElement, Filler, Tooltip, Legend
} from 'chart.js';
import { SST_DATA } from '../data/oceanData';
import './Chart.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RANGES = ['1M', '6M', '1Y'];

export default function SSTChart() {
  const [range, setRange] = useState('1M');
  const d = SST_DATA[range];

  const data = {
    labels: d.labels,
    datasets: [
      {
        label: 'Observed SST (°C)',
        data: d.actual,
        borderColor: '#0a4f6e',
        backgroundColor: 'rgba(10,79,110,0.08)',
        borderWidth: 2,
        pointRadius: range === '1Y' ? 0 : 3,
        pointHoverRadius: 5,
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Historical Baseline',
        data: d.baseline,
        borderColor: '#c8d4dc',
        borderWidth: 1.5,
        borderDash: [5, 4],
        pointRadius: 0,
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: {
        labels: { color: '#4a6070', font: { family: "'DM Sans', sans-serif", size: 11 }, boxWidth: 14 },
      },
      tooltip: {
        backgroundColor: '#ffffff',
        borderColor: '#dde4ea',
        borderWidth: 1,
        titleColor: '#1a2e3a',
        bodyColor: '#4a6070',
        titleFont: { family: "'DM Sans', sans-serif", size: 12, weight: '600' },
        bodyFont:  { family: "'DM Mono', monospace", size: 11 },
        padding: 10,
      },
    },
    scales: {
      x: {
        ticks: { color: '#8aa0ae', font: { family: "'DM Mono', monospace", size: 10 }, maxTicksLimit: 14 },
        grid:  { color: '#eef2f5' },
      },
      y: {
        ticks: { color: '#8aa0ae', font: { family: "'DM Mono', monospace", size: 10 }, callback: v => v + '°C' },
        grid:  { color: '#eef2f5' },
      },
    },
  };

  return (
    <div className="panel chart-panel">
      <div className="panel-header">
        <h2 className="panel-title">Sea Surface Temperature — Indian Waters</h2>
        <div className="range-btns">
          {RANGES.map(r => (
            <button
              key={r}
              className={`range-btn ${range === r ? 'active' : ''}`}
              onClick={() => setRange(r)}
            >{r}</button>
          ))}
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}
