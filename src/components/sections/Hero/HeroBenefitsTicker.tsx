"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const BENEFITS = [
    "Снижение затрат до 30%",
    "Контроль ГСМ 24/7",
    "Аутсорсинг водителей",
    "Прозрачная аналитика",
    "Управление парком под ключ",
    "Мониторинг в реальном времени",
    "Оптимизация маршрутов",
    "Цифровая логистика",
];

const ITEMS = [...BENEFITS, ...BENEFITS];

export const HeroBenefitsTicker = () => {
    return (
        <div className="mt-8 overflow-hidden py-2 bg-transparent">
            <motion.div
                className="flex items-center gap-12 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 40,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {ITEMS.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary-main" />
                        <span className="text-sm font-semibold text-navy/70 tracking-tight">
                            {item}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
