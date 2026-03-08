"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, AlertTriangle, Clock, Zap, Star } from "lucide-react";
import { useMetaGame } from "@/context/MetaGameContext";

const ROUTES = [
    { id: 'mars', name: 'На Марс', icon: '🚀', color: 'from-orange-600 to-red-900', success: 'Колония снабжена! 🔴', funny: "Инопланетяне в шоке от вашей пунктуальности." },
    { id: 'beer', name: 'За пивом', icon: '🍺', color: 'from-amber-400 to-amber-700', success: 'Пятница спасена! 🍻', funny: "Очередь расступилась, пропуская легенду." },
    { id: 'vacation', name: 'В отпуск', icon: '🏖️', color: 'from-cyan-400 to-blue-600', success: 'Чемоданы на пляже! ☀️', funny: "Шезлонги уже ждут, а дедлайн — нет." },
    { id: 'base', name: 'На базу', icon: '🏠', color: 'from-slate-600 to-slate-900', success: 'В гостях хорошо, а дома лучше! 🚛', funny: "Запах свежего кофе и парковка в один прием." },
    { id: 'secret', name: 'Сверхсекретно', icon: '🕵️', color: 'from-purple-900 to-black', success: 'Объект доставлен. Личность стерта. 🤫', funny: "Даже вы не знаете, что именно привезли." },
];

const OBSTACLES = [
    { pos: 35, label: "Пробка", penalty: 2 },
    { pos: 75, label: "Ремонт", penalty: 1 }
];

export default function RouteMap() {
    const [progress, setProgress] = useState(0);
    const [selectedRoute, setSelectedRoute] = useState(ROUTES[0]);
    const [done, setDone] = useState(false);
    const [burstKey, setBurstKey] = useState(0);
    const [penalties, setPenalties] = useState(0);
    const [hitObstacles, setHitObstacles] = useState<number[]>([]);
    const [lastTime, setLastTime] = useState(Date.now());
    const [speedBonus, setSpeedBonus] = useState(false);
    const [goldenNodePos, setGoldenNodePos] = useState<number | null>(null);
    const [goldenNodeHit, setGoldenNodeHit] = useState(false);

    useEffect(() => {
        setGoldenNodePos(Math.random() > 0.3 ? Math.floor(Math.random() * 60) + 20 : null);
    }, []);

    const { addCoins } = useMetaGame();

    const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        const now = Date.now();
        const dt = now - lastTime;
        const dist = Math.abs(val - progress);

        if (dist > 5 && dt < 100 && !speedBonus && val > 0 && val < 100) {
            setSpeedBonus(true);
            addCoins(10);
            setTimeout(() => setSpeedBonus(false), 2000);
        }
        setLastTime(now);

        if (goldenNodePos !== null && Math.abs(val - goldenNodePos) < 5 && !goldenNodeHit) {
            setGoldenNodeHit(true);
            addCoins(50);
        }

        setProgress(val);

        const newHits = [...hitObstacles];
        let addedPenalty = 0;
        OBSTACLES.forEach((obs, i) => {
            if (val >= obs.pos && !newHits.includes(i)) {
                addedPenalty += obs.penalty;
                newHits.push(i);
            }
        });

        if (addedPenalty > 0) {
            setPenalties(prev => prev + addedPenalty);
            setHitObstacles(newHits);
        }

        if (val >= 100 && !done) {
            setDone(true);
            setBurstKey(prev => prev + 1);
            addCoins(100);
        }
    };

    const reset = () => {
        setProgress(0); setDone(false); setPenalties(0); setHitObstacles([]);
        setSpeedBonus(false); setGoldenNodeHit(false);
        setGoldenNodePos(Math.random() > 0.3 ? Math.floor(Math.random() * 60) + 20 : null);
    };

    return (
        <div className={`w-full min-h-[400px] bg-gradient-to-br ${selectedRoute.color} rounded-3xl border border-white/10 flex flex-col items-center justify-center p-8 gap-8 transition-all duration-1000 overflow-hidden relative group`}>
            {/* Confetti Particles */}
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={`${burstKey}-${i}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={done ? {
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0.5],
                        x: [0, (i % 2 === 0 ? 1 : -1) * (Math.random() * 400 + 100)],
                        y: [0, (Math.random() * -400 - 100)],
                        rotate: Math.random() * 360,
                    } : {}}
                    transition={{ duration: 2, ease: "easeOut", delay: i * 0.02 }}
                    className="absolute w-2 h-2 rounded-full z-20"
                    style={{ backgroundColor: i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#ffffff' : '#60a5fa' }}
                />
            ))}

            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-50" />

            <div className="text-center z-10 space-y-2">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic drop-shadow-lg">Интерактивный Маршрут</h3>
                <div className="flex gap-2 justify-center">
                    {ROUTES.map(r => (
                        <button
                            key={r.id}
                            onClick={() => { setSelectedRoute(r); reset(); }}
                            className={`px-3 py-1 rounded-full text-[9px] font-black uppercase transition-all border ${selectedRoute.id === r.id ? 'bg-white text-black border-white' : 'bg-black/40 text-white/60 border-white/10 hover:bg-black/60'}`}
                        >
                            {r.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Map strip */}
            <div className="relative w-full max-w-xl h-24 bg-black/40 rounded-3xl overflow-hidden border border-white/10 flex items-center px-8 z-10 shadow-2xl">
                {/* Road nodes & obstacles */}
                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-0.5 bg-white/10 flex items-center">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className={`absolute w-2 h-2 rounded-full border-2 border-white/20 -translate-y-1/2 ${i * 20 <= progress ? 'bg-white shadow-[0_0_10px_white]' : 'bg-transparent'}`} style={{ left: `${i * 20}%`, top: '50%' }} />
                    ))}

                    {OBSTACLES.map((obs, i) => (
                        <div key={`obs-${i}`} className="absolute top-1/2 -translate-y-1/2 z-10 -ml-3" style={{ left: `${obs.pos}%` }}>
                            <div className={`w-6 h-6 rounded-full flex flex-col items-center justify-center transition-all ${hitObstacles.includes(i) ? 'bg-red-500/20 text-red-500 scale-125' : 'bg-orange-500/20 text-orange-400'}`}>
                                {obs.label === "Пробка" ? <Clock className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                            </div>
                            <div className={`absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] uppercase font-bold transition-colors ${hitObstacles.includes(i) ? 'text-red-400' : 'text-slate-400'}`}>
                                {obs.label} <br /><span className="text-[10px]">+ {obs.penalty}ч</span>
                            </div>
                        </div>
                    ))}

                    {goldenNodePos !== null && (
                        <div className="absolute top-1/2 -translate-y-1/2 z-10 -ml-4" style={{ left: `${goldenNodePos}%` }}>
                            <div className={`w-8 h-8 rounded-full flex flex-col items-center justify-center transition-all ${goldenNodeHit ? 'bg-yellow-500/50 scale-150 opacity-0 blur-md' : 'bg-yellow-500/20 animate-pulse text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)] border border-yellow-400/50'}`}>
                                <Star className="w-4 h-4 fill-yellow-400" />
                            </div>
                            {!goldenNodeHit && (
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] uppercase font-bold text-yellow-400 animate-bounce">
                                    Золотой<br />Контракт
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Progress line */}
                <motion.div
                    className="absolute h-1 bg-white shadow-[0_0_15px_white] rounded-full left-8 top-1/2 -translate-y-1/2"
                    style={{ width: `calc((100% - 4rem) * ${progress / 100})` }}
                />

                {/* Truck icon */}
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 z-20"
                    style={{ left: `calc(1.5rem + (100% - 5rem) * ${progress / 100})` }}
                    animate={done ? { rotate: [0, -10, 10, 0], scale: [1, 1.2, 1] } : {}}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <div className="relative">
                        <Truck className={`w-10 h-10 drop-shadow-2xl transition-colors ${done ? "text-yellow-400" : "text-white"}`} />
                        {done && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute -top-4 -right-4 text-2xl">🎉</motion.div>}
                    </div>
                </motion.div>

                {/* Destination icon */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-2xl border border-white/10 group-hover:scale-110 transition-transform">
                    {selectedRoute.icon}
                </div>

                <AnimatePresence>
                    {speedBonus && (
                        <motion.div
                            initial={{ y: 20, opacity: 0, scale: 0.5 }}
                            animate={{ y: -40, opacity: 1, scale: 1 }}
                            exit={{ y: -60, opacity: 0, scale: 1.5 }}
                            className="absolute left-1/2 top-0 -translate-x-1/2 z-30 pointer-events-none text-emerald-400 font-black text-xl italic uppercase tracking-widest drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]"
                        >
                            Бонус времени! 🔥
                        </motion.div>
                    )}
                    {goldenNodeHit && progress < 100 && (
                        <motion.div
                            initial={{ y: 20, opacity: 0, scale: 0.5 }}
                            animate={{ y: -60, opacity: 1, scale: 1.2 }}
                            exit={{ opacity: 0 }}
                            className="absolute left-1/2 top-4 -translate-x-1/2 z-30 pointer-events-none text-yellow-400 font-black text-2xl uppercase tracking-widest shadow-[0_0_40px_rgba(250,204,21,0.6)] bg-black/60 px-4 py-1 rounded-full border border-yellow-500/50 backdrop-blur-md"
                        >
                            VIP Контракт Взят! +50 LC 💰
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="w-full max-w-xl z-20">
                {done ? (
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center bg-white/10 backdrop-blur-3xl p-8 rounded-3xl border border-white/20 shadow-2xl relative">
                        <motion.div animate={{ rotate: [0, -5, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-white text-3xl font-black mb-2 uppercase tracking-tighter">
                            {selectedRoute.success}
                        </motion.div>
                        <p className="text-white/70 text-sm font-medium italic mb-2">{selectedRoute.funny}</p>

                        <div className="flex gap-4 justify-center mt-6 mb-6">
                            <div className="bg-red-950/40 p-4 rounded-xl border border-red-500/20 flex flex-col flex-1">
                                <p className="text-slate-400 text-xs uppercase mb-1 tracking-widest">Свой маршрут</p>
                                <p className="text-white text-2xl font-bold">{4 + penalties} <span className="text-sm">часов</span></p>
                                <p className="text-red-400 text-[10px] mt-1 italic">Собрали все пробки</p>
                            </div>
                            <div className="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/20 flex flex-col flex-1 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600" />
                                <p className="text-slate-400 text-xs uppercase mb-1 tracking-widest mt-1">Pro Path (Ресурс)</p>
                                <p className="text-emerald-400 text-2xl font-bold flex items-center justify-center gap-1">4 <span className="text-sm">часа</span> <Zap className="w-5 h-5 text-yellow-400" /></p>
                                <p className="text-emerald-300 text-[10px] mt-1 font-bold">+100 LC Бонус</p>
                            </div>
                        </div>

                        <button
                            onClick={reset}
                            className="px-10 py-3 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all hover:scale-105 active:scale-95"
                        >
                            Запустить заново
                        </button>
                    </motion.div>
                ) : (
                    <div className="space-y-4">
                        <input
                            type="range" min="0" max="100" value={progress}
                            onChange={handleSlider}
                            className="w-full h-2 accent-white cursor-pointer bg-white/10 rounded-full appearance-none"
                        />
                        <div className="flex justify-between text-[8px] font-black text-white/40 uppercase tracking-[0.3em]">
                            <span>Старт</span>
                            <span>{progress}% пройден</span>
                            <span>{selectedRoute.name}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
