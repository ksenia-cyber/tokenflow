"use client";

import { alerts } from "@/lib/data";

const bgByLevel: Record<string, string> = {
  info: "bg-sky-500/10 border-sky-400/20",
  warn: "bg-amber-500/10 border-amber-400/20",
  danger: "bg-rose-500/10 border-rose-400/20",
  success: "bg-emerald-500/10 border-emerald-400/20",
};

export default function AlertsFeed() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-slate-400">Smart Alerts</div>
          <h2 className="text-2xl font-semibold">Was gerade passiert</h2>
        </div>
        <button className="hidden sm:inline-flex text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
          Regeln bearbeiten
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {alerts.map((a) => (
          <div
            key={a.id}
            className={`rounded-2xl p-4 border ${bgByLevel[a.level]} flex gap-3 items-start`}
          >
            <div className="text-2xl shrink-0 leading-none mt-0.5">{a.icon}</div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <div className="font-medium">{a.title}</div>
                <div className="text-[11px] text-slate-400 whitespace-nowrap">
                  {a.time}
                </div>
              </div>
              <div className="text-sm text-slate-300 mt-1">{a.message}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
