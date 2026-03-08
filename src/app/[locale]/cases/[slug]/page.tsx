import type { Metadata } from "next";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import Footer from "@/components/sections/fleetcorp/Footer";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = (await params).slug;
    return {
        title: `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} - FleetTech Case Study`,
        description: `Detailed results and implementation of the ${slug.replace(/-/g, ' ')} project with FleetTech.`,
    };
}

const caseStudiesContent: Record<string, any> = {
    "retailer-logistics": {
        title: "Крупный ритейлер",
        category: "Логистика",
        subtitle: "Оптимизация магистральных перевозок",
        metric: "-27%",
        metricLabel: "Расходы на ГСМ",
        description: "Для компании федерального масштаба с парком более 500 грузовых автомобилей критически важна точность планирования и контроль расхода топлива.",
        challenge: "Высокий процент нецелевых пробегов, сливы топлива и отсутствие прозрачности в работе водителей на длинных плечах.",
        solution: "Интеграция системы FleetTech с датчиками контроля топлива и модулем AI-маршрутизации. Внедрена система скоринга водителей.",
        result: "Снижение затрат на ГСМ на 27% за первые 6 месяцев. Сокращение времени простоя на 15%."
    },
    "construction-monitoring": {
        title: "СтройМехТранс",
        category: "Строительство",
        subtitle: "Контроль работы спецтехники",
        metric: "-35%",
        metricLabel: "Простои техники",
        description: "Управление парком спецтехники на удаленных строительных площадках требует особого подхода к мониторингу моточасов.",
        challenge: "Работа техники вхолостую, приписки моточасов и несанкционированное использование оборудования в ночные смены.",
        solution: "Установка датчиков работы механизмов и системы идентификации водителей. Настройка автоматических уведомлений о выходе из геозон.",
        result: "Сокращение холостого хода на 35%. Рост коэффициента полезного использования техники на 22%."
    },
    "fmcg-distribution": {
        title: "FMCG Партнер",
        category: "Дистрибьюция",
        subtitle: "Точность последней мили",
        metric: "100%",
        metricLabel: "Соблюдение графика",
        description: "В сфере FMCG задержка поставки на один час может привести к штрафам и потере доверия торговых сетей.",
        challenge: "Сложное планирование в условиях городского трафика и человеческий фактор при распределении заказов.",
        solution: "Внедрение модуля динамической маршрутизации с учетом пробок. Мобильное приложение для водителей с электронными накладными.",
        result: "Достигнуто 100% соблюдение графика доставки. Увеличение количества точек на одном маршруте на 12%."
    }
};

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
    const { locale, slug } = await params;

    const content = caseStudiesContent[slug] || caseStudiesContent["retailer-logistics"];

    return (
        <div className="bg-background-dark min-h-screen text-slate-100 flex flex-col">
            <HeaderScroll />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href="/cases" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 group">
                        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Назад к кейсам
                    </Link>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                                {content.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight">
                                {content.title}
                            </h1>
                            <p className="text-slate-400 text-xl mt-4 font-light">
                                {content.subtitle}
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl min-w-[200px] text-center backdrop-blur-sm">
                            <div className="text-5xl font-black text-white tracking-tighter mb-1">{content.metric}</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{content.metricLabel}</div>
                        </div>
                    </div>

                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 mb-20 bg-slate-900 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[120px] text-white/5">pie_chart</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <span className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-sm">priority_high</span>
                                    </span>
                                    Задача
                                </h2>
                                <p className="text-slate-400 leading-relaxed text-lg">{content.challenge}</p>
                            </section>
                            <section>
                                <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <span className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-sm">lightbulb</span>
                                    </span>
                                    Решение
                                </h2>
                                <p className="text-slate-400 leading-relaxed text-lg">{content.solution}</p>
                            </section>
                        </div>
                        <div className="bg-primary/5 border border-primary/10 p-10 rounded-4xl h-fit">
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-8">Результат</h2>
                            <p className="text-xl text-white italic leading-relaxed mb-10">"{content.result}"</p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span className="text-slate-300">Стандартизация бизнес-процессов</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span className="text-slate-300">Полная прозрачность затрат</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span className="text-slate-300">Цифровизация отчетности</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer locale={locale} />
        </div>
    );
}
