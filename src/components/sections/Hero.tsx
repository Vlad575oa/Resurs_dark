import { HeroVisuals } from "./Hero/HeroVisuals";
import { HeroTicker } from "./Hero/HeroTicker";
import { HeroBenefitsTicker } from "./Hero/HeroBenefitsTicker";

export const Hero = () => {
    const mainImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuC2TRKG8mKoP9MJD-PtGXdCXjLN0jDWCa4NsAWkDxtyUdI7wRBNnRyG68-t3GnEuGs9w_HlgmNFW-P-o_HYaakdtCRwlffJSzG_GtvnLWskUg-kqWqqm1rhzZar128xj8a-jkLCr-dvXul0N_NgwrFHPjOq-xFHHuwjZ7QLMshCBYWtr4b8UVKbB4kBKBvSlJO38PyoCn8k1np0MhasKiugFmDNUIhWvXbRT-MnsvZV4sjhKB87mV5WxVTi6g2pEM84lSpMLMVvKYg4";

    return (
        <section className="relative overflow-hidden font-sans antialiased text-slate-900 hero-canvas">
            {/* Generative ambient orbs */}
            <div className="pointer-events-none" aria-hidden="true">
                <div className="hero-orb-a" />
                <div className="hero-orb-b" />
                <div className="hero-orb-c" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-24 lg:pt-36 lg:pb-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-6 lg:gap-8 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 w-fit border border-navy/10">
                            <span className="size-2 rounded-full bg-primary-main animate-pulse"></span>
                            <span className="text-xs font-bold text-navy uppercase tracking-wide">Premium Logistics</span>
                        </div>
                        <h1 className="text-navy text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.1] tracking-tight">
                            Управление корпоративным автопарком нового уровня
                        </h1>
                        <p className="text-slate-500 text-lg sm:text-xl font-normal leading-relaxed max-w-xl">
                            Полный аутсорсинг транспортной функции: контроль, эффективность, снижение затрат и прозрачность процессов.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#cta" className="btn-puffy btn-puffy-primary text-white font-bold py-4 px-8 rounded-xl w-full sm:w-auto text-center inline-flex justify-center items-center">
                                Получить аудит автопарка
                            </a>
                            <a href="#calculator" className="btn-puffy btn-puffy-secondary text-navy font-bold py-4 px-8 rounded-xl w-full sm:w-auto text-center inline-flex justify-center items-center">
                                Рассчитать экономию
                            </a>
                        </div>

                        {/* Secondary benefits ticker integrated into the content column */}
                        <HeroBenefitsTicker />

                    </div>

                    {/* Right Content */}
                    <HeroVisuals />
                </div>
            </div>

            {/* Full-bleed ticker strip */}
            <HeroTicker />
        </section>
    );
};
