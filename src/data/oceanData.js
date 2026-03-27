// src/data/oceanData.js
// All simulated data for OceanIndia dashboard
// Inspired by: INCOIS, IMD, NIOT, CMLRE, MoES

export const REGIONS = ['All Regions', 'Arabian Sea', 'Bay of Bengal', 'Lakshadweep Sea', 'Indian Ocean'];

export const STAT_CARDS = [
  { label: 'Sea Surface Temp', value: '29.4', unit: '°C', delta: '+2.6° anomaly', trend: 'up', status: 'critical', pct: 86 },
  { label: 'Cyclone Risk Index', value: '7.8', unit: '/10', delta: 'HIGH — Bay of Bengal', trend: 'up', status: 'critical', pct: 78 },
  { label: 'Ocean pH', value: '8.03', unit: 'pH', delta: '−0.13 acidification', trend: 'down', status: 'warning', pct: 52 },
  { label: 'Wave Height', value: '4.2', unit: 'm', delta: 'Fishing zones unsafe', trend: 'up', status: 'warning', pct: 70 },
  { label: 'Salinity', value: '34.8', unit: 'PSU', delta: 'Within normal range', trend: 'neutral', status: 'safe', pct: 45 },
  { label: 'Coral Bleach Risk', value: '8.1', unit: '/10', delta: 'Lakshadweep critical', trend: 'up', status: 'critical', pct: 81 },
];

export const SST_DATA = {
  '1M': {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    actual:   [26.8,27.2,28.5,30.1,31.2,29.8,28.4,28.6,29.2,29.8,28.6,27.4],
    baseline: [25.4,25.8,26.9,28.2,29.0,28.1,27.2,27.4,27.9,28.3,27.2,25.9],
  },
  '6M': {
    labels: ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun'],
    actual:   [28.2,28.6,29.0,29.5,28.9,28.1,28.3,28.7,29.2,29.8,30.4,29.8],
    baseline: [27.2,27.4,27.8,28.0,27.5,26.8,25.8,26.0,26.8,27.8,28.6,28.1],
  },
  '1Y': {
    labels: Array.from({length:52},(_,i)=>`W${i+1}`),
    actual:   Array.from({length:52},(_,i)=>+(27+3.2*Math.sin((i/52)*Math.PI*2+0.5)+(Math.sin(i)*0.3)).toFixed(1)),
    baseline: Array.from({length:52},(_,i)=>+(25.8+2.2*Math.sin((i/52)*Math.PI*2+0.5)).toFixed(1)),
  },
};

export const PH_DATA = {
  labels: ['2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'],
  values: [8.17,8.15,8.13,8.12,8.10,8.09,8.07,8.06,8.05,8.04,8.03],
};

export const CITY_DATA = {
  labels: ['Mumbai','Chennai','Kochi','Vizag','Kolkata','Mangaluru','Puducherry','Port Blair'],
  sst:   [29.8,30.2,29.4,30.5,29.1,29.0,30.3,28.8],
  risk:  [7.2,8.1,6.8,8.4,7.0,6.5,7.9,6.2],
};

export const MAP_MARKERS = [
  { lat:12,  lng:88,   label:'Bay of Bengal (N)',  status:'critical', detail:'Cyclone Watch active' },
  { lat:10,  lng:73,   label:'Lakshadweep Sea',    status:'critical', detail:'Mass coral bleaching' },
  { lat:17,  lng:65,   label:'Arabian Sea (Mid)',  status:'warning',  detail:'Marine heatwave watch' },
  { lat:8,   lng:93,   label:'Andaman Sea',        status:'warning',  detail:'Bleaching watch' },
  { lat:22,  lng:68,   label:'Arabian Sea (N)',    status:'safe',     detail:'Normal conditions' },
  { lat:6,   lng:80,   label:'Indian Ocean (S)',   status:'safe',     detail:'Normal conditions' },
  { lat:19.1,lng:72.9, label:'Mumbai Coast',       status:'warning',  detail:'Elevated SST' },
  { lat:13.1,lng:80.3, label:'Chennai Coast',      status:'critical', detail:'High risk zone' },
  { lat:9.9, lng:76.3, label:'Kochi Coast',        status:'warning',  detail:'Heatwave watch' },
  { lat:17.7,lng:83.3, label:'Vizag Coast',        status:'critical', detail:'High risk zone' },
];

export const ALERTS = [
  { region:'Bay of Bengal', type:'Cyclone Watch', status:'critical', icon:'🌀',
    detail:'Depression at 12°N, 88°E intensifying. Fishermen advised NOT to venture into sea. Winds up to 74 km/h expected.', time:'11:30 AM' },
  { region:'Lakshadweep Sea', type:'Mass Coral Bleaching', status:'critical', icon:'🪸',
    detail:'SST +2.8°C above threshold. Category IV bleaching alert. 70% reef coverage at risk across Agatti, Kavaratti, Minicoy.', time:'10:15 AM' },
  { region:'Arabian Sea', type:'Marine Heatwave', status:'warning', icon:'🌡️',
    detail:'SST anomaly +1.9°C sustained over 10 days. Oxygen depletion zones expanding. Sea spray advisory issued.', time:'09:00 AM' },
  { region:'Andaman Sea', type:'Bleaching Watch', status:'warning', icon:'🪸',
    detail:'Degree Heating Weeks approaching alert threshold. Andaman coral reefs on elevated watch status.', time:'08:30 AM' },
  { region:'Indian Ocean (S)', type:'All Clear', status:'safe', icon:'✅',
    detail:'All parameters within seasonal norms. Routine monitoring ongoing. No active advisories.', time:'07:00 AM' },
];

export const FISHING_ZONES = [
  { zone:'FZ-ARB-01', region:'North Arabian Sea',   sst:30.1, wave:4.8, wind:62, fishing:'unsafe',  cyclone:'warning',  updated:'11:45 AM' },
  { zone:'FZ-ARB-02', region:'Kerala Coast',         sst:29.4, wave:2.8, wind:28, fishing:'safe',    cyclone:'safe',     updated:'11:40 AM' },
  { zone:'FZ-ARB-03', region:'Karnataka Coast',      sst:29.0, wave:2.5, wind:24, fishing:'safe',    cyclone:'safe',     updated:'11:38 AM' },
  { zone:'FZ-BOB-01', region:'Bay of Bengal (N)',    sst:29.8, wave:5.2, wind:74, fishing:'unsafe',  cyclone:'critical', updated:'11:30 AM' },
  { zone:'FZ-BOB-02', region:'Bay of Bengal (C)',    sst:29.5, wave:4.1, wind:55, fishing:'unsafe',  cyclone:'warning',  updated:'11:28 AM' },
  { zone:'FZ-BOB-03', region:'Tamil Nadu Coast',     sst:30.2, wave:3.2, wind:38, fishing:'caution', cyclone:'warning',  updated:'11:25 AM' },
  { zone:'FZ-AND-01', region:'Andaman & Nicobar',    sst:29.2, wave:2.6, wind:30, fishing:'caution', cyclone:'safe',     updated:'11:15 AM' },
  { zone:'FZ-LAK-01', region:'Lakshadweep',          sst:30.8, wave:2.1, wind:22, fishing:'caution', cyclone:'safe',     updated:'11:10 AM' },
];

export const CORAL_REEFS = [
  { name:'Agatti Reef',         location:'Lakshadweep',    temp:31.2, status:'critical', bleaching:'72% affected', detail:'Mass bleaching. DHW > 8°C-weeks.' },
  { name:'Kavaratti Reef',      location:'Lakshadweep',    temp:31.0, status:'critical', bleaching:'65% affected', detail:'Severe thermal stress. Urgent monitoring.' },
  { name:'Minicoy Reef',        location:'Lakshadweep',    temp:31.4, status:'critical', bleaching:'80% affected', detail:'Critical bleaching. High coral mortality risk.' },
  { name:'North Bay Reef',      location:'Andaman Islands', temp:30.4, status:'warning',  bleaching:'28% affected', detail:'Moderate bleaching. Watch status active.' },
  { name:'Havelock Reef',       location:'Andaman Islands', temp:30.1, status:'warning',  bleaching:'21% affected', detail:'Early bleaching signs detected.' },
  { name:'Gulf of Mannar Reef', location:'Tamil Nadu',      temp:30.6, status:'warning',  bleaching:'35% affected', detail:'Rising temps. Bleaching risk elevated.' },
  { name:'Palk Bay Reef',       location:'Tamil Nadu',      temp:30.3, status:'warning',  bleaching:'18% affected', detail:'Watch issued. Seagrass beds also affected.' },
  { name:'Netrani Reef',        location:'Karnataka',       temp:29.2, status:'safe',     bleaching:'No bleaching', detail:'Healthy reef system. Normal parameters.' },
];

export const NEWS_ITEMS = [
  { date:'27 Mar 2025', source:'INCOIS', title:'Bay of Bengal Depression Intensifies Near Andhra Coast',
    body:'The India Meteorological Department has issued a cyclone watch as a low-pressure system in the northern Bay of Bengal is expected to intensify into a cyclonic storm within 48 hours. Coastal districts of Andhra Pradesh and Odisha are on alert.' },
  { date:'25 Mar 2025', source:'NIOT',   title:'Lakshadweep Coral Bleaching Reaches Record Levels',
    body:'Scientists from NIOT report that this year\'s bleaching event in Lakshadweep has surpassed 2016 levels, with over 70% of monitored reefs showing severe bleaching. Sea surface temperatures remain 2.8°C above the bleaching threshold.' },
  { date:'22 Mar 2025', source:'MoES',   title:'India Launches New Ocean Monitoring Buoy Network',
    body:'The Ministry of Earth Sciences has deployed 12 new Argo floats in the Arabian Sea and Bay of Bengal as part of the National Ocean Monitoring Programme, enhancing real-time data collection for climate research.' },
  { date:'18 Mar 2025', source:'IMD',    title:'Arabian Sea Heatwave Threatens Monsoon Onset',
    body:'Persistent marine heatwave conditions in the eastern Arabian Sea may delay the southwest monsoon onset, according to IMD seasonal forecasts. Ocean heat content remains significantly above the 1981–2010 climatological mean.' },
  { date:'14 Mar 2025', source:'CMLRE',  title:'Deep Sea Survey Reveals Plastic Accumulation in Indian Ocean',
    body:'A new study by CMLRE documents significant microplastic accumulation in deep-sea sediments at depths exceeding 3,000 metres in the central Indian Ocean, raising concerns about long-term ecosystem impacts.' },
];

export const GLOSSARY = [
  { term:'Sea Surface Temperature (SST)', def:'The water temperature at or near the ocean surface, typically measured in the top 1 metre. A key indicator of marine heatwaves and cyclone intensification.' },
  { term:'Degree Heating Weeks (DHW)',    def:'A measure of accumulated heat stress on coral reefs over 12 weeks. Values above 4°C-weeks cause bleaching; above 8°C-weeks cause mortality.' },
  { term:'Marine Heatwave',              def:'A period of extremely warm ocean temperatures lasting 5 or more days, defined relative to local historical temperatures for that time of year.' },
  { term:'Ocean Acidification',          def:'The ongoing decrease in ocean pH caused by absorption of atmospheric CO₂. The Indian Ocean has seen a pH drop of 0.14 units since pre-industrial times.' },
  { term:'Salinity (PSU)',               def:'The concentration of dissolved salts in seawater, measured in Practical Salinity Units. Open ocean averages ~35 PSU; freshwater input from rivers lowers salinity.' },
  { term:'INCOIS',                       def:'Indian National Centre for Ocean Information Services — the primary agency providing ocean data, forecasts, and advisories for Indian waters.' },
  { term:'Thermocline',                  def:'A layer in the ocean where temperature decreases rapidly with depth, separating warm surface waters from cold deep waters.' },
  { term:'Upwelling',                    def:'The movement of cold, nutrient-rich deep water to the surface. The southwest monsoon drives strong upwelling along the Kerala and Karnataka coasts.' },
  { term:'Cyclogenesis',                 def:'The process by which a cyclone forms and intensifies. Warm SSTs (above 26.5°C) and low wind shear in the Bay of Bengal favour cyclogenesis.' },
  { term:'Argo Float',                   def:'An autonomous oceanographic instrument that drifts with ocean currents, diving to 2000m depth to profile temperature and salinity, then surfacing to transmit data.' },
];
