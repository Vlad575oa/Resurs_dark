import { getServerTranslations } from "@/lib/server-intl";
import { notFound } from "next/navigation";
import Link from "next/link";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import Footer from "@/components/sections/fleetcorp/Footer";

interface Props {
    params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
    return [
        { slug: "outsourcing" },
        { slug: "rental" },
        { slug: "management" },
        { slug: "consulting" },
        { slug: "strategic-outsourcing" },
        { slug: "fleet-management" },
        { slug: "predictive-maintenance" },
        { slug: "driver-management" },
        { slug: "digital-monitoring" },
        { slug: "cost-optimization" },
    ];
}

export async function generateMetadata({ params }: Props) {
    const { locale, slug } = await params;
    const { messages } = await getServerTranslations(locale);
    const dict = messages.ServicesPage as any;
    const service = dict.services[slug];

    if (!service) return {};

    return {
        title: `${service.title} | РесурсЛогистика`,
        description: service.description,
        alternates: {
            canonical: `/${locale}/services/${slug}`,
        },
    };
}

export default async function ServiceDetailPage({ params }: Props) {
    const { locale, slug } = await params;
    const { messages } = await getServerTranslations(locale);
    const dict = messages.ServicesPage as any;
    const detailDict = messages.ServiceDetail as any;
    const service = dict.services[slug];

    if (!service) notFound();

    return (
        <main className="min-h-screen bg-[#0b0d10] selection:bg-primary selection:text-white">
            <HeaderScroll locale={locale} dict={messages} />

            <div className="pt-32 pb-20 px-6 md:px-10 lg:px-40">
                <div className="max-w-4xl mx-auto text-white">
                    <Link
                        href={`/${locale}`}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-12 transition-colors font-bold uppercase tracking-widest text-xs"
                    >
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        {detailDict.back}
                    </Link>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-primary font-mono tracking-widest uppercase text-sm font-bold">
                                {service.subtitle}
                            </span>
                            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
                                {service.title}
                            </h1>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                                {service.description}
                            </p>

                            <div className="mt-16 space-y-16">
                                <section className="space-y-8">
                                    <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                                        {detailDict.included}
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="flex items-center gap-4 bg-[#161b22] p-6 rounded-2xl border border-[#282e39] text-slate-300 group hover:border-primary/50 transition-colors">
                                                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">check_circle</span>
                                                <span className="font-bold text-sm tracking-wide uppercase">{detailDict.parameter} {i}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section className="bg-primary/5 border border-primary/20 p-10 rounded-3xl space-y-6 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                                            {detailDict.consultation}
                                        </h3>
                                        <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
                                            {detailDict.consultationDesc}
                                        </p>
                                        <Link
                                            href={`/${locale}/contacts`}
                                            className="inline-block bg-primary hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-glow uppercase text-sm tracking-widest"
                                        >
                                            {detailDict.cta}
                                        </Link>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer locale={locale} dict={messages} />
        </main>
    );
}
