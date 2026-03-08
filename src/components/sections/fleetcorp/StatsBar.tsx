export default function StatsBar() {
  return (
    <div className="relative z-10 w-full mt-auto border-t border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {/* Stat 1 */}
          <div className="flex items-center gap-5 md:pr-8 pt-4 md:pt-0">
            <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary border border-primary/20">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">15+</p>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                лет на рынке
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-5 md:px-8 pt-4 md:pt-0">
            <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary border border-primary/20">
              <span className="material-symbols-outlined text-3xl">directions_car</span>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">1 000+</p>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                единиц транспорта
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-5 md:pl-8 pt-4 md:pt-0">
            <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary border border-primary/20">
              <span className="material-symbols-outlined text-3xl">domain</span>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">200+</p>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                корпоративных клиентов
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
