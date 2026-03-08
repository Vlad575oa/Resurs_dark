"use client";

import { motion } from "framer-motion";
import { Factory, Construction, Zap, Bus, Building2 } from "lucide-react";

const AUDIENCES = [
    { icon: <Factory className="w-8 h-8" />, title: "Промышленные предприятия" },
    { icon: <Construction className="w-8 h-8" />, title: "Строительные компании" },
    { icon: <Zap className="w-8 h-8" />, title: "Энергетика" },
    { icon: <Bus className="w-8 h-8" />, title: "Муниципальный транспорт" },
    { icon: <Building2 className="w-8 h-8" />, title: "Корпоративные автопарки" },
];

export const TargetAudience = () => {
    return (
        <section className="py-32 bg-cloud-dancer relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <span className="text-burnt-terra font-mono text-xs uppercase tracking-widest mb-4 block">Industry Solutions</span>
                        <h2 className="text-4xl md:text-6xl font-black text-anthracite-core mb-8 tracking-tighter leading-tight">
                            Для кого <br />
                            <span className="text-burnt-terra italic font-serif">наше решение</span>
                        </h2>
                    </div>
                    <div>
                        <div className="p-8 border border-anthracite-core/10 bg-white/40 backdrop-blur-md rounded-2xl">
                            <div className="text-5xl font-black text-anthracite-core mb-2 font-mono tracking-tighter">50 – 5000+</div>
                            <div className="text-sm uppercase tracking-widest text-anthracite-core/40 font-bold mb-4">единиц техники</div>
                            <p className="text-lg text-anthracite-core/60 font-serif italic italic leading-relaxed">
                                Любой масштаб — от локальных парков до федеральных холдингов.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {AUDIENCES.map((audience, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-3xl border border-anthracite-core/5 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-anthracite-core/5 text-anthracite-core flex items-center justify-center mb-6 group-hover:bg-burnt-terra group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
                                {audience.icon}
                            </div>
                            <h3 className="text-lg font-bold text-anthracite-core leading-tight group-hover:text-burnt-terra transition-colors tracking-tight">
                                {audience.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
