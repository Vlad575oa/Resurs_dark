"use client";

import { motion } from "framer-motion";
import {
    Factory,
    Wrench,
    Zap,
    Bus,
    Building2
} from "lucide-react";

const INDUSTRIES = [
    {
        icon: Factory,
        label: "Промпредприятия",
    },
    {
        icon: Wrench,
        label: "Строительство",
    },
    {
        icon: Zap,
        label: "Энергетика",
    },
    {
        icon: Bus,
        label: "Мун. транспорт",
    },
    {
        icon: Building2,
        label: "Корп. парки",
    }
];

export const IndustryExpertise = () => {
    return (
        <section className="py-24 bg-background-dark relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold text-center text-white mb-16 tracking-tight"
                >
                    Отраслевая экспертиза
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {INDUSTRIES.map((industry, index) => {
                        const Icon = industry.icon;
                        return (
                            <motion.div
                                key={industry.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="glass-panel border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center group transition-all hover:bg-white/5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
                            >
                                <div className="mb-6 p-4 rounded-2xl bg-white/5 group-hover:bg-primary/20 transition-colors">
                                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-sm md:text-base font-bold text-slate-200 tracking-wide group-hover:text-white transition-colors">
                                    {industry.label}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center text-slate-400 mt-12 text-sm font-medium"
                >
                    Работаем с парками от <span className="text-primary font-bold">50 до 5000+</span> единиц техники
                </motion.p>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-background-dark via-transparent to-primary/10 pointer-events-none" />
        </section>
    );
};
