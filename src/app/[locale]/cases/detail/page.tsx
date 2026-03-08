import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import Footer from "@/components/sections/fleetcorp/Footer";
import Link from "next/link";

export const metadata = {
    title: "Global Enterprise Logistics Transformation - Case Study",
    description: "How we helped a global manufacturing leader optimize 1,500+ vehicles across 12 countries.",
};

export default async function CasesDetailPage({ params }: { params: Promise<{ locale: string }> }) {
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

                    <div className="mb-12">
                        <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Case Study</h2>
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight">LOGISTICS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">TRANSFORMATION</span></h1>
                    </div>

                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 mb-20">
                        <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                            <span className="material-symbols-outlined text-8xl text-white/10">analytics</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 mb-20 border-y border-white/10 py-12">
                        <div>
                            <h3 className="text-primary font-bold uppercase text-xs tracking-widest mb-2">Fleet Size</h3>
                            <p className="text-2xl font-bold text-white">1,500+ Vehicles</p>
                        </div>
                        <div>
                            <h3 className="text-primary font-bold uppercase text-xs tracking-widest mb-2">Timeline</h3>
                            <p className="text-2xl font-bold text-white">14 Months</p>
                        </div>
                        <div>
                            <h3 className="text-primary font-bold uppercase text-xs tracking-widest mb-2">Region</h3>
                            <p className="text-2xl font-bold text-white">Global (EMEA/NA)</p>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none text-slate-400 text-lg leading-relaxed mb-16">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">The Challenge</h2>
                        <p className="mb-8">Our client, a Fortune 500 manufacturing leader, struggled with fragmented fleet operations across 12 countries. Inconsistent reporting, varied maintenance standards, and lack of central visibility led to ballooning costs and safety concerns.</p>

                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">The Solution</h2>
                        <p className="mb-8">We implemented our unified digital monitoring ecosystem and standardized maintenance protocols across all regions. By centralizing fleet department operations via our strategic outsourcing model, we provided the board with real-time visibility into every asset.</p>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6">
                            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Key Outcomes</h3>
                            <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                                <li className="flex items-center gap-3">
                                    <span className="size-2 rounded-full bg-primary"></span>
                                    $4.2M annual savings realized
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-2 rounded-full bg-primary"></span>
                                    Maintenance costs down 22%
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-2 rounded-full bg-primary"></span>
                                    Safety score improved by 35%
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="size-2 rounded-full bg-primary"></span>
                                    100% compliance achievement
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <Footer locale={locale} />
        </div>
    );
}
