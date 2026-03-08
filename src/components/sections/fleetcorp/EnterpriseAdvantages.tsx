export default function EnterpriseAdvantages({ locale }: { locale: string }) {
    const advantages = [
        {
            title: locale === 'en' ? "Transparency" : "Прозрачность",
            desc: locale === 'en' ? "Full visibility into cost structures, vehicle status, and driver performance with real-time analytics dashboards." : "Полная видимость структуры затрат, состояния автомобилей и работы водителей в аналитических дашбордах.",
            icon: "visibility",
        },
        {
            title: locale === 'en' ? "Personal Manager" : "Персональный менеджер",
            desc: locale === 'en' ? "A dedicated expert assigned to your account for 24/7 support, strategy planning, and rapid issue resolution." : "Выделенный эксперт для поддержки 24/7, планирования стратегии и быстрого решения проблем.",
            icon: "support_agent",
        },
        {
            title: locale === 'en' ? "Security" : "Безопасность",
            desc: locale === 'en' ? "Enterprise-grade data protection protocols and asset security measures to safeguard your business intelligence." : "Протоколы защиты данных корпоративного уровня и меры физической безопасности активов.",
            icon: "encrypted",
        },
        {
            title: locale === 'en' ? "SLA Guarantee" : "Гарантия SLA",
            desc: locale === 'en' ? "Contractually binding Service Level Agreements ensuring uptime, response times, and quality of service." : "Юридически закрепленные соглашения об уровне сервиса, гарантирующие время безотказной работы и качество.",
            icon: "verified",
        },
    ];

    return (
        <section className="py-16 px-6 relative bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-white text-3xl font-bold mb-4">{locale === 'en' ? 'Enterprise Advantages' : 'Корпоративные Преимущества'}</h2>
                    <p className="text-slate-400 max-w-xl">
                        {locale === 'en' ? 'We provide scalable, secure, and transparent solutions tailored for complex logistical needs.' : 'Мы предоставляем масштабируемые, безопасные и прозрачные решения для комплексных логистических задач.'}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {advantages.map((adv) => (
                        <div key={adv.title} className="group bg-[#161b22]/70 backdrop-blur-md border border-[#282e39] rounded-xl p-8 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-8xl text-white">{adv.icon}</span>
                            </div>
                            <div className="w-12 h-12 rounded-lg bg-[#161b22] border border-[#282e39] flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">{adv.icon}</span>
                            </div>
                            <h3 className="text-white text-xl font-bold mb-3">{adv.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{adv.desc}</p>
                        </div>
                    ))}

                    {/* Card 5: Large Business Experience */}
                    <div className="group bg-gradient-to-br from-[#161b22] to-[#1a1f2e] border border-[#282e39] rounded-xl p-8 hover:border-primary/50 transition-all duration-300 relative overflow-hidden md:col-span-2 lg:col-span-2">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-8xl text-white">domain</span>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center h-full">
                            <div className="w-12 h-12 rounded-lg bg-[#161b22] border border-[#282e39] flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">domain</span>
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-bold mb-3">{locale === 'en' ? 'Large Business Experience' : 'Опыт работы с крупным бизнесом'}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                                    {locale === 'en'
                                        ? 'Proven track record managing fleets of 500+ vehicles for Fortune 500 companies. We understand the complexity of scale and deliver seamless transitions.'
                                        : 'Подтвержденный опыт управления парками 500+ автомобилей для мировых компаний. Мы понимаем специфику масштаба и гарантируем бесшовный переход.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
