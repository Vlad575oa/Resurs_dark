"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Leaf, HardHat, Lock } from "lucide-react";

const certifications = [
    {
        title: "ISO 9001:2015",
        subtitle: "Quality Management",
        icon: <ShieldCheck className="w-6 h-6 text-slate-500" />,
    },
    {
        title: "ISO 14001",
        subtitle: "Environmental Mgmt",
        icon: <Leaf className="w-6 h-6 text-slate-500" />,
    },
    {
        title: "OHSAS 18001",
        subtitle: "Health & Safety",
        icon: <HardHat className="w-6 h-6 text-slate-500" />,
    },
    {
        title: "TAPA TSR",
        subtitle: "Transport Security",
        icon: <Lock className="w-6 h-6 text-slate-500" />,
    },
];

export default function Certifications() {
    return (
        <section className="py-24 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-3 mb-12">
                    <div className="flex items-center justify-center size-8 rounded-full bg-blue-100 text-blue-600">
                        <Award className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Certifications & Compliance
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                            className="bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-5 transition-all"
                        >
                            <div className="flex items-center justify-center size-14 rounded-lg bg-slate-50 shrink-0">
                                {cert.icon}
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-slate-900 font-bold text-lg leading-tight">
                                    {cert.title}
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    {cert.subtitle}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
