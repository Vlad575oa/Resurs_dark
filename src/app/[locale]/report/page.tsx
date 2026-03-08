import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import Footer from "@/components/sections/fleetcorp/Footer";
import Link from "next/link";

export const metadata = {
    title: "Quarterly Fleet Efficiency Report - ResursTrans",
    description: "Detailed analysis of fleet performance, cost savings, and environmental impact.",
};

export default async function ReportPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return (
        <div className="bg-background-dark min-h-screen text-slate-100 flex flex-col">
            <HeaderScroll />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 group">
                        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-8">Q1 2026 Fleet Efficiency Report</h1>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                            <div className="text-primary text-sm font-bold uppercase mb-2">Total Savings</div>
                            <div className="text-3xl font-black text-white">$2.4M</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                            <div className="text-primary text-sm font-bold uppercase mb-2">Efficiency Gain</div>
                            <div className="text-3xl font-black text-white">+18%</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                            <div className="text-primary text-sm font-bold uppercase mb-2">CO2 Reduction</div>
                            <div className="text-3xl font-black text-white">420 Tons</div>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none text-slate-400 text-lg leading-relaxed space-y-8">
                        <p>Our comprehensive analysis reveals significant efficiency gains across all managed fleets in the first quarter of 2026. The integration of AI-driven routing and predictive maintenance has directly contributed to a 15% reduction in fuel consumption and a 20% decrease in unplanned maintenance incidents.</p>

                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Technical Overview</h2>
                        <p>The transition to our digital monitoring suite has allowed for more precise driver performance metrics, leading to safer operations and lower insurance premiums. Our clients in the industrial and energy sectors have seen the highest ROI, with some achieving over 25% cost reduction in remote site logistics.</p>

                        <div className="bg-primary/10 border border-primary/20 p-8 rounded-3xl mt-12">
                            <h3 className="text-xl font-bold text-white mb-4 italic">"The data doesn't lie. Precision management is no longer optional for enterprise fleets."</h3>
                            <p className="text-slate-300">— Alex Volkov, Head of Analytics</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer locale={locale} />
        </div>
    );
}
