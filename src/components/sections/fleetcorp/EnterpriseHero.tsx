export default function EnterpriseHero({ locale }: { locale: string }) {
    return (
        <section className="relative py-20 px-6 overflow-hidden bg-background-dark">
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-[#0f1115] to-[#0f1115] pointer-events-none"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b22] border border-[#282e39] text-xs font-medium text-primary uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    {locale === 'en' ? 'Enterprise Logistics' : 'Корпоративная логистика'}
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white uppercase">
                    {locale === 'en' ? 'Optimizing ' : 'Оптимизация '}<span className="text-primary">{locale === 'en' ? 'Corporate Fleets' : 'Корпоративных Автопарков'}</span> {locale === 'en' ? 'at Scale' : 'в Масштабе'}
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    {locale === 'en'
                        ? 'Reduce operational costs and increase efficiency with our data-driven fleet management solutions designed for large enterprises.'
                        : 'Снижайте операционные расходы и повышайте эффективность с помощью наших data-driven решений для управления крупными автопарками.'}
                </p>
            </div>
        </section>
    );
}
