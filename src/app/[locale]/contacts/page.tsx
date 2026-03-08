import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";

export const metadata: Metadata = {
    title: "Contacts - FleetCorp Global",
    description: "Get in touch with our team for consultations, audits, and partnership opportunities.",
};

const Footer = dynamic(() => import("@/components/sections/fleetcorp/Footer"));

export default async function ContactsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return (
        <div className="bg-background-dark min-h-screen flex flex-col">
            <HeaderScroll />
            <main className="flex-grow pt-20">
                <section className="py-20 px-6 md:px-10 lg:px-20">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="flex flex-col gap-10">
                            <div>
                                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">
                                    {locale === 'en' ? 'Contact Us' : 'Свяжитесь с нами'}
                                </span>
                                <h1 className="text-3xl md:text-4xl font-black text-white uppercase mb-6">
                                    {locale === 'en' ? 'Let\'s ' : 'Давайте '}<span className="text-primary">{locale === 'en' ? 'Begin' : 'Начнем'}</span>
                                </h1>
                                <p className="text-slate-400 text-lg max-w-md">
                                    {locale === 'en'
                                        ? 'Contact us for a free audit of your fleet or a consultation on cost optimization.'
                                        : 'Свяжитесь с нами для получения бесплатного аудита вашего автопарка или консультации по оптимизации затрат.'}
                                </p>
                            </div>

                            <div className="grid gap-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-glow">
                                        <span className="material-symbols-outlined">alternate_email</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">Email</h3>
                                        <p className="text-slate-400">info@fleetcorp.global</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-glow">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">Phone</h3>
                                        <p className="text-slate-400">+7 (495) 123-45-67</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-glow">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">{locale === 'en' ? 'Office' : 'Офис'}</h3>
                                        <p className="text-slate-400">{locale === 'en' ? 'Moscow, "Lotos" BC, Odesskaya St, 2' : 'Москва, БЦ «Лотос», ул. Одесская, 2'}</p>
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
                                        <label className="text-xs font-bold text-slate-500 uppercase">{locale === 'en' ? 'Name' : 'Имя'}</label>
                                        <input type="text" className="w-full bg-[#0c1017] border border-[#282e39] rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder={locale === 'en' ? 'Alexander' : 'Александр'} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase">{locale === 'en' ? 'Company' : 'Компания'}</label>
                                        <input type="text" className="w-full bg-[#0c1017] border border-[#282e39] rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder={locale === 'en' ? 'Logistics LLC' : 'ООО Логистика'} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase">{locale === 'en' ? 'Email / Phone' : 'Email / Телефон'}</label>
                                    <input type="text" className="w-full bg-[#0c1017] border border-[#282e39] rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="+7 (___) ___-__-__" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase">{locale === 'en' ? 'Message' : 'Сообщение'}</label>
                                    <textarea rows={4} className="w-full bg-[#0c1017] border border-[#282e39] rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none" placeholder={locale === 'en' ? 'Tell us about your fleet...' : 'Расскажите о вашем автопарке...'}></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-glow transition-all">
                                    {locale === 'en' ? 'Send Request' : 'Отправить запрос'}
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
                                <p className="text-white font-bold">{locale === 'en' ? 'Our Main Office' : 'Наш главный офис'}</p>
                                <p className="text-slate-400 text-xs text-nowrap">{locale === 'en' ? 'Mon-Fri: 09:00 - 18:00' : 'Пн-Пт: 09:00 - 18:00'}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer locale={locale} />
        </div>
    );
}
