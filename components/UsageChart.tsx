"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { hourlyUsage, weeklyTrend } from "@/lib/data";

export default function UsageChart() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="glass rounded-3xl p-6 lg:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm text-slate-400">Heute · alle 2 Std.</div>
            <h3 className="text-xl font-semibold">Verbrauch vs. Prognose</h3>
          </div>
          <LegendDot />
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={hourlyUsage}
              margin={{ top: 10, right: 10, bottom: 0, left: -20 }}
            >
              <defs>
                <linearGradient id="colV" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7c5cff" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#7c5cff" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colP" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis
                dataKey="hour"
                tick={{ fill: "#8893b7", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#8893b7", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => (v >= 1000 ? v / 1000 + "k" : String(v))}
              />
              <Tooltip
                contentStyle={{
                  background: "#0b1024",
                  border: "1px solid #1f2a55",
                  borderRadius: 12,
                  color: "#f1f5ff",
                }}
                labelStyle={{ color: "#8893b7" }}
                formatter={(v) => Number(v).toLocaleString("de-DE") + " Tokens"}
              />
              <Area
                type="monotone"
                dataKey="prognose"
                stroke="#22d3ee"
                strokeWidth={2}
                strokeDasharray="4 4"
                fill="url(#colP)"
              />
              <Area
                type="monotone"
                dataKey="verbrauch"
                stroke="#7c5cff"
                strokeWidth={2.5}
                fill="url(#colV)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass rounded-3xl p-6">
        <div className="text-sm text-slate-400">Diese Woche</div>
        <h3 className="text-xl font-semibold mb-3">Haushalt gesamt</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={weeklyTrend}
              margin={{ top: 10, right: 10, bottom: 0, left: -20 }}
            >
              <defs>
                <linearGradient id="colW" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34d399" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#34d399" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis
                dataKey="day"
                tick={{ fill: "#8893b7", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#8893b7", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => (v >= 1000 ? v / 1000 + "k" : String(v))}
              />
              <Tooltip
                contentStyle={{
                  background: "#0b1024",
                  border: "1px solid #1f2a55",
                  borderRadius: 12,
                  color: "#f1f5ff",
                }}
                formatter={(v) => Number(v).toLocaleString("de-DE") + " Tokens"}
              />
              <Area
                type="monotone"
                dataKey="haushalt"
                stroke="#34d399"
                strokeWidth={2.5}
                fill="url(#colW)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

function LegendDot() {
  return (
    <div className="flex items-center gap-4 text-xs text-slate-400">
      <div className="flex items-center gap-1.5">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#7c5cff]" />
        Verbrauch
      </div>
      <div className="flex items-center gap-1.5">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#22d3ee]" />
        Prognose
      </div>
    </div>
  );
}
