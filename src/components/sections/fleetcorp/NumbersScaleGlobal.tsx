import Link from "next/link";

export default function NumbersScaleGlobal({ locale }: { locale: string }) {
    const getStats = () => {
        if (locale === 'en') {
            return [
                { label: "15+ Years Experience", value: "15+" },
                { label: "50+ Global Regions", value: "50+" },
                { label: "10k+ Units Managed", value: "10k+" },
                { label: "98% SLA Adherence", value: "98%" },
                { label: "24/7 Global Support", value: "24/7" },
            ];
        } else {
            return [
                { label: "15+ лет опыта", value: "15+" },
                { label: "50+ регионов присутствия", value: "50+" },
                { label: "10k+ единиц под управлением", value: "10k+" },
                { label: "98% соблюдение SLA", value: "98%" },
                { label: "24/7 поддержка", value: "24/7" },
            ];
        }
    };
    const stats = getStats();

    return (
        <section className="bg-[#0b0e14] py-24 px-6 border-t border-slate-900 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50"></div>
            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                            {locale === 'en' ? 'Global Scale.' : 'Глобальный масштаб.'} <br />
                            <span className="text-slate-500">{locale === 'en' ? 'Unmatched Reliability.' : 'Непревзойденная надежность.'}</span>
                        </h2>
                        <p className="text-slate-400 text-lg">
                            {locale === 'en'
                                ? 'Our infrastructure is built for mission-critical operations across continents.'
                                : 'Наша инфраструктура создана для критически важных операций на всех континентах.'}
                        </p>
                    </div>
                    <Link href={`/${locale}/report`} className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg text-sm font-bold transition-all border border-slate-700 hover:border-primary flex items-center gap-2">
                        <span>{locale === 'en' ? 'View 2026 Report' : 'Смотреть отчет 2026'}</span>
                        <span className="material-symbols-outlined text-sm">download</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col gap-2 p-6 rounded-lg bg-slate-900/30 border border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/50 transition-colors">
                            <span className="text-4xl md:text-5xl font-black text-white tracking-tighter text-glow">{stat.value}</span>
                            <span className="text-xs uppercase tracking-widest text-primary font-bold">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
