"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Fuel, Train, ShoppingBag, Building2, Wheat, ShoppingCart, Droplet, Mountain, Banknote, Gem, Search, Phone } from "lucide-react";

const COMPANIES = [
    { name: "Лукойл", icon: Fuel },
    { name: "Газпром Нефть", icon: Droplet },
    { name: "РЖД", icon: Train },
    { name: "Магнит", icon: ShoppingBag },
    { name: "Сбербанк", icon: Building2 },
    { name: "X5 Retail Group", icon: ShoppingCart },
    { name: "Роснефть", icon: Wheat },
    { name: "Норильский никель", icon: Mountain },
    { name: "ВТБ", icon: Banknote },
    { name: "Северсталь", icon: Gem },
    { name: "Яндекс", icon: Search },
    { name: "МТС", icon: Phone },
];

// Duplicate list for seamless looping
const TICKER_ITEMS = [...COMPANIES, ...COMPANIES];

export const HeroTicker = () => {
    const trackRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full py-8 bg-transparent overflow-hidden select-none">
            {/* Static label above */}
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                Нам доверяют
            </p>

            {/* Scrolling strip */}
            <div className="relative overflow-hidden">
                <motion.div
                    ref={trackRef}
                    className="flex items-center whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 28,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {TICKER_ITEMS.map((company, i) => (
                        <span key={i} className="inline-flex items-center gap-3 mx-6">
                            <company.icon className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                            <span className="text-base font-semibold text-slate-300 hover:text-white transition-colors cursor-default">
                                {company.name}
                            </span>
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Static label below */}
            <p className="text-center text-xs font-semibold text-slate-400 mt-4 tracking-wide">
                Проверенные решения для лидеров рынка
            </p>
        </div>
    );
};
