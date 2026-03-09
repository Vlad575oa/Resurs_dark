import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const { messages } = await getServerTranslations(locale);
    const { heroTitle } = (messages as any).ContactPage;

    return {
        title: `${heroTitle} | РесурсЛогистика`,
        description: locale === 'en'
            ? "Get in touch with our team for consultations, audits, and partnership opportunities."
            : "Свяжитесь с нашей командой для консультаций, аудита и партнерства.",
        alternates: {
            canonical: `/${locale}/contacts`,
        }
    };
}

const Footer = dynamic(() => import("@/components/sections/fleetcorp/Footer"));

import { getServerTranslations } from "@/lib/server-intl";

export default async function ContactsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const { messages } = await getServerTranslations(locale);
    const dict = messages.ContactPage;
    return (
        <div className="bg-background-dark min-h-screen flex flex-col">
            <HeaderScroll locale={locale} dict={messages} />
            <main className="flex-grow pt-20">
                <section className="py-20 px-6 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="flex flex-col gap-10">
                            <div>
                                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">
                                    {dict.badge}
                                </span>
                                <h1 className="text-3xl md:text-4xl font-black text-white uppercase mb-6">
                                    {dict.heroTitle}<span className="text-primary">{dict.heroAccent}</span>
                                </h1>
                                <p className="text-slate-400 text-lg max-w-md">
                                    {dict.heroDescription}
                                </p>
                            </div>

                            <div className="grid gap-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-glow">
                                        <span className="material-symbols-outlined">alternate_email</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">{dict.info.email.label}</h3>
                                        <p className="text-slate-400">{dict.info.email.value}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-glow">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">{dict.info.phone.label}</h3>
                                        <p className="text-slate-400">{dict.info.phone.value}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-glow">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">{dict.info.office.label}</h3>
                                        <p className="text-slate-400">{dict.info.office.value}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-[#161b22]/70 backdrop-blur-md border border-[#282e39] rounded-2xl p-8 md:p-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
                            <form className="relative z-10 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase">{dict.form.name}</label>
                                        <input type="text" className="w-full bg-[#0c1017] border border-[#282e39] rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder={dict.form.namePlaceholder} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase">{dict.form.company}</label>
                                        <input type="text" className="w-full bg-[#0c1017] border border-[#282e39] rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder={dict.form.companyPlaceholder} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase">{dict.form.emailPhone}</label>
                                    <input type="text" className="w-full bg-[#0c1017] border border-[#282e39] rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="+7 (___) ___-__-__" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase">{dict.form.message}</label>
                                    <textarea rows={4} className="w-full bg-[#0c1017] border border-[#282e39] rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none" placeholder={dict.form.messagePlaceholder}></textarea>
                                </div>
                                <div className="flex items-start gap-3 py-2">
                                    <input
                                        type="checkbox"
                                        id="consent"
                                        required
                                        className="mt-1 w-4 h-4 rounded border-[#282e39] bg-[#0c1017] text-primary focus:ring-primary focus:ring-offset-[#0c1017]"
                                    />
                                    <label htmlFor="consent" className="text-[10px] md:text-xs text-slate-500 leading-relaxed italic">
                                        {dict.form.consent}
                                        <a href={`/${locale}/privacy`} className="text-primary hover:underline not-italic">
                                            {dict.form.privacyPolicy}
                                        </a>
                                    </label>
                                </div>
                                <button type="submit" className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-glow transition-all">
                                    {dict.form.submit}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="h-[500px] w-full relative bg-[#0c1017]">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-[#161b22] border border-[#282e39] p-4 rounded-xl shadow-2xl flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary text-3xl">meeting_room</span>
                            <div>
                                <p className="text-white font-bold">{dict.map.title}</p>
                                <p className="text-slate-400 text-xs text-nowrap">{dict.map.schedule}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer locale={locale} dict={messages} />
        </div>
    );
}
