"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Sparkles } from "lucide-react";

export default function StressButton() {
    const [state, setState] = useState<"old" | "breaking" | "new">("old");

    const handleClick = () => {
        if (state !== "old") return;
        setState("breaking");
        setTimeout(() => setState("new"), 1200);
    };

    return (
        <div className="w-full min-h-[360px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-slate-700 flex flex-col items-center justify-center p-8 gap-8">
            <div className="text-center">
                <h3 className="text-2xl font-black text-white mb-2">Стресс-кнопка</h3>
                <p className="text-slate-400 text-sm">Замените разбитую «газель» на новый фирменный тягач.</p>
            </div>

            <div className="relative h-32 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {state === "old" && (
                        <motion.div key="old" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.5, rotate: 15 }} className="text-orange-500">
                            <Truck className="w-28 h-28 opacity-60" strokeWidth={1} />
                            <div className="text-center text-xs text-orange-400 mt-1">Старый автопарк</div>
                        </motion.div>
                    )}
                    {state === "breaking" && (
                        <motion.div key="breaking"
                            animate={{ rotate: [0, -5, 10, -10, 5, 0], scale: [1, 1.1, 0.9, 1.1, 0] }}
                            transition={{ duration: 1.2 }}
                            className="text-red-500"
                        >
                            <Truck className="w-28 h-28" strokeWidth={1} />
                        </motion.div>
                    )}
                    {state === "new" && (
                        <motion.div key="new" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", bounce: 0.5 }} className="text-emerald-400 text-center">
                            <Truck className="w-28 h-28" strokeWidth={1.5} />
                            <div className="flex items-center gap-1 justify-center text-xs text-emerald-400 mt-1"><Sparkles className="w-3 h-3" /> Новый тягач. Аутсорсинг.</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {state !== "new" ? (
                <button onClick={handleClick} disabled={state === "breaking"}
                    className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/30 disabled:opacity-50 transition-all">
                    Заменить автопарк
                </button>
            ) : (
                <button onClick={() => setState("old")} className="text-sm text-slate-400 hover:text-white underline">Сбросить</button>
            )}
        </div>
    );
}
