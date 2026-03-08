import type { Metadata } from "next";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import Footer from "@/components/sections/fleetcorp/Footer";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = (await params).slug;
    return {
        title: `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} - ResursTrans Service Solutions`,
        description: `Explore our specialized ${slug.replace(/-/g, ' ')} services for enterprise fleet management.`,
    };
}

const getServiceContent = (locale: string): Record<string, any> => ({
    "strategic-outsourcing": {
        title: locale === 'en' ? "Strategic Outsourcing" : "Стратегический аутсорсинг",
        tagline: locale === 'en' ? "Your Dedicated Fleet Partnership" : "Ваше выделенное партнерство",
        description: locale === 'en' ? "Focus on your core business while we handle the complexity of your fleet. Our strategic outsourcing model provides a full-scale fleet department integrated into your operations." : "Сосредоточьтесь на своем основном бизнесе, пока мы занимаемся сложностью вашего автопарка. Наша модель стратегического аутсорсинга предоставляет полномасштабный отдел автопарка, интегрированный в вашу деятельность.",
        benefits: locale === 'en' ? [
            "Guaranteed SLA and performance metrics",
            "Fixed management costs and budget predictability",
            "Access to specialized fleet expertise and technology",
            "Comprehensive risk management and compliance"
        ] : [
            "Гарантированный SLA и метрики эффективности",
            "Фиксированные затраты на управление и предсказуемость бюджета",
            "Доступ к специализированной экспертизе и технологиям",
            "Комплексное управление рисками и соответствие требованиям"
        ]
    },
    "fleet-management": {
        title: locale === 'en' ? "Fleet Management" : "Управление автопарком",
        tagline: locale === 'en' ? "Complete Lifecycle Control" : "Полный контроль жизненного цикла",
        description: locale === 'en' ? "From acquisition to disposal, we manage every aspect of your vehicle lifecycle. Our platform provides 360-degree visibility into asset performance and utilization." : "От приобретения до утилизации мы управляем каждым аспектом жизненного цикла вашего транспортного средства. Наша платформа обеспечивает обзор на 360 градусов производительности и использования активов.",
        benefits: locale === 'en' ? [
            "Optimized acquisition and financing strategies",
            "Continuous maintenance and repair management",
            "Real-time asset tracking and utilization analysis",
            "Data-driven remarketing and disposal optimization"
        ] : [
            "Оптимизированные стратегии приобретения и финансирования",
            "Постоянное управление техническим обслуживанием и ремонтом",
            "Отслеживание активов в реальном времени и анализ использования",
            "Оптимизация ремаркетинга и утилизации на основе данных"
        ]
    },
    "predictive-maintenance": {
        title: locale === 'en' ? "Predictive Maintenance" : "Предиктивное обслуживание",
        tagline: locale === 'en' ? "AI-Powered Fleet Health" : "Здоровье автопарка на базе ИИ",
        description: locale === 'en' ? "Eliminate unexpected breakdowns. Our AI-driven maintenance platform analyzes telematics data to predict failures before they happen, extending vehicle life and reducing costs." : "Устраните неожиданные поломки. Наша платформа обслуживания на основе ИИ анализирует телематические данные для прогнозирования сбоев до их возникновения, продлевая срок службы транспортного средства и снижая затраты.",
        benefits: locale === 'en' ? [
            "Significant reduction in unplanned downtime",
            "Automated service scheduling and logistics",
            "Extended vehicle lifespan and residual value",
            "Optimized parts inventory and labor scheduling"
        ] : [
            "Значительное сокращение незапланированных простоев",
            "Автоматизированное планирование обслуживания и логистика",
            "Продленный срок службы транспортного средства и остаточная стоимость",
            "Оптимизированный запас запчастей и график работ"
        ]
    },
    "driver-management": {
        title: locale === 'en' ? "Driver Management" : "Управление водителями",
        tagline: locale === 'en' ? "Safety, Performance & Compliance" : "Безопасность, производительность и соответствие",
        description: locale === 'en' ? "Your drivers are your most valuable asset. We provide the tools to keep them safe, productive, and fully compliant with all regional regulations." : "Ваши водители - ваш самый ценный актив. Мы предоставляем инструменты, чтобы поддерживать их безопасность, продуктивность и полное соответствие всем региональным нормам.",
        benefits: locale === 'en' ? [
            "Comprehensive safety training and monitoring",
            "Automated compliance and licensing tracking",
            "Driver performance scoring and incentive programs",
            "Seamless payroll and expense integration"
        ] : [
            "Комплексное обучение и мониторинг безопасности",
            "Автоматизированное отслеживание соответствия и лицензирования",
            "Оценка производительности водителей и программы поощрения",
            "Бесшовная интеграция расчета заработной платы и расходов"
        ]
    },
    "digital-monitoring": {
        title: locale === 'en' ? "Digital Monitoring" : "Цифровой мониторинг",
        tagline: locale === 'en' ? "Real-Time Telematics & Analytics" : "Телематика и аналитика в реальном времени",
        description: locale === 'en' ? "Harness the power of data. Our monitoring suite provides real-time insights into every mile driven, helping you make smarter, faster decisions for your fleet." : "Используйте мощь данных. Наш пакет мониторинга предоставляет аналитику каждой пройденной мили в режиме реального времени, помогая принимать более обоснованные решения для вашего автопарка.",
        benefits: locale === 'en' ? [
            "Full-fleet GPS and telematics visibility",
            "EV performance and charging optimization",
            "Customizable BI dashboards and reporting",
            "Instant alerts for safety or technical issues"
        ] : [
            "Полная видимость GPS и телематики автопарка",
            "Оптимизация производительности электромобилей и зарядки",
            "Настраиваемые информационные панели BI и отчетность",
            "Мгновенные оповещения об угрозах безопасности или технических проблемах"
        ]
    },
    "cost-optimization": {
        title: locale === 'en' ? "Cost Optimization" : "Оптимизация затрат",
        tagline: locale === 'en' ? "Driving Efficiency and ROI" : "Повышение эффективности и ROI",
        description: locale === 'en' ? "Logistics is one of your biggest costs. We use advanced analytics to root out inefficiencies, reduce fuel waste, and lower your Total Cost of Ownership (TCO)." : "Логистика — одна из ваших самых больших статей расходов. Мы используем передовую аналитику для выявления неэффективности, сокращения потерь топлива и снижения совокупной стоимости владения (TCO).",
        benefits: locale === 'en' ? [
            "Deep TCO analysis and benchmarking",
            "Dynamic fuel reduction and route optimization",
            "Optimized maintenance and part sourcing",
            "Scalable cost-saving strategies for global fleets"
        ] : [
            "Глубокий анализ TCO и бенчмаркинг",
            "Динамическое сокращение расходов топлива и оптимизация маршрутов",
            "Оптимизированное обслуживание и закупка запчастей",
            "Масштабируемые стратегии экономии средств для глобальных парков"
        ]
    }
});

export default async function ServiceDetailPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
    const { locale, slug } = await params;

    const content = getServiceContent(locale)[slug] || getServiceContent(locale)["strategic-outsourcing"];

    return (
        <div className="bg-background-dark min-h-screen text-slate-100 flex flex-col">
            <HeaderScroll />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 group">
                        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        {locale === 'en' ? 'Back to Home' : 'Вернуться на главную'}
                    </Link>

                    <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">{content.title}</h2>
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight mb-8">{content.tagline}</h1>
                    <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">{content.description}</p>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
                    {content.benefits.map((benefit: string, i: number) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-start gap-4">
                            <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                <span className="material-symbols-outlined text-sm">check</span>
                            </div>
                            <p className="text-slate-200 font-medium">{benefit}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <button className="bg-primary hover:bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-2xl shadow-primary/20">
                        {locale === 'en' ? 'Discuss Implementation' : 'Обсудить внедрение'}
                    </button>
                </div>
            </main>

            <Footer locale={locale} />
        </div>
    );
}
