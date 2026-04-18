const items = [
  {
    emoji: "💧",
    title: "Tokens wie Wasser",
    body: "Jedes Gerät hat seinen Hahn. Leck-Erkennung warnt, wenn etwas ungewöhnlich viel zieht.",
  },
  {
    emoji: "🧒",
    title: "Digitales Taschengeld",
    body: "Kinder bekommen eigene Token-Budgets. Sparen zahlt sich aus: Bonus zum Monatsende.",
  },
  {
    emoji: "🚗",
    title: "Mobilität mitgedacht",
    body: "Auto-Assistent, AR-Brille und Wearables verbrauchen unterwegs — wir rechnen alles mit.",
  },
  {
    emoji: "🌙",
    title: "Peak & Off-Peak",
    body: "Nachts ist KI günstiger. TokenFlow verschiebt nicht-dringliche Tasks automatisch.",
  },
  {
    emoji: "🌱",
    title: "Umwelt-Bewusst",
    body: "Jeder Token kostet Energie. Wir zeigen den CO₂-Footprint pro Gerät in Echtzeit.",
  },
  {
    emoji: "⚖️",
    title: "Fair & Transparent",
    body: "Keine versteckten Modelle. Sehe genau, welcher AI-Anbieter wie effizient arbeitet.",
  },
];

export default function Principles() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-sm text-slate-400">Warum TokenFlow?</div>
      <h2 className="text-3xl font-bold mt-1 mb-8">
        Sechs Prinzipien für das Token-Zeitalter
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <div
            key={it.title}
            className="glass rounded-2xl p-5 hover:border-white/20 transition"
          >
            <div className="text-3xl">{it.emoji}</div>
            <div className="mt-3 font-semibold">{it.title}</div>
            <div className="text-sm text-slate-400 mt-1 leading-relaxed">
              {it.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
