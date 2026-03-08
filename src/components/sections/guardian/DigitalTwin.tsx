export default function DigitalTwin() {
  return (
    <section className="flex-1 relative bg-background-dark overflow-hidden flex flex-col">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at center, #2C3A37 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark z-0 pointer-events-none"></div>

      {/* Top Data Bar */}
      <div className="relative z-10 w-full p-6 flex justify-between items-start">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold font-mono tracking-wider mb-2">
            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
            LIVE CONNECTION
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tight">Digital Twin</h2>
        </div>
        <div className="flex gap-4">
          <div className="glass-panel px-4 py-3 rounded-2xl flex flex-col items-end">
            <span className="text-xs text-slate-400 font-mono">UPTIME</span>
            <span className="text-xl font-bold text-white font-mono">98.4%</span>
          </div>
          <div className="glass-panel px-4 py-3 rounded-2xl flex flex-col items-end">
            <span className="text-xs text-slate-400 font-mono">HEALTH</span>
            <span className="text-xl font-bold text-primary font-mono">A-</span>
          </div>
        </div>
      </div>

      {/* 3D Visualization Area */}
      <div className="flex-1 relative flex items-center justify-center wireframe-container z-0">
        <div className="relative w-[600px] aspect-[16/9] wireframe-truck transition-transform duration-500 ease-out group/truck">
          <img
            alt="Truck Wireframe"
            className="w-full h-full object-contain opacity-90 drop-shadow-[0_0_30px_rgba(19,236,218,0.3)] filter contrast-125 brightness-125 saturate-0 sepia-0 hue-rotate-180 invert mix-blend-lighten"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZcTSic_auUrD37fJ8nDah9Su6ZdJva2y3vCjy1vbmjVrrMDhU3lS1W-ljW-wPt1Qk3WbSAdzr421pVp5QDFndJNV2mS6Q5LsUuqGfwUYzzJLoXxF1zxFaROXnKzv-cYH2ODz0uJru7cqJ2voLhgW1EnqVXP9wSESsLJ-DVzJB-dYMOEqj0dBwlLinQJCmdQbJiFJoBBmWaKv-sa45xP7YG1li5F6t1sWDFOyiXuN5rVSNvtjrne3Tztgsi7VBrS_Aq-Mo9k9rOhJq"
            style={{ filter: "grayscale(100%) brightness(0.6) sepia(1) hue-rotate(130deg) saturate(3)" }}
          />
          
          {/* Hotspot 1: Cabin */}
          <div className="absolute top-[30%] left-[65%] group/hotspot">
            <div className="relative cursor-pointer size-6 rounded-full bg-primary/20 border border-primary flex items-center justify-center transition-all hover:bg-primary hover:text-background-dark">
              <div className="size-1.5 bg-primary rounded-full"></div>
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 glass-panel rounded-2xl p-4 opacity-0 group-hover/hotspot:opacity-100 translate-y-2 group-hover/hotspot:translate-y-0 transition-all duration-300 pointer-events-none group-hover/hotspot:pointer-events-auto">
              <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                <span className="material-symbols-outlined text-primary text-sm">airline_seat_recline_extra</span>
                <span className="text-white font-bold text-sm">CABIN STATUS</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Driver Fatigue</span>
                  <span className="text-green-400">Normal</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1">
                  <div className="bg-green-400 w-[20%] h-full rounded-full"></div>
                </div>
                <div className="flex justify-between items-center text-xs font-mono pt-1">
                  <span className="text-slate-400">Temp</span>
                  <span className="text-white">21°C</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hotspot 2: Engine */}
          <div className="absolute top-[60%] left-[70%] group/hotspot">
            <div className="relative cursor-pointer size-6 rounded-full bg-primary/20 border border-primary flex items-center justify-center transition-all hover:bg-primary hover:text-background-dark">
              <div className="size-1.5 bg-primary rounded-full"></div>
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 glass-panel rounded-2xl p-4 opacity-0 group-hover/hotspot:opacity-100 -translate-y-2 group-hover/hotspot:translate-y-0 transition-all duration-300 pointer-events-none group-hover/hotspot:pointer-events-auto z-20">
              <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                <span className="material-symbols-outlined text-primary text-sm">settings</span>
                <span className="text-white font-bold text-sm">ENGINE TELEMETRY</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Oil Pressure</span>
                  <span className="text-green-400">Optimal</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">RPM</span>
                  <span className="text-yellow-400">0 (Idle)</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono pt-1">
                  <span className="text-slate-400">Vibration</span>
                  <span className="text-white">0.04mm/s</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hotspot 3: Fuel Tank */}
          <div className="absolute top-[65%] left-[40%] group/hotspot">
            <div className="relative cursor-pointer size-6 rounded-full bg-primary/20 border border-primary flex items-center justify-center transition-all hover:bg-primary hover:text-background-dark">
              <div className="size-1.5 bg-primary rounded-full"></div>
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 glass-panel rounded-2xl p-4 opacity-0 group-hover/hotspot:opacity-100 translate-y-2 group-hover/hotspot:translate-y-0 transition-all duration-300 pointer-events-none group-hover/hotspot:pointer-events-auto">
              <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                <span className="material-symbols-outlined text-red-400 text-sm">local_gas_station</span>
                <span className="text-white font-bold text-sm">FUEL LEVELS</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Capacity</span>
                  <span className="text-red-400">64% (Dropping)</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                  <div className="bg-gradient-to-r from-red-500 to-yellow-500 w-[64%] h-full rounded-full"></div>
                </div>
                <div className="flex justify-between items-center text-xs font-mono pt-1">
                  <span className="text-slate-400">Est. Range</span>
                  <span className="text-white">450 km</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floor Reflection Glow */}
        <div className="absolute bottom-[10%] w-[500px] h-[100px] bg-primary/10 blur-[60px] rounded-[100%] pointer-events-none transform scale-y-50"></div>
      </div>

      {/* Bottom Controls */}
      <div className="relative z-10 p-6 flex justify-between items-end bg-gradient-to-t from-background-dark to-transparent">
        <div className="flex gap-2">
          <button className="glass-panel hover:bg-[#2C3A37] text-slate-300 hover:text-white px-5 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">3d_rotation</span>
            Rotate View
          </button>
          <button className="glass-panel hover:bg-[#2C3A37] text-slate-300 hover:text-white px-5 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">view_in_ar</span>
            Component List
          </button>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500 font-mono mb-1">LAST SYNC</p>
          <p className="text-white font-mono">2026-10-24 14:32:05 UTC</p>
        </div>
      </div>
    </section>
  );
}
