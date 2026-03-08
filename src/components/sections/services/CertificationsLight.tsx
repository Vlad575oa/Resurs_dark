"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Leaf, HardHat, Lock } from "lucide-react";

const certifications = [
    {
        title: "ISO 9001:2015",
        subtitle: "Quality Management",
        icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    },
    {
        title: "ISO 14001",
        subtitle: "Environmental Mgmt",
        icon: <Leaf className="w-6 h-6 text-emerald-600" />,
    },
    {
        title: "OHSAS 18001",
        subtitle: "Health & Safety",
        icon: <HardHat className="w-6 h-6 text-emerald-600" />,
    },
    {
        title: "TAPA TSR",
        subtitle: "Transport Security",
        icon: <Lock className="w-6 h-6 text-emerald-600" />,
    },
];

export default function CertificationsLight() {
    return (
        <section className="py-24 bg-[#0a0f1c] relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-4 mb-16">
                    <div className="flex items-center justify-center size-12 rounded-full bg-emerald-500/20 text-emerald-500 shadow-sm border border-emerald-500/30">
                        <Award className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center">
                        Сертификаты и Комплаенс
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)" }}
                            className="glass-panel bg-[#111827]/80 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-5 transition-all shadow-lg group hover:bg-[#1a2333]/90 hover:border-emerald-500/30"
                        >
                            <div className="flex items-center justify-center size-16 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors shrink-0">
                                {cert.icon}
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-white font-bold text-lg leading-tight mb-2">
                                    {cert.title}
                                </h3>
                                <p className="text-slate-500 text-sm font-medium">
                                    {cert.subtitle}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a0f1c] to-transparent pointer-events-none" />
        </section>
    );
}
