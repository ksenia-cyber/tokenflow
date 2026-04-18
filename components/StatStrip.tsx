"use client";

import {
  CONSTANTS,
  formatEuro,
  formatTokens,
  members,
  tokensToCO2g,
  tokensToEuro,
} from "@/lib/data";

export default function StatStrip() {
  const used = members.reduce((s, m) => s + m.used, 0);
  const budget = CONSTANTS.householdMonthlyBudget;
  const pct = Math.min(100, Math.round((used / budget) * 100));
  const co2 = tokensToCO2g(used);
  const euro = tokensToEuro(used);

  return (
    <section className="max-w-6xl mx-auto px-6 py-6">
      <div className="glass rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
          <div>
            <div className="text-sm text-slate-400">Haushalt · April 2026</div>
            <h2 className="text-3xl sm:text-4xl font-bold mt-1">
              Dein Familien-Kontingent
            </h2>
            <p className="text-slate-400 mt-2 max-w-xl">
              {formatTokens(used)} von {formatTokens(budget)} Tokens verbraucht.
              Bei aktuellem Tempo reicht das Budget noch{" "}
              <span className="text-white font-medium">6 Tage</span>.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 min-w-[320px]">
            <MiniStat label="Kosten" value={formatEuro(euro)} tint="#22d3ee" />
            <MiniStat
              label="CO₂"
              value={co2.toFixed(0) + " g"}
              tint="#34d399"
            />
            <MiniStat label="Ausgelastet" value={pct + "%"} tint="#7c5cff" />
          </div>
        </div>

        <div className="mt-6">
          <div className="h-3 w-full rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: pct + "%",
                background:
                  "linear-gradient(90deg, #7c5cff 0%, #22d3ee 70%, #fbbf24 100%)",
              }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs text-slate-500">
            <span>0</span>
            <span>{formatTokens(budget / 2)}</span>
            <span>{formatTokens(budget)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({
  label,
  value,
  tint,
}: {
  label: string;
  value: string;
  tint: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/5 p-4">
      <div className="text-xs text-slate-400">{label}</div>
      <div
        className="text-xl font-bold mt-1 tabular-nums"
        style={{ color: tint }}
      >
        {value}
      </div>
    </div>
  );
}
