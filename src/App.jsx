// App.jsx — Root component for OceanIndia Dashboard
import { useState, useEffect } from 'react';
import Header from './components/Header';
import AlertBanner from './components/AlertBanner';
import StatCards from './components/StatCards';
import SSTChart from './components/SSTChart';
import OceanMap from './components/OceanMap';
import AlertsPanel from './components/AlertsPanel';
import CityChart from './components/CityChart';
import PhChart from './components/PhChart';
import FishingTable from './components/FishingTable';
import CoralGrid from './components/CoralGrid';
import NewsFeed from './components/NewsFeed';
import Glossary from './components/Glossary';
import './App.css';

const NAV_TABS = ['Dashboard', 'Fishing Zones', 'Coral Reefs', 'News', 'Glossary'];

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [region, setRegion]       = useState('All Regions');

  // Scroll to top on tab change
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [activeTab]);

  return (
    <div className="app">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} region={region} setRegion={setRegion} />
      <AlertBanner />

      <main className="main-content">
        {activeTab === 'Dashboard' && (
          <>
            <StatCards />
            <div className="grid-charts">
              <div className="col-wide"><SSTChart /></div>
              <div className="col-narrow">
                <OceanMap />
                <AlertsPanel />
              </div>
              <div className="col-half"><CityChart /></div>
              <div className="col-half"><PhChart /></div>
            </div>
          </>
        )}
        {activeTab === 'Fishing Zones' && <FishingTable />}
        {activeTab === 'Coral Reefs'   && <CoralGrid />}
        {activeTab === 'News'          && <NewsFeed />}
        {activeTab === 'Glossary'      && <Glossary />}
      </main>

      <footer className="site-footer">
        <span>© 2025 OceanIndia — Ocean State Monitoring Dashboard</span>
        <span>Data simulated for academic purposes · Inspired by INCOIS · IMD · NIOT · MoES</span>
      </footer>
    </div>
  );
}
