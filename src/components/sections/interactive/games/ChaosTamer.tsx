"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, MailWarning, Wrench, Bot } from "lucide-react";
import { useMetaGame } from "@/context/MetaGameContext";

type BoxItem = { id: number; x: number; y: number; rotate: number; type: number; color: string; isBad?: boolean; badType?: string; removed?: boolean };

const FORMATIONS = ['Grid', 'Pyramid', 'Circle', 'Tower', 'Wall'];

const BOX_STYLES = [
    { color: '#3b82f6', label: 'Fragile', gradient: 'from-blue-500/20 to-blue-600/40' },
    { color: '#10b981', label: 'Heavy', gradient: 'from-emerald-500/20 to-emerald-600/40' },
    { color: '#f59e0b', label: 'Hazmat', gradient: 'from-amber-500/20 to-amber-600/40' },
    { color: '#8b5cf6', label: 'Express', gradient: 'from-purple-500/20 to-purple-600/40' },
    { color: '#ef4444', label: 'Critical', gradient: 'from-red-500/20 to-red-600/40' },
];

function generateInitialBoxes(): BoxItem[] {
    return Array.from({ length: 15 }, (_, i) => {
        const isBad = i >= 12; // Last 3 items are bad
        return {
            id: i,
            x: Math.random() * 160 - 80,
            y: Math.random() * 160 - 80,
            rotate: Math.random() * 120 - 60,
            type: i % 5,
            color: isBad ? (i % 2 === 0 ? '#ef4444' : '#f97316') : BOX_STYLES[i % 5].color,
            isBad,
            badType: isBad ? (i % 2 === 0 ? 'tax' : 'broken') : undefined,
            removed: false
        };
    });
}

export default function ChaosTamer() {
    const [isSorted, setIsSorted] = useState(false);
    const [formation, setFormation] = useState<string>('Grid');
    const [initialBoxes, setInitialBoxes] = useState<BoxItem[]>([]);
    const [hasPenalty, setHasPenalty] = useState(false);
    const [showBonus, setShowBonus] = useState(false);
    const [showRobot, setShowRobot] = useState(false);
    const [actionText, setActionText] = useState<{ type: 'auto' | 'manual', id: number } | null>(null);

    const { addCoins } = useMetaGame();

    useEffect(() => { setInitialBoxes(generateInitialBoxes()); }, []);

    const handleSort = () => {
        setIsSorted(true);
        setActionText({ type: 'manual', id: Date.now() });
        setTimeout(() => setActionText(null), 2000);

        // If sorting manually without filtering bad items, trigger penalty
        if (initialBoxes.some(b => b.isBad && !b.removed)) {
            setHasPenalty(true);
            setTimeout(() => setHasPenalty(false), 1500);
        }
    };

    const handleDelegate = () => {
        setShowRobot(true);
        setActionText({ type: 'auto', id: Date.now() });
        setTimeout(() => setActionText(null), 2000);
        setTimeout(() => {
            setInitialBoxes(prev => prev.map(b => b.isBad ? { ...b, removed: true } : b));
            setFormation('Grid');
            setIsSorted(true);
            setShowBonus(true);
            addCoins(150);
            setTimeout(() => setShowBonus(false), 4000);
            setTimeout(() => setShowRobot(false), 500);
        }, 1200);
    };

    const resetFlow = () => {
        setIsSorted(false);
        setInitialBoxes(generateInitialBoxes());
    };

    const getFormationStyles = (i: number, removed?: boolean) => {
        if (removed) return { x: 0, y: -200, rotate: 360, scale: 0, opacity: 0 };
        if (!isSorted) return {
            x: initialBoxes[i]?.x || 0,
            y: initialBoxes[i]?.y || 0,
            rotate: initialBoxes[i]?.rotate || 0,
            scale: 1.2,
            opacity: 1
        };

        switch (formation) {
            case 'Grid':
                return { x: (i % 5) * 65 - 130, y: Math.floor(i / 5) * 65 - 65, rotate: 0, scale: 1, opacity: 1 };
            case 'Pyramid':
                const row = i < 5 ? 0 : i < 9 ? 1 : i < 12 ? 2 : i < 14 ? 3 : 4;
                const col = i < 5 ? i : i < 9 ? i - 5 : i < 12 ? i - 9 : i < 14 ? i - 12 : 0;
                const offset = row * 32.5;
                return { x: col * 65 - 130 + offset, y: row * 55 - 100, rotate: 0, scale: 1, opacity: 1 };
            case 'Circle':
                const angle = (i / 15) * Math.PI * 2;
                return { x: Math.cos(angle) * 130, y: Math.sin(angle) * 130, rotate: (angle * 180) / Math.PI, scale: 1.1, opacity: 1 };
            case 'Tower':
                return { x: 0, y: (14 - i) * 38 - 140, rotate: 0, scale: 1, opacity: 1 };
            case 'Wall':
                return { x: (i % 3) * 70 - 70, y: Math.floor(i / 3) * 55 - 110, rotate: 0, scale: 1.1, opacity: 1 };
            default:
                return { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 };
        }
    };

    return (
        <div className={`w-full min-h-[550px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl border border-white/10 flex flex-col items-center justify-center p-8 gap-12 overflow-hidden shadow-2xl relative transition-all ${hasPenalty ? 'animate-shake border-red-500/50 bg-red-950/20' : ''}`}>
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

            {/* Ambient glows */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />

            <div className="text-center z-10">
                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter italic drop-shadow-2xl">Укротитель Хаоса</h3>
                <p className="text-slate-400 text-sm max-w-sm font-medium tracking-wide">Система интеллектуального зонирования. Берегитесь штрафов!</p>
            </div>

            <AnimatePresence>
                {hasPenalty && (
                    <motion.div
                        key="penalty"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-32 z-30 bg-red-500/20 backdrop-blur-md border border-red-500/50 p-3 rounded-xl max-w-sm text-center"
                    >
                        <p className="text-red-400 font-bold text-sm">Вы загрузили штрафы и брак! Скорость фуры снижена.</p>
                    </motion.div>
                )}
                {showBonus && (
                    <motion.div
                        key="bonus"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-32 z-30 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/50 p-4 rounded-xl max-w-sm text-center shadow-[0_0_40px_rgba(16,185,129,0.3)]"
                    >
                        <p className="text-white font-medium text-sm">Идеальный порядок наведен роботом-диспетчером.</p>
                        <p className="text-emerald-400 font-black mt-2 text-lg">Бонус: Чистый аудит +150 LC</p>
                    </motion.div>
                )}
                {showRobot && (
                    <motion.div
                        key="robot"
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: [-300, 0, 300], opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute top-1/2 -translate-y-1/2 z-50 pointer-events-none"
                    >
                        <Bot className="w-24 h-24 text-indigo-400 drop-shadow-[0_0_30px_rgba(99,102,241,0.8)]" />
                    </motion.div>
                )}
                {actionText && (
                    <motion.div
                        key={`action-${actionText.id}`}
                        initial={{ opacity: 0, y: 50, scale: 0.5 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.5 }}
                        className={`absolute top-1/2 -translate-y-1/2 z-40 px-6 py-3 rounded-full font-black text-2xl uppercase tracking-widest border-4 shadow-2xl backdrop-blur-md pointer-events-none ${actionText.type === 'auto'
                                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.5)]'
                                : 'bg-amber-500/20 text-amber-500 border-amber-500 shadow-[0_0_50px_rgba(245,158,11,0.5)]'
                            }`}
                    >
                        {actionText.type === 'auto' ? 'Автоматизация!' : 'Ручной труд'}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative w-96 h-96 flex items-center justify-center">
                <AnimatePresence>
                    {initialBoxes.map((box, i) => (
                        <motion.div
                            key={box.id}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={getFormationStyles(i, box.removed)}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: isSorted ? 150 : 80,
                                damping: isSorted ? 20 : 12,
                                delay: isSorted ? i * 0.04 : i * 0.02
                            }}
                            className="absolute"
                        >
                            <div className={`relative p-4 rounded-2xl border-2 shadow-2xl bg-gradient-to-br transition-all duration-700 hover:scale-110 cursor-help ${box.isBad ? (box.badType === 'tax' ? 'from-red-600/40 to-red-800/60' : 'from-orange-600/40 to-orange-800/60') : BOX_STYLES[box.type].gradient}`} style={{ borderColor: box.color }}>
                                {box.isBad ? (
                                    box.badType === 'tax' ? <MailWarning className="w-10 h-10" style={{ color: box.color }} /> : <Wrench className="w-10 h-10" style={{ color: box.color }} />
                                ) : (
                                    <Box className="w-10 h-10" style={{ color: box.color }} />
                                )}
                                <motion.div
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]"
                                    style={{ backgroundColor: box.color, color: box.color }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="flex flex-col items-center gap-6 z-10 w-full max-w-md">
                <AnimatePresence>
                    {isSorted && (
                        <motion.div
                            key="formations"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            className="flex bg-black/60 p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl"
                        >
                            {FORMATIONS.map(f => (
                                <button
                                    key={f}
                                    onClick={() => setFormation(f)}
                                    className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${formation === f ? 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]' : 'text-slate-500 hover:text-slate-300'}`}
                                >
                                    {f}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex gap-4 w-full">
                    {!isSorted && (
                        <button
                            onClick={handleDelegate}
                            className={`flex-1 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all shadow-2xl border-b-4 active:border-b-0 active:translate-y-1 bg-emerald-600 border-emerald-800 text-white hover:bg-emerald-500 shadow-emerald-500/40 relative overflow-hidden group`}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <Bot className="w-5 h-5" /> Делегировать
                            </span>
                            <motion.div animate={{ x: ['100%', '-100%'] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </button>
                    )}

                    <button
                        onClick={isSorted ? resetFlow : handleSort}
                        className={`flex-1 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all shadow-2xl border-b-4 active:border-b-0 active:translate-y-1 relative overflow-hidden ${isSorted
                            ? "bg-slate-800 border-slate-950 text-slate-400 hover:bg-slate-700"
                            : "bg-indigo-600 border-indigo-800 text-white hover:bg-indigo-500 shadow-indigo-600/40"
                            }`}
                    >
                        <span className="relative z-10">{isSorted ? "Новая партия" : "Упорядочить самому"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
