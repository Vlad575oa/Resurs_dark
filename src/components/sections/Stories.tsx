"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STORIES = [
    {
        id: "01",
        quote: "«Технологии не заменяют людей. Они дают нам суперсилу видеть невидимое».",
        author: "Алексей С.",
        role: "Главный инженер, 12 лет в компании",
        bg: "bg-anthracite-core"
    },
    {
        id: "02",
        quote: "«Безопасность — это не инструкции, это культура. И мы строим её каждый день».",
        author: "Мария В.",
        role: "Директор по качеству",
        bg: "bg-olive-spruce-dark"
    },
    {
        id: "03",
        quote: "«Когда ты управляешь 10 000 машин, каждая секунда аналитики стоит миллионы».",
        author: "Дмитрий К.",
        role: "Руководитель цифровой трансформации",
        bg: "bg-burnt-terra"
    }
];

export const Stories = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    return (
        <section ref={containerRef} className="bg-anthracite-core text-cloud-dancer relative">
            {STORIES.map((story, i) => (
                <div key={i} className={`sticky top-0 h-screen flex flex-col justify-center px-6 md:px-24 ${story.bg} overflow-hidden`}>

                    {/* Background Overlay Effect */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="relative z-10 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-sm font-mono text-white/50 mb-8 uppercase tracking-widest"
                        >
                            Human Capital // story {story.id}
                        </motion.div>

                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-serif italic leading-tight mb-12"
                        >
                            {story.quote}
                        </motion.h3>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/20" />
                            <div>
                                <div className="font-bold text-lg">{story.author}</div>
                                <div className="text-white/60 text-sm">{story.role}</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            ))}
        </section>
    );
};
