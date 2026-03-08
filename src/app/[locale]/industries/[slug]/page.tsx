import type { Metadata } from "next";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import Footer from "@/components/sections/fleetcorp/Footer";
import Link from "next/link";
import { getServerTranslations } from "@/lib/server-intl";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = (await params).slug;
    return {
        title: `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} - ResursTrans Industry Solutions`,
        description: `Deep dive into our ${slug.replace(/-/g, ' ')} logistics and fleet management solutions.`,
    };
}

const getIndustryContent = (locale: string): Record<string, any> => ({
    "industrial-manufacturing": {
        title: locale === 'en' ? "Industrial Manufacturing" : "Промышленное производство",
        subtitle: locale === 'en' ? "Precision Logistics for Heavy Industry" : "Точная логистика для тяжелой промышленности",
        description: locale === 'en' ? "In the world of industrial manufacturing, timing is everything. Our fleet management solutions ensure that raw materials arrive exactly when needed and finished goods reach their destination without delay." : "В мире промышленного производства время решает все. Наши решения для управления автопарком гарантируют, что сырье прибывает точно в срок, а готовая продукция достигает пункта назначения без задержек.",
        caseStudy: {
            company: "Global Steels Corp",
            challenge: locale === 'en' ? "High vehicle downtime and unpredictable delivery schedules." : "Высокий простой транспортных средств и непредсказуемые графики доставки.",
            solution: locale === 'en' ? "Implementation of predictive maintenance and real-time route optimization for heavy transporters." : "Внедрение предиктивного технического обслуживания и оптимизация маршрутов в реальном времени для тяжеловозов.",
            result: locale === 'en' ? "25% reduction in operational costs and 99.8% on-time delivery rate." : "Снижение эксплуатационных расходов на 25% и своевременность доставки на уровне 99,8%."
        }
    },
    "oil-and-gas": {
        title: locale === 'en' ? "Oil & Gas" : "Нефть и газ",
        subtitle: locale === 'en' ? "Reliability in Extreme Environments" : "Надежность в экстремальных условиях",
        description: locale === 'en' ? "Transporting equipment and personnel to remote extraction sites requires extreme reliability. Our AI-driven monitoring ensures safety and compliance in the most challenging conditions." : "Транспортировка оборудования и персонала на удаленные места добычи требует экстремальной надежности. Наш ИИ-мониторинг обеспечивает безопасность и соответствие требованиям в самых сложных условиях.",
        caseStudy: {
            company: "Arctic Energy",
            challenge: locale === 'en' ? "Losing contact with vehicles in remote northern regions." : "Потеря связи с транспортными средствами в отдаленных северных регионах.",
            solution: locale === 'en' ? "Satellite-linked telematics and emergency protocol automation." : "Телематика со спутниковой связью и автоматизация протоколов реагирования на чрезвычайные ситуации.",
            result: locale === 'en' ? "Zero safety incidents in 24 months and 15% better fuel efficiency." : "Ноль инцидентов с безопасностью за 24 месяца и повышение топливной эффективности на 15%."
        }
    },
    "construction": {
        title: locale === 'en' ? "Construction" : "Строительство",
        subtitle: locale === 'en' ? "Managing Moving Assets Across Sites" : "Управление движущимися активами на объектах",
        description: locale === 'en' ? "Construction sites are dynamic. Our platform provides real-time tracking for every piece of equipment, from heavy excavators to support trucks." : "Строительные площадки динамичны. Наша платформа обеспечивает отслеживание в реальном времени для каждой единицы оборудования, от тяжелых экскаваторов до грузовиков обеспечения.",
        caseStudy: {
            company: "BuildRight Infrastructure",
            challenge: locale === 'en' ? "Unauthorized use of equipment and difficult asset scheduling." : "Несанкционированное использование оборудования и сложное планирование активов.",
            solution: locale === 'en' ? "Geofencing and automated usage reporting for all job sites." : "Геофенсинг и автоматизированная отчетность об использовании по всем рабочим площадкам.",
            result: locale === 'en' ? "30% increase in asset utilization and significant reduction in theft risk." : "Увеличение использования активов на 30% и значительное снижение риска краж."
        }
    },
    "government": {
        title: locale === 'en' ? "Government" : "Государственный сектор",
        subtitle: locale === 'en' ? "Secure & Compliant Public Sector Fleet" : "Безопасный автопарк государственного сектора",
        description: locale === 'en' ? "Public sector logistics demand transparency and strict compliance. We provide secure data management and audited reporting for government agencies." : "Логистика в государственном секторе требует прозрачности и строгого соблюдения нормативов. Мы обеспечиваем безопасное управление данными и аудиторскую отчетность для госорганов.",
        caseStudy: {
            company: "City Transport Dept",
            challenge: locale === 'en' ? "Outdated reporting systems and high maintenance backlogs." : "Устаревшие системы отчетности и большая задолженность по техническому обслуживанию.",
            solution: locale === 'en' ? "Digital fleet department outsourcing with full transparency portals." : "Аутсорсинг департамента автопарка с порталами полной прозрачности.",
            result: locale === 'en' ? "40% faster maintenance turnaround and complete regulatory compliance." : "Ускорение сроков технического обслуживания на 40% и полное соответствие нормативным требованиям."
        }
    },
    "logistics": {
        title: locale === 'en' ? "Logistics" : "Логистика",
        subtitle: locale === 'en' ? "The Backbone of Global Commerce" : "Основа мировой торговли",
        description: locale === 'en' ? "Optimize every mile. Our ecosystem integrates with your supply chain to provide end-to-end visibility and efficiency." : "Оптимизируйте каждую милю. Наша экосистема интегрируется с вашей цепочкой поставок, обеспечивая прозрачность и эффективность.",
        caseStudy: {
            company: "SwiftPost International",
            challenge: locale === 'en' ? "Rising fuel costs and inefficient last-mile delivery." : "Рост цен на топливо и неэффективная доставка «последней мили».",
            solution: locale === 'en' ? "AI-based dynamic routing and driver behavior monitoring." : "Динамическая маршрутизация на базе ИИ и мониторинг поведения водителей.",
            result: locale === 'en' ? "20% reduction in fuel consumption and 15% increase in daily deliveries." : "Снижение расхода топлива на 20% и увеличение ежедневных доставок на 15%."
        }
    }
});

export default async function IndustryPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
    const { locale, slug } = await params;

    const content = getIndustryContent(locale)[slug] || getIndustryContent(locale)["industrial-manufacturing"];

    return (
        <div className="bg-background-dark min-h-screen text-slate-100 flex flex-col">
            <HeaderScroll />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 group">
                        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        {locale === 'en' ? 'Back to Home' : 'Вернуться на главную'}
                    </Link>

                    <div className="flex flex-col gap-4 mb-12">
                        <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase">{content.title}</h2>
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight">{content.subtitle}</h1>
                    </div>

                    <div className="prose prose-invert max-w-none mb-20 text-slate-400 text-lg leading-relaxed">
                        <p>{content.description}</p>
                    </div>

                    <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-20">
                        <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                            {locale === 'en' ? 'Success Story: ' : 'История успеха: '} {content.caseStudy.company}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">
                                    {locale === 'en' ? 'The Challenge' : 'Вызов'}
                                </h3>
                                <p className="text-slate-300 leading-relaxed">{content.caseStudy.challenge}</p>
                            </div>
                            <div>
                                <h3 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">
                                    {locale === 'en' ? 'The Solution' : 'Решение'}
                                </h3>
                                <p className="text-slate-300 leading-relaxed">{content.caseStudy.solution}</p>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <h3 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">
                                {locale === 'en' ? 'The Impact' : 'Результат'}
                            </h3>
                            <p className="text-2xl font-bold text-white italic">"{content.caseStudy.result}"</p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer locale={locale} />
        </div>
    );
}
