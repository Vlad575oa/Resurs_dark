"use client";
import { useEffect, useState } from "react";
import { useMetaGame } from "@/context/MetaGameContext";
import { motion, AnimatePresence } from "framer-motion";
import { Coins, Gift, CheckCircle, ChevronUp, ChevronDown } from "lucide-react";

const REWARDS = [
    { threshold: 500, title: "Скидка 5%", description: "На первую перевозку" },
    { threshold: 1000, title: "Бесплатный юр. аудит", description: "Сайта или договора" },
    { threshold: 2000, title: "Чек-лист по ГСМ", description: "10 способов снизить затраты" }
];

export default function CoinWidget() {
    const { coins } = useMetaGame();
    const [isOpen, setIsOpen] = useState(false);
    const [prevCoins, setPrevCoins] = useState(coins);
    const [showFloat, setShowFloat] = useState(false);
    const [floatAmount, setFloatAmount] = useState(0);

    // Coin gain animation
    useEffect(() => {
        if (coins > prevCoins) {
            setFloatAmount(coins - prevCoins);
            setShowFloat(true);
            setTimeout(() => setShowFloat(false), 1500);
        }
        setPrevCoins(coins);
    }, [coins, prevCoins]);

    const nextReward = REWARDS.find(r => coins < r.threshold) || REWARDS[REWARDS.length - 1];
    const progress = Math.min((coins / nextReward.threshold) * 100, 100);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="mb-4 w-72 bg-slate-900 border border-slate-700/50 rounded-2xl p-5 shadow-2xl pointer-events-auto backdrop-blur-xl"
                    >
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                            <Gift className="w-5 h-5 text-emerald-400" />
                            Программа лояльности
                        </h4>

                        <div className="space-y-4">
                            {REWARDS.map((reward, i) => {
                                const isUnlocked = coins >= reward.threshold;
                                return (
                                    <div key={i} className={`relative p-3 rounded-xl border transition-all ${isUnlocked ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-white/5 border-white/5 opacity-60'}`}>
                                        <div className="flex justify-between items-start mb-1">
                                            <span className={`font-bold text-sm ${isUnlocked ? 'text-emerald-400' : 'text-slate-300'}`}>{reward.title}</span>
                                            {isUnlocked && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                                        </div>
                                        <p className="text-xs text-slate-400 mb-2">{reward.description}</p>
                                        <div className="flex justify-between text-[10px] font-black tracking-wider uppercase">
                                            <span className="text-slate-500">Цель</span>
                                            <span className={isUnlocked ? 'text-emerald-500' : 'text-amber-500'}>{reward.threshold} LC</span>
                                        </div>
                                        {/* Progress bar for ongoing */}
                                        {!isUnlocked && coins < reward.threshold && (nextReward === reward) && (
                                            <div className="mt-2 h-1 bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-amber-500 rounded-full" style={{ width: `${progress}%` }} />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-3 rounded-2xl shadow-xl flex items-center gap-3 pointer-events-auto group"
            >
                {/* Floating gain animation */}
                <AnimatePresence>
                    {showFloat && (
                        <motion.div
                            initial={{ opacity: 0, y: 0, scale: 0.5 }}
                            animate={{ opacity: 1, y: -40, scale: 1.2 }}
                            exit={{ opacity: 0, y: -60, scale: 1 }}
                            className="absolute left-0 right-0 -top-4 flex justify-center pointer-events-none"
                        >
                            <span className="text-emerald-400 font-black text-lg drop-shadow-md">+{floatAmount}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center border border-amber-500/30">
                    <Coins className="w-6 h-6 text-amber-500" />
                </div>

                <div className="flex flex-col items-start mr-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Баланс</span>
                    <span className="text-xl font-black text-white leading-none">{coins} <span className="text-sm text-amber-500">LC</span></span>
                </div>

                <div className="w-6 h-6 bg-white/5 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-white/10 group-hover:text-white transition-colors">
                    {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                </div>

                {/* Pulse ring for new users */}
                {coins === 0 && !isOpen && (
                    <div className="absolute inset-0 rounded-2xl border-2 border-amber-500/50 animate-ping opacity-50 pointer-events-none" />
                )}
            </motion.button>
        </div>
    );
}
