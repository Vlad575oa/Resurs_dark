"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Zap, Trophy, ShieldAlert, Crosshair, AlertTriangle, CircleDollarSign } from "lucide-react";
import { useMetaGame } from "@/context/MetaGameContext";

const PROBLEM_TYPES = [
    { icon: ShieldAlert, label: "Человеческий фактор", color: "text-red-500", funny: "Устраняем ошибки до их появления." },
    { icon: AlertTriangle, label: "Простой транспорта", color: "text-orange-500", funny: "Время — деньги. Запускаем флот." },
    { icon: Target, label: "Лишние налоги", color: "text-amber-500", funny: "Оптимизируем затраты легально и красиво." },
    { icon: Zap, label: "Кассовый разрыв", color: "text-rose-500", funny: "Прямое попадание в экономию!" },
];

export default function LogisticRange() {
    const [targets, setTargets] = useState<any[]>([]);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [lastHit, setLastHit] = useState<string | null>(null);
    const [visualCoins, setVisualCoins] = useState<any[]>([]);
    const [lastHitTime, setLastHitTime] = useState(0);
    const [comboCount, setComboCount] = useState(0);
    const [comboPopup, setComboPopup] = useState<{ show: boolean, count: number, id: number }>({ show: false, count: 0, id: 0 });

    const { addCoins } = useMetaGame();

    const startGame = () => {
        setIsActive(true);
        setScore(0);
        setTimer(20);
        setTargets([]);
        setVisualCoins([]);
        setLastHit(null);
    };

    useEffect(() => {
        if (isActive && timer > 0) {
            const t = setInterval(() => setTimer(prev => prev - 1), 1000);
            const s = setInterval(() => {
                const id = Date.now();
                const type = PROBLEM_TYPES[Math.floor(Math.random() * PROBLEM_TYPES.length)];
                setTargets(prev => [...prev, { id, x: Math.random() * 80 + 10, y: Math.random() * 80 + 10, type }]);
            }, 800);
            return () => { clearInterval(t); clearInterval(s); };
        } else if (timer <= 0) {
            setIsActive(false);
        }
    }, [isActive, timer]);

    const hitTarget = (id: number, funny: string, x: number, y: number) => {
        const now = Date.now();
        const dt = now - lastHitTime;

        let newComboCount = 1;
        if (dt < 600) {
            newComboCount = comboCount + 1;
        }
        setComboCount(newComboCount);
        setLastHitTime(now);

        let bonusLC = 0;
        let bonusScore = 0;
        if (newComboCount >= 3) {
            bonusLC = newComboCount * 5;
            bonusScore = newComboCount * 50;
            setComboPopup({ show: true, count: newComboCount, id: Date.now() });
            setTimeout(() => setComboPopup(prev => ({ ...prev, show: false })), 1500);
        }

        setTargets(prev => prev.filter(t => t.id !== id));
        setScore(s => s + 150 + bonusScore);
        setLastHit(funny);
        addCoins(10 + bonusLC); // award coins globally

        const coinId = Date.now();
        setVisualCoins(prev => [...prev, { id: coinId, x, y }]);
        setTimeout(() => setVisualCoins(prev => prev.filter(c => c.id !== coinId)), 1000);

        setTimeout(() => setLastHit(null), 1500);
    };

    return (
        <div className="relative w-full min-h-[500px] bg-gradient-to-br from-slate-950 via-red-950 to-slate-950 rounded-3xl border border-white/10 p-8 overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05)_0%,transparent_70%)]" />

            {lastHit && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-8 left-1/2 -translate-x-1/2 z-30 px-6 py-2 bg-red-600/20 backdrop-blur-md rounded-full border border-red-500/30 text-[10px] font-black text-white uppercase tracking-widest"
                >
                    {lastHit}
                </motion.div>
            )}

            <AnimatePresence>
                {comboPopup.show && (
                    <motion.div
                        key={`combo-${comboPopup.id}`}
                        initial={{ opacity: 0, scale: 0.5, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.5, y: -50 }}
                        className="absolute top-1/4 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                    >
                        <div className="text-center bg-red-900/80 px-8 py-4 rounded-3xl border-4 border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.8)] backdrop-blur-md">
                            <div className="text-3xl font-black text-rose-300 uppercase italic tracking-widest drop-shadow-[0_0_10px_rgba(251,113,133,0.8)]">
                                МАССОВАЯ ОПТИМИЗАЦИЯ!
                            </div>
                            <div className="text-xl font-bold text-white mt-1">
                                {comboPopup.count}x КОМБО (+{comboPopup.count * 5} LC)
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="grid lg:grid-cols-2 gap-12 relative z-10 h-full">
                <div className="flex flex-col justify-between">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Crosshair className="w-5 h-5 text-red-500 animate-spin-slow" />
                                <span className="text-[10px] uppercase font-black tracking-[0.4em] text-red-500">Combat Logistics Training</span>
                            </div>
                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">Логистический тир</h3>
                            <p className="text-slate-400 text-sm max-w-sm">Реакция — ключ к успеху. Поражай "срывы поставок" и "кассовые разрывы" до того, как они нанесут ущерб.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Time Remaining</span>
                                <div className={`text-2xl font-black font-mono ${timer < 5 ? 'text-red-500 animate-pulse' : 'text-white'}`}>{timer}S</div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Problems Solved</span>
                                <div className="text-2xl font-black text-white font-mono">{score}</div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={startGame}
                        disabled={isActive}
                        className="w-full mt-8 py-5 bg-red-600 hover:bg-red-500 disabled:bg-slate-800 text-white rounded-2xl font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(220,38,38,0.3)] border border-red-400/20"
                    >
                        <Zap className="w-5 h-5" /> {isActive ? 'В БОЮ...' : 'ОТКРЫТЬ ОГОНЬ ПО ПРОБЛЕМАМ'}
                    </button>
                </div>

                <div className={`relative bg-black/60 rounded-3xl border ${isActive ? 'border-red-500/40 cursor-crosshair' : 'border-white/5'} overflow-hidden min-h-[350px] shadow-inner`}>
                    <AnimatePresence>
                        {targets.map(t => (
                            <motion.div
                                key={t.id}
                                initial={{ scale: 0, opacity: 0, rotate: -45 }}
                                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                exit={{ scale: 0, opacity: 0, rotate: 45 }}
                                onClick={() => hitTarget(t.id, t.type.funny, t.x, t.y)}
                                className="absolute w-14 h-14 cursor-pointer flex items-center justify-center group/target"
                                style={{ left: `${t.x}%`, top: `${t.y}%`, transform: 'translate(-50%, -50%)' }}
                            >
                                <div className={`absolute inset-0 opacity-20 rounded-full blur-xl group-hover/target:opacity-40 transition-all ${t.type.color.replace('text-', 'bg-')}`} />
                                <t.type.icon className={`w-full h-full ${t.type.color} drop-shadow-[0_0_10px_currentColor] group-hover/target:scale-110 transition-transform`} />
                                <div className={`absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-white opacity-0 group-hover/target:opacity-100 uppercase px-2 py-0.5 rounded whitespace-nowrap bg-red-600`}>
                                    {t.type.label}
                                </div>
                            </motion.div>
                        ))}

                        {visualCoins.map(c => (
                            <motion.div
                                key={c.id}
                                initial={{ opacity: 1, y: 0, scale: 0.8 }}
                                animate={{ opacity: 0, y: -60, scale: 1.5 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="absolute z-20 pointer-events-none text-yellow-400 font-bold flex items-center gap-1 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]"
                                style={{ left: `${c.x}%`, top: `${c.y}%`, transform: 'translate(-50%, -50%)' }}
                            >
                                <CircleDollarSign className="w-5 h-5" />
                                <span className="text-xs">+10 LC</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {!isActive && score > 0 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-6">
                            <Trophy className="w-20 h-20 text-yellow-500" />
                            <div className="text-center">
                                <h4 className="text-2xl font-black text-white uppercase italic">ИТОГ: {score}</h4>
                                <p className="text-slate-400 text-[10px] font-bold mt-2 uppercase tracking-widest">Уровень дисциплины: Эксперт</p>
                            </div>
                        </motion.div>
                    )}

                    {!isActive && score === 0 && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 flex-col gap-4">
                            <ShieldAlert className="w-16 h-16 text-red-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-500">Wait for Clearance</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
