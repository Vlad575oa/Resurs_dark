import Link from "next/link";
import Image from "next/image";

export default function IndustriesGrid({ dict, locale }: { dict: any; locale: string }) {
    const industries = [
        {
            slug: "industrial-manufacturing",
            name: dict?.items?.industrial?.name || "Industrial Manufacturing",
            description: dict?.items?.industrial?.desc || "Strategic logistics for global manufacturing.",
            icon: "factory",
            image: "/images/industries/industrial.webp",
            colSpan: "lg:col-span-3",
        },
        {
            slug: "oil-and-gas",
            name: dict?.items?.oil_gas?.name || "Oil & Gas",
            description: dict?.items?.oil_gas?.desc || "High-reliability fleet solutions for energy.",
            icon: "oil_barrel",
            image: "/images/industries/oil-gas.webp",
            colSpan: "lg:col-span-3",
        },
        {
            slug: "construction",
            name: dict?.items?.construction?.name || "Construction",
            description: dict?.items?.construction?.desc || "Heavy equipment and materials transport.",
            icon: "construction",
            image: "/images/industries/construction.webp",
            colSpan: "lg:col-span-2",
        },
        {
            slug: "government",
            name: dict?.items?.government?.name || "Government",
            description: dict?.items?.government?.desc || "Secure and efficient public sector fleet management.",
            icon: "account_balance",
            image: "/images/industries/government.webp",
            colSpan: "lg:col-span-2",
        },
        {
            slug: "logistics",
            name: dict?.items?.logistics?.name || "Global Logistics",
            description: dict?.items?.logistics?.desc || "Intelligent supply chain and delivery networks.",
            icon: "local_shipping",
            image: "/images/industries/logistics.webp",
            colSpan: "lg:col-span-2",
        },
    ];

    return (
        <section className="w-full px-6 py-20 lg:px-20 2xl:px-32 bg-background-dark">
            <div className="max-w-[1440px] 2xl:max-w-[1700px] mx-auto">
                <div className="mb-10 flex flex-col gap-2">
                    <h2 className="text-primary text-sm font-bold tracking-[0.15em] uppercase">
                        {dict?.badge || "Industry Leaders"}
                    </h2>
                    <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
                        {dict?.title || "Sectors We Serve"}
                    </h3>
                    <p className="text-slate-400 max-w-2xl mt-2 text-lg">
                        {dict?.description || "Specialized solutions for enterprise requirements."}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[280px]">
                    {industries.map((item) => (
                        <Link
                            key={item.name}
                            href={`/${locale}/industries/${item.slug}`}
                            className={`group relative overflow-hidden rounded-xl border border-[#282e39] ${item.colSpan} hover:border-primary/50 transition-colors`}
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <div className="mb-2 text-primary">
                                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                </div>
                                <h4 className="text-white text-xl font-bold mb-1">{item.name}</h4>
                                <p className="text-slate-300 text-sm leading-relaxed max-w-md">{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
