"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ru from "@/app/messages/ru.json";
import en from "@/app/messages/en.json";

interface HistoryItem {
    year: string;
    title: string;
    description: string;
    image: string;
}

export const HistoryTimeline = ({ locale }: { locale: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const dictionary = locale === 'en' ? en : ru;
    const { timeline } = dictionary.AboutPage;

    const historyItems: HistoryItem[] = Object.entries(timeline).map(([year, info]) => {
        let ext = "webp";
        if (["2008", "2009", "2011", "2026", "2027"].includes(year)) ext = "svg";
        return {
            year,
            title: info.title,
            description: info.description,
            image: `/images/timeline/${year}.${ext}`
        };
    }).sort((a, b) => parseInt(a.year) - parseInt(b.year));

    return (
        <section ref={containerRef} className="py-24 bg-[#0c1017] text-cloud-dancer relative overflow-hidden">
            {/* Engineering Grid Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-pattern" />

            <div className="container mx-auto px-6 relative z-10 flex gap-12">
                {/* Vertical Line */}
                <div className="w-px bg-white/10 relative min-h-[1000px] hidden md:block shrink-0">
                    <motion.div
                        style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                        className="w-full bg-primary absolute top-0"
                    />
                </div>

                <div className="space-y-32 w-full pb-20">
                    {historyItems.map((item, i) => (
                        <motion.div
                            key={item.year}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ margin: "-10%", once: true }}
                            className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start lg:items-center"
                        >
                            <div className="flex-[2] w-full order-2 lg:order-1">
                                <motion.div
                                    initial={{ opacity: 0.1 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ margin: "-20%", once: false }}
                                    transition={{ duration: 0.8 }}
                                    className="text-6xl md:text-8xl font-black text-white font-mono tracking-tighter mb-4"
                                >
                                    {item.year}
                                </motion.div>
                                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 uppercase tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex-1 w-full order-1 lg:order-2 max-w-sm mx-auto lg:mx-0">
                                <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-3xl border border-white/5 bg-white/5 group">
                                    <Image
                                        src={item.image}
                                        alt={`${item.year} - ${item.title}`}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-transparent to-transparent opacity-60"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
