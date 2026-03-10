import Link from "next/link";

export default function ServiceGrid({ dict, locale }: { dict: any; locale: string }) {
    const services = [
        {
            slug: "strategic-outsourcing",
            title: dict?.items?.strategic?.title || "Strategic Outsourcing",
            desc: dict?.items?.strategic?.desc || "Full logistics audit and optimization.",
            icon: "business_center",
        },
        {
            slug: "fleet-management",
            title: dict?.items?.fleet?.title || "Fleet Management",
            desc: dict?.items?.fleet?.desc || "Cost-effective operational control.",
            icon: "directions_car",
        },
        {
            slug: "predictive-maintenance",
            title: dict?.items?.maintenance?.title || "Predictive Maintenance",
            desc: dict?.items?.maintenance?.desc || "Minimize downtime with AI insights.",
            icon: "build_circle",
        },
        {
            slug: "driver-management",
            title: dict?.items?.driver?.title || "Driver Management",
            desc: dict?.items?.driver?.desc || "Performance and safety monitoring.",
            icon: "sports_motorsports",
        },
        {
            slug: "digital-monitoring",
            title: dict?.items?.monitoring?.title || "Digital Monitoring",
            desc: dict?.items?.monitoring?.desc || "24/7 real-time asset tracking.",
            icon: "monitoring",
        },
        {
            slug: "cost-optimization",
            title: dict?.items?.cost?.title || "Cost Optimization",
            desc: dict?.items?.cost?.desc || "Reduction of fuel and overheads.",
            icon: "account_balance_wallet",
        },
    ];

    return (
        <section className="relative pt-20 pb-16 px-6 2xl:px-32 overflow-hidden bg-background-dark text-slate-100">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] bg-grid-fade"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
            </div>

            <div className="max-w-[1200px] 2xl:max-w-[1700px] mx-auto relative z-10 text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    {dict?.badge || "Our Services"}
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white">
                    {dict?.title || "Future of"} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">{dict?.titleAccent || "Logistics"}</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                    {dict?.description || "Advanced management systems tailored for global scale."}
                </p>
            </div>

            {/* Service Grid */}
            <div className="max-w-[1200px] 2xl:max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((s) => (
                    <div key={s.title} className="group relative bg-[#151b26] border border-slate-800 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-[100px] text-primary">{s.icon}</span>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-[#1e2736] flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700 group-hover:border-primary">
                            <span className="material-symbols-outlined">{s.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-primary transition-colors">{s.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">{s.desc}</p>
                        <Link className="inline-flex items-center text-sm font-semibold text-slate-300 hover:text-primary transition-colors gap-1 group/link" href={`/${locale}/services/${s.slug}`}>
                            {dict?.learnMore || "Learn More"} <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
