import type { Metadata } from "next";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: "Messages - FleetCorp Global",
    description: "Your communication center with FleetCorp Global.",
};

const Footer = dynamic(() => import("@/components/sections/fleetcorp/Footer"));

export default function MessagesPage() {
    return (
        <div className="bg-background-dark min-h-screen flex flex-col">
            <HeaderScroll />
            <main className="flex-grow pt-20 flex items-center justify-center">
                <div className="max-w-xl mx-auto px-6 text-center">
                    <div className="size-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 shadow-glow">
                        <span className="material-symbols-outlined text-5xl">forum</span>
                    </div>
                    <h1 className="text-4xl font-black text-white uppercase mb-6">Центр <span className="text-primary">Сообщений</span></h1>
                    <p className="text-slate-400 text-lg leading-relaxed mb-10">
                        Ваш персональный раздел для общения с нашими экспертами и получения уведомлений о состоянии вашего автопарка.
                        Сейчас мы работаем над обновлением этого функционала.
                    </p>
                    <div className="bg-[#161b22] border border-[#282e39] p-6 rounded-2xl flex items-center gap-4 text-left">
                        <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                            <span className="material-symbols-outlined text-xl">verified</span>
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm">Все системы работают</p>
                            <p className="text-slate-500 text-xs">Доступ к поддержке открыт в обычном режиме.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer locale="ru" />
        </div>
    );
}
