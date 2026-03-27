# OceanIndia — Ocean State Monitoring Dashboard

A React-based dashboard monitoring ocean health across India's coastline and surrounding seas.

**Technologies used: HTML · CSS · JavaScript · React**

Inspired by: INCOIS · IMD · NIOT · MoES · CMLRE

---

## Project Structure

```
ocean-india/
├── package.json
├── README.md
├── public/
│   └── index.html               ← HTML entry point
└── src/
    ├── index.js                 ← React DOM entry
    ├── index.css                ← Global CSS variables & base styles
    ├── App.jsx                  ← Root React component, tab routing
    ├── App.css                  ← Layout grid CSS
    ├── data/
    │   └── oceanData.js         ← All simulated Indian ocean data
    └── components/
        ├── Header.jsx/css       ← Nav, IST clock, region tabs
        ├── AlertBanner.jsx/css  ← Cyclone warning banner
        ├── StatCards.jsx/css    ← 6 key metric cards
        ├── SSTChart.jsx         ← Sea surface temperature line chart
        ├── OceanMap.jsx/css     ← Leaflet map (India-centered)
        ├── AlertsPanel.jsx/css  ← Active alerts list
        ├── CityChart.jsx        ← Coastal city SST + risk bar chart
        ├── PhChart.jsx          ← Ocean acidification trend chart
        ├── FishingTable.jsx/css ← Fishing zone safety report
        ├── CoralGrid.jsx/css    ← Coral reef bleaching cards
        ├── NewsFeed.jsx/css     ← Expandable news items
        ├── Glossary.jsx/css     ← Searchable ocean terms glossary
        └── Chart.css            ← Shared chart styles
```

---

## Setup & Run

### Prerequisites
- Node.js (v16 or above) — download from [nodejs.org](https://nodejs.org)
- npm (comes with Node.js)

### Steps

```bash
# 1. Go into the project folder
cd ocean-india

# 2. Install dependencies (only needed once)
npm install

# 3. Start the development server
npm start
```

The app opens at **http://localhost:3000** automatically.

---

## Deploy to GitHub Pages

```bash
# 1. Install gh-pages
npm install --save-dev gh-pages

# 2. Add to package.json:
#    "homepage": "https://YOUR-USERNAME.github.io/ocean-india"
#    In "scripts": add:
#      "predeploy": "npm run build",
#      "deploy": "gh-pages -d build"

# 3. Deploy
npm run deploy
```

Your site will be live at `https://YOUR-USERNAME.github.io/ocean-india`

---

## Dashboard Pages

| Page | What it shows |
|---|---|
| Dashboard | Stat cards, SST chart, map, alerts, city chart, pH chart |
| Fishing Zones | Safety report for 8 Indian fishing zones |
| Coral Reefs | Bleaching status for 8 reefs across Lakshadweep & Andaman |
| News | Latest 5 ocean science news items (expandable) |
| Glossary | 10 searchable ocean science terms |

---

## Regions Covered

Arabian Sea · Bay of Bengal · Lakshadweep Sea · Indian Ocean

## Coastal Cities

Mumbai · Chennai · Kochi · Visakhapatnam · Kolkata · Mangaluru · Puducherry · Port Blair

---

## Technologies

| Technology | Role in project |
|---|---|
| **HTML** | `public/index.html` — page shell and font imports |
| **CSS** | `index.css`, `App.css`, component `.css` files — variables, layout, animations |
| **JavaScript** | Data logic, chart config, map markers, clock calculations |
| **React** | Component architecture, state (`useState`), effects (`useEffect`), tab routing |

---

## Notes

- All data is **simulated** for academic purposes
- No backend required
- Internet needed for fonts, map tiles, and CDN libraries
