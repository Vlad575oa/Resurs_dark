"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Branch {
    name: string;
    address: string;
    phone: string;
}

export default function RegionalBranches({ dict }: { dict: any }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const branches = dict.regionalBranches;

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 border-b border-white/10">
                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                        {dict.regionalTitle}
                    </h2>
                    <p className="text-slate-500 text-sm">
                        {branches.length} подразделений в ключевых регионах
                    </p>
                </div>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all px-6 py-2 rounded-full border border-primary/20 bg-primary/5"
                >
                    {isExpanded ? dict.collapse : dict.expand}
                    <span className={`material-symbols-outlined transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        expand_more
                    </span>
                </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Always show first 3 branches */}
                {branches.slice(0, 3).map((branch: Branch, idx: number) => (
                    <BranchCard key={idx} branch={branch} />
                ))}

                {/* Expanded branches with animation */}
                <AnimatePresence>
                    {isExpanded && (
                        <>
                            {branches.slice(3).map((branch: Branch, idx: number) => (
                                <motion.div
                                    key={idx + 3}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3, delay: (idx % 3) * 0.1 }}
                                >
                                    <BranchCard branch={branch} />
                                </motion.div>
                            ))}
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

function BranchCard({ branch }: { branch: Branch }) {
    return (
        <div className="p-6 rounded-2xl bg-[#161b22]/50 border border-white/5 hover:border-primary/30 transition-all hover:shadow-[0_0_30px_rgba(37,106,244,0.1)] group">
            <h3 className="text-white font-bold mb-4 group-hover:text-primary transition-colors pr-8 relative">
                {branch.name}
                <span className="material-symbols-outlined absolute right-0 top-0 text-slate-700 text-sm">corporate_fare</span>
            </h3>
            <div className="space-y-3">
                <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-slate-600 text-sm mt-0.5 group-hover:text-primary/70 transition-colors">location_on</span>
                    <p className="text-slate-400 text-xs leading-relaxed">{branch.address}</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-600 text-sm group-hover:text-primary/70 transition-colors">call</span>
                    <p className="text-slate-400 text-xs">{branch.phone}</p>
                </div>
            </div>
        </div>
    );
}
