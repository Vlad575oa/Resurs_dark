import Link from "next/link";

export default function ServiceGrid({ locale }: { locale: string }) {
    const services = [
        {
            slug: "strategic-outsourcing",
            title: locale === 'en' ? "Strategic Outsourcing" : "Стратегический Аутсорсинг",
            desc: locale === 'en' ? "Full operational takeover with guaranteed SLA adherence. We become your dedicated fleet department." : "Полное операционное управление с гарантированным соблюдением SLA. Мы становимся вашим автотранспортным подразделением.",
            icon: "business_center",
        },
        {
            slug: "fleet-management",
            title: locale === 'en' ? "Fleet Management" : "Управление Автопарком",
            desc: locale === 'en' ? "Lifecycle tracking from acquisition to remarketing. Complete asset visibility and control." : "Отслеживание жизненного цикла от приобретения до реализации. Полный контроль активов.",
            icon: "directions_car",
        },
        {
            slug: "predictive-maintenance",
            title: locale === 'en' ? "Predictive Maintenance" : "Предиктивное Обслуживание",
            desc: locale === 'en' ? "AI-driven scheduling and repair logistics to minimize downtime and extend vehicle lifespan." : "ИИ-планирование и логистика ремонта для минимизации простоев и продления срока службы.",
            icon: "build_circle",
        },
        {
            slug: "driver-management",
            title: locale === 'en' ? "Driver Management" : "Управление Водителями",
            desc: locale === 'en' ? "Safety training, compliance handling, and payroll integration. Keeping your team safe and compliant." : "Обучение безопасности, контроль комплаенса и интеграция расчета зарплаты.",
            icon: "sports_motorsports",
        },
        {
            slug: "digital-monitoring",
            title: locale === 'en' ? "Digital Monitoring" : "Цифровой Мониторинг",
            desc: locale === 'en' ? "Real-time telematics and EV performance analytics. Data-driven insights for smarter decisions." : "Телематика в реальном времени и аналитика производительности. Данные для принятия решений.",
            icon: "monitoring",
        },
        {
            slug: "cost-optimization",
            title: locale === 'en' ? "Cost Optimization" : "Оптимизация Затрат",
            desc: locale === 'en' ? "Fuel reduction strategies and Total Cost of Ownership (TCO) analysis to maximize ROI." : "Стратегии снижения расхода топлива и анализ стоимости владения (TCO).",
            icon: "account_balance_wallet",
        },
    ];

    return (
        <section className="relative pt-20 pb-16 px-6 overflow-hidden bg-background-dark text-slate-100">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] bg-grid-fade"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
            </div>

            <div className="max-w-[1200px] mx-auto relative z-10 text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    {locale === 'en' ? 'Premium Enterprise Solutions' : 'Премиальные решения'}
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white">
                    {locale === 'en' ? 'End-to-End ' : 'Комплексная '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">{locale === 'en' ? 'Fleet Optimization' : 'Оптимизация автопарка'}</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                    {locale === 'en'
                        ? 'Comprehensive outsourcing and management services designed for enterprise scale. We handle the complexity of global logistics so you can focus on core business operations.'
                        : 'Комплексный аутсорсинг и услуги управления транспортной функцией. Мы берем на себя сложную логистику, чтобы вы могли сосредоточиться на бизнесе.'}
                </p>
            </div>

            {/* Service Grid */}
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                            {locale === 'en' ? 'Learn more' : 'Узнать больше'} <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
