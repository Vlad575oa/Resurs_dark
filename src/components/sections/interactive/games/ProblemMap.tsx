"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map, AlertTriangle, ShieldCheck, Route } from "lucide-react";

const PROBLEMS = [
    { id: 1, text: "ДТП", x: "20%", y: "30%", delay: 0 },
    { id: 2, text: "Штраф", x: "40%", y: "60%", delay: 0.2 },
    { id: 3, text: "Ремонт", x: "70%", y: "40%", delay: 0.5 },
    { id: 4, text: "Простой", x: "60%", y: "75%", delay: 0.8 },
    { id: 5, text: "Водитель заболел", x: "80%", y: "20%", delay: 1.1 },
];

export default function ProblemMap() {
    const [outsourced, setOutsourced] = useState(false);

    return (
        <div className="p-8 md:p-12 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 flex flex-col min-h-[460px] gap-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">Где сейчас ваши деньги?</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm">Свой автопарк — это сюрпризы на каждом маршруте. Нажмите кнопку, чтобы увидеть разницу.</p>
                </div>
                <button onClick={() => setOutsourced(o => !o)}
                    className={`px-6 py-3 rounded-full font-bold text-sm transition-all shadow-lg flex items-center gap-2 ${outsourced ? "bg-slate-800 text-white" : "bg-emerald-500 text-white shadow-emerald-500/30 hover:bg-emerald-400"}`}>
                    {outsourced ? "Показать проблемы" : "Передать аутсорсинг"}
                </button>
            </div>
            <div className="relative flex-1 bg-slate-200 dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-700 overflow-hidden min-h-[200px]">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#475569 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <Map className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-slate-400/10" />
                <AnimatePresence mode="wait">
                    {!outsourced ? (
                        <motion.div key="problems" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                            {PROBLEMS.map(p => (
                                <motion.div key={p.id} initial={{ scale: 0, opacity: 0 }} animate={{ scale: [1, 1.2, 1], opacity: 1 }}
                                    transition={{ scale: { repeat: Infinity, duration: 2, delay: p.delay }, opacity: { duration: 0.5, delay: p.delay } }}
                                    className="absolute flex flex-col items-center" style={{ left: p.x, top: p.y }}>
                                    <AlertTriangle className="w-5 h-5 text-red-500" />
                                    <span className="text-[9px] font-bold bg-white dark:bg-slate-900 text-red-500 px-1.5 py-0.5 rounded shadow mt-0.5 whitespace-nowrap">{p.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div key="solved" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="absolute inset-0 flex items-center justify-center">
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5, delay: 0.7 }} className="text-center">
                                <div className="bg-emerald-500/20 text-emerald-500 p-4 rounded-full inline-block mb-2">
                                    <ShieldCheck className="w-12 h-12" />
                                </div>
                                <div className="font-bold text-slate-700 dark:text-emerald-100">Полный контроль маршрута</div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
