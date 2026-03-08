import type { Metadata } from "next";
import Link from "next/link";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import Footer from "@/components/sections/fleetcorp/Footer";
import { getServerTranslations } from "@/lib/server-intl";

export const metadata: Metadata = {
    title: "Cookie Settings | FleetCorp Global",
    description: "Cookie Policy and settings for FleetCorp Global website.",
};

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const { messages } = await getServerTranslations(locale);
    const { title, content } = (messages as any).CookieSettings;

    return (
        <div className="bg-background-dark min-h-screen flex flex-col">
            <HeaderScroll />
            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 group">
                        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        {locale === 'en' ? 'Back to Home' : 'Назад на главную'}
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-12 tracking-tighter">
                        {title}
                    </h1>
                    <div className="prose prose-invert max-w-none">
                        <div className="bg-[#161b22]/70 backdrop-blur-md border border-[#282e39] rounded-2xl p-8 md:p-12 shadow-2xl">
                            {content.split('\n\n').map((paragraph: string, idx: number) => (
                                <p key={idx} className="text-slate-300 leading-relaxed mb-6 whitespace-pre-wrap">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer locale={locale} />
        </div>
    );
}
