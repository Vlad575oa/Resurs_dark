import type { Metadata } from "next";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import Footer from "@/components/sections/fleetcorp/Footer";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = (await params).slug;
    return {
        title: `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} - FleetCorp News`,
        description: `Read the latest updates about ${slug.replace(/-/g, ' ')} in the fleet management industry.`,
    };
}

const getNewsArticles = (locale: string): Record<string, any> => ({
    "predictive-risk-analysis-2-0": {
        date: locale === 'en' ? "Mar 07, 2026" : "07 Мар 2026",
        title: locale === 'en' ? "Launch of Predictive Risk Analysis System 2.0" : "Запуск Предиктивной Системы Анализа Рисков 2.0",
        category: locale === 'en' ? "Technology" : "Технологии",
        content: locale === 'en' ? `
            <p>We are excited to announce the launch of the new version of our predictive risk analysis system. Version 2.0 uses updated machine learning algorithms that can process telematics data in real-time with unprecedented accuracy.</p>
            <h3>Key Improvements:</h3>
            <ul>
                <li>Component failure prediction accuracy up to 92%.</li>
                <li>Analysis of driving style and its impact on part wear.</li>
                <li>Integration with major service centers for automatic maintenance scheduling.</li>
            </ul>
            <p>The new FleetTech update can predict vehicle component failures with up to 92% accuracy, 500 km before the malfunction occurs. This is a significant step forward in ensuring the safety and efficiency of corporate fleets.</p>
        ` : `
            <p>Мы рады объявить о запуске новой версии нашей системы предиктивного анализа рисков. Версия 2.0 использует обновленные алгоритмы машинного обучения, которые позволяют обрабатывать данные телематики в реальном времени с беспрецедентной точностью.</p>
            <h3>Ключевые улучшения:</h3>
            <ul>
                <li>Точность предсказания поломок узлов до 92%.</li>
                <li>Анализ стиля вождения и его влияния на износ деталей.</li>
                <li>Интеграция с крупнейшими сервисными центрами для автоматической записи на ТО.</li>
            </ul>
            <p>Новое обновление FleetTech позволяет предсказывать поломки узлов автомобиля с точностью до 92% за 500 км до возникновения неисправности. Это значительный шаг вперед в обеспечении безопасности и эффективности корпоративных автопарков.</p>
        `,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJBK94MihqMW1wwl5gGFOEFRUYX789hlz5YTWsMV5vacSEN3rwXy5beuBGQ_5JmymV5SVu311nqqqKxPQIj4YV-kMmLGiTJn2JkkzOMS6YOtAgD-CaygFvvkPru2xtUghKbcWwSgAb-wjBVFMG3snB4YaPf2BqwGJHyf48sXZlHYY4FfbFgJxwrddv-uMET-1NqXjjyrqUDuRu9_1xa05AM2L5UlRECj5jVRs2CN0br_JHmsnoxgLQkt0G7sDhtxYcC5qbNDVSM6E"
    },
    "expansion-central-asia": {
        date: locale === 'en' ? "Mar 01, 2026" : "01 Мар 2026",
        title: locale === 'en' ? "FleetCorp Expands Presence in Central Asia" : "FleetCorp расширяет присутствие в Центральной Азии",
        category: locale === 'en' ? "Company" : "Компания",
        content: locale === 'en' ? `
            <p>FleetCorp continues its international expansion. Today we officially open our new operational hub in Almaty, Kazakhstan.</p>
            <p>This strategic move will allow us to significantly improve the quality of service for our clients in the Central Asian region. The new hub will coordinate cross-border transportation and provide on-the-ground technical support.</p>
            <blockquote>"Central Asia is a dynamic market with huge potential in logistics. Our presence here will allow us to introduce global standards in fleet management," stated the CEO of FleetCorp.</blockquote>
        ` : `
            <p>FleetCorp продолжает свою международную экспансию. Сегодня мы официально открываем наш новый операционный хаб в Алматы, Казахстан.</p>
            <p>Этот стратегический шаг позволит нам значительно улучшить качество обслуживания наших клиентов в регионе Центральной Азии. Новый хаб будет координировать трансграничные перевозки и обеспечивать техническую поддержку на местах.</p>
            <blockquote>"Центральная Азия — это динамично развивающийся рынок с огромным потенциалом в сфере логистики. Наше присутствие здесь позволит внедрять мировые стандарты управления автопарками," — заявил генеральный директор FleetCorp.</blockquote>
        `,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX1fLUueR8AUAmJP2mwj2QsbDid24qvsqIz-_25yRFy47XwwNyTGlgiKZTqJQyOAngU5yFI85dr_yq0rgKEo3PmXP2-u7Qp2ep7eonl5Aygg0jHznoGGT91_2k6sJVtfJn5DkNad6ecDDGSFDCqcoHcY3fXSu6dBzAPRIpE_67qBQM2lyRCZ49pfoz8FoxUI2Qe3SNKW9VvyzrwxaxUezpr1ZuaU27KUO37DDoejwdVTTiA-bGfuAYGJaSnWPC2jmtflod0dZuIP2o"
    },
    "zero-emission-2026": {
        date: locale === 'en' ? "Feb 25, 2026" : "25 Фев 2026",
        title: locale === 'en' ? "Environmental Standards 2026: The Path to Zero Emission" : "Экологические стандарты 2026: Путь к Zero Emission",
        category: locale === 'en' ? "Environment" : "Экология",
        content: locale === 'en' ? `
            <p>As part of our commitment to ESG principles, FleetCorp is introducing a new strategy for transitioning to eco-friendly transport. We are helping our partners integrate electric and hybrid vehicles into their supply chains.</p>
            <p>Research shows that using an electric fleet not only reduces your carbon footprint but, when managed correctly, also increases economic efficiency through savings on fuel and maintenance.</p>
            <p>We offer full-cycle support: from auditing your current fleet to installing charging infrastructure and training drivers.</p>
        ` : `
            <p>В рамках нашей приверженности принципам ESG, FleetCorp представляет новую стратегию перехода на экологически чистый транспорт. Мы помогаем нашим партнерам интегрировать электромобили и гибриды в их логистические цепочки.</p>
            <p>Исследования показывают, что использование электрофлота не только снижает углеродный след, но и при правильном управлении повышает экономическую эффективность за счет экономии на ГСМ и обслуживании.</p>
            <p>Мы предлагаем полный цикл поддержки: от аудита текущего флота до установки зарядной инфраструктуры и обучения водителей.</p>
        `,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBp6AyXQUbBHHAvp0vYq8KlUBSJnicSXPHwvWRE6n2c1n_AKJ-vFszvxXbFExY49h0nmnrKJpw4ivo78sOsbkp9ddMmw65LMdqOGzVP0fgWn7AALVg18HQMEEi_x04tKFCHjhw3KrJYDhzHGxA9lbA1MZ4jmpSQtQvWqKqjY0qheSCfXJ052dAAd7X2yp3GsfOpL3uEqHYsm7nz330XhMpuUn2woSB3L_pE5jTjo9coNLi8PzR8Nc_QRWpqb2hCA7VPEIDMrprgj4"
    }
});

export default async function NewsDetailPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
    const { locale, slug } = await params;

    const article = getNewsArticles(locale)[slug] || getNewsArticles(locale)["predictive-risk-analysis-2-0"];

    return (
        <div className="bg-background-dark min-h-screen text-slate-100 flex flex-col">
            <HeaderScroll />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href={`/${locale}/news`} className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 group">
                        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        {locale === 'en' ? 'Back to News' : 'Назад к новостям'}
                    </Link>

                    <article>
                        <header className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="bg-primary px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                                    {article.category}
                                </span>
                                <span className="text-slate-500 font-mono text-sm">{article.date}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight">
                                {article.title}
                            </h1>
                        </header>

                        <div className="relative h-96 w-full rounded-3xl overflow-hidden mb-12 border border-white/10">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover opacity-80"
                            />
                        </div>

                        <div
                            className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed 
                                prose-headings:text-white prose-headings:uppercase prose-headings:font-black
                                prose-blockquote:border-primary prose-blockquote:bg-white/5 prose-blockquote:p-6 prose-blockquote:rounded-xl
                                prose-li:marker:text-primary"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                    </article>
                </div>
            </main>

            <Footer locale={locale} />
        </div>
    );
}
