// components/PhChart.jsx
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale,
  PointElement, LineElement, Filler, Tooltip, Legend
} from 'chart.js';
import { PH_DATA } from '../data/oceanData';
import './Chart.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function PhChart() {
  const data = {
    labels: PH_DATA.labels,
    datasets: [
      {
        label: 'Ocean pH',
        data: PH_DATA.values,
        borderColor: '#d4780a',
        backgroundColor: 'rgba(212,120,10,0.08)',
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#d4780a',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#ffffff',
        borderColor: '#dde4ea',
        borderWidth: 1,
        titleColor: '#1a2e3a',
        bodyColor: '#4a6070',
        titleFont: { family: "'DM Sans'", size: 12, weight: '600' },
        bodyFont:  { family: "'DM Mono'", size: 11 },
        padding: 10,
        callbacks: {
          label: ctx => `pH: ${ctx.parsed.y}`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#8aa0ae', font: { family: "'DM Mono'", size: 10 } },
        grid:  { color: '#eef2f5' },
      },
      y: {
        min: 8.00,
        max: 8.22,
        ticks: {
          color: '#8aa0ae',
          font: { family: "'DM Mono'", size: 10 },
          stepSize: 0.04,
          callback: v => v.toFixed(2),
        },
        grid: { color: '#eef2f5' },
      },
    },
  };

  return (
    <div className="panel chart-panel">
      <div className="panel-header">
        <h2 className="panel-title">Ocean Acidification Trend</h2>
        <span style={{ fontSize: '0.72rem', color: 'var(--text-lt)', fontFamily: 'var(--font-mono)' }}>
          2015 – 2025
        </span>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}
