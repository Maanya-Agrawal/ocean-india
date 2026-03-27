// components/CityChart.jsx
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale,
  BarElement, PointElement, LineElement, Tooltip, Legend
} from 'chart.js';
import { CITY_DATA } from '../data/oceanData';
import './Chart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);

export default function CityChart() {
  const barColors = CITY_DATA.sst.map(v =>
    v >= 30.2 ? 'rgba(192,57,43,0.75)' : v >= 29.5 ? 'rgba(212,120,10,0.75)' : 'rgba(26,122,74,0.65)'
  );
  const barBorders = CITY_DATA.sst.map(v =>
    v >= 30.2 ? '#c0392b' : v >= 29.5 ? '#d4780a' : '#1a7a4a'
  );

  const data = {
    labels: CITY_DATA.labels,
    datasets: [
      {
        label: 'SST (°C)',
        data: CITY_DATA.sst,
        backgroundColor: barColors,
        borderColor: barBorders,
        borderWidth: 1,
        borderRadius: 3,
        yAxisID: 'y',
      },
      {
        label: 'Risk Index (/10)',
        data: CITY_DATA.risk,
        type: 'line',
        borderColor: '#e07b39',
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#e07b39',
        tension: 0.4,
        yAxisID: 'y2',
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: {
        labels: { color: '#4a6070', font: { family: "'DM Sans'", size: 11 }, boxWidth: 14 },
      },
      tooltip: {
        backgroundColor: '#ffffff',
        borderColor: '#dde4ea',
        borderWidth: 1,
        titleColor: '#1a2e3a',
        bodyColor: '#4a6070',
        titleFont: { family: "'DM Sans'", size: 12, weight: '600' },
        bodyFont:  { family: "'DM Mono'", size: 11 },
        padding: 10,
      },
    },
    scales: {
      x: {
        ticks: { color: '#8aa0ae', font: { family: "'DM Mono'", size: 9 } },
        grid:  { color: '#eef2f5' },
      },
      y: {
        min: 27,
        ticks: { color: '#8aa0ae', font: { family: "'DM Mono'", size: 10 }, callback: v => v + '°C' },
        grid:  { color: '#eef2f5' },
      },
      y2: {
        position: 'right',
        min: 0, max: 10,
        ticks: { color: '#e07b39', font: { family: "'DM Mono'", size: 10 }, callback: v => v + '/10' },
        grid:  { display: false },
      },
    },
  };

  return (
    <div className="panel chart-panel">
      <div className="panel-header">
        <h2 className="panel-title">Coastal City Risk — SST & Index</h2>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}
