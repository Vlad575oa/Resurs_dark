import Link from "next/link";

export default function IndustriesGrid({ locale }: { locale: string }) {
    const getIndustries = () => {
        if (locale === 'en') {
            return [
                {
                    slug: "industrial-manufacturing",
                    name: "Industrial Manufacturing",
                    description: "Optimized heavy machinery logistics and raw material transport streams.",
                    icon: "factory",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4zqRSCXEPrLkuLYB9rVnJkf12wYLdxqAASwL2E-MaLxm1sv_pbyVoewaGSMOJYOONrvVq4C35XLPovevtEbZQjbKnlnM3B7Nmbuf89-hvEiKU4br8VYuvyICCQq2bioxdEURZ99p5bvAtNirexRPoc2fsnAJjhOPg-5sZHFj_wVnFztPBxLYLVTNzcpq0SyutzIN1ZvTbfC2i5tPTjYkMPQwml28q26m7RSQb3hqge5huRO5Q0an6ArHO4dYYoulXQwxUz13dh7g",
                    colSpan: "lg:col-span-3",
                },
                {
                    slug: "oil-and-gas",
                    name: "Oil & Gas",
                    description: "Mission-critical reliability for remote extraction sites and pipeline maintenance.",
                    icon: "oil_barrel",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBp6AyXQUbBHHAvp0vYq8KlUBSJnicSXPHwvWRE6n2c1n_AKJ-vFszvxXbFExY49h0nmnrKJpw4ivo78sOsbkp9ddMmw65LMdqOGzVP0fgWn7AALVg18HQMEEi_x04tKFCHjhw3KrJYDhzHGxA9lbA1MZ4jmpSQtQvWqKqjY0qheSCfXJ052dAAd7X2yp3GsfOpL3uEqHYsm7nz330XhMpuUn2woSB3L_pE5jTjo9coNLi8PzR8Nc_QRWpqb2hCA7VPEIDMrprgj4",
                    colSpan: "lg:col-span-3",
                },
                {
                    slug: "construction",
                    name: "Construction",
                    description: "Real-time equipment tracking across multiple job sites.",
                    icon: "construction",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ9msAiXUgFzCvAhKAJkZPshoLks_kCFrslC_b6DQCsinCCRIISR-a0mPtDkAJrJteP5L4bc136EtPDGPNki9_Tg8kgXyZh2jIsyYNf5geeXgRhx9TWuXmyZmTmT3_hirMkKUyL-S8q--fvp4BA74p6M4gWvs0xbf6RrMxtfpxZzKvDZk97Gq_cbdYED3SumN5q_d9981WawPDgr5FYJNd-PuG8bvBox66WPT76YJhvt_wKOritWWCch6-69bhPUTSi8-wdOtizHc",
                    colSpan: "lg:col-span-2",
                },
                {
                    slug: "government",
                    name: "Government",
                    description: "Secure, compliant public sector transport protocols.",
                    icon: "account_balance",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNpmIH5Y_cYtvakivcrHzviBvZHC873pt3O1OCK-9Lck3vb_AstApImXHUKzDNS1U51_V6W8NTStd3WPSorVZaGlDIoCH8Zjk0qF6XHJNiJ21oJb2V_LPwE_nI9k8bwSyXvODGUnHslTL1tqDFt0b9SNilZTfwVrTyBU1FSEJkIpHOfCdDS0rwzYNFzKwTDE88lJz79J9Z_pR_bAMvI6A30Q6XXXdTX3_50O5FeOhixO3E3B5SiPMRGf0PNLw-N19THvkPf47qe4Q",
                    colSpan: "lg:col-span-2",
                },
                {
                    slug: "logistics",
                    name: "Logistics",
                    description: "Global supply chain efficiency and route optimization.",
                    icon: "local_shipping",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsaYOWa_7zF0GXU1idnpTlAJdbypQWtLSpGhL8y2ta-EuFYeom3SgLLQela9_8bKJQQwfjN1MXSrmXlTfccUC8ZP7Ogts_7qigN_fxaxdg4HmaMFBN3OFo9_hNJJC2ET3UXIcf9qWtSS35j7UPaaGtVkWSf_Hq8csskqdZXywPEDovZ524f88uJDW2L62kq36DLzJLPViiENg7-9zjXhxEoreoIJEmxpgwQtnhSzPgaq2II-WFvlGUjhFXKpLqvQRZhRWEpShS_AI",
                    colSpan: "lg:col-span-2",
                },
            ];
        } else {
            return [
                {
                    slug: "industrial-manufacturing",
                    name: "Промышленное производство",
                    description: "Оптимизация логистики тяжелой техники и потоков сырья.",
                    icon: "factory",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4zqRSCXEPrLkuLYB9rVnJkf12wYLdxqAASwL2E-MaLxm1sv_pbyVoewaGSMOJYOONrvVq4C35XLPovevtEbZQjbKnlnM3B7Nmbuf89-hvEiKU4br8VYuvyICCQq2bioxdEURZ99p5bvAtNirexRPoc2fsnAJjhOPg-5sZHFj_wVnFztPBxLYLVTNzcpq0SyutzIN1ZvTbfC2i5tPTjYkMPQwml28q26m7RSQb3hqge5huRO5Q0an6ArHO4dYYoulXQwxUz13dh7g",
                    colSpan: "lg:col-span-3",
                },
                {
                    slug: "oil-and-gas",
                    name: "Нефтегаз",
                    description: "Надежность критически важных объектов на удаленных площадках.",
                    icon: "oil_barrel",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBp6AyXQUbBHHAvp0vYq8KlUBSJnicSXPHwvWRE6n2c1n_AKJ-vFszvxXbFExY49h0nmnrKJpw4ivo78sOsbkp9ddMmw65LMdqOGzVP0fgWn7AALVg18HQMEEi_x04tKFCHjhw3KrJYDhzHGxA9lbA1MZ4jmpSQtQvWqKqjY0qheSCfXJ052dAAd7X2yp3GsfOpL3uEqHYsm7nz330XhMpuUn2woSB3L_pE5jTjo9coNLi8PzR8Nc_QRWpqb2hCA7VPEIDMrprgj4",
                    colSpan: "lg:col-span-3",
                },
                {
                    slug: "construction",
                    name: "Строительство",
                    description: "Точное отслеживание оборудования на множестве объектов.",
                    icon: "construction",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ9msAiXUgFzCvAhKAJkZPshoLks_kCFrslC_b6DQCsinCCRIISR-a0mPtDkAJrJteP5L4bc136EtPDGPNki9_Tg8kgXyZh2jIsyYNf5geeXgRhx9TWuXmyZmTmT3_hirMkKUyL-S8q--fvp4BA74p6M4gWvs0xbf6RrMxtfpxZzKvDZk97Gq_cbdYED3SumN5q_d9981WawPDgr5FYJNd-PuG8bvBox66WPT76YJhvt_wKOritWWCch6-69bhPUTSi8-wdOtizHc",
                    colSpan: "lg:col-span-2",
                },
                {
                    slug: "government",
                    name: "Государственный сектор",
                    description: "Безопасные транспортные протоколы государственного сектора.",
                    icon: "account_balance",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNpmIH5Y_cYtvakivcrHzviBvZHC873pt3O1OCK-9Lck3vb_AstApImXHUKzDNS1U51_V6W8NTStd3WPSorVZaGlDIoCH8Zjk0qF6XHJNiJ21oJb2V_LPwE_nI9k8bwSyXvODGUnHslTL1tqDFt0b9SNilZTfwVrTyBU1FSEJkIpHOfCdDS0rwzYNFzKwTDE88lJz79J9Z_pR_bAMvI6A30Q6XXXdTX3_50O5FeOhixO3E3B5SiPMRGf0PNLw-N19THvkPf47qe4Q",
                    colSpan: "lg:col-span-2",
                },
                {
                    slug: "logistics",
                    name: "Логистика",
                    description: "Эффективность глобальной цепочки поставок.",
                    icon: "local_shipping",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsaYOWa_7zF0GXU1idnpTlAJdbypQWtLSpGhL8y2ta-EuFYeom3SgLLQela9_8bKJQQwfjN1MXSrmXlTfccUC8ZP7Ogts_7qigN_fxaxdg4HmaMFBN3OFo9_hNJJC2ET3UXIcf9qWtSS35j7UPaaGtVkWSf_Hq8csskqdZXywPEDovZ524f88uJDW2L62kq36DLzJLPViiENg7-9zjXhxEoreoIJEmxpgwQtnhSzPgaq2II-WFvlGUjhFXKpLqvQRZhRWEpShS_AI",
                    colSpan: "lg:col-span-2",
                },
            ];
        }
    };

    const industries = getIndustries();

    return (
        <section className="w-full px-6 py-20 lg:px-20 bg-background-dark">
            <div className="max-w-[1440px] mx-auto">
                <div className="mb-10 flex flex-col gap-2">
                    <h2 className="text-primary text-sm font-bold tracking-[0.15em] uppercase">
                        {locale === 'en' ? 'Industries' : 'Отрасли'}
                    </h2>
                    <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
                        {locale === 'en' ? 'FOR WHOM WE WORK' : 'ДЛЯ КОГО МЫ РАБОТАЕМ'}
                    </h3>
                    <p className="text-slate-400 max-w-2xl mt-2 text-lg">
                        {locale === 'en' ? 'Tailored logistics ecosystems for high-demand sectors requiring precision and reliability.' : 'Индивидуальные логистические экосистемы для высоконагруженных отраслей, требующих точности и надежности.'}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[280px]">
                    {industries.map((item) => (
                        <Link
                            key={item.name}
                            href={`/industries/${item.slug}`}
                            className={`group relative overflow-hidden rounded-xl border border-[#282e39] ${item.colSpan} hover:border-primary/50 transition-colors`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url('${item.image}')` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
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
