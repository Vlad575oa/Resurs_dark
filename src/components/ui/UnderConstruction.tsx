"use client";

import { motion } from "framer-motion";
import { Hammer, ArrowLeft, Send, FileText, ClipboardList, Calendar } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import TelegramConfirmLink from "@/components/ui/TelegramConfirmLink";

interface Props {
    dict: any;
}

export default function UnderConstruction({ dict }: Props) {
    const params = useParams();
    const locale = params.locale as string;
    const t = dict.Placeholder;

    const telegramUrl = "https://t.me/resurslogistica";

    return (
        <main className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#020617] font-sans selection:bg-primary/30">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-100 mix-blend-overlay" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="container relative z-10 px-6 py-20">
                <div className="max-w-3xl mx-auto">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center mb-8"
                    >
                        <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/5">
                            {t?.status || "Coming Soon"}
                        </span>
                    </motion.div>

                    {/* Main Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
                        className="flex justify-center mb-12"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-all duration-500" />
                            <div className="relative size-24 md:size-32 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-xl shadow-2xl overflow-hidden group-hover:border-primary/50 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Hammer size={48} className="relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="text-center space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none"
                        >
                            {t?.title || "Under Development"}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto"
                        >
                            {t?.message || "We are working on bringing something amazing to this space."}
                        </motion.p>

                        {/* Lead Capture Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="max-w-md mx-auto bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl mt-8"
                        >
                            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">
                                {locale === 'en' ? 'Quick Inquiry' : 'Быстрый запрос'}
                            </h3>
                            <form className="space-y-4">
                                <input 
                                    type="text" 
                                    placeholder={locale === 'en' ? 'Your Name' : 'Ваше имя'} 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all text-sm"
                                />
                                <input 
                                    type="email" 
                                    placeholder={locale === 'en' ? 'Email / Phone' : 'Email / Телефон'} 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all text-sm"
                                />
                                <button 
                                    type="submit" 
                                    className="w-full bg-primary py-3 rounded-xl font-bold text-white shadow-glow hover:bg-blue-600 transition-all text-sm uppercase tracking-wider"
                                >
                                    {locale === 'en' ? 'Send' : 'Отправить'}
                                </button>
                                <p className="text-[10px] text-slate-500 italic">
                                    {locale === 'en' ? 'By clicking "Send", you agree to our data processing policy.' : 'Нажимая «Отправить», вы соглашаетесь на обработку персональных данных.'}
                                </p>
                            </form>
                        </motion.div>

                        {/* Back to Home Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="pt-4"
                        >
                            <Link
                                href={`/${locale}`}
                                className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 font-black uppercase text-[9px] tracking-widest hover:bg-white/10 hover:text-white transition-all duration-300 active:scale-95"
                            >
                                <ArrowLeft size={16} />
                                {t?.homeButton || "Back to Home"}
                            </Link>
                        </motion.div>
                    </div>

                    {/* Progress Indicator */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                        className="mt-24 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent relative"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 bg-primary rounded-full blur-sm" />
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
