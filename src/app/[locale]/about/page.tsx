import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";

export const metadata: Metadata = {
    title: "About Us - FleetCorp Global",
    description: "Learn more about FleetCorp's mission, history, and the scale of our operations as a leader in fleet management.",
};

const HistoryTimeline = dynamic(() => import("@/components/sections/HistoryTimeline").then(mod => mod.HistoryTimeline));
const Scale = dynamic(() => import("@/components/sections/Scale").then(mod => mod.Scale));
const Footer = dynamic(() => import("@/components/sections/fleetcorp/Footer"));

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    return (
        <div className="bg-background-dark min-h-screen flex flex-col">
            <HeaderScroll />
            <main className="flex-grow pt-20">
                <section className="pt-24 pb-16 px-6 md:px-10 lg:px-20 relative overflow-hidden bg-[#0c1017]">
                    <div className="absolute inset-0 z-0 opacity-10 bg-grid-pattern pointer-events-none"></div>
                    <div className="max-w-4xl mx-auto relative z-10 text-center">
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                            {locale === 'en' ? 'Our Legacy' : 'Наше наследие'}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-8 tracking-tight">
                            {locale === 'en' ? 'Leadership through ' : 'Лидерство сквозь '}<span className="text-primary italic">{locale === 'en' ? 'time' : 'время'}</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            {locale === 'en' ? 'We build the future of logistics based on decades of experience and innovative management technologies.' : 'Мы строим будущее логистики, опираясь на десятилетия опыта и инновационные технологии управления.'}
                        </p>
                    </div>
                </section>
                <div className="bg-[#0c1017]">
                    <HistoryTimeline locale={locale} />
                    <Scale locale={locale} />
                </div>
            </main>
            <Footer locale={locale} />
        </div>
    );
}
