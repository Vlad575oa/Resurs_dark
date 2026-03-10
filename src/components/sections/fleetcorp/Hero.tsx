import Image from "next/image";
import Link from "next/link";
import React from 'react';

export default function Hero({ dict, locale }: { dict: any; locale: string }) {
  const title = dict?.title || "Advanced Fleet Management & Outsourcing";
  const underConstructionUrl = `/${locale}/under-construction`;

  // Safe rendering of title with highlighted spans
  const renderTitle = (text: string) => {
    const highlights: Record<string, string> = {
      'корпоративным': 'text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400',
      'нового уровня': 'text-primary text-glow',
      'Corporate': 'text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400',
      'Next-Level': 'text-primary text-glow'
    };

    const regex = new RegExp(`(${Object.keys(highlights).join('|')})`, 'g');
    const parts = text.split(regex);

    return parts.map((part, i) => {
      const className = highlights[part];
      if (className) {
        return <span key={i} className={className}>{part}</span>;
      }
      return part;
    });
  };

  return (
    <section 
      suppressHydrationWarning
      className="flex-grow relative flex flex-col justify-center min-h-screen pt-20 overflow-hidden"
    >
      {/* Background Image - Optimized with next/image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJBK94MihqMW1wwl5gGFOEFRUYX789hlz5YTWsMV5vacSEN3rwXy5beuBGQ_5JmymV5SVu311nqqqKxPQIj4YV-kMmLGiTJn2JkkzOMS6YOtAgD-CaygFvvkPru2xtUghKbcWwSgAb-wjBVFMG3snB4YaPf2BqwGJHyf48sXZlHYY4FfbFgJxwrddv-uMET-1NqXjjyrqUDuRu9_1xa05AM2L5UlRECj5jVRs2CN0br_JHmsnoxgLQkt0G7sDhtxYcC5qbNDVSM6E"
          alt="Fleet Management Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={85} // Optimized quality
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-[#0a0e1a]/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-20 2xl:px-32 py-10">
        <div className="max-w-[1280px] 2xl:max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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
            <h1 suppressHydrationWarning className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              {renderTitle(title)}
            </h1>

            {/* Description */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl max-w-2xl border-l-4 border-l-primary">
              <p suppressHydrationWarning className="text-slate-200 text-lg md:text-xl font-normal leading-relaxed">
                {dict.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">
              <Link
                href={underConstructionUrl}
                className="w-full sm:w-auto relative overflow-hidden rounded-lg bg-primary px-8 py-4 text-white text-base font-bold shadow-[0_0_20px_rgba(37,106,244,0.4)] hover:shadow-[0_0_30px_rgba(37,106,244,0.6)] hover:bg-blue-600 transition-all duration-300 group inline-flex items-center justify-center"
              >
                <span className="flex items-center justify-center gap-2 relative z-10">
                  {dict.submitRequest || 'Получить коммерческое предложение'}
                  <span suppressHydrationWarning className="material-symbols-outlined text-xl">
                    arrow_forward
                  </span>
                </span>
              </Link>
              <Link
                href={underConstructionUrl}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-white text-base font-bold hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                <span suppressHydrationWarning className="material-symbols-outlined text-xl text-primary">
                  analytics
                </span>
                {dict.getAudit}
              </Link>
            </div>
          </div>

          {/* Right Column: Abstract Visualization (Pure CSS implementation for Server Component) */}
          <div className="hidden lg:flex lg:col-span-5 justify-end relative">
            {/* Decorative technological circle */}
            <div className="relative w-80 h-80 rounded-full border border-primary/20 flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <div className="w-60 h-60 rounded-full border border-white/10 border-dashed"></div>
              <div className="absolute top-0 right-10 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_#256af4]"></div>
            </div>

            {/* Floating glass card */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl w-72 shadow-2xl animate-[float_6s_ease-in-out_infinite]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-slate-400 font-medium uppercase">
                  {dict.visuals?.efficiency || 'Эффективность'}
                </span>
                <span className="text-green-400 text-xs font-bold">+24%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full mb-4 overflow-hidden text-[0px]">
                <div className="h-full bg-gradient-to-r from-primary to-blue-400 w-[78%] rounded-full shadow-[0_0_10px_#256af4]"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                  <span suppressHydrationWarning className="material-symbols-outlined text-lg">
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
