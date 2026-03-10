import type { Metadata } from "next";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import Footer from "@/components/sections/fleetcorp/Footer";
import { getServerTranslations } from "@/lib/server-intl";
import CalculatorView from "@/components/sections/fleetcorp/CalculatorView";

interface Props {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const { messages } = await getServerTranslations(locale);
    const dict = messages.AuditCalculator as any;

    return {
        title: `${dict.title} - РесурсЛогистика`,
        description: dict.description,
    };
}

export default async function CalculatorPage({ params }: Props) {
    const { locale } = await params;
    const { messages } = await getServerTranslations(locale);
    const dict = messages.AuditCalculator as any;

    return (
        <div className="bg-background-dark min-h-screen text-slate-100 selection:bg-primary selection:text-white">
            <HeaderScroll locale={locale} dict={messages} />

            <main className="pt-32 pb-24 px-6 md:px-10 lg:px-20 2xl:px-32 relative overflow-hidden">
                {/* Decorative background effects */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] opacity-50" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] opacity-50" />
                </div>

                <div className="container mx-auto max-w-7xl 2xl:max-w-[1700px] relative z-10">
                    <div className="max-w-3xl mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-6">
                            Technical Audit Tool v1.0
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.9] tracking-tighter italic mb-8">
                            {dict.title}
                        </h1>
                        <p className="text-xl text-slate-400 font-medium leading-relaxed">
                            {dict.description}
                        </p>
                    </div>

                    <CalculatorView dict={messages} locale={locale} />
                </div>
            </main>

            <Footer locale={locale} dict={messages} />
        </div>
    );
}

// Since I cannot use motion components easily in a Server Component page directly without 'use client', 
// I will wrap the motion parts or just use plain HTML for the wrapper. 
// Actually, I'll update the page to be simple and the CalculatorView handles the animations.
