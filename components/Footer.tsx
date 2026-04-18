export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 pt-12 pb-10 mt-6 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="font-bold gradient-text text-lg">TokenFlow</div>
          <div className="text-xs text-slate-500 mt-1">
            Die Haushaltskasse fürs AI-Zeitalter · Made in DACH · 2026
          </div>
        </div>
        <div className="flex gap-6 text-xs text-slate-400">
          <span>Impressum</span>
          <span>Datenschutz</span>
          <span>Konzept</span>
          <span>Kontakt</span>
        </div>
      </div>
      <div className="mt-6 text-[11px] text-slate-500 leading-relaxed max-w-3xl">
        Prototyp & Konzept-Demo. Tokens, Geräte und Familie sind Beispiel-Daten.
        TokenFlow zeigt, wie Haushalte in naher Zukunft ihren AI-Verbrauch genauso
        selbstverständlich verwalten wie Strom oder Wasser.
      </div>
    </footer>
  );
}
