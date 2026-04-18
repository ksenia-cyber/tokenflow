"use client";

import { formatTokens, members, tokensToEuro, formatEuro } from "@/lib/data";

const roleLabels: Record<string, string> = {
  adult: "Erwachsene",
  teen: "Teenager",
  kid: "Kind",
};

export default function FamilyPanel() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-slate-400">Familien-Profile</div>
          <h2 className="text-2xl font-semibold">Wer verbraucht wie viel?</h2>
        </div>
        <button className="hidden sm:inline-flex text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
          + Profil
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {members.map((m) => {
          const pct = Math.min(100, Math.round((m.used / m.monthlyBudget) * 100));
          const over = pct >= 90;
          const warn = pct >= 75 && pct < 90;
          return (
            <div key={m.id} className="glass rounded-2xl p-5 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{
                      background: `${m.color}22`,
                      border: `1px solid ${m.color}55`,
                    }}
                  >
                    {m.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{m.name}</div>
                    <div className="text-xs text-slate-400">
                      {roleLabels[m.role]}
                    </div>
                  </div>
                </div>
                {over && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/15 border border-rose-400/30 text-rose-200">
                    Limit!
                  </span>
                )}
                {warn && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-200">
                    knapp
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-baseline gap-2">
                <div className="text-2xl font-bold tabular-nums">
                  {formatTokens(m.used)}
                </div>
                <div className="text-xs text-slate-400">
                  / {formatTokens(m.monthlyBudget)}
                </div>
              </div>

              <div className="mt-3 h-2 w-full rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: pct + "%",
                    background: over
                      ? "linear-gradient(90deg, #f87171, #fbbf24)"
                      : warn
                        ? "linear-gradient(90deg, #fbbf24, #22d3ee)"
                        : `linear-gradient(90deg, ${m.color}, #22d3ee)`,
                  }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <span>{pct}%</span>
                <span>{formatEuro(tokensToEuro(m.used))}</span>
              </div>

              {m.role !== "adult" && (
                <div className="mt-4 pt-4 border-t border-white/5 text-xs text-slate-400 flex justify-between">
                  <span>Zeitfenster</span>
                  <span className="text-slate-200">
                    {m.role === "kid" ? "07–20 Uhr" : "07–22 Uhr"}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
