export function Workflow() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-background-light to-transparent opacity-50 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 max-w-3xl">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Our Workflow</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                        Простой процесс — <br />измеримый результат
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                        A structured approach to fleet optimization that guarantees transparency and efficiency at every step.
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block relative">
                    {/* Connector Line */}
                    <div className="absolute top-12 left-0 w-full h-0.5 bg-slate-100">
                        <div className="absolute top-0 left-0 h-full bg-primary w-3/4 opacity-20"></div>
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                        {/* Step 1 */}
                        <div className="relative group">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:border-primary group-hover:scale-105 shadow-sm">
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-4xl transition-colors">analytics</span>
                                </div>
                                <div className="mt-6 px-2">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Step 01</div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Analysis &amp; Audit</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Comprehensive audit of current routes, costs, and utilization rates.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Step 2 */}
                        <div className="relative group">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:border-primary group-hover:scale-105 shadow-sm">
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-4xl transition-colors">model_training</span>
                                </div>
                                <div className="mt-6 px-2">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Step 02</div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Optimization Model</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Developing a tailored strategy and simulation model.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Step 3 */}
                        <div className="relative group">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-primary flex items-center justify-center z-10 transition-all duration-300 scale-110 shadow-lg shadow-orange-100">
                                    <span className="material-symbols-outlined text-primary text-4xl">hub</span>
                                </div>
                                <div className="mt-6 px-2">
                                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Current Phase</div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">System Connection</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Seamless integration of IT infrastructure and vehicle telematics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Step 4 */}
                        <div className="relative group">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:border-primary group-hover:scale-105 shadow-sm">
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-4xl transition-colors">rocket_launch</span>
                                </div>
                                <div className="mt-6 px-2">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Step 04</div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Launch Control</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Pilot run, real-time adjustments, and process calibration.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Step 5 */}
                        <div className="relative group">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:border-primary group-hover:scale-105 shadow-sm">
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary text-4xl transition-colors">monitoring</span>
                                </div>
                                <div className="mt-6 px-2">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Step 05</div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Monthly Analytics</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Detailed reporting and continuous improvement cycles.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Timeline (Vertical) */}
                <div className="lg:hidden flex flex-col gap-8 relative pl-6 border-l-2 border-slate-200 ml-4">
                    {/* Step 1 */}
                    <div className="relative pl-6">
                        <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center">
                            <span className="text-xs font-bold text-slate-500">1</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Analysis &amp; Audit</h3>
                        <p className="text-slate-500 mt-1">Comprehensive audit of current routes and costs.</p>
                    </div>
                    {/* Step 2 */}
                    <div className="relative pl-6">
                        <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center">
                            <span className="text-xs font-bold text-slate-500">2</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Optimization Model</h3>
                        <p className="text-slate-500 mt-1">Strategy development and modeling.</p>
                    </div>
                    {/* Step 3 */}
                    <div className="relative pl-6">
                        <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-primary border-2 border-primary flex items-center justify-center shadow-md">
                            <span className="text-xs font-bold text-white">3</span>
                        </div>
                        <h3 className="text-lg font-bold text-primary">System Connection</h3>
                        <p className="text-slate-600 mt-1">Integration of IT systems and vehicles.</p>
                    </div>
                    {/* Step 4 */}
                    <div className="relative pl-6">
                        <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center">
                            <span className="text-xs font-bold text-slate-500">4</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Launch Control</h3>
                        <p className="text-slate-500 mt-1">Pilot run and adjustments.</p>
                    </div>
                    {/* Step 5 */}
                    <div className="relative pl-6">
                        <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center">
                            <span className="text-xs font-bold text-slate-500">5</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Monthly Analytics</h3>
                        <p className="text-slate-500 mt-1">Reporting &amp; improvement.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
