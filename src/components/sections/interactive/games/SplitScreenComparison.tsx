"use client";
import { motion } from "framer-motion";
import { Coffee, ShieldCheck, Mail, Moon, Settings2, Droplet, ArrowRight } from "lucide-react";

export default function SplitScreenComparison() {
    return (
        <div className="rounded-3xl border border-slate-700 overflow-hidden flex flex-col min-h-[480px] relative bg-slate-900">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 text-center">
                <h3 className="text-lg md:text-xl font-black text-white bg-slate-900/60 backdrop-blur-md inline-block px-5 py-2 rounded-full border border-white/10">
                    Своё vs Аутсорс
                </h3>
            </div>
            <div className="flex flex-col md:flex-row flex-1">
                {/* Left — chaos */}
                <div className="flex-1 bg-slate-800 p-8 pt-20 flex flex-col items-center relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-700">
                    <h4 className="text-red-400 font-bold tracking-widest uppercase mb-8 z-10">Свой автопарк</h4>
                    <div className="relative h-32 w-full flex items-center justify-center">
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="text-slate-500">
                            <Moon className="w-16 h-16" />
                            <motion.div animate={{ opacity: [0, 1, 0], y: [0, -20] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -top-4 left-full text-xs font-bold text-slate-400">Z</motion.div>
                        </motion.div>
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} className="absolute top-0 left-4">
                            <Settings2 className="w-7 h-7 text-amber-500" />
                        </motion.div>
                        <motion.div animate={{ opacity: [0, 1, 0], y: [0, -30], x: [0, 20] }} transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
                            className="absolute top-1/2 right-4 bg-white text-red-600 text-[9px] font-bold px-1.5 py-0.5">Счёт за СТО</motion.div>
                    </div>
                    <p className="text-slate-400 text-sm text-center mt-auto pt-8">Постоянные издержки, скрытые расходы и человеческий фактор.</p>
                    <div className="absolute inset-0 bg-red-900/5 pointer-events-none" />
                </div>
                {/* Right — order */}
                <div className="flex-1 bg-gradient-to-br from-slate-900 to-sky-950 p-8 pt-20 flex flex-col items-center relative overflow-hidden">
                    <h4 className="text-emerald-400 font-bold tracking-widest uppercase mb-8 z-10">Аутсорс с нами</h4>
                    <div className="relative h-32 w-full flex items-center justify-center">
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="text-emerald-400">
                            <Coffee className="w-16 h-16" />
                        </motion.div>
                        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute top-0 right-4">
                            <ShieldCheck className="w-7 h-7 text-sky-400" />
                        </motion.div>
                        <motion.div animate={{ opacity: [0, 1, 0], y: [0, -40] }} transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
                            className="absolute top-1/2 left-4 flex items-center gap-1 bg-emerald-950/80 text-emerald-300 text-[9px] font-bold px-2 py-0.5 rounded border border-emerald-800">
                            <Mail className="w-3 h-3" /> Отчёт
                        </motion.div>
                    </div>
                    <p className="text-sky-200/70 text-sm text-center mt-auto pt-8">Бесперебойная логистика, предсказуемый бюджет, спокойствие.</p>
                </div>
            </div>
            {/* CTA */}
            <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
                className="absolute top-[78%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-white text-slate-900 px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-xl hover:bg-emerald-400 hover:text-white transition-all flex items-center gap-2 border-4 border-slate-900">
                Хочу как справа <ArrowRight className="w-4 h-4" />
            </button>
        </div>
    );
}
