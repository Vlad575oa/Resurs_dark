const losses = [
  {
    id: 1,
    type: "Excessive Idling",
    description: "Engine running for >45m while stationary. Fuel waste detected.",
    cost: "-$12.50 EST",
    time: "10:42 AM",
    icon: "hourglass_top",
    iconColor: "text-yellow-500",
    iconBg: "bg-yellow-500/10",
    status: "PENDING",
    statusColor: "text-yellow-400",
    statusBorder: "border-yellow-500/20",
  },
  {
    id: 2,
    type: "Fuel Anomaly",
    description: "Sudden drop rate detected during route break.",
    cost: "CRITICAL",
    time: "09:15 AM",
    icon: "local_gas_station",
    iconColor: "text-red-500",
    iconBg: "bg-red-500/10",
    status: "CRITICAL",
    statusColor: "text-red-400",
    statusBorder: "border-red-500/20",
  },
  {
    id: 3,
    type: "Route Deviation",
    description: "Vehicle left designated geofence zone Sector 4.",
    cost: "LOGGED",
    time: "08:30 AM",
    icon: "wrong_location",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    status: "LOGGED",
    statusColor: "text-blue-300",
    statusBorder: "border-blue-500/20",
  },
  {
    id: 4,
    type: "Tire Pressure Low",
    description: "",
    cost: "",
    time: "",
    icon: "check_circle",
    iconColor: "text-green-500",
    iconBg: "bg-green-500/10",
    status: "RESOLVED",
    statusColor: "text-slate-600",
    statusBorder: "border-slate-600",
    resolved: true,
  },
];

const stats = [
  { label: "Total Loss", value: "-$420.50", color: "text-red-400" },
  { label: "Resolution", value: "84%", color: "text-primary" },
  { label: "Pending", value: "3", color: "text-yellow-400" },
];

export default function LossesFeed() {
  return (
    <aside className="w-full lg:w-[420px] xl:w-[480px] flex flex-col border-r border-[#2C3A37] bg-background-dark relative z-10">
      <div className="p-6 pb-2">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Losses Feed</h1>
            <p className="text-slate-400 text-sm font-mono">UNIT 734-ALPHA • REAL-TIME</p>
          </div>
          <button className="size-10 rounded-full bg-[#2C3A37] hover:bg-primary hover:text-background-dark text-primary transition-all flex items-center justify-center">
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>
        
        {/* Stats Strip */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col bg-[#1c2624] rounded-2xl p-4 min-w-[120px] border border-[#2C3A37]">
              <span className="text-xs text-slate-400 font-mono uppercase">{stat.label}</span>
              <span className={`text-xl font-bold ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable Notes List */}
      <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-4">
        {losses.map((loss) => (
          <div
            key={loss.id}
            className={`group transition-all rounded-[2rem] p-5 border relative ${
              loss.resolved
                ? "opacity-60 hover:opacity-100 border-dashed border-[#2C3A37]"
                : "bg-[#2C3A37]/40 hover:bg-[#2C3A37]/60 border-[#2C3A37]/50 hover:border-primary/30"
            }`}
          >
            {!loss.resolved && (
              <div className="absolute top-5 right-5 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="size-8 rounded-full bg-background-dark text-slate-400 hover:text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
                <button className="size-8 rounded-full bg-primary text-background-dark flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                </button>
              </div>
            )}
            
            <div className="flex gap-4">
              <div className={`size-12 rounded-full ${loss.iconBg} ${loss.iconColor} flex items-center justify-center flex-shrink-0`}>
                <span className="material-symbols-outlined">{loss.icon}</span>
              </div>
              <div className={`flex-1 ${loss.resolved ? 'pr-0' : 'pr-16'}`}>
                {loss.resolved ? (
                  <>
                    <h3 className="text-slate-400 font-medium text-base line-through">{loss.type}</h3>
                    <span className="text-xs text-slate-600 font-mono">RESOLVED</span>
                  </>
                ) : (
                  <>
                    <h3 className="text-white font-bold text-lg leading-tight mb-1">{loss.type}</h3>
                    <p className="text-slate-300 text-sm mb-3">{loss.description}</p>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full bg-background-dark text-xs font-mono ${loss.statusColor} border ${loss.statusBorder}`}>
                        {loss.cost}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">{loss.time}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Action */}
      <div className="p-6 border-t border-[#2C3A37] mt-auto bg-background-dark/95 backdrop-blur">
        <button className="w-full py-3 rounded-full bg-[#2C3A37] hover:bg-slate-700 text-white font-medium transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">add</span>
          Add Manual Note
        </button>
      </div>
    </aside>
  );
}
