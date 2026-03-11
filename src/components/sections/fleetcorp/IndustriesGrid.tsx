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
                    <h3 suppressHydrationWarning className="text-white text-3xl md:text-4xl font-bold tracking-tight">
                        {dict?.title || "Sectors We Serve"}
                    </h3>
                    <p suppressHydrationWarning className="text-slate-400 max-w-2xl mt-2 text-lg">
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
                                priority={industries.indexOf(item) < 2}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <div className="mb-2 text-primary">
                                    {item.icon === 'factory' && <svg viewBox="0 0 24 24" className="size-8 fill-current"><path d="M22 10V6l-8 4V6l-8 4V4H2v16h20v-10zM7 18H5v-2h2v2zm0-4H5v-2h2v2zm4 4H9v-2h2v2zm0-4H9v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>}
                                    {item.icon === 'oil_barrel' && <svg viewBox="0 0 24 24" className="size-8 fill-current"><path d="M12 2c3.31 0 6 2.69 6 6v1H6V8c0-3.31 2.69-6 6-6zm0 14c-3.31 0-6-2.69-6-6v-1h12v1c0 3.31-2.69 6-6 6zm0 2c3.87 0 7-3.13 7-7v-1h-2v1c0 2.76-2.24 5-5 5s-5-2.24-5-5v-1H5v1c0 3.87 3.13 7 7 7z"/></svg>}
                                    {item.icon === 'construction' && <svg viewBox="0 0 24 24" className="size-8 fill-current"><path d="M13 10V3h-2v7H4v2h7v7h2v-7h7v-2h-7z"/></svg>}
                                    {item.icon === 'account_balance' && <svg viewBox="0 0 24 24" className="size-8 fill-current"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zM14 10v7h3v-7h-3zm1-6.1L4.44 9h15.12L15 3.9zM2 9h19V7H2v2z"/></svg>}
                                    {item.icon === 'local_shipping' && <svg viewBox="0 0 24 24" className="size-8 fill-current"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>}
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
