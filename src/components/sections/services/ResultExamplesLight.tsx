"use client";

import { motion } from "framer-motion";
import {
    Building2,
    TrendingDown,
    Timer,
    ShieldAlert,
    ArrowUpRight
} from "lucide-react";

export const ResultExamplesLight = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-4"
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-primary">результата</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Main Case Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-[2rem] lg:rounded-[2.5rem] p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-200 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-slate-50 shadow-sm border border-slate-100 rounded-2xl">
                                        <Building2 className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Промышленное предприятие</h3>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mt-1">250 единиц техники</p>
                                    </div>
                                </div>
                                <div className="p-3 bg-slate-50 shadow-sm rounded-full text-slate-400 shrink-0">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                                {[
                                    { icon: TrendingDown, val: "-22%", label: "Затраты" },
                                    { icon: Timer, val: "-35%", label: "Простои" },
                                    { icon: ShieldAlert, val: "-18%", label: "Аварийность" }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                                        <stat.icon className="w-5 h-5 text-emerald-500 mb-4" />
                                        <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">{stat.val}</div>
                                        <div className="text-[9px] font-black uppercase tracking-wider text-slate-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative pl-6 py-4 border-l-4 border-emerald-500 bg-slate-50 rounded-r-2xl shadow-sm pr-4">
                            <p className="text-sm font-medium italic text-slate-600 leading-relaxed">
                                &ldquo;Цифры подтверждаются управленческой отчётностью клиента.&rdquo;
                            </p>
                        </div>
                    </motion.div>

                    {/* CTA / Next Case Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white border-2 border-dashed border-emerald-200 rounded-[2rem] lg:rounded-[2.5rem] p-8 lg:p-10 flex flex-col items-center justify-center text-center group transition-colors hover:border-emerald-400 hover:bg-emerald-50/30"
                    >
                        <div className="max-w-xs">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 transition-colors group-hover:text-emerald-700">Ваш кейс может быть следующим</h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-10">
                                Мы готовы провести пилотный проект и подтвердить эффективность на ваших данных.
                            </p>

                            <div className="p-5 bg-white rounded-full shadow-md text-slate-400 group-hover:text-emerald-600 group-hover:shadow-xl transition-all transform group-hover:-translate-y-1 mx-auto w-fit">
                                <ArrowUpRight className="w-6 h-6" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background circles */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
};
