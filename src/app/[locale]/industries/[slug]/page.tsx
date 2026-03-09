import type { Metadata } from "next";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import Footer from "@/components/sections/fleetcorp/Footer";
import Link from "next/link";
import { getServerTranslations } from "@/lib/server-intl";

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }): Promise<Metadata> {
    const { locale, slug } = await params;
    const { messages } = await getServerTranslations(locale);
    const industryDict = (messages as any).IndustryDetails[slug];

    if (!industryDict) return { title: "Industry Solution | РесурсЛогистика" };

    return {
        title: `${industryDict.title} | РесурсЛогистика`,
        description: industryDict.subtitle,
        alternates: {
            canonical: `/${locale}/industries/${slug}`,
        }
    };
}

export default async function IndustryPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
    const { locale, slug } = await params;
    const { messages } = await getServerTranslations(locale);
    const industryDict = (messages as any).IndustryDetails[slug] || (messages as any).IndustryDetails["industrial-manufacturing"];
    const commonDict = (messages as any).IndustryDetails;
    const legalDict = (messages as any).Legal;

    return (
        <div className="bg-background-dark min-h-screen text-slate-100 flex flex-col">
            <HeaderScroll locale={locale} dict={messages} />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 group">
                        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        {legalDict.backHome}
                    </Link>

                    <div className="flex flex-col gap-4 mb-12">
                        <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase">{industryDict.title}</h2>
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight">{industryDict.subtitle}</h1>
                    </div>

                    <div className="prose prose-invert max-w-none mb-20 text-slate-400 text-lg leading-relaxed">
                        <p>{industryDict.description}</p>
                    </div>

                    <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-20">
                        <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                            {commonDict.caseStory} {industryDict.caseStudy.company}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">
                                    {commonDict.challenge}
                                </h3>
                                <p className="text-slate-300 leading-relaxed">{industryDict.caseStudy.challenge}</p>
                            </div>
                            <div>
                                <h3 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">
                                    {commonDict.solution}
                                </h3>
                                <p className="text-slate-300 leading-relaxed">{industryDict.caseStudy.solution}</p>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <h3 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">
                                {commonDict.impact}
                            </h3>
                            <p className="text-2xl font-bold text-white italic">"{industryDict.caseStudy.result}"</p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer locale={locale} dict={messages} />
        </div>
    );
}
