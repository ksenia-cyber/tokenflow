# 💸 TokenFlow

> Die Haushaltskasse fürs AI-Zeitalter. Tokens verwalten wie Strom oder Wasser.

**Live:** https://tokenflow-ruddy.vercel.app

TokenFlow ist ein Konzept- & MVP-Prototyp für ein Token-Management-Tool, das Familien dabei hilft, den AI-Verbrauch ihrer Smart-Geräte, Autos, Wearables und Kinder-Tablets im Blick zu behalten — genauso wie heute Strom oder Wasser.

## Features

- **Live-Dashboard** mit Echtzeit-Counter für den Haushaltsverbrauch
- **Familien-Profile** mit eigenen Monatsbudgets pro Mitglied (inkl. Zeitfenster für Kinder)
- **Geräte-Manager** mit Kategorie-Filter (Smart Home, Mobilität, Arbeit, Entertainment, Wearable, Kinder)
- **Verbrauchs-Charts** (24h-Kurve + Wochentrend) mit Prognose-Overlay
- **Smart Alerts**: Leck-Erkennung, Budget-Warnung, Erfolgs-Events
- **CO₂- & Kosten-Hochrechnung** in Euro und Gramm CO₂

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 für Styling, dunkles Theme mit Gradient-Accents
- Recharts für Daten-Visualisierung
- Deployment: Vercel

## Lokal starten

```bash
npm install
npm run dev
```

→ http://localhost:3000

## Bauen & Deployen

```bash
npm run build
vercel --prod
```

## Projektstruktur

```
app/
  layout.tsx       # Root-Layout, Meta-Tags (deutsch)
  page.tsx         # Single-Page-App mit allen Sections
  globals.css      # Theme, Glass-Effekt, Gradients
components/
  Hero.tsx         # Live-Counter + Vision-Statement
  StatStrip.tsx    # Haushalts-Gesamtbudget + Euro/CO₂
  UsageChart.tsx   # Recharts (24h + Wochentrend)
  FamilyPanel.tsx  # Familien-Profile mit Budget-Bars
  DevicesGrid.tsx  # Geräte-Grid mit Filter
  AlertsFeed.tsx   # Smart-Alerts
  Principles.tsx   # 6 Konzept-Prinzipien
  Footer.tsx
lib/
  data.ts          # Demo-Daten + Helpers (tokensToEuro, tokensToCO2g)
```

## Konzept-Hintergrund

Die ausführliche Vision, Design-Prinzipien und MVP-Überlegungen findest du in der Notion-Brainstorming-Seite (intern, im Workspace "Claude Code").

Kernidee: In wenigen Jahren werden AI-Tokens so alltäglich wie Strom oder Wasser. Jedes smarte Gerät, jede App, jedes Kind verbraucht sie. TokenFlow ist das Haushalts-Dashboard für dieses Zeitalter.

## Status

MVP / Konzept-Demo. Alle Daten sind Beispiel-Daten. Kein Backend, kein Login, keine Persistenz.

## Lizenz

MIT — für Demo- und Lernzwecke.
