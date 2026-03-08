"use client";
import dynamic from "next/dynamic";

const AntiStressTruck = dynamic(() => import("./games/AntiStressTruck"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const ChaosTamer = dynamic(() => import("./games/ChaosTamer"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const RouteMap = dynamic(() => import("./games/RouteMap"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });

// New Games
// New Games
const AngryLoader = dynamic(() => import("./games/AngryLoader"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const SteroidTetris = dynamic(() => import("./games/SteroidTetris"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const TrafficController = dynamic(() => import("./games/TrafficController"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const MonsterTruckBuilder = dynamic(() => import("./games/MonsterTruckBuilder"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const CargoPaintball = dynamic(() => import("./games/CargoPaintball"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const WhereIsMyCargo = dynamic(() => import("./games/WhereIsMyCargo"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const LogisticRange = dynamic(() => import("./games/LogisticRange"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const MusicalMotor = dynamic(() => import("./games/MusicalMotor"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });

import { MetaGameProvider } from "@/context/MetaGameContext";
import CoinWidget from "./CoinWidget";

export default function InteractiveShowcase() {
    return (
        <MetaGameProvider>
            <div className="space-y-16 relative">
                <CoinWidget />
                <section id="home-transferred" className="pt-8 border-t border-white/5">
                    <h2 className="text-xl font-bold text-slate-500 uppercase tracking-[0.3em] mb-8">Базовые механики</h2>
                    <div className="space-y-12">
                        <AntiStressTruck />
                        <ChaosTamer />
                        <RouteMap />
                    </div>
                </section>

                <section id="new-games" className="pt-8 border-t border-white/5">
                    <h2 className="text-xl font-bold text-slate-500 uppercase tracking-[0.3em] mb-8">Новые испытания</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
                        <AngryLoader />
                        <SteroidTetris />
                        <TrafficController />
                        <MonsterTruckBuilder />
                        <CargoPaintball />
                        <WhereIsMyCargo />
                        <LogisticRange />
                        <MusicalMotor />
                    </div>
                </section>
            </div>
        </MetaGameProvider>
    );
}
