"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EconomicImpact() {
  const [mileage, setMileage] = useState(145000);
  const [fuelCost, setFuelCost] = useState(1.85);
  const [isSimulating, setIsSimulating] = useState(false);
  const [efficiency, setEfficiency] = useState(24.8);
  const [totalMileage, setTotalMileage] = useState(1240592);
  const [fuelSaved, setFuelSaved] = useState(42890);
  const [co2Saved, setCo2Saved] = useState(108.5);
  const [messages, setMessages] = useState([
    { time: "10:42:01", content: "System initialized. Monitoring inputs.", type: "log" },
    { time: "10:42:05", content: `Mileage set to ${mileage.toLocaleString()} km.`, type: "log" },
  ]);

  const estimatedLoss = (mileage / 100) * 8.5 * fuelCost; // Simplified loss formula

  const handleRunSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);

    const newMsg = {
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      content: "SIMULATION_START: Analyzing fleet routes...",
      type: "log"
    };
    setMessages(prev => [...prev, newMsg]);

    // Simulate counting and updates
    setTimeout(() => {
      setEfficiency(prev => prev + 4.2);
      setTotalMileage(prev => prev + 1205);
      setFuelSaved(prev => prev + 342);
      setCo2Saved(prev => prev + 1.2);

      setMessages(prev => [...prev, {
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        content: "INSIGHT: Optimized throttle response mapping applied to Unit_04.",
        type: "insight"
      }]);
    }, 1500);

    setTimeout(() => {
      setIsSimulating(false);
      setMessages(prev => [...prev, {
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        content: "SIMULATION_COMPLETE: ROI analysis projected at 18.5%.",
        type: "log"
      }]);
    }, 4000);
  };

  return (
    <section className="relative z-10 border-t border-[#283937] bg-[#102220]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#283937] bg-[#102220]/95 backdrop-blur-md">
        <div className="px-6 lg:px-10 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-8 text-primary">
              <span className="material-symbols-outlined !text-3xl">token</span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-white text-lg font-bold leading-none tracking-tight">TRANSPORT_OS // 2026</h2>
              <span className="text-xs text-primary/70 font-mono mt-1">SYS.VER.4.0.2 // ONLINE</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            <a className="text-slate-400 hover:text-primary text-sm font-medium transition-colors" href="#">DASHBOARD</a>
            <a className="text-slate-400 hover:text-primary text-sm font-medium transition-colors" href="#">FLEET_STATUS</a>
            <a className="text-primary text-sm font-bold border-b-2 border-primary pb-1" href="#">ECONOMIC_IMPACT</a>
            <a className="text-slate-400 hover:text-primary text-sm font-medium transition-colors" href="#">SETTINGS</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col items-end mr-4">
              <span className="text-[10px] text-slate-500 font-mono">WALLET_ID</span>
              <span className="text-xs text-white font-mono">0x71C...9A2</span>
            </div>
            <button className="flex items-center justify-center rounded-full size-10 bg-[#1f3a37] hover:bg-primary/20 text-white transition-all border border-[#283937]">
              <span className="material-symbols-outlined !text-xl">notifications</span>
            </button>
            <div className="size-10 rounded-full bg-cover bg-center border border-[#283937]" style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuA7ZdWKJBxjBfPcApBVswSG4qcTxu7T-0d7tQf9ggTGkJwNyTLPh0P19URm2Xd5tDEdSxbzPHLVyASvYJtmZG5F-Ra08iAGh8nxDQM5nJ-yldpIQyJc_C4vg1bbf1dCrqN_-Gk84JN_SRDrehJZiQYZw7PEk7gJul6cl3mHAwKsi4E5aJBzyZIWvEimRQ3wdi8MzyB7NX3qnGpmhaxjetbpGUYMhb66BQRrJLmIreuWo8UYiOaw4Sp4iGFD74bqs6rDYXWomLljdiT7)" }}></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-6 lg:p-10 gap-8 max-w-[1600px] mx-auto w-full relative">
        {/* Background Grid Texture */}
        <div className="absolute inset-0 grid-bg opacity-5 bg-grid-pattern pointer-events-none z-0" style={{ backgroundImage: "linear-gradient(to right, #1f3a37 1px, transparent 1px), linear-gradient(to bottom, #1f3a37 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

        {/* Header Section */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 z-10 relative">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary text-sm font-mono tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              LIVE TELEMETRY
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
              Economic Effect <span className="text-slate-600">//</span> Deep Tech
            </h1>
            <p className="text-slate-400 max-w-2xl text-lg mt-2">
              Real-time analysis of fleet efficiency utilizing Agentic AI predictive modeling.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#283937] bg-[#162b29] hover:bg-[#1f3a37] text-white text-sm font-medium transition-colors">
              <span className="material-symbols-outlined !text-lg">download</span>
              EXPORT_REPORT
            </button>
            <button
              onClick={handleRunSimulation}
              disabled={isSimulating}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-glow ${isSimulating ? 'bg-primary/50 text-[#102220]/50 cursor-not-allowed' : 'bg-primary text-[#102220] hover:brightness-110'
                }`}
            >
              <span className={`material-symbols-outlined !text-lg ${isSimulating ? 'animate-spin' : ''}`}>
                {isSimulating ? 'sync' : 'play_arrow'}
              </span>
              {isSimulating ? 'SIMULATING...' : 'RUN_SIMULATION'}
            </button>
          </div>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 z-10 relative">
          {/* Col 1: Economic Effect / ASCII Viz (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Main Visualization Card */}
            <div className="flex flex-col rounded-xl border border-[#283937] bg-[#162b29]/50 backdrop-blur-sm overflow-hidden h-full min-h-[500px]">
              <div className="flex items-center justify-between p-4 border-b border-[#283937] bg-[#162b29]/80">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">analytics</span>
                  <span className="text-xs font-mono text-slate-300">VISUALIZATION_ENGINE_V2</span>
                </div>
                <div className="flex gap-2">
                  <div className="px-2 py-0.5 rounded bg-[#102220] border border-[#283937] text-[10px] text-primary font-mono">FPS: 60</div>
                  <div className="px-2 py-0.5 rounded bg-[#102220] border border-[#283937] text-[10px] text-primary font-mono">LATENCY: 12ms</div>
                </div>
              </div>
              <div className="relative flex-1 p-6 flex items-center justify-center bg-[#0d1615]">
                {/* Background topographic lines */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 19px, #13ecda 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, #13ecda 20px)", backgroundSize: "20px 20px" }}></div>

                {/* ASCII Truck Representation */}
                <motion.div
                  animate={isSimulating ? { x: [0, -1, 1, -1, 0] } : {}}
                  transition={{ repeat: Infinity, duration: 0.1 }}
                  className="ascii-container text-[8px] md:text-[10px] lg:text-xs text-primary leading-none opacity-80 select-none font-mono relative"
                >
                  {/* Scanning line */}
                  <motion.div
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="absolute left-0 right-0 h-4 bg-primary/10 border-y border-primary/20 pointer-events-none z-10"
                  />
                  {`                          _______________________________________________________
                         |                                                       |
                         |   [FLEET_UNIT_04]    MANAGED ASSET                    |
                         |   _________________________________________________   |
                         |  /   __                                            \\  |
                         | |   |  |  >> AI_OPTIMIZED_ROUTE: ACTIVE            |  |
                         | |___|__|___________________________________________|  |
                         |  /___\\      /___\\      /___\\      /___\\      /___\\    |
                         | (  O  )    (  O  )    (  O  )    (  O  )    (  O  )   |
                         |  \\___/      \\___/      \\___/      \\___/      \\___/    |
                          \\_______________________________________________________/
                             ||         ||         ||         ||         ||
                           ==++=========++=========++=========++=========++==`}
                </motion.div>

                {/* Data Overlays */}
                <div className="absolute top-10 left-10 p-3 bg-[#162b29]/90 border border-[#283937] rounded-lg shadow-lg">
                  <p className="text-[10px] text-slate-400 font-mono mb-1">ASSET_STATUS</p>
                  <p className="text-xl gold-emboss font-display">MANAGED ASSET</p>
                  <p className="text-xs text-slate-300 mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined !text-sm text-yellow-500">verified</span>
                    Gold Renaissance Tier
                  </p>
                </div>
                <div className="absolute bottom-10 right-10 p-3 bg-[#162b29]/90 border border-[#283937] rounded-lg shadow-lg text-right">
                  <p className="text-[10px] text-slate-400 font-mono mb-1">EFFICIENCY_DELTA</p>
                  <p className="text-2xl text-primary font-bold">{efficiency.toFixed(1)}%</p>
                  <div className="w-full h-1 bg-[#283937] rounded-full mt-2 overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: `${(efficiency / 40) * 100}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-primary"
                    ></motion.div>
                  </div>
                </div>
              </div>

              {/* Stats Footer */}
              <div className="grid grid-cols-3 border-t border-[#283937] divide-x divide-[#283937] bg-[#162b29]/80">
                <div className="p-4 flex flex-col gap-1">
                  <span className="text-[10px] text-slate-500 font-mono">TOTAL_MILEAGE</span>
                  <span className="text-white font-mono text-lg">{totalMileage.toLocaleString()} km</span>
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <span className="text-[10px] text-slate-500 font-mono">FUEL_SAVED</span>
                  <span className="text-primary font-mono text-lg">{fuelSaved.toLocaleString()} L</span>
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <span className="text-[10px] text-slate-500 font-mono">CO2_REDUCTION</span>
                  <span className="text-white font-mono text-lg">{co2Saved.toFixed(1)} Tons</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: AI Calculator & Chat (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* AI Calculator Block */}
            <div className="rounded-xl border border-[#283937] bg-[#162b29]/50 backdrop-blur-sm p-6 flex flex-col gap-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined !text-6xl">calculate</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="size-8 rounded bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                  <span className="material-symbols-outlined !text-lg">memory</span>
                </div>
                <h3 className="text-white font-bold text-lg">AI_CALCULATOR</h3>
              </div>

              {/* Slider 1 */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-mono text-slate-400">MONTHLY_FLEET_MILEAGE</label>
                  <span className="text-primary font-mono text-xl">{mileage.toLocaleString()} km</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  value={mileage}
                  onChange={(e) => setMileage(Number(e.target.value))}
                  className="w-full z-10 focus:outline-none accent-primary"
                />
              </div>

              {/* Slider 2 */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-mono text-slate-400">FUEL_COST_PER_LITER</label>
                  <span className="text-primary font-mono text-xl">${fuelCost.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="0.05"
                  value={fuelCost}
                  onChange={(e) => setFuelCost(Number(e.target.value))}
                  className="w-full z-10 focus:outline-none accent-primary"
                />
              </div>

              <div className="mt-2 pt-4 border-t border-[#283937] flex justify-between items-center">
                <span className="text-slate-400 text-sm">ESTIMATED LOSS</span>
                <motion.span
                  key={estimatedLoss}
                  initial={{ opacity: 0.5, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 font-mono text-xl font-bold"
                >
                  -${estimatedLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })} / mo
                </motion.span>
              </div>
            </div>

            {/* Agentic AI Chat */}
            <div className="flex-1 rounded-xl border border-[#283937] bg-[#0c1211] p-0 flex flex-col overflow-hidden h-[300px]">
              <div className="p-3 bg-[#162220] border-b border-[#283937] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative size-2">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                    <div className="absolute inset-0 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-xs font-mono text-primary font-bold">AGENTIC_AI_ASSISTANT</span>
                </div>
                <span className="material-symbols-outlined text-slate-500 !text-sm">terminal</span>
              </div>
              <div className="flex-1 p-4 font-mono text-sm overflow-y-auto flex flex-col gap-4">
                <AnimatePresence mode="popLayout">
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex gap-3 ${msg.type === 'insight' ? 'bg-primary/5 p-2 -mx-2 rounded border-l-2 border-primary' : ''}`}
                    >
                      <span className="text-slate-500 shrink-0">{msg.time}</span>
                      <div className={msg.type === 'insight' ? 'text-white' : 'text-slate-300'}>
                        {msg.type === 'insight' ? (
                          <span className="text-primary font-bold">INSIGHT:</span>
                        ) : (
                          <span className="text-primary">&gt;</span>
                        )}
                        {" "}{msg.content}
                        {idx === messages.length - 1 && isSimulating && (
                          <span className="animate-pulse">_</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              <div className="p-3 border-t border-[#283937] bg-[#162220]">
                <div className="flex items-center gap-2">
                  <span className="text-primary">&gt;</span>
                  <input className="bg-transparent border-none text-white text-sm w-full focus:ring-0 placeholder:text-slate-600 font-mono" placeholder="Ask about efficiency..." type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Product Passport Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative">
          {/* Blockchain Certificate Card */}
          <div className="lg:col-span-2 rounded-xl border border-[#d4af37]/30 bg-[#162b29]/80 backdrop-blur-md p-0 flex flex-col md:flex-row overflow-hidden relative group">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4af37] rounded-tl-lg z-20"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4af37] rounded-br-lg z-20"></div>

            <div className="bg-[#1a1810] p-6 md:w-1/3 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#3a3520] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
              <div className="bg-white p-2 rounded mb-4">
                <img alt="DPP QR Code" className="w-32 h-32 opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcQOT_8hFHqRjdnrpYc1URW-eZP8jAtY_PF0t8aULnupwB_fxAXVK9D7TN9yERBNVbvG7yhiBRxRyMiGEIqkK1T0UJz1sithCYxNix8xVcbtwQR3d3sZ8mHuC0e7JtUlqakUq5x2UMhfLi-HFOKVa4yj245VpAF_DpS-EL_UwwcMsoYQN03_LC7WAPMWOjJcesY6n6SfTZv6wlYP2eoZ6_Bf1wzHBqj7UwXEVmpyNkp-FhkxNne2pODGjWUQQ0kMlUp4V5lyrip41P" />
              </div>
              <span className="text-[10px] text-[#d4af37] font-mono tracking-widest text-center">SCAN FOR PROOF</span>
            </div>

            <div className="p-6 md:w-2/3 flex flex-col justify-between relative">
              <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-[#d4af37]">workspace_premium</span>
                    <h4 className="text-[#d4af37] font-bold tracking-widest text-sm uppercase">Digital Product Passport</h4>
                  </div>
                  <h3 className="text-white text-2xl font-bold">CERTIFICATE #88-XJ-09</h3>
                </div>
                <div className="px-3 py-1 border border-primary/30 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide">
                  VERIFIED
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-6">
                <div>
                  <p className="text-[10px] text-slate-500 font-mono mb-0.5">OWNER_HASH</p>
                  <p className="text-slate-300 font-mono text-sm truncate">0x71C9...8B9A2</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono mb-0.5">ISSUED_DATE</p>
                  <p className="text-slate-300 font-mono text-sm">2026-10-14</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono mb-0.5">ASSET_CLASS</p>
                  <p className="text-white font-mono text-sm">HEAVY_TRANSPORT_T4</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono mb-0.5">BLOCKCHAIN</p>
                  <p className="text-slate-300 font-mono text-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    ETHEREUM_L2
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-auto">
                <p className="text-[10px] text-slate-500 font-mono max-w-xs">
                  This certificate guarantees the environmental compliance and maintenance history of the asset.
                </p>
                <a className="ml-auto text-[#d4af37] text-sm hover:underline font-mono flex items-center gap-1" href="#">
                  VIEW_LEDGER <span className="material-symbols-outlined !text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </div>

          {/* Compliance Score Card */}
          <div className="rounded-xl border border-[#283937] bg-[#162b29]/50 backdrop-blur-sm p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-medium">COMPLIANCE SCORE</h4>
                <span className="material-symbols-outlined text-slate-500">policy</span>
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-5xl font-bold text-white tracking-tighter">98.5</span>
                <span className="text-sm text-primary font-mono mb-1.5">/100</span>
              </div>
              <p className="text-slate-400 text-sm">Asset meets all 2026 regional emission standards.</p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-xs font-mono text-slate-300">
                <span>CO2_EMISSIONS</span>
                <span className="text-primary">OPTIMAL</span>
              </div>
              <div className="w-full bg-[#162220] rounded-full h-1.5">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: "95%" }}></div>
              </div>
              <div className="flex justify-between text-xs font-mono text-slate-300 pt-1">
                <span>NOISE_POLLUTION</span>
                <span className="text-primary">PASS</span>
              </div>
              <div className="w-full bg-[#162220] rounded-full h-1.5">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: "88%" }}></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#283937] bg-[#102220] py-8 mt-auto">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-mono">© 2026 TRANSPORT_OS. SYSTEM_SECURE.</p>
          <div className="flex gap-6 text-slate-500 text-xs font-mono">
            <a className="hover:text-primary transition-colors" href="#">PRIVACY_PROTOCOL</a>
            <a className="hover:text-primary transition-colors" href="#">TERMS_OF_SERVICE</a>
            <a className="hover:text-primary transition-colors" href="#">STATUS_PAGE</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
