import FeaturesGrid from "./FeaturesGrid";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-24 px-6 md:px-10 lg:px-40 overflow-hidden bg-background-dark">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary text-xs font-bold uppercase tracking-wider">
                Технология 4.0
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              ИНТЕЛЛЕКТУАЛЬНОЕ{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                УПРАВЛЕНИЕ
              </span>{" "}
              АВТОПАРКОМ
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              Единая цифровая экосистема для полного контроля над вашим транспортом.
              Снижайте издержки и повышайте эффективность с помощью передовых
              технологий телематики и AI.
            </p>
          </div>

          {/* Features Grid */}
          <FeaturesGrid />

          {/* CTA Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full">
            <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold text-base transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2">
              Запросить демо
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold text-base border border-slate-700 text-slate-300 hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">play_circle</span>
              Видео обзор
            </button>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <DashboardMockup />
      </div>
    </section>
  );
}
