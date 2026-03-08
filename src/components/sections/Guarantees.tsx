export function Guarantees() {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-3">Безопасность превыше всего</h2>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                        Полная безопасность и контроль рисков
                    </h1>
                    <p className="text-lg text-slate-600">
                        Мы берем на себя полную ответственность за ваши транспортные операции, обеспечивая всестороннее покрытие и спокойствие на каждом километре.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1: Insurance */}
                    <div className="group p-8 rounded-xl bg-background-light hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20">
                        <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Полное страхование</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Комплексное страховое покрытие пассажиров и грузов во время каждой поездки, снимающее с вас ответственность.
                        </p>
                    </div>
                    {/* Card 2: SLA */}
                    <div className="group p-8 rounded-xl bg-background-light hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20">
                        <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-primary text-3xl">description</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Гарантия SLA</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Строгие соглашения об уровне обслуживания (SLA) с финансовыми санкциями за задержки или нарушения качества, закрепленные в договоре.
                        </p>
                    </div>
                    {/* Card 3: Liability */}
                    <div className="group p-8 rounded-xl bg-background-light hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20">
                        <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-primary text-3xl">gavel</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Договорная ответственность</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Мы берем на себя полную юридическую и финансовую ответственность за транспортные операции, защищая ваш бизнес.
                        </p>
                    </div>
                    {/* Card 4: Risk Control */}
                    <div className="group p-8 rounded-xl bg-background-light hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20">
                        <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Контроль рисков</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Круглосуточный централизованный мониторинг (24/7), строгая многоэтапная проверка водителей и ежедневные осмотры транспортных средств.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
