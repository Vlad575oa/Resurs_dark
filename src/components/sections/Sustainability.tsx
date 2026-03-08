"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, ShieldCheck, QrCode } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";

const CARDS = [
    {
        title: "Цифровой паспорт (DPP)",
        desc: "Подтверждение прозрачности цепочек поставок через блокчейн-сертификацию.",
        icon: <QrCode className="w-6 h-6 text-white" />
    },
    {
        title: "Экологичность",
        desc: "Мы внедряем стандарты, которые берегут планету и ваши ресурсы.",
        icon: <Leaf className="w-6 h-6 text-white" />
    },
    {
        title: "Гарант стабильности",
        desc: "Безупречный контроль и прогнозирование рисков для вашего бизнеса.",
        icon: <ShieldCheck className="w-6 h-6 text-white" />
    }
];

export const Sustainability = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section
            id="sustainability"
            ref={containerRef}
            className="relative bg-olive-spruce-dark text-white"
        >
            {/* Texture Overlay */}
            <div className="fixed inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

            <div className="container mx-auto px-6 py-24 relative z-10">

                {/* Sticky Header */}
                <div className="sticky top-24 z-20 mb-16 md:mb-24 bg-olive-spruce-dark/80 backdrop-blur-md py-4 rounded-xl border border-white/5 shadow-2xl">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 mb-4">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-xs font-mono uppercase tracking-widest text-white/80">Guardian Design</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-4">
                            Безопасность как высшая ценность
                        </h2>
                        <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto">
                            Каждое решение «РесурсТранс» — это инвестиция в ваше спокойствие.
                        </p>
                    </div>
                </div>

                {/* Scroll Reveal Cards - Staggered Layout */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 gap-[30vh] pb-[20vh]">
                    {CARDS.map((card, i) => (
                        <Card key={i} card={card} index={i} total={CARDS.length} />
                    ))}
                </div>

                <div className="text-center pb-24">
                    <Button variant="secondary" className="border-white/20 hover:bg-white text-white hover:text-olive-spruce-dark">
                        Посмотреть отчет (ESG)
                    </Button>
                </div>
            </div>
        </section>
    );
};

const Card = ({ card, index, total }: { card: any, index: number, total: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className={`
                sticky top-[30vh] 
                glass-panel p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl
                flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12
                ${index % 2 === 0 ? 'ml-0 md:ml-12' : 'mr-0 md:mr-12 self-end'}
            `}
            style={{
                marginBottom: `${(total - index) * 20}px`,
                zIndex: index + 1
            }}
        >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-olive-spruce to-olive-spruce-dark flex items-center justify-center shadow-lg transform rotate-3">
                {card.icon}
            </div>
            <div>
                <h3 className="text-3xl font-serif mb-3 text-white">{card.title}</h3>
                <p className="text-white/60 font-light leading-relaxed text-lg max-w-md">{card.desc}</p>
            </div>
        </motion.div>
    );
};
