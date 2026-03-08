import Image from "next/image";

export function CallToAction() {
    return (
        <section className="relative py-24 px-4 bg-slate-900 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    alt="Abstract minimalist sunrise over city skyline"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMfbt1Z9KredbEj1xAVEarRXDPwDGlXxuzm0c0ibfKrGZ9r9zkWTMdzROfIU9031rqFtN28GJ1MiAohz0wATETxJ8MYklzO-yVnM6GJ_tRuyR0b0GdRxbkd2jiSHUPNXz-XziVDFGUdtKNf0I_jm54sh9xQTe4PYnNTaChewtfcrIJ3v0f8jfwPKLLCWPWj5j3guRhePQxP4glTes-1EA2RNxGjMI0cBZ0u_PNECD7OIVaN-2sdA6c4IHDgdEubGqFfBQZ6iXTbfN5"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
                        Готовы снизить <br className="hidden lg:block" /> транспортные расходы?
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mb-8">
                        Получите индивидуальный расчет в течение 24 часов и узнайте, сколько вы можете сэкономить, оптимизировав работу корпоративного автопарка.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="bg-primary hover:bg-orange-600 text-white min-w-[200px] h-14 rounded-lg text-lg font-bold transition-all shadow-[0_0_20px_rgba(245,122,0,0.4)] hover:shadow-[0_0_30px_rgba(245,122,0,0.6)] flex items-center justify-center gap-2">
                            Оставить заявку
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white min-w-[200px] h-14 rounded-lg text-lg font-bold transition-all backdrop-blur-sm flex items-center justify-center">
                            Запросить КП
                        </button>
                    </div>
                </div>
                {/* Decorative Element (Optional Stats/Badge) */}
                <div className="hidden lg:block">
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-xs rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="size-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                <span className="material-symbols-outlined text-3xl">trending_down</span>
                            </div>
                            <div>
                                <p className="text-sm text-slate-400 uppercase font-semibold">Средняя экономия</p>
                                <p className="text-3xl font-bold text-white">30%</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-300">Клиенты получают окупаемость инвестиций (ROI) уже в первые 3 месяца аутсорсинга.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
