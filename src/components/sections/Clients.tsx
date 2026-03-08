"use client";

import { motion } from "framer-motion";
import { Shield, Database, Scale, Lock, PieChart } from "lucide-react";

const TRUST_FACTORS = [
    { icon: <Shield className="w-5 h-5" />, text: "Работаем по SLA" },
    { icon: <Database className="w-5 h-5" />, text: "Интеграция с 1С и ERP" },
    { icon: <Scale className="w-5 h-5" />, text: "Соответствие законодательству РФ" },
    { icon: <Lock className="w-5 h-5" />, text: "Информационная безопасность" },
    { icon: <PieChart className="w-5 h-5" />, text: "Прозрачная финансовая модель" },
];

const CLIENTS = [
    "РЖД", "Апатит", "Интер РАО", "Уралхим", "Ростелеком"
];

export const Clients = () => {
    return (
        <section className="py-32 bg-cloud-dancer text-anthracite-core">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <span className="text-burnt-terra font-mono text-xs uppercase tracking-widest mb-4 block">Trust & Reliability</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Почему нам <span className="text-burnt-terra italic font-serif">доверяют</span></h2>
                        <p className="text-anthracite-core/60 text-lg font-serif italic mb-8">
                            Крупные корпоративные клиенты по всей России выбирают нас за надежность и технологическое лидерство.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {TRUST_FACTORS.map((factor, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-anthracite-core/5 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="text-burnt-terra">{factor.icon}</div>
                                    <span className="text-sm font-bold uppercase tracking-tight">{factor.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 opacity-60 mix-blend-multiply">
                            {CLIENTS.map((client, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    className="aspect-video flex items-center justify-center border border-anthracite-core/10 rounded-2xl hover:border-burnt-terra/20 hover:bg-white transition-all cursor-default group"
                                >
                                    <span className="font-black font-sans text-lg tracking-tighter group-hover:text-burnt-terra transition-colors">{client}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
