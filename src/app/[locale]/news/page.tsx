import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";

export const metadata: Metadata = {
    title: "News & Insights - FleetCorp Global",
    description: "Stay updated with the latest news in logistics, fleet management technologies, and company updates.",
};

const NewsGrid = dynamic(() => import("@/components/sections/fleetcorp/NewsGrid"));
const Footer = dynamic(() => import("@/components/sections/fleetcorp/Footer"));

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return (
        <div className="bg-background-dark min-h-screen flex flex-col">
            <HeaderScroll />
            <main className="flex-grow pt-12">
                <section className="py-12 px-6 md:px-10 lg:px-20 bg-[#0c1017] border-b border-[#282e39] relative overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
                    <div className="max-w-4xl mx-auto relative z-10">
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Industry Insights</span>
                        <h1 className="text-3xl md:text-4xl font-black text-white uppercase mb-6">
                            Пресс-центр <span className="text-primary">FleetCorp</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Аналитика, экспертные материалы и последние новости из мира интеллектуального управления автопарками.
                        </p>
                    </div>
                </section>
                <NewsGrid />
            </main>
            <Footer locale={locale} />
        </div>
    );
}
