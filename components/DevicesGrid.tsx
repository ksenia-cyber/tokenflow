"use client";

import { useMemo, useState } from "react";
import {
  Device,
  DeviceCategory,
  devices,
  formatTokens,
} from "@/lib/data";

const categories: { id: DeviceCategory | "all"; label: string; emoji: string }[] = [
  { id: "all", label: "Alle", emoji: "✨" },
  { id: "home", label: "Smart Home", emoji: "🏠" },
  { id: "mobility", label: "Mobilität", emoji: "🚗" },
  { id: "work", label: "Arbeit", emoji: "💻" },
  { id: "entertainment", label: "Entertainment", emoji: "🎮" },
  { id: "wearable", label: "Wearable", emoji: "⌚" },
  { id: "kids", label: "Kinder", emoji: "🧸" },
];

export default function DevicesGrid() {
  const [active, setActive] = useState<DeviceCategory | "all">("all");

  const filtered = useMemo(
    () => (active === "all" ? devices : devices.filter((d) => d.category === active)),
    [active]
  );

  return (
    <section className="max-w-6xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-slate-400">Deine Geräte</div>
          <h2 className="text-2xl font-semibold">Verbrauch pro Gerät (heute)</h2>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto scrollbar-thin pb-3">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`whitespace-nowrap text-sm px-4 py-2 rounded-full border transition ${
              active === c.id
                ? "bg-white text-slate-900 border-white"
                : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
            }`}
          >
            <span className="mr-1">{c.emoji}</span>
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filtered.map((d) => (
          <DeviceCard key={d.id} d={d} />
        ))}
      </div>
    </section>
  );
}

function DeviceCard({ d }: { d: Device }) {
  const pct = Math.min(100, Math.round((d.usedToday / d.dailyBudget) * 100));
  const statusColor =
    d.status === "alert"
      ? "#f87171"
      : d.status === "warning"
        ? "#fbbf24"
        : "#34d399";
  const statusLabel =
    d.status === "alert"
      ? "Limit erreicht"
      : d.status === "warning"
        ? "nähert sich Limit"
        : "ok";

  return (
    <div className="glass rounded-2xl p-5 group hover:border-white/20 transition">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
            {d.emoji}
          </div>
          <div>
            <div className="font-semibold leading-tight">{d.name}</div>
            <div className="text-xs text-slate-400">{d.owner}</div>
          </div>
        </div>
        <div
          className="flex items-center gap-1.5 text-[11px]"
          style={{ color: statusColor }}
        >
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ background: statusColor }}
          />
          {statusLabel}
        </div>
      </div>

      <div className="mt-4 flex items-baseline gap-2">
        <div className="text-xl font-bold tabular-nums">
          {formatTokens(d.usedToday)}
        </div>
        <div className="text-xs text-slate-400">
          / {formatTokens(d.dailyBudget)}
        </div>
      </div>

      <div className="mt-2 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: pct + "%",
            background:
              pct >= 95
                ? "linear-gradient(90deg,#f87171,#fbbf24)"
                : pct >= 75
                  ? "linear-gradient(90deg,#fbbf24,#22d3ee)"
                  : "linear-gradient(90deg,#7c5cff,#22d3ee)",
          }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="text-slate-400">Trend</span>
        <span
          className="font-medium"
          style={{ color: d.trend > 15 ? "#fbbf24" : d.trend < 0 ? "#34d399" : "#8893b7" }}
        >
          {d.trend > 0 ? "▲" : d.trend < 0 ? "▼" : "–"} {Math.abs(d.trend)}%
        </span>
      </div>
    </div>
  );
}
