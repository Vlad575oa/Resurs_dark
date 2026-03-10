import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import { getServerTranslations } from "@/lib/server-intl";
import RegionalBranches from "./RegionalBranches";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const { messages } = await getServerTranslations(locale);
    const { pageTitle } = (messages as any).ContactsPage;

    return {
        title: `${pageTitle} | РесурсЛогистика`,
        description: (messages as any).ContactsPage.description,
        alternates: {
            canonical: `/${locale}/contacts`,
        }
    };
}

const Footer = dynamic(() => import("@/components/sections/fleetcorp/Footer"));

export default async function ContactsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const { messages } = await getServerTranslations(locale);
    const dict = messages.ContactsPage;

    return (
        <div className="bg-background-dark min-h-screen flex flex-col relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-x-0 top-0 h-screen z-0 opacity-40 pointer-events-none">
                <Image
                    src="/images/world_map_background.png"
                    alt="World Map Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d10] via-transparent to-[#0b0d10]"></div>
            </div>

            <HeaderScroll locale={locale} dict={messages} />

            <main className="flex-grow pt-32 relative z-10 pb-20">
                <section className="px-6 md:px-10 lg:px-20 2xl:px-32 mb-20">
                    <div className="max-w-7xl 2xl:max-w-[1700px] mx-auto grid lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Info Side */}
                        <div className="flex flex-col gap-12">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-6 tracking-tight">
                                    {dict.pageTitle}
                                </h1>
                                <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                                    {dict.description}
                                </p>
                            </div>

                            <div className="space-y-10">
                                {/* Head Office */}
                                <div className="space-y-6">
                                    <h2 className="text-xl font-bold text-white flex items-center gap-3">
                                        <span className="w-8 h-[2px] bg-primary"></span>
                                        {dict.headOffice}
                                    </h2>
                                    <div className="grid gap-6">
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                                            <div>
                                                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">{dict.address}</p>
                                                <p className="text-white text-sm md:text-base">{dict.addressValue}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-primary mt-1">call</span>
                                            <div>
                                                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">{dict.phone}</p>
                                                <p className="text-white text-sm md:text-base">{dict.phoneValue}</p>
                                                <p className="text-slate-500 text-xs mt-1">{dict.hours}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-primary mt-1">mail</span>
                                            <div>
                                                <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-1">{dict.email}</p>
                                                <p className="text-white text-sm md:text-base">{dict.emailValue}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* How to get there */}
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">directions_walk</span>
                                        {dict.howToGet}
                                    </h3>
                                    <div className="space-y-3">
                                        {dict.howToGetSteps.map((step: string, idx: number) => (
                                            <p key={idx} className="text-slate-400 text-sm leading-relaxed">
                                                {step}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Side */}
                        <div className="sticky top-32">
                            <div className="bg-[#161b22]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>

                                <h2 className="text-2xl font-bold text-white mb-8 relative z-10">{dict.writeUs}</h2>

                                <form className="relative z-10 space-y-5">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">{dict.name}</label>
                                            <input type="text" className="w-full bg-[#0c1017]/80 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder={dict.namePlaceholder} />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">{dict.emailLabel}</label>
                                            <input type="email" className="w-full bg-[#0c1017]/80 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder={dict.emailPlaceholder} />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">{dict.message}</label>
                                        <textarea rows={5} className="w-full bg-[#0c1017]/80 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none" placeholder={dict.messagePlaceholder}></textarea>
                                    </div>

                                    <div className="flex items-start gap-3 py-2">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            required
                                            className="mt-1 w-4 h-4 rounded-lg border-white/10 bg-[#0c1017] text-primary focus:ring-primary focus:ring-offset-[#0c1017]"
                                        />
                                        <label htmlFor="consent" className="text-[11px] text-slate-500 leading-relaxed italic">
                                            {dict.consentText}
                                            <a href={`/${locale}/privacy`} className="text-primary hover:underline not-italic ml-1">
                                                {dict.consentLink}
                                            </a>
                                        </label>
                                    </div>

                                    <button type="submit" className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-5 rounded-2xl shadow-glow transition-all active:scale-[0.98]">
                                        {dict.sendMessage}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Regional Branches Section */}
                <section className="px-6 md:px-10 lg:px-20 2xl:px-32">
                    <div className="max-w-7xl 2xl:max-w-[1700px] mx-auto">
                        <RegionalBranches dict={dict} />
                    </div>
                </section>
            </main>

            <Footer locale={locale} dict={messages} />
        </div>
    );
}
