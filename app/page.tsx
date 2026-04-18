import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import FamilyPanel from "@/components/FamilyPanel";
import DevicesGrid from "@/components/DevicesGrid";
import UsageChart from "@/components/UsageChart";
import AlertsFeed from "@/components/AlertsFeed";
import Principles from "@/components/Principles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <nav className="max-w-6xl mx-auto px-6 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-sm font-black">
            T
          </div>
          <span className="font-bold">TokenFlow</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#dashboard" className="hover:text-white">
            Dashboard
          </a>
          <a href="#familie" className="hover:text-white">
            Familie
          </a>
          <a href="#geraete" className="hover:text-white">
            Geräte
          </a>
          <a href="#prinzipien" className="hover:text-white">
            Konzept
          </a>
        </div>
        <a
          href="#dashboard"
          className="text-xs sm:text-sm px-4 py-2 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-200 transition"
        >
          Demo ansehen
        </a>
      </nav>

      <Hero />

      <div id="dashboard">
        <StatStrip />
        <UsageChart />
      </div>

      <div id="familie">
        <FamilyPanel />
      </div>

      <div id="geraete">
        <DevicesGrid />
      </div>

      <AlertsFeed />

      <div id="prinzipien">
        <Principles />
      </div>

      <Footer />
    </main>
  );
}
