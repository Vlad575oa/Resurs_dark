export function Solutions() {
    return (
        <section className="py-20 lg:py-28 px-6 lg:px-12 bg-background-light" id="services">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 flex flex-col gap-4 text-center md:text-left">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:max-w-2xl">
                        Оптимизированная логистическая инфраструктура
                    </h2>
                    <p className="max-w-xl text-lg text-slate-600">
                        Масштабируемые технологичные решения, разработанные для оптимизации работы корпоративного автопарка и снижения накладных расходов.
                    </p>
                </div>

                {/* Grid of 5 Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 */}
                    <div className="group flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                            <span className="material-symbols-outlined text-3xl">local_shipping</span>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900">Управление автопарком</h3>
                            <p className="text-sm leading-relaxed text-slate-500">
                                Полный жизненный цикл управления вашим транспортом, от приобретения до списания, обеспечивая максимальное время бесперебойной работы.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                            <span className="material-symbols-outlined text-3xl">person_pin</span>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900">Аутсорсинг водителей</h3>
                            <p className="text-sm leading-relaxed text-slate-500">
                                Профессиональные, проверенные водители, обученные безопасности и эффективности, готовые масштабироваться под ваши потребности.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                            <span className="material-symbols-outlined text-3xl">support_agent</span>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900">Круглосуточная диспетчеризация</h3>
                            <p className="text-sm leading-relaxed text-slate-500">
                                Круглосуточный мониторинг и поддержка (24/7) для обработки нестандартных ситуаций и обеспечения непрерывного движения ваших грузов.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="group flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                            <span className="material-symbols-outlined text-3xl">local_gas_station</span>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900">Контроль топлива</h3>
                            <p className="text-sm leading-relaxed text-slate-500">
                                Передовые цифровые системы отслеживания расхода топлива для выявления аномалий, предотвращения хищений и сокращения потерь.
                            </p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="group flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg sm:col-span-2 lg:col-span-1">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                            <span className="material-symbols-outlined text-3xl">analytics</span>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900">Аналитика и отчетность</h3>
                            <p className="text-sm leading-relaxed text-slate-500">
                                Дашборды в реальном времени и детальные отчеты для принятия взвешенных операционных решений на основе данных.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
