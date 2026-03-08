export function Faq() {
    return (
        <section className="py-24 px-4 bg-background-light relative overflow-hidden">
            {/* Abstract background pattern */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-300/10 rounded-full blur-2xl"></div>
            </div>
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Частые вопросы</h2>
                    <p className="text-slate-600">Отвечаем на основные вопросы об аутсорсинге корпоративного автопарка.</p>
                </div>
                <div className="flex flex-col gap-4">
                    {/* FAQ Item 1 */}
                    <details className="group bg-white rounded-lg border border-slate-200 open:border-primary/50 transition-colors duration-300" open>
                        <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">Дешевле ли аутсорсинг, чем содержание собственного автопарка?</h3>
                            <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 group-open:text-primary transition-transform duration-300">expand_more</span>
                        </summary>
                        <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                            Да, как правило, клиенты экономят 20-30%, исключая скрытые расходы на владение автопарком, такие как непредвиденное техническое обслуживание, страховые взносы, административные накладные расходы и амортизация. Мы используем экономию на масштабе для предоставления более выгодных тарифов.
                        </div>
                    </details>
                    {/* FAQ Item 2 */}
                    <details className="group bg-white rounded-lg border border-slate-200 open:border-primary/50 transition-colors duration-300">
                        <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">Как быстро мы можем запустить услугу?</h3>
                            <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 group-open:text-primary transition-transform duration-300">expand_more</span>
                        </summary>
                        <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                            Обычно мы можем мобилизовать автопарк в течение 14 дней для стандартных требований. Для сложных масштабных операций с использованием специализированных транспортных средств мы предоставляем детальный план перехода, который обычно занимает 4-6 недель, чтобы гарантировать отсутствие сбоев.
                        </div>
                    </details>
                    {/* FAQ Item 3 */}
                    <details className="group bg-white rounded-lg border border-slate-200 open:border-primary/50 transition-colors duration-300">
                        <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">Что произойдет в случае ДТП или поломки?</h3>
                            <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 group-open:text-primary transition-transform duration-300">expand_more</span>
                        </summary>
                        <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                            Мы берем все на себя. Наш круглосуточный диспетчерский центр (24/7) немедленно направляет подменный автомобиль, чтобы ваш график не пострадал. Мы занимаемся всеми отчетами, страховыми выплатами и ремонтом.
                        </div>
                    </details>
                    {/* FAQ Item 4 */}
                    <details className="group bg-white rounded-lg border border-slate-200 open:border-primary/50 transition-colors duration-300">
                        <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">Есть ли пробный период?</h3>
                            <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 group-open:text-primary transition-transform duration-300">expand_more</span>
                        </summary>
                        <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                            Да, мы предлагаем формат пилотного проекта. Это позволяет вам оценить качество наших услуг, уровень безопасности и профессионализм водителей на практике до запуска полномасштабного сотрудничества.
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
}
