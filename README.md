# Migraine Log

A single-page web app for tracking migraines and medications. Built with vanilla HTML, CSS, and JavaScript — no dependencies.

## Features

- **Log Migraines** — date, time, severity (1-10), duration (including multi-day), triggers, weather, medication, and notes
- **Dashboard** — calendar heatmap, monthly stats, top triggers bar chart, 12-week trend
- **History** — full timeline with expand to view details, edit, or delete
- **Medicine Cabinet** — track medications with quantity and expiration dates
- **Export/Import** — backup and restore data as JSON

## Tech

- Vanilla JS, HTML, CSS (single file)
- localStorage for persistence
- Node.js static file server
- Mobile-first dark theme

## Run

```bash
node server.js
```

Open http://localhost:3000

## Data

All data is stored in the browser's localStorage. Use the Export/Import feature on the Home screen to back up your data.
