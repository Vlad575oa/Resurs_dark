"use client";

import { motion } from "framer-motion";
import { Search, PenTool, ArrowRightLeft, Cpu, BarChart, TrendingUp } from "lucide-react";

const STEPS = [
    { icon: <Search />, title: "Аудит текущих расходов", desc: "Глубокий анализ текущего состояния парка и поиск скрытых «дыр» в бюджете." },
    { icon: <PenTool />, title: "Расчёт потенциала экономии", desc: "Разработка финансовой модели и фиксация измеримых KPI результата." },
    { icon: <Cpu />, title: "Внедрение цифровой платформы", desc: "Бесшовный переход на управление через систему «Авто-Контроль»." },
    { icon: <TrendingUp />, title: "Контроль и сопровождение", desc: "Регулярная оптимизация и поддержка 24/7 для достижения целевых показателей." }
];

export const ManagementModel = () => {
    return (
        <section className="py-32 bg-cloud-dancer text-anthracite-core border-t border-anthracite-core/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-anthracite-core/5 text-anthracite-core text-xs font-mono font-bold tracking-widest uppercase mb-4">
                        Roadmap
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Как это <span className="text-burnt-terra font-serif italic">работает</span></h2>
                    <p className="text-anthracite-core/60 text-lg md:text-xl font-serif italic">Срок запуска — от 30 дней.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-anthracite-core/5 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-burnt-terra/10 group-hover:bg-burnt-terra transition-colors" />
                            <div className="w-12 h-12 bg-cloud-dancer text-anthracite-core rounded-xl flex items-center justify-center mb-6 group-hover:text-burnt-terra group-hover:bg-burnt-terra/5 transition-all">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 tracking-tight">{step.title}</h3>
                            <p className="text-anthracite-core/70 leading-relaxed font-serif italic">{step.desc}</p>

                            <div className="mt-8 text-[10px] font-mono text-black/20 uppercase tracking-[0.2em]">Phase 0{i + 1}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
