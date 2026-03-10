import Link from "next/link";
import Image from "next/image";

export default function Industries({ dict, locale }: { dict: any; locale: string }) {
    const industries = [
        {
            slug: "industrial-manufacturing",
            name: dict?.items?.industrial?.name || "Industrial Manufacturing",
            description: dict?.items?.industrial?.desc || "Strategic logistics for global manufacturing.",
            icon: "factory",
            image: "/images/industries/industrial.webp",
        },
        {
            slug: "oil-and-gas",
            name: dict?.items?.oil_gas?.name || "Oil & Gas",
            description: dict?.items?.oil_gas?.desc || "High-reliability fleet solutions for energy.",
            icon: "oil_barrel",
            image: "/images/industries/oil-gas.webp",
        },
        {
            slug: "construction",
            name: dict?.items?.construction?.name || "Construction",
            description: dict?.items?.construction?.desc || "Heavy equipment and materials transport.",
            icon: "construction",
            image: "/images/industries/construction.webp",
        },
    ];

    return (
        <section className="w-full px-6 py-20 lg:px-20 2xl:px-32 bg-background-dark overflow-hidden">
            <div className="max-w-[1440px] 2xl:max-w-[1700px] mx-auto">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-primary text-sm font-bold tracking-[0.15em] uppercase">
                            {dict?.badge || "Industries"}
                        </h2>
                        <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
                            {dict?.title || "Industry Specialization"}
                        </h3>
                    </div>
                    <p className="text-slate-400 max-w-xl text-lg">
                        {dict?.description || "Providing specialized logistics expertise across diverse economic sectors."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {industries.map((item) => (
                        <Link
                            key={item.name}
                            href={`/${locale}/industries/${item.slug}`}
                            className="group relative h-[500px] rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500"
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/20 to-transparent"></div>
                            
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-3">{item.name}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {item.description}
                                    </p>
                                </div>
                                
                                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 mt-4">
                                    <span>Learn more</span>
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
