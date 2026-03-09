const industries = [
  {
    name: "Industrial Manufacturing",
    description: "Optimized heavy machinery logistics and raw material transport streams.",
    icon: "factory",
    image: "/images/industries/industrial.webp",
    colSpan: "lg:col-span-3",
  },
  {
    name: "Oil & Gas",
    description: "Mission-critical reliability for remote extraction sites and pipeline maintenance.",
    icon: "oil_barrel",
    image: "/images/industries/oil-gas.webp",
    colSpan: "lg:col-span-3",
  },
  {
    name: "Construction",
    description: "Real-time equipment tracking across multiple job sites.",
    icon: "construction",
    image: "/images/industries/construction.webp",
    colSpan: "lg:col-span-2",
  },
  {
    name: "Government",
    description: "Secure, compliant public sector transport protocols.",
    icon: "account_balance",
    image: "/images/industries/government.webp",
    colSpan: "lg:col-span-2",
  },
  {
    name: "Logistics",
    description: "Global supply chain efficiency and route optimization.",
    icon: "local_shipping",
    image: "/images/industries/logistics.webp",
    colSpan: "lg:col-span-2",
  },
];

export default function Industries() {
  return (
    <section className="w-full max-w-7xl px-6 py-16 lg:px-10 bg-background-dark">
      <div className="mb-10 flex flex-col gap-2">
        <h2 className="text-primary text-sm font-bold tracking-[0.15em] uppercase">
          Industries
        </h2>
        <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
          FOR WHOM WE WORK
        </h3>
        <p className="text-slate-400 max-w-2xl mt-2 text-lg">
          Tailored logistics ecosystems for high-demand sectors requiring precision
          and reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[280px]">
        {industries.map((industry) => (
          <div
            key={industry.name}
            className={`group relative overflow-hidden rounded-xl border border-[#282e39] ${industry.colSpan}`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${industry.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6">
              <div className="mb-2 text-primary">
                <span className="material-symbols-outlined text-3xl">
                  {industry.icon}
                </span>
              </div>
              <h4 className="text-white text-xl font-bold mb-1">
                {industry.name}
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                {industry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
