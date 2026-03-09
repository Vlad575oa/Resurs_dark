import type { Metadata } from "next";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import Footer from "@/components/sections/fleetcorp/Footer";
import Link from "next/link";
import { getServerTranslations } from "@/lib/server-intl";
import { notFound } from "next/navigation";
import { slugify, truncateContent } from "@/lib/utils";

interface Props {
    params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;
    const { messages } = await getServerTranslations(locale);
    const articles = (messages.News as any).articles || [];
    const article = articles.find((a: any) => (a.slug || slugify(a.title)) === slug);

    if (!article) return { title: "News - РесурсЛогистика" };

    return {
        title: `${article.title} - РесурсЛогистика`,
        description: article.preview || truncateContent(article.content || ""),
    };
}

export default async function NewsDetailPage({ params }: Props) {
    const { locale, slug } = await params;
    const { messages } = await getServerTranslations(locale);
    const dict = messages.News as any;
    const detailDict = messages.NewsDetail as any;
    const articles = dict.articles || [];
    const article = articles.find((a: any) => (a.slug || slugify(a.title)) === slug);

    if (!article) notFound();

    return (
        <div className="bg-background-dark min-h-screen text-slate-100 flex flex-col selection:bg-primary selection:text-white">
            <HeaderScroll locale={locale} dict={messages} />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 group uppercase text-xs font-bold tracking-widest">
                        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform text-sm">arrow_back</span>
                        {detailDict.back}
                    </Link>

                    <article>
                        <header className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="bg-primary px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                                    {article.category}
                                </span>
                                <span className="text-slate-500 font-mono text-sm">{article.date}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight tracking-tighter italic">
                                {article.title}
                            </h1>
                        </header>

                        {article.image && (
                            <div className="relative h-96 w-full rounded-3xl overflow-hidden mb-12 border border-white/10 group shadow-2xl">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                            </div>
                        )}

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

            <Footer locale={locale} dict={messages} />
        </div>
    );
}
