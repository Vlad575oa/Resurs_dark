const capabilities = [
  {
    icon: "key",
    title: "Quantum Encryption",
    description: "Data streams protected by 2026-standard quantum keys. Impenetrable by brute force.",
  },
  {
    icon: "alt_route",
    title: "Autonomous Routing",
    description: "AI-driven pathfinding optimizes for speed and threat avoidance in real-time.",
  },
  {
    icon: "satellite_alt",
    title: "Orbital Telemetry",
    description: "Live feed access to cargo status and environmental metrics via dedicated satellite link.",
  },
];

export default function Capabilities() {
  return (
    <section className="relative z-10 px-6 md:px-12 pb-20 max-w-[1440px] mx-auto w-full">
      <div className="glass-panel rounded-xl p-8 border border-white/5 bg-[#1c2726]/40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            SYSTEM CAPABILITIES
          </h3>
          <div className="flex gap-2 text-primary/60 font-mono text-xs">
            <span>// SCROLL_DOWN</span>
            <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group p-6 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">{cap.icon}</span>
              </div>
              <h4 className="text-white text-lg font-bold mb-2">{cap.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
