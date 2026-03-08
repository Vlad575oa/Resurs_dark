export default function ChallengesDark({ locale }: { locale: string }) {
    return (
        <section className="w-full bg-[#1a1d23] border-t border-[#282e39] py-20 px-6 lg:px-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-red-500">
                            <span className="material-symbols-outlined">warning</span>
                            <span className="text-xs font-bold tracking-[0.15em] uppercase">
                                {locale === 'en' ? 'Challenges' : 'Сложности'}
                            </span>
                        </div>
                        <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                            {locale === 'en' ? 'NAVIGATING' : 'ПРЕОДОЛЕНИЕ'} <br /> {locale === 'en' ? 'COMPLEXITY' : 'ТРУДНОСТЕЙ'}
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                            {locale === 'en'
                                ? 'Managing enterprise fleets without a unified system leads to bleeding costs and operational friction.'
                                : 'Управление корпоративным автопарком без единой системы ведет к росту затрат.'}
                        </p>
                    </div>
                    <div className="grid gap-6">
                        {[
                            {
                                title: locale === 'en' ? "Rising Costs" : "Рост затрат",
                                desc: locale === 'en' ? "Unpredictable maintenance spikes and fuel inefficiency draining budgets." : "Непредсказуемые скачки стоимости обслуживания и перерасход топлива.",
                                icon: "trending_up"
                            },
                            {
                                title: locale === 'en' ? "Opaque Control" : "Непрозрачность",
                                desc: locale === 'en' ? "Lack of real-time data creating blind spots in daily operations." : "Отсутствие данных в реальном времени создает слепые зоны в операциях.",
                                icon: "visibility_off"
                            },
                            {
                                title: locale === 'en' ? "Staffing Complexities" : "Кадровые сложности",
                                desc: locale === 'en' ? "High turnover rates and costly training cycles for new drivers." : "Высокая текучесть кадров и дорогие циклы обучения водителей.",
                                icon: "group_off"
                            },
                            {
                                title: locale === 'en' ? "Downtime Risks" : "Риски простоев",
                                desc: locale === 'en' ? "Unexpected failures halting critical supply lines and revenue." : "Внезапные поломки останавливают работу и приносят убытки.",
                                icon: "timer_off"
                            },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-5 group">
                                <div className="shrink-0 size-12 rounded-lg bg-[#282e39]/50 flex items-center justify-center text-red-400 border border-red-500/20 group-hover:border-red-500/50 transition-colors">
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                                <div>
                                    <h4 className="text-white text-lg font-bold mb-1 group-hover:text-red-400 transition-colors">{item.title}</h4>
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
                                    {locale === 'en' ? 'Full-Cycle Management' : 'Управление Полного Цикла'}
                                </h3>
                                <p className="text-slate-300 text-base leading-relaxed">
                                    {locale === 'en'
                                        ? 'Our comprehensive ecosystem transforms fleet operations from a cost center into a strategic asset. We unify acquisition, maintenance, staffing, and disposal into a single, transparent dashboard.'
                                        : 'Наша экосистема превращает управление автопарком из центра затрат в стратегический актив. Мы объединяем закупку, обслуживание, кадры и утилизацию.'}
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
                                {locale === 'en' ?
                                    ["Predictive Maintenance AI", "Real-time Global Tracking", "Certified Driver Pool"].map((s) => (
                                        <div key={s} className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                            <span className="text-slate-200 text-sm font-medium">{s}</span>
                                        </div>
                                    ))
                                    :
                                    ["Предиктивное обслуживание AI", "Глобальный трекинг в реальном времени", "Сертифицированные водители"].map((s) => (
                                        <div key={s} className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                            <span className="text-slate-200 text-sm font-medium">{s}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 px-6 text-white font-bold tracking-wide hover:bg-blue-600 transition-all shadow-lg hover:shadow-primary/25">
                                <span>LEARN ABOUT THE SOLUTION</span>
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl border border-[#282e39] bg-[#111318]"></div>
                </div>
            </div>
        </section>
    );
}
