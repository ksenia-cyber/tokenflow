"use client";

import { useEffect, useState } from "react";
import { formatTokens } from "@/lib/data";

export default function Hero() {
  const [live, setLive] = useState(6_481_239);

  useEffect(() => {
    const id = setInterval(() => {
      setLive((v) => v + Math.floor(Math.random() * 280) + 40);
    }, 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
          <span className="text-xs tracking-widest uppercase text-slate-400">
            Haushaltskasse fürs AI-Zeitalter · DACH Beta
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
          Tokens sind die <span className="gradient-text">neue Währung</span>
          <br />
          deines Haushalts.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
          Smart Speaker, Kinder-Tablet, Auto, AR-Brille — jedes Gerät in deinem
          Zuhause verbraucht bald KI wie Strom oder Wasser.{" "}
          <span className="text-white font-medium">TokenFlow</span> zeigt dir
          live, wohin die Tokens fließen, setzt Budgets für jedes Familienmitglied
          und warnt dich, bevor das Kontingent leer ist.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="glass rounded-2xl p-5">
            <div className="text-xs uppercase tracking-wider text-slate-400">
              Live-Verbrauch heute
            </div>
            <div className="mt-2 text-3xl font-bold tabular-nums">
              {formatTokens(live)}
            </div>
            <div className="text-xs text-slate-500 mt-1">Tokens · Haushalt gesamt</div>
          </div>
          <div className="glass rounded-2xl p-5">
            <div className="text-xs uppercase tracking-wider text-slate-400">
              Aktive Geräte
            </div>
            <div className="mt-2 text-3xl font-bold">9</div>
            <div className="text-xs text-slate-500 mt-1">
              davon 1 am Tageslimit
            </div>
          </div>
          <div className="glass rounded-2xl p-5">
            <div className="text-xs uppercase tracking-wider text-slate-400">
              Familie
            </div>
            <div className="mt-2 text-3xl font-bold">4 Profile</div>
            <div className="text-xs text-slate-500 mt-1">
              2 Eltern · 1 Teenie · 1 Kind
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3 text-xs text-slate-400">
          <Tag>💧 Leck-Erkennung</Tag>
          <Tag>👨‍👩‍👧 Familien-Budgets</Tag>
          <Tag>🌱 CO₂-Transparenz</Tag>
          <Tag>🔔 Smart Alerts</Tag>
          <Tag>🎮 Auto-Throttling</Tag>
          <Tag>🌙 Peak/Off-Peak</Tag>
        </div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
      {children}
    </span>
  );
}
