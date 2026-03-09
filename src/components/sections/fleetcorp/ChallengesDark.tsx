import Link from "next/link";

export default function ChallengesDark({ dict, locale }: { dict: any; locale: string }) {
    const challenges = [
        {
            title: dict?.items?.costs?.title || "High Operational Costs",
            desc: dict?.items?.costs?.desc || "Inefficient fuel spend and maintenance costs.",
            icon: "trending_up"
        },
        {
            title: dict?.items?.control?.title || "Lack of Real-time Control",
            desc: dict?.items?.control?.desc || "No visibility into driver behavior and routes.",
            icon: "visibility_off"
        },
        {
            title: dict?.items?.staffing?.title || "Staffing Shortages",
            desc: dict?.items?.staffing?.desc || "Difficulty in finding and retaining qualified drivers.",
            icon: "group_off"
        },
        {
            title: dict?.items?.downtime?.title || "Frequent Downtime",
            desc: dict?.items?.downtime?.desc || "Unscheduled maintenance disrupting operations.",
            icon: "timer_off"
        },
    ];

    return (
        <section className="w-full bg-[#1a1d23] border-t border-[#282e39] py-20 px-6 lg:px-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined">warning</span>
                            <span className="text-xs font-bold tracking-[0.15em] uppercase">
                                {dict?.badge || "Industry Challenges"}
                            </span>
                        </div>
                        <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                            {dict?.title || "Solving Complex"} <br /> {dict?.titleAccent || "Fleet Issues"}
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                            {dict?.description || "We address critical pain points in logistics."}
                        </p>
                    </div>
                    <div className="grid gap-6">
                        {challenges.map((item) => (
                            <div key={item.title} className="flex gap-5 group">
                                <div className="shrink-0 size-12 rounded-lg bg-[#282e39]/50 flex items-center justify-center text-primary border border-primary/20 group-hover:border-primary/50 transition-colors">
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                                <div>
                                    <h4 className="text-white text-lg font-bold mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-[#1a1d23]/70 backdrop-blur-xl rounded-2xl p-8 md:p-10 flex flex-col gap-8 relative overflow-hidden group border border-white/10 hover:border-primary/50 transition-colors duration-500">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="size-16 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                                <span className="material-symbols-outlined text-white text-4xl">hub</span>
                            </div>
                            <div>
                                <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                                    {dict?.fullCycle?.title || "Full Cycle Management"}
                                </h3>
                                <p className="text-slate-300 text-base leading-relaxed">
                                    {dict?.fullCycle?.desc || "Our integrated approach ensures end-to-end efficiency."}
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
                                {(dict?.fullCycle?.points || ["Predictive monitoring", "Real-time dispatch", "Financial transparency"]).map((s: string) => (
                                    <div key={s} className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                        <span className="text-slate-200 text-sm font-medium">{s}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href={`/${locale}/services/strategic-outsourcing`} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 px-6 text-white font-bold tracking-wide hover:bg-orange-600 transition-all shadow-lg hover:shadow-primary/25 pointer-events-auto">
                                <span>{dict?.fullCycle?.button || "Get Solution"}</span>
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl border border-[#282e39] bg-[#111318]"></div>
                </div>
            </div>
        </section>
    );
}
