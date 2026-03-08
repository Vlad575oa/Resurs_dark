export default function DashboardMockup() {
  return (
    <div className="relative group">
      {/* Decorative elements */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative rounded-2xl border border-slate-200 dark:border-border-dark bg-[#0c1017] shadow-2xl overflow-hidden aspect-[16/10]">
        {/* Top Bar of Mockup */}
        <div className="h-10 border-b border-border-dark bg-[#11161d] flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="size-3 rounded-full bg-red-500/80"></div>
            <div className="size-3 rounded-full bg-yellow-500/80"></div>
            <div className="size-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="ml-4 h-5 w-64 bg-[#1c222e] rounded-md"></div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 grid grid-cols-12 grid-rows-6 gap-4 h-[calc(100%-40px)]">
          {/* Sidebar */}
          <div className="col-span-2 row-span-6 border-r border-border-dark hidden sm:flex flex-col gap-4 py-2">
            <div className="h-8 w-8 bg-primary/20 rounded-md text-primary flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-sm">dashboard</span>
            </div>
            <div className="h-8 w-8 hover:bg-border-dark rounded-md text-slate-500 flex items-center justify-center mx-auto transition-colors">
              <span className="material-symbols-outlined text-sm">map</span>
            </div>
            <div className="h-8 w-8 hover:bg-border-dark rounded-md text-slate-500 flex items-center justify-center mx-auto transition-colors">
              <span className="material-symbols-outlined text-sm">bar_chart</span>
            </div>
            <div className="h-8 w-8 hover:bg-border-dark rounded-md text-slate-500 flex items-center justify-center mx-auto transition-colors">
              <span className="material-symbols-outlined text-sm">settings</span>
            </div>
          </div>

          {/* Map Area (Main) */}
          <div className="col-span-12 sm:col-span-7 row-span-4 rounded-lg overflow-hidden relative border border-border-dark">
            <div className="absolute inset-0 bg-cover bg-center opacity-80 bg-[#0c1017]">
              <div className="absolute inset-0 bg-[#0c1017]/40"></div>
            </div>
            
            {/* Map overlay elements */}
            <div className="absolute top-4 right-4 bg-[#11161d]/90 backdrop-blur border border-border-dark p-2 rounded text-xs text-white">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> Active: 42
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span> Idle: 3
              </div>
            </div>

            <div className="absolute bottom-8 left-1/3 transform -translate-x-1/2">
              <div className="relative">
                <span className="absolute -inset-2 rounded-full bg-primary/30 animate-ping"></span>
                <div className="bg-primary text-white text-[10px] px-2 py-1 rounded shadow-lg border border-white/10 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px]">local_shipping</span> Vehicle #402
                </div>
              </div>
            </div>
          </div>

          {/* Stats Panel */}
          <div className="col-span-12 sm:col-span-3 row-span-4 flex flex-col gap-3">
            <div className="bg-surface-dark border border-border-dark rounded-lg p-3 flex-1 flex flex-col justify-center">
              <span className="text-xs text-slate-500">Total Distance</span>
              <div className="text-xl font-bold text-white mt-1">12,402 <span className="text-xs font-normal text-slate-500">km</span></div>
              <div className="w-full bg-border-dark h-1 mt-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-3/4"></div>
              </div>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-lg p-3 flex-1 flex flex-col justify-center">
              <span className="text-xs text-slate-500">Fuel Usage</span>
              <div className="text-xl font-bold text-white mt-1">840 <span className="text-xs font-normal text-slate-500">L</span></div>
              <div className="w-full bg-border-dark h-1 mt-2 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full w-1/2"></div>
              </div>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-lg p-3 flex-1 flex flex-col justify-center">
              <span className="text-xs text-slate-500">Efficiency</span>
              <div className="text-xl font-bold text-white mt-1">94%</div>
              <div className="text-[10px] text-green-500 flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[10px]">trending_up</span> +2.4%
              </div>
            </div>
          </div>

          {/* Bottom Timeline/Graph */}
          <div className="col-span-12 sm:col-span-10 row-span-2 bg-surface-dark border border-border-dark rounded-lg p-3 relative overflow-hidden">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-slate-400">Activity Timeline</span>
              <span className="text-[10px] text-slate-600 bg-border-dark px-2 py-0.5 rounded">Last 24h</span>
            </div>
            <div className="flex items-end justify-between h-12 gap-1">
              {[40, 70, 50, 90, 60, 30, 80, 45].map((height, i) => (
                <div
                  key={i}
                  className="w-full bg-primary/20 hover:bg-primary/40 rounded-t-sm transition-all relative group/bar"
                  style={{ height: `${height}%` }}
                >
                  {i === 3 && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-white text-black text-[9px] px-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                      Peak
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
