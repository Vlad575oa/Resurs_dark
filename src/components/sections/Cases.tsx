export function Cases() {
    return (
        <section className="py-20 lg:py-28 px-6 lg:px-12 bg-white relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 h-[600px] w-1/3 bg-slate-50"></div>
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-widest text-primary">Success Stories</span>
                        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">Результаты наших клиентов</h2>
                    </div>
                    <a className="group flex items-center gap-2 text-sm font-bold text-slate-600 transition-colors hover:text-primary" href="#">
                        View all case studies
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
                </div>
                {/* Main Featured Case Card */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl lg:grid lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="flex flex-col justify-between p-8 lg:p-12">
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                                    <span className="material-symbols-outlined">inventory_2</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-500">Logistics &amp; Distribution</span>
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-slate-900">RetailChain X Logistics Overhaul</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-400">The Problem</h4>
                                    <p className="text-slate-600">Escalating last-mile delivery costs and lack of transparency in fuel consumption led to a 12% budget overrun in Q4.</p>
                                </div>
                                <div>
                                    <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-400">Our Solution</h4>
                                    <p className="text-slate-600">Implemented dynamic route optimization algorithms combined with digital fuel control sensors across 200+ fleet units.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button className="inline-flex items-center gap-2 font-bold text-primary hover:text-orange-600">
                                Read full case study
                                <span className="material-symbols-outlined text-sm">arrow_outward</span>
                            </button>
                        </div>
                    </div>
                    {/* Right Visual/Data */}
                    <div className="relative bg-slate-50 p-8 lg:border-l lg:border-slate-100 lg:p-12 flex flex-col justify-center">
                        {/* Abstract Graphic Background */}
                        <div className="absolute inset-0 overflow-hidden opacity-10">
                            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary blur-3xl"></div>
                            <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-blue-500 blur-3xl"></div>
                        </div>
                        <div className="relative z-10">
                            <div className="mb-2 text-sm font-medium text-slate-500">Total Cost Reduction (6 Months)</div>
                            <div className="mb-8 flex items-baseline gap-4">
                                <span className="text-6xl font-black text-primary">-18%</span>
                                <span className="flex items-center text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                    <span className="material-symbols-outlined text-sm mr-1">trending_down</span>
                                    Above Target
                                </span>
                            </div>
                            {/* Chart Representation */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                                    <span>Before Optimization</span>
                                    <span>$1.2M / mo</span>
                                </div>
                                <div className="h-4 w-full overflow-hidden rounded-full bg-slate-200">
                                    <div className="h-full w-full bg-slate-400"></div>
                                </div>
                                <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                                    <span className="text-primary font-bold">After Optimization</span>
                                    <span className="text-slate-900 font-bold">$984k / mo</span>
                                </div>
                                <div className="h-4 w-full overflow-hidden rounded-full bg-slate-200">
                                    <div className="h-full w-[82%] bg-primary"></div>
                                </div>
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="rounded-lg bg-white p-4 shadow-sm border border-slate-100">
                                    <div className="text-2xl font-bold text-slate-900">14%</div>
                                    <div className="text-xs text-slate-500">Fuel Saved</div>
                                </div>
                                <div className="rounded-lg bg-white p-4 shadow-sm border border-slate-100">
                                    <div className="text-2xl font-bold text-slate-900">2.5hrs</div>
                                    <div className="text-xs text-slate-500">Daily Time Saved</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
