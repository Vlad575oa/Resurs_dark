"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, DollarSign } from "lucide-react";
import { useMetaGame } from "@/context/MetaGameContext";

export default function AntiStressTruck() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isJumping, setIsJumping] = useState(false);
    const [isDancing, setIsDancing] = useState(false);
    const [isBackflipping, setIsBackflipping] = useState(false);
    const [headlights, setHeadlights] = useState(false);
    const [burstKey, setBurstKey] = useState(0);
    const [confettiType, setConfettiType] = useState(0);
    const [isRusted, setIsRusted] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [smokeKey, setSmokeKey] = useState(0);

    // Combo State
    const [clickCount, setClickCount] = useState(0);
    const [comboMultiplier, setComboMultiplier] = useState(1);
    const [showComboPopup, setShowComboPopup] = useState(false);

    const { addCoins } = useMetaGame();
    const containerRef = useRef<HTMLDivElement>(null);
    const audioCtxRef = useRef<AudioContext | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const comboTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetInactivity = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (isRusted) {
            // Let click handle wake up if rusted
            return;
        }
        timeoutRef.current = setTimeout(() => {
            setIsRusted(true);
        }, 5000); // 5 seconds of inactivity
    }, [isRusted]);

    useEffect(() => {
        resetInactivity();
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (comboTimeoutRef.current) clearTimeout(comboTimeoutRef.current);
        };
    }, [resetInactivity]);

    const handleMouseMove = (e: React.MouseEvent) => {
        resetInactivity();
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
    };

    const playHonk = useCallback(() => {
        try {
            if (!audioCtxRef.current) audioCtxRef.current = new AudioContext();
            const ctx = audioCtxRef.current;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = "square";
            osc.frequency.setValueAtTime(220, ctx.currentTime);
            osc.frequency.setValueAtTime(180, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.3);
        } catch (_) { }
    }, []);

    const handleClick = () => {
        if (isRusted) {
            setIsRusted(false);
            setIsBackflipping(true);
            setSmokeKey(k => k + 1);
            addCoins(50);
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 4000);
            setTimeout(() => setIsBackflipping(false), 1000);
        } else {
            setIsJumping(true);
            setTimeout(() => setIsJumping(false), 500);
        }

        // Combo Logic
        setClickCount(prev => {
            const newCount = prev + 1;
            if (newCount > 5 && newCount % 5 === 0) {
                setComboMultiplier(m => {
                    const nextM = Math.min(m + 1, 5);
                    addCoins(10 * nextM);
                    return nextM;
                });
                setShowComboPopup(true);
                setTimeout(() => setShowComboPopup(false), 1500);
            }
            return newCount;
        });

        if (comboTimeoutRef.current) clearTimeout(comboTimeoutRef.current);
        comboTimeoutRef.current = setTimeout(() => {
            setClickCount(0);
            setComboMultiplier(1);
        }, 1200);

        playHonk();
        setConfettiType(Math.floor(Math.random() * 5));
        setBurstKey(k => k + 1);
        resetInactivity();
    };

    const triggerJump = () => {
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 500);
    };

    const triggerDance = () => {
        setIsDancing(true);
        setTimeout(() => setIsDancing(false), 2000);
    };

    const CONFETTI_STYLES = [
        { color: "#10b981", shape: "rounded-sm" }, // Standard Emerald
        { color: "#fbbf24", shape: "rounded-full" }, // Golden Circles
        { color: "#ef4444", shape: "rotate-45" }, // Red Diamonds
        { color: "#8b5cf6", shape: "w-1 h-4" }, // Purple Strips
        { color: "#06b6d4", shape: "rounded-lg" } // Cyan
    ];

    return (
        <div
            ref={containerRef}
            className="relative w-full min-h-[450px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-slate-700 flex flex-col items-center justify-center overflow-hidden p-8 cursor-pointer select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
            onMouseMove={handleMouseMove}
        >
            <div className="absolute top-8 text-center z-10 pointer-events-none">
                <h3 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tighter transition-all group-hover:scale-110">Анти-стресс КАМАЗ</h3>
                <p className="text-slate-400 text-sm max-w-sm font-medium">Кликните на тягач, чтобы посигналить. Не дайте ему заржаветь!</p>
            </div>

            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        key="rust-popup"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-24 z-30 bg-slate-900/80 backdrop-blur-md border border-emerald-500/50 p-4 rounded-xl max-w-sm text-center shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                    >
                        <p className="text-white font-medium text-sm">«Ваш транспорт должен работать на вас, а не стоять без дела. Запустим движение?»</p>
                        <p className="text-emerald-400 font-bold mt-2 text-sm">+50 LC</p>
                    </motion.div>
                )}
                {clickCount > 2 && (
                    <motion.div
                        key="combo-counter"
                        initial={{ scale: 0, opacity: 0, x: 20 }}
                        animate={{ scale: [1.5, 1], opacity: 1, x: 0 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute top-10 right-10 z-40 origin-right pointer-events-none"
                    >
                        <div className="text-5xl font-black text-rose-500 italic drop-shadow-[0_0_20px_rgba(225,29,72,0.8)]">
                            {clickCount}x
                        </div>
                        <div className="text-xs font-bold text-rose-300 uppercase tracking-widest text-right">Combo</div>
                    </motion.div>
                )}
                {showComboPopup && (
                    <motion.div
                        key="combo-popup"
                        initial={{ y: 50, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: -50, opacity: 0, scale: 0.8 }}
                        className="absolute bottom-24 z-50 bg-rose-600/90 text-white px-6 py-3 rounded-full font-black tracking-widest uppercase border-2 border-rose-400 shadow-[0_0_40px_rgba(225,29,72,0.6)] pointer-events-none"
                    >
                        Ускоренная амортизация! x{comboMultiplier} Бонус
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Confetti burst */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={`${burstKey}-${i}`}
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                    animate={burstKey > 0 ? {
                        opacity: [1, 1, 0],
                        x: Math.cos((i / 20) * Math.PI * 2) * (150 + Math.random() * 100),
                        y: Math.sin((i / 20) * Math.PI * 2) * (150 + Math.random() * 100),
                        scale: [0, 1.5, 0],
                        rotate: Math.random() * 720,
                    } : {}}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className={`absolute w-3 h-3 ${CONFETTI_STYLES[confettiType].shape}`}
                    style={{ backgroundColor: CONFETTI_STYLES[confettiType].color }}
                />
            ))}

            {/* Truck Container */}
            <motion.div
                animate={isDancing
                    ? { rotate: [0, -5, 5, -5, 5, 0], y: [0, -20, 0, -20, 0] }
                    : isBackflipping
                        ? { rotate: [0, -360], y: [0, -150, 0], scale: [1, 1.2, 1] }
                        : isJumping
                            ? { y: [0, -120, 0], rotate: [0, 10, -10, 0], scale: [1, 1.2, 0.9, 1] }
                            : {
                                x: (mousePos.x * 100) + (isHovered && !isRusted ? 0 : -400),
                                y: mousePos.y * 50,
                                rotate: mousePos.x * 20
                            }
                }
                transition={
                    isDancing
                        ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        : isBackflipping
                            ? { duration: 1, ease: "easeInOut" }
                            : isJumping
                                ? { duration: 0.5, ease: "circOut" }
                                : { type: "spring", stiffness: 100, damping: 15 }
                }
                className="relative flex items-center justify-center group"
                onClick={handleClick}
            >
                {/* Dollar Smoke */}
                <AnimatePresence>
                    {smokeKey > 0 && isBackflipping && (
                        <motion.div
                            key={smokeKey}
                            initial={{ opacity: 0, y: 0, scale: 0.5 }}
                            animate={{ opacity: [0, 1, 0], y: [-20, -150], scale: [0.5, 2] }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute -top-10 text-emerald-400 font-bold z-50 flex"
                        >
                            <DollarSign className="w-16 h-16 drop-shadow-lg" />
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="relative">
                    <Truck className={`w-40 h-40 transition-all duration-1000 ${isRusted ? 'text-orange-950/80 grayscale sepia contrast-150' : headlights ? 'text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]' : 'text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]'} ${!isRusted && 'hover:scale-110'}`} />

                    {/* Headlights effect */}
                    {headlights && (
                        <>
                            <div className="absolute top-1/2 -right-12 w-48 h-24 bg-gradient-to-r from-yellow-400/40 to-transparent blur-2xl rounded-full animate-pulse" />
                            <div className="absolute top-[45%] -right-4 w-4 h-4 bg-white rounded-full blur-sm" />
                        </>
                    )}
                </div>
            </motion.div>

            {/* Control Panel */}
            <div className="absolute bottom-8 flex gap-3 z-20">
                <button
                    onClick={(e) => { e.stopPropagation(); setHeadlights(!headlights); }}
                    className={`px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all border ${headlights ? 'bg-yellow-500 border-yellow-400 text-black shadow-lg' : 'bg-white/5 border-white/10 text-slate-400'}`}
                >
                    Фары: {headlights ? 'ВКЛ' : 'ВЫКЛ'}
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); triggerJump(); }}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-[10px] uppercase tracking-widest text-slate-400 transition-all hover:text-white"
                >
                    Прыжок
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); triggerDance(); }}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-[10px] uppercase tracking-widest text-slate-400 transition-all hover:text-white"
                >
                    Танец
                </button>
            </div>

            {/* Global flash on honk */}
            <motion.div
                key={burstKey}
                initial={{ opacity: 0 }}
                animate={burstKey > 0 ? { opacity: [0, 0.15, 0] } : {}}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white pointer-events-none rounded-3xl"
            />
        </div>
    );
}
