import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import { getServerTranslations } from "@/lib/server-intl";
import { getCaseStudies } from "@/data/cases";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    return {
        title: locale === 'en' 
            ? "All Case Studies | ResursLogistics" 
            : locale === 'ru'
                ? "Все кейсы | РесурсЛогистика"
                : "सभी केस स्टडी | ResursLogistics",
        description: locale === 'en'
            ? "Complete collection of our client success stories and implementation results."
            : locale === 'ru'
                ? "Полная коллекция историй успеха наших клиентов и результатов внедрения."
                : "हमारे ग्राहकों की सफलता की कहानियों और कार्यान्वयन परिणामों का पूर्ण संग्रह।",
        alternates: {
            canonical: `/${locale}/cases/all`,
        }
    };
}

const Footer = dynamic(() => import("@/components/sections/fleetcorp/Footer"));
const AllCasesGrid = dynamic(() => import("@/components/sections/fleettech/AllCasesGrid"));

export default async function AllCasesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const { messages } = await getServerTranslations(locale);
    const dict = (messages as any).Cases;
    
    const caseStudies = getCaseStudies(locale);

    return (
        <div className="bg-background-dark min-h-screen flex flex-col">
            <HeaderScroll locale={locale} dict={messages} />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative py-20 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
                    <div className="container mx-auto px-4 md:px-6 relative">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                {locale === 'en' 
                                    ? 'Real Results' 
                                    : locale === 'ru' 
                                        ? 'Реальные результаты' 
                                        : 'वास्तविक परिणाम'}
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                                {locale === 'en'
                                    ? 'All Client Case Studies'
                                    : locale === 'ru'
                                        ? 'Все кейсы клиентов'
                                        : 'सभी ग्राहक केस स्टडी'}
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                {locale === 'en'
                                    ? 'Explore how leading companies across industries have transformed their fleet operations and achieved measurable results with ResursLogistics.'
                                    : locale === 'ru'
                                        ? 'Узнайте, как ведущие компании в различных отраслях трансформировали свои операции с автопарком и достигли измеримых результатов с РесурсЛогистика.'
                                        : 'जानें कि कैसे विभिन्न उद्योगों में अग्रणी कंपनियों ने अपने फ्लीट संचालन को बदला और ResursLogistics के साथ मापने योग्य परिणाम प्राप्त किए।'}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Summary */}
                <section className="py-12 border-y border-slate-800 bg-slate-900/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                                <div className="text-sm text-muted-foreground">
                                    {locale === 'en' ? 'Projects Completed' : locale === 'ru' ? 'Завершенных проектов' : 'पूर्ण किए गए परियोजनाएं'}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10k+</div>
                                <div className="text-sm text-muted-foreground">
                                    {locale === 'en' ? 'Vehicles Managed' : locale === 'ru' ? 'Транспортных средств' : 'प्रबंधित वाहन'}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">30%</div>
                                <div className="text-sm text-muted-foreground">
                                    {locale === 'en' ? 'Avg. Cost Reduction' : locale === 'ru' ? 'Среднее снижение затрат' : 'औसत लागत में कमी'}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
                                <div className="text-sm text-muted-foreground">
                                    {locale === 'en' ? 'SLA Compliance' : locale === 'ru' ? 'Соблюдение SLA' : 'एसएलए अनुपालन'}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* All Cases Grid */}
                <AllCasesGrid locale={locale} cases={caseStudies} dict={dict} />

                {/* CTA Section */}
                <section className="py-20 md:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                {locale === 'en'
                                    ? 'Ready to Write Your Success Story?'
                                    : locale === 'ru'
                                        ? 'Готовы написать свою историю успеха?'
                                        : 'अपनी सफलता की कहानी लिखने के लिए तैयार हैं?'}
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                {locale === 'en'
                                    ? 'Join dozens of companies that have already transformed their fleet management with ResursLogistics.'
                                    : locale === 'ru'
                                        ? 'Присоединяйтесь к десяткам компаний, которые уже трансформировали управление своим автопарком с РесурсЛогистика.'
                                        : 'उन दर्जनों कंपनियों में शामिल हों जिन्होंने पहले ही ResursLogistics के साथ अपने फ्लीट प्रबंधन को बदल दिया है।'}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href={`/${locale}/contacts`}
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                                >
                                    {locale === 'en'
                                        ? 'Request Consultation'
                                        : locale === 'ru'
                                            ? 'Запросить консультацию'
                                            : 'परामर्श अनुरोध करें'}
                                </a>
                                <a
                                    href={`/${locale}/cases`}
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg border border-slate-700 text-foreground hover:bg-slate-800 transition-colors"
                                >
                                    {locale === 'en'
                                        ? 'Back to Cases'
                                        : locale === 'ru'
                                            ? 'Назад к кейсам'
                                            : 'वापस केस पर'}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer locale={locale} dict={messages} />
        </div>
    );
}
