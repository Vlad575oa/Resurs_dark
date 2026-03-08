const challenges = [
  {
    title: "Rising Costs",
    description: "Unpredictable maintenance spikes and fuel inefficiency draining budgets.",
    icon: "trending_up",
  },
  {
    title: "Opaque Control",
    description: "Lack of real-time data creating blind spots in daily operations.",
    icon: "visibility_off",
  },
  {
    title: "Staffing Complexities",
    description: "High turnover rates and costly training cycles for new drivers.",
    icon: "group_off",
  },
  {
    title: "Downtime Risks",
    description: "Unexpected failures halting critical supply lines and revenue.",
    icon: "timer_off",
  },
];

const solutions = [
  "Predictive Maintenance AI",
  "Real-time Global Tracking",
  "Certified Driver Pool",
];

export default function ChallengesSolutions() {
  return (
    <section className="w-full bg-white border-t border-slate-200 py-20 px-6 lg:px-10 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Left Column: Challenges */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-red-500">
              <span className="material-symbols-outlined">warning</span>
              <span className="text-xs font-bold tracking-[0.15em] uppercase">
                Challenges
              </span>
            </div>
            <h2 className="text-slate-900 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              NAVIGATING <br /> COMPLEXITY
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
              Managing enterprise fleets without a unified system leads to bleeding
              costs and operational friction.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="flex gap-5 group items-start">
                <div className="shrink-0 size-12 rounded-lg bg-red-50 flex items-center justify-center text-red-500 border border-red-200 group-hover:border-red-400 transition-colors">
                  <span className="material-symbols-outlined">
                    {challenge.icon}
                  </span>
                </div>
                <div>
                  <h4 className="text-slate-900 text-lg font-bold mb-1 group-hover:text-red-500 transition-colors">
                    {challenge.title}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {challenge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Solutions */}
        <div className="relative">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10 flex flex-col gap-8 relative overflow-hidden group hover:border-primary/50 transition-colors duration-500 shadow-sm hover:shadow-md">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 flex flex-col gap-6">
              {/* Icon */}
              <div className="size-16 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined text-white text-4xl">
                  hub
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-slate-900 text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                  Full-Cycle Management
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Our comprehensive ecosystem transforms fleet operations from a cost
                  center into a strategic asset. We unify acquisition, maintenance,
                  staffing, and disposal into a single, transparent dashboard.
                </p>
              </div>

              {/* Solutions List */}
              <div className="flex flex-col gap-3 border-t border-slate-200 pt-6">
                {solutions.map((solution) => (
                  <div key={solution} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">
                      check_circle
                    </span>
                    <span className="text-slate-700 text-sm font-medium">
                      {solution}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 px-6 text-white font-bold tracking-wide hover:bg-blue-600 transition-all shadow-lg hover:shadow-primary/25">
                <span>LEARN ABOUT THE SOLUTION</span>
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Decorative background card */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl border border-slate-200 bg-slate-100" />
        </div>
      </div>
    </section>
  );
}
