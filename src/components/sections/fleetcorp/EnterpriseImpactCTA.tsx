export default function EnterpriseImpactCTA({ locale }: { locale: string }) {
    return (
        <section className="py-20 px-6 bg-background-dark">
            <div className="max-w-6xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden bg-[#161b22] border border-[#282e39] shadow-2xl">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
                        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50"></div>
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, #256af4 0, #256af4 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }}></div>
                    </div>

                    <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                                {locale === 'en' ? 'Ready to optimize your fleet?' : 'Готовы оптимизировать ваш автопарк?'}
                            </h2>
                            <p className="text-slate-400 text-lg">
                                {locale === 'en'
                                    ? 'Join industry leaders reducing fleet costs by up to 30%. Get a personalized calculation today.'
                                    : 'Присоединяйтесь к лидерам отрасли, сокращающим затраты на автопарк до 30%. Получите индивидуальный расчет сегодня.'}
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
                            <button className="bg-primary hover:bg-blue-600 text-white text-base font-bold px-8 py-4 rounded-lg shadow-[0_0_20px_rgba(37,106,244,0.4)] hover:shadow-[0_0_30px_rgba(37,106,244,0.6)] transition-all transform hover:-translate-y-0.5 whitespace-nowrap">
                                {locale === 'en' ? 'Get a Calculation' : 'Получить расчет'}
                            </button>
                            <button className="bg-transparent border border-[#282e39] hover:border-white text-white hover:bg-white/5 text-base font-bold px-8 py-4 rounded-lg transition-all backdrop-blur-sm whitespace-nowrap">
                                {locale === 'en' ? 'Schedule a Meeting' : 'Назначить встречу'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
