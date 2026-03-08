"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Circle, Star, Zap, Disc, Target, Trophy, Truck, Palette } from "lucide-react";
import { useMetaGame } from "@/context/MetaGameContext";

export default function CargoPaintball() {
    const [balls, setBalls] = useState<any[]>([]);
    const [score, setScore] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [isShake, setIsShake] = useState(false);
    const [showBrandingMsg, setShowBrandingMsg] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [lastHitTime, setLastHitTime] = useState(0);
    const [chainCount, setChainCount] = useState(0);
    const [chainPopup, setChainPopup] = useState<{ show: boolean, count: number, id: number }>({ show: false, count: 0, id: 0 });

    const { addCoins } = useMetaGame();
    const [projectiles, setProjectiles] = useState<any[]>([]);
    const [splashes, setSplashes] = useState<any[]>([]);

    const spawnBall = () => {
        const id = Date.now();
        // 20% chance for a golden (multiplier) cargo
        const isSpecial = Math.random() > 0.8;
        setBalls(prev => [...prev, {
            id,
            x: Math.random() * 80 + 10,
            y: -10,
            v: 1.5 + Math.random() * 2,
            isSpecial,
            isBranded: false
        }]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setBalls(prev => prev.map(b => ({ ...b, y: b.y + b.v }))
                .filter(b => b.y < 110));
            setProjectiles(prev => prev.map(p => ({ ...p, y: p.y - 15 }))
                .filter(p => p.y > -20));
        }, 20);
        return () => clearInterval(interval);
    }, []);

    const catchBall = (id: number, isSpecial: boolean, x: number, y: number) => {
        const now = Date.now();
        const dt = now - lastHitTime;

        let newChainCount = 1;
        if (dt < 800) {
            newChainCount = chainCount + 1;
        }
        setChainCount(newChainCount);
        setLastHitTime(now);

        // Add projectile
        const projId = Date.now();
        setProjectiles(prev => [...prev, { id: projId, x, y: 100 }]);

        setTimeout(() => {
            // Set branded state and visual effects
            setBalls(prev => prev.map(b => b.id === id ? { ...b, isBranded: true, v: -0.5 } : b));
            setSplashes(prev => [...prev, { id: Date.now(), x, y, isSpecial }]);

            setShowBrandingMsg(true);
            setTimeout(() => setShowBrandingMsg(false), 2000);

            setTimeout(() => setSplashes(prev => prev.slice(1)), 1000);

            setTimeout(() => {
                setBalls(prev => prev.filter(b => b.id !== id));

                let chainBonusCoins = 0;
                if (newChainCount >= 3) {
                    chainBonusCoins = newChainCount * 20;
                    setChainPopup({ show: true, count: newChainCount, id: Date.now() });
                    setTimeout(() => setChainPopup(prev => ({ ...prev, show: false })), 1500);
                }

                if (isSpecial) {
                    setMultiplier(m => Math.min(m + 1, 10));
                    setScore(s => s + (150 * multiplier));
                    addCoins(25 + chainBonusCoins);
                    setIsShake(true);
                    setTimeout(() => setIsShake(false), 300);
                } else {
                    setScore(s => s + (50 * multiplier));
                    addCoins(10 + chainBonusCoins);
                }
            }, 600);
        }, 150);
    };

    return (
        <div className={`relative w-full min-h-[500px] bg-gradient-to-br from-[#0c0c0c] via-[#1a1a2e] to-[#0c0c0c] rounded-3xl border border-white/10 p-8 overflow-hidden transition-transform duration-75 ${isShake ? 'scale-[1.02] translate-y-1' : ''}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.05)_0%,transparent_70%)]" />

            {/* Multiplier Glow Effect */}
            <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none bg-pink-500/5`} style={{ opacity: multiplier > 1 ? (multiplier / 10) : 0 }} />

            <div className="grid lg:grid-cols-2 gap-12 relative z-10 h-full">
                <div className="space-y-8 flex flex-col justify-between">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Palette className="w-5 h-5 text-emerald-500 animate-spin-slow" />
                            <span className="text-[10px] uppercase font-black tracking-[0.4em] text-emerald-500">Fleet Rebranding v2.1</span>
                        </div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">Брендирование Автопарка</h3>
                        <p className="text-slate-400 text-sm max-w-sm font-medium">Отстреливайте корпоративными цветами серые грузовики, делая их частью нашего флота.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1 p-5 bg-white/5 rounded-2xl border border-white/10 shadow-2xl">
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Balance</span>
                                <div className="text-3xl font-black text-white font-mono tracking-tighter italic">
                                    {score.toLocaleString()}<span className="text-pink-500 text-xs ml-1 font-bold">₽</span>
                                </div>
                            </div>
                            <div className={`flex flex-col gap-1 p-5 rounded-2xl border transition-all duration-500 ${multiplier > 1 ? 'bg-pink-500/20 border-pink-500/50' : 'bg-white/5 border-white/10'}`}>
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Multiplier</span>
                                <div className={`text-3xl font-black font-mono tracking-tighter italic ${multiplier > 1 ? 'text-pink-400' : 'text-slate-500'}`}>
                                    x{multiplier}
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={spawnBall}
                            className="group relative w-full py-5 overflow-hidden rounded-2xl font-black text-sm uppercase tracking-[0.3em] transition-all border border-emerald-400/20 shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-emerald-600 group-hover:bg-emerald-500 transition-colors" />
                            <div className="relative flex items-center justify-center gap-3 text-white">
                                <Palette className="w-5 h-5 group-hover:scale-125 transition-transform" />
                                ВЫПУСТИТЬ ТРАНСПОРТ
                            </div>
                        </button>
                    </div>
                </div>

                <div
                    ref={containerRef}
                    className="relative bg-black/60 rounded-3xl border border-pink-500/20 overflow-hidden min-h-[400px] shadow-2xl backdrop-blur-sm"
                >
                    {/* Visual decor */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

                    <AnimatePresence>
                        {showBrandingMsg && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, x: '-50%' }}
                                animate={{ opacity: 1, y: 0, x: '-50%' }}
                                exit={{ opacity: 0, y: -20, x: '-50%' }}
                                className="absolute top-[40%] left-1/2 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 text-center z-50 pointer-events-none"
                            >
                                <p className="text-white font-black uppercase text-sm tracking-widest leading-relaxed">Освежим подход</p>
                                <p className="text-emerald-400 text-xs mt-1 font-bold">С нами бизнес выглядит ярко</p>
                            </motion.div>
                        )}

                        {chainPopup.show && (
                            <motion.div
                                key={`chain-${chainPopup.id}`}
                                initial={{ opacity: 0, scale: 0.5, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.5, y: -30 }}
                                className="absolute top-1/4 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                            >
                                <div className="text-center bg-pink-900/80 px-8 py-4 rounded-3xl border-4 border-pink-400 shadow-[0_0_50px_rgba(236,72,153,0.8)] backdrop-blur-md">
                                    <div className="text-3xl font-black text-pink-300 uppercase italic tracking-widest drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]">
                                        ЦЕПНАЯ РЕАКЦИЯ!
                                    </div>
                                    <div className="text-xl font-bold text-white mt-1">
                                        {chainPopup.count}x Удары (+{chainPopup.count * 20} LC)
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {balls.map(ball => (
                            <motion.div
                                key={ball.id}
                                onClick={() => !ball.isBranded && catchBall(ball.id, ball.isSpecial || false, ball.x, ball.y)}
                                className={`absolute w-14 h-14 rounded-2xl ${!ball.isBranded ? 'cursor-pointer hover:border-emerald-500' : ''} flex items-center justify-center border-2 shadow-2xl group/ball z-20 overflow-hidden`}
                                style={{
                                    left: `${ball.x}%`,
                                    top: `${ball.y}%`,
                                    background: ball.isBranded
                                        ? (ball.isSpecial ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : 'linear-gradient(135deg, #10b981 0%, #047857 100%)')
                                        : 'linear-gradient(135deg, #64748b 0%, #334155 100%)',
                                    borderColor: ball.isBranded ? (ball.isSpecial ? '#fbbf24' : '#34d399') : 'rgba(255,255,255,0.2)'
                                }}
                                initial={{ scale: 0, rotate: -15 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 15, opacity: 0 }}
                                whileHover={{ scale: ball.isBranded ? 1 : 1.1, rotate: ball.isBranded ? 0 : 5 }}
                            >
                                {ball.isSpecial && !ball.isBranded ? (
                                    <Truck className="w-7 h-7 text-slate-300 animate-pulse" />
                                ) : (
                                    <Truck className={`w-7 h-7 relative z-10 transition-colors ${ball.isBranded ? 'text-white' : 'text-slate-400 group-hover/ball:text-slate-300'}`} />
                                )}

                                {/* Trail effect */}
                                <div className={`absolute -top-4 w-1 h-8 rounded-full blur-sm opacity-20 ${ball.isBranded ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                            </motion.div>
                        ))}

                        {projectiles.map(p => (
                            <motion.div
                                key={p.id}
                                className="absolute w-2 h-6 bg-pink-400 rounded-full blur-[2px] z-10"
                                style={{ left: `${p.x + 5}%`, top: `${p.y}%` }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            />
                        ))}

                        {splashes.map(s => (
                            <motion.div
                                key={s.id}
                                className={`absolute w-24 h-24 rounded-full blur-2xl z-0 ${s.isSpecial ? 'bg-amber-500/40' : 'bg-emerald-500/40'}`}
                                style={{ left: `${s.x - 5}%`, top: `${s.y - 5}%` }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1.5, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        ))}
                    </AnimatePresence>

                    {balls.length === 0 && (score === 0 ? (
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 flex-col gap-4">
                            <Star className="w-16 h-16 text-pink-500 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-pink-500">System Ready</span>
                        </div>
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center opacity-40 flex-col gap-2">
                            <Trophy className="w-12 h-12 text-pink-400" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-white">Well Played</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
