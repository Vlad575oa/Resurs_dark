"use client";

import { Roboto } from "next/font/google";
import { Info, Truck, Search } from "lucide-react";

const roboto = Roboto({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "700"] });

export default function InteractiveCard() {
    const cards = [
        {
            id: 1,
            title: "ГАЗель Бизнес",
            payload: "1.5 т",
            volume: "9 м³",
            pallets: "4 паллеты",
            image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: 2,
            title: "ГАЗон NEXT",
            payload: "5.0 т",
            volume: "35 м³",
            pallets: "15 паллет",
            image: "https://images.unsplash.com/photo-1586191552066-d52cdda24ba5?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: 3,
            title: "КамАЗ 5490",
            payload: "20 т",
            volume: "82 м³",
            pallets: "33 паллеты",
            image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600"
        },
    ];

    return (
        <div className={`p-10 bg-slate-100 rounded-3xl relative ${roboto.className}`}>
            <div className="mb-10">
                <h3 className="text-3xl font-bold text-slate-800 tracking-tight">Interactive Card</h3>
                <p className="text-slate-500 mt-2 text-sm max-w-xl">3D Flip-эффект при наведении. Спереди фото, сзади детальные характеристики. Контрастные цветовые пары.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[1000px]">
                {cards.map((card) => (
                    <div key={card.id} className="relative h-[300px] w-full group cursor-pointer" style={{ perspective: "1000px" }}>

                        {/* Inner Flip Container */}
                        <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-2xl">

                            {/* Front Face */}
                            <div className="absolute inset-0 bg-white rounded-2xl [backface-visibility:hidden] overflow-hidden flex flex-col border border-slate-200">
                                <div className="h-2/3 w-full relative">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                        <h4 className="text-xl font-bold text-white">{card.title}</h4>
                                        <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                                            <Search className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="h-1/3 bg-white p-4 flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Грузоподъемность</span>
                                        <span className="text-lg font-bold text-slate-800">{card.payload}</span>
                                    </div>
                                    <Truck className="w-6 h-6 text-slate-300" />
                                </div>
                            </div>

                            {/* Back Face */}
                            <div className="absolute inset-0 bg-slate-800 rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 flex flex-col justify-center border border-slate-700 shadow-2xl">
                                <h4 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                                    <Info className="w-5 h-5 text-blue-400" /> Спецификация
                                </h4>

                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400">Модель</span>
                                        <span className="font-bold text-white">{card.title}</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400">Грузоподъемность</span>
                                        <span className="font-bold text-white">{card.payload}</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400">Объем кузова</span>
                                        <span className="font-bold text-white">{card.volume}</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400">Вместимость</span>
                                        <span className="font-bold text-white">{card.pallets}</span>
                                    </li>
                                </ul>

                                <button className="mt-8 w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                                    Выбрать транспорт
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
