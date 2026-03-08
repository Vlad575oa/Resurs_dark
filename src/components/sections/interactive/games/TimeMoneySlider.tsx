"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Truck, Rocket, Flame, Clock } from "lucide-react";

export default function TimeMoneySlider() {
    const [urgency, setUrgency] = useState(50);
    const price = 1000 + urgency * 40;
    const isRush = urgency > 80;
    const bg = urgency < 30 ? "from-emerald-900/40" : urgency < 70 ? "from-amber-900/40" : "from-red-900/40";
    const statusText = urgency < 30 ? "Не горит" : urgency < 70 ? "Стандартно" : "Нужно вчера!";

    return (
        <div className={`p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-br ${bg} to-slate-900 min-h-[380px] flex flex-col justify-between transition-colors duration-500`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Слайдер «Время — Деньги»</h3>
                    <p className="text-slate-400 text-sm">Выберите срочность — цена и скорость изменятся мгновенно.</p>
                </div>
                <div className="bg-slate-950/50 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/5 text-right">
                    <div className="text-xs text-slate-400 mb-1">Стоимость</div>
                    <div className="text-4xl font-black text-white tabular-nums">{price.toLocaleString("ru-RU")} ₽</div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-8 mt-8">
                <motion.div animate={{ x: isRush ? [0, -3, 3, 0] : 0, scale: isRush ? 1.2 : 1 }} transition={{ type: "spring", bounce: 0.5 }}>
                    {isRush ? (
                        <div className="relative">
                            <Rocket className="w-20 h-20 text-red-500 fill-red-500/20" />
                            <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 0.4 }} className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                                <Flame className="w-8 h-8 fill-orange-500 text-orange-500" />
                            </motion.div>
                        </div>
                    ) : (
                        <Truck className={`w-20 h-20 ${urgency < 30 ? "text-emerald-400" : "text-amber-400"}`} />
                    )}
                </motion.div>
                <div className="w-full max-w-xl">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                        <span className={urgency < 30 ? "text-emerald-400" : ""}>Спокойно</span>
                        <span className={isRush ? "text-red-400 animate-pulse" : ""}>{statusText}</span>
                        <span className={urgency > 80 ? "text-red-400" : ""}>Срочно</span>
                    </div>
                    <input type="range" min="0" max="100" value={urgency} onChange={e => setUrgency(+e.target.value)}
                        className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                        style={{ background: `linear-gradient(to right, ${urgency < 30 ? "#10b981" : urgency < 70 ? "#f59e0b" : "#ef4444"} ${urgency}%, #1e293b ${urgency}%)` }}
                    />
                </div>
            </div>
        </div>
    );
}
