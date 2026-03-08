export function SocialProof() {
    return (
        <section className="bg-navy-custom py-16 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-4 md:divide-x md:divide-white/10">
                    {/* Metric 1 */}
                    <div className="flex flex-col items-center justify-center text-center md:px-4">
                        <span className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl text-primary">15+</span>
                        <span className="mt-2 text-xs font-medium uppercase tracking-widest text-slate-300">Years Experience</span>
                    </div>
                    {/* Metric 2 */}
                    <div className="flex flex-col items-center justify-center text-center md:px-4">
                        <span className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">5k+</span>
                        <span className="mt-2 text-xs font-medium uppercase tracking-widest text-slate-300">Active Units</span>
                    </div>
                    {/* Metric 3 */}
                    <div className="flex flex-col items-center justify-center text-center md:px-4">
                        <span className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">20+</span>
                        <span className="mt-2 text-xs font-medium uppercase tracking-widest text-slate-300">Regions Covered</span>
                    </div>
                    {/* Metric 4 */}
                    <div className="flex flex-col items-center justify-center text-center md:px-4">
                        <span className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">98%</span>
                        <span className="mt-2 text-xs font-medium uppercase tracking-widest text-slate-300">SLA Adherence</span>
                    </div>
                    {/* Metric 5 */}
                    <div className="col-span-2 flex flex-col items-center justify-center text-center md:col-span-1 md:px-4">
                        <span className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">1M+</span>
                        <span className="mt-2 text-xs font-medium uppercase tracking-widest text-slate-300">Km Monthly</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
