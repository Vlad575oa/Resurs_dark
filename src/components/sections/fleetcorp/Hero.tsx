"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({ dict }: { dict: any }) {
  return (
    <section className="flex-grow relative flex flex-col justify-center min-h-screen pt-20">
      {/* Background Image - ATF с приоритетом */}
      <div
        className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJBK94MihqMW1wwl5gGFOEFRUYX789hlz5YTWsMV5vacSEN3rwXy5beuBGQ_5JmymV5SVu311nqqqKxPQIj4YV-kMmLGiTJn2JkkzOMS6YOtAgD-CaygFvvkPru2xtUghKbcWwSgAb-wjBVFMG3snB4YaPf2BqwGJHyf48sXZlHYY4FfbFgJxwrddv-uMET-1NqXjjyrqUDuRu9_1xa05AM2L5UlRECj5jVRs2CN0br_JHmsnoxgLQkt0G7sDhtxYcC5qbNDVSM6E")`,
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-[#0a0e1a]/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-20 py-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-12 bg-primary shadow-[0_0_10px_#256af4]"></span>
              <span className="text-primary font-bold uppercase tracking-widest text-xs">
                {dict.premiumLogistics}
              </span>
            </div>

            {/* H1 - Critical ATF Content */}
            <h1
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight"
              dangerouslySetInnerHTML={{ __html: dict.title.replace('корпоративным', '<span class=\"text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400\">корпоративным</span>').replace('нового уровня', '<span class=\"text-primary text-glow\">нового уровня</span>') }}
            />

            {/* Description */}
            <div className="glass-panel p-6 rounded-xl max-w-2xl border-l-4 border-l-primary">
              <p className="text-slate-200 text-lg md:text-xl font-normal leading-relaxed">
                {dict.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">
              <button className="w-full sm:w-auto relative overflow-hidden rounded-lg bg-primary px-8 py-4 text-white text-base font-bold shadow-[0_0_20px_rgba(37,106,244,0.4)] hover:shadow-[0_0_30px_rgba(37,106,244,0.6)] hover:bg-blue-600 transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="flex items-center justify-center gap-2">
                  {dict.submitRequest || 'Получить коммерческое предложение'}
                  <span className="material-symbols-outlined text-xl">
                    arrow_forward
                  </span>
                </span>
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-white text-base font-bold hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                <span className="material-symbols-outlined text-xl text-primary">
                  analytics
                </span>
                {dict.getAudit}
              </button>
            </div>
          </div>

          {/* Right Column: Abstract Visualization */}
          <div className="hidden lg:flex lg:col-span-5 justify-end relative">
            {/* Decorative technological circle */}
            <div className="relative w-80 h-80 rounded-full border border-primary/20 flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <div className="w-60 h-60 rounded-full border border-white/10 border-dashed"></div>
              <div className="absolute top-0 right-10 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_#256af4]"></div>
            </div>

            {/* Floating glass card */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 glass-panel p-5 rounded-2xl w-72 shadow-2xl animate-[float_6s_ease-in-out_infinite]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-slate-400 font-medium uppercase">
                  {dict.visuals?.efficiency || 'Эффективность'}
                </span>
                <span className="text-green-400 text-xs font-bold">+24%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full mb-4 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-blue-400 w-[78%] rounded-full shadow-[0_0_10px_#256af4]"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                  <span className="material-symbols-outlined text-lg">
                    trending_up
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-bold">{dict.visuals?.optimization || 'Оптимизация'}</p>
                  <p className="text-slate-400 text-xs">{dict.visuals?.currentMonth || 'Текущий месяц'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
