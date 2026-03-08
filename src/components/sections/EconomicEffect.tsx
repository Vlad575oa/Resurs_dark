"use client";

import { motion } from "framer-motion";
import { TrendingDown, Timer, ShieldCheck, Banknote, LineChart } from "lucide-react";

const RESULTS = [
    {
        icon: <TrendingDown className="w-8 h-8" />,
        value: "15–30%",
        label: "Снижение затрат",
        desc: "на содержание и эксплуатацию флота"
    },
    {
        icon: <Timer className="w-8 h-8" />,
        value: "до 40%",
        label: "Сокращение простоев",
        desc: "за счет предиктивного сервиса"
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        value: "MIN",
        label: "Снижение аварийности",
        desc: "и повышение культуры вождения"
    },
    {
        icon: <Banknote className="w-8 h-8" />,
        value: "ZERO",
        label: "Минимизация штрафов",
        desc: "полный контроль законодательства"
    },
    {
        icon: <LineChart className="w-8 h-8" />,
        value: "MAX",
        label: "Рост управляемости",
        desc: "прозрачные KPI в реальном времени"
    },
];

export const EconomicEffect = () => {
    return (
        <section className="py-32 bg-anthracite-core relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
                    <div>
                        <span className="text-burnt-terra font-mono text-xs uppercase tracking-widest mb-4 block">Measurable Results</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-cloud-dancer mb-6 tracking-tighter leading-tight">
                            Измеримый результат <br />
                            <span className="text-white/40 font-serif italic">для вашего бизнеса</span>
                        </h2>
                    </div>
                    <div className="lg:pt-12">
                        <p className="text-xl text-white/60 font-serif italic leading-relaxed max-w-xl">
                            После внедрения цифровой системы управления, автопарк превращается из
                            <span className="text-white"> расходной статьи </span> в
                            <span className="text-burnt-terra font-bold"> управляемый актив</span>.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10 border border-white/10 group">
                    {RESULTS.map((res, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-anthracite-core p-8 flex flex-col items-center text-center group/item hover:bg-white/5 transition-colors relative"
                        >
                            <div className="text-burnt-terra mb-6 group-hover/item:scale-110 transition-transform">
                                {res.icon}
                            </div>
                            <div className="text-4xl font-black text-cloud-dancer mb-2 font-mono tracking-tighter">
                                {res.value}
                            </div>
                            <div className="text-sm font-bold text-white uppercase tracking-widest mb-4">
                                {res.label}
                            </div>
                            <div className="text-xs text-white/40 font-serif italic leading-relaxed">
                                {res.desc}
                            </div>

                            {/* Hover Border Accent */}
                            <div className="absolute inset-0 border border-burnt-terra/0 group-hover/item:border-burnt-terra/30 transition-colors pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
