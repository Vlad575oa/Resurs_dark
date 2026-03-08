"use client";

import { motion } from "framer-motion";
import {
    Building2,
    TrendingDown,
    Timer,
    ShieldAlert,
    ArrowUpRight
} from "lucide-react";

export const ResultExamples = () => {
    return (
        <section className="py-24 bg-[#f9f7f2] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4"
                    >
                        Proof of Work
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight"
                    >
                        Примеры <br />
                        <span className="font-serif italic text-[#b38b5d] font-normal">результата</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Main Case Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-12">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-slate-50 rounded-2xl">
                                        <Building2 className="w-6 h-6 text-slate-800" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">Промышленное предприятие</h3>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-[#b38b5d]">250 единиц техники</p>
                                    </div>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-full text-slate-300">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-12">
                                {[
                                    { icon: TrendingDown, val: "-22%", label: "Затраты" },
                                    { icon: Timer, val: "-35%", label: "Простои" },
                                    { icon: ShieldAlert, val: "-18%", label: "Аварийность" }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-[#f9f7f2] rounded-2xl p-6 flex flex-col items-center text-center">
                                        <stat.icon className="w-4 h-4 text-[#b38b5d] mb-4 opacity-60" />
                                        <div className="text-2xl font-black text-slate-900 mb-1">{stat.val}</div>
                                        <div className="text-[9px] font-black uppercase tracking-wider text-slate-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative pl-6 py-4 border-l-2 border-slate-900">
                            <p className="text-sm italic text-slate-500 leading-relaxed">
                                &ldquo;Цифры подтверждаются управленческой отчётностью клиента.&rdquo;
                            </p>
                        </div>
                    </motion.div>

                    {/* CTA / Next Case Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/40 border-2 border-dashed border-slate-200 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center group transition-colors hover:border-[#b38b5d]/30"
                    >
                        <div className="max-w-xs">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ваш кейс может быть следующим</h3>
                            <p className="text-sm text-slate-400 leading-relaxed mb-10">
                                Мы готовы провести пилотный проект и подтвердить эффективность на ваших данных.
                            </p>

                            <div className="p-4 bg-white rounded-full shadow-sm mx-auto w-fit text-slate-300 group-hover:text-[#b38b5d] group-hover:bg-slate-50 transition-all transform group-hover:rotate-45">
                                <ArrowUpRight className="w-6 h-6" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background circles */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#b38b5d]/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
};
