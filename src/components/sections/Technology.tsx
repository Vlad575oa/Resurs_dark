import Image from "next/image";

export function Technology() {
    return (
        <section className="py-24 bg-background-light border-t border-neutral-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
                    <div className="max-w-3xl">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Tech Stack</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                            Полная цифровизация <br />транспортной функции
                        </h2>
                    </div>
                    <div className="flex gap-3">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-medium text-slate-600 border border-slate-200">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live System
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1: GPS Monitoring */}
                    <div className="group bg-white rounded-2xl border border-neutral-border overflow-hidden hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 flex flex-col h-full">
                        <div className="p-8 pb-0 flex-grow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-orange-50 rounded-xl text-primary">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_outward</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">GPS Monitoring</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Real-time vehicle tracking with precision geofencing and historical route replay capabilities.
                            </p>
                        </div>
                        <div className="mt-8 px-6 pb-6 w-full">
                            <div className="w-full h-56 rounded-xl overflow-hidden bg-slate-100 relative border border-slate-200 shadow-inner group-hover:scale-[1.02] transition-transform duration-500">
                                {/* Mockup: Map UI */}
                                <img alt="Abstract map interface with route lines" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply" data-alt="Digital map interface showing city streets and route lines" data-location="Map Interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX1fLUueR8AUAmJP2mwj2QsbDid24qvsqIz-_25yRFy47XwwNyTGlgiKZTqJQyOAngU5yFI85dr_yq0rgKEo3PmXP2-u7Qp2ep7eonl5Aygg0jHznoGGT91_2k6sJVtfJn5DkNad6ecDDGSFDCqcoHcY3fXSu6dBzAPRIpE_67qBQM2lyRCZ49pfoz8FoxUI2Qe3SNKW9VvyzrwxaxUezpr1ZuaU27KUO37DDoejwdVTTiA-bGfuAYGJaSnWPC2jmtflod0dZuIP2o" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                {/* UI Overlay elements */}
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-white/20 text-xs">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            <span className="font-bold text-slate-800">Unit #402</span>
                                        </div>
                                        <div className="text-slate-500">Speed: 45 km/h</div>
                                    </div>
                                    <div className="bg-primary text-white p-2 rounded-lg shadow-lg">
                                        <span className="material-symbols-outlined text-sm">near_me</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card 2: Fuel Analytics */}
                    <div className="group bg-white rounded-2xl border border-neutral-border overflow-hidden hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 flex flex-col h-full">
                        <div className="p-8 pb-0 flex-grow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-orange-50 rounded-xl text-primary">
                                    <span className="material-symbols-outlined">local_gas_station</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_outward</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Fuel Analytics</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Advanced consumption monitoring to detect anomalies, theft, and optimization opportunities.
                            </p>
                        </div>
                        <div className="mt-8 px-6 pb-6 w-full">
                            <div className="w-full h-56 rounded-xl bg-slate-50 border border-slate-200 p-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-inner">
                                {/* Mockup: Charts */}
                                <div className="flex flex-col h-full justify-between">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-bold text-slate-400 uppercase">Consumption Trend</span>
                                        <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded">-12.4%</span>
                                    </div>
                                    <div className="flex items-end justify-between gap-2 h-32">
                                        <div className="w-full bg-slate-200 rounded-t-sm h-[40%]"></div>
                                        <div className="w-full bg-slate-200 rounded-t-sm h-[65%]"></div>
                                        <div className="w-full bg-slate-200 rounded-t-sm h-[50%]"></div>
                                        <div className="w-full bg-primary/40 rounded-t-sm h-[80%]"></div>
                                        <div className="w-full bg-primary/60 rounded-t-sm h-[60%]"></div>
                                        <div className="w-full bg-primary rounded-t-sm h-[35%] relative group-hover:shadow-[0_0_15px_rgba(245,122,0,0.5)] transition-shadow"></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-slate-400 mt-2 border-t border-slate-200 pt-2">
                                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card 3: BI Dashboards */}
                    <div className="group bg-white rounded-2xl border border-neutral-border overflow-hidden hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 flex flex-col h-full">
                        <div className="p-8 pb-0 flex-grow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-orange-50 rounded-xl text-primary">
                                    <span className="material-symbols-outlined">dashboard</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_outward</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">BI Dashboards</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Executive-level aggregated data views for strategic decision making and cost control.
                            </p>
                        </div>
                        <div className="mt-8 px-6 pb-6 w-full">
                            <div className="w-full h-56 rounded-xl bg-slate-900 border border-slate-700 p-5 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-xl">
                                {/* Mockup: Dark Mode Dashboard */}
                                <div className="grid grid-cols-2 gap-3 h-full">
                                    <div className="bg-slate-800 rounded-lg p-3 flex flex-col justify-between">
                                        <div className="text-xs text-slate-400">Total Distance</div>
                                        <div className="text-xl font-bold text-white">42,890 <span className="text-xs font-normal text-slate-500">km</span></div>
                                        <div className="w-full bg-slate-700 h-1 rounded-full mt-2 overflow-hidden">
                                            <div className="bg-blue-500 h-full w-3/4"></div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-800 rounded-lg p-3 flex flex-col justify-between">
                                        <div className="text-xs text-slate-400">Active Vehicles</div>
                                        <div className="text-xl font-bold text-white">124 <span className="text-xs font-normal text-slate-500">/ 130</span></div>
                                        <div className="flex -space-x-1 mt-1">
                                            <div className="w-4 h-4 rounded-full bg-green-500 border border-slate-800"></div>
                                            <div className="w-4 h-4 rounded-full bg-green-500 border border-slate-800"></div>
                                            <div className="w-4 h-4 rounded-full bg-slate-600 border border-slate-800"></div>
                                        </div>
                                    </div>
                                    <div className="col-span-2 bg-slate-800 rounded-lg p-3 flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-slate-400">System Status</span>
                                            <span className="text-sm font-bold text-green-400">All Systems Operational</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card 4: Driver KPI */}
                    <div className="group bg-white rounded-2xl border border-neutral-border overflow-hidden hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 flex flex-col h-full">
                        <div className="p-8 pb-0 flex-grow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-orange-50 rounded-xl text-primary">
                                    <span className="material-symbols-outlined">badge</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_outward</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Driver KPI</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Automated scoring system measuring safety, efficiency, and compliance for every driver.
                            </p>
                        </div>
                        <div className="mt-8 px-6 pb-6 w-full">
                            <div className="w-full h-56 rounded-xl bg-slate-50 border border-slate-200 p-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-inner flex flex-col gap-3">
                                {/* Mockup: Driver List */}
                                <div className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm border border-slate-100">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">JD</div>
                                    <div className="flex-1">
                                        <div className="text-xs font-bold text-slate-800">John Doe</div>
                                        <div className="text-[10px] text-slate-500">Route A-12</div>
                                    </div>
                                    <div className="text-sm font-bold text-green-600">98%</div>
                                </div>
                                <div className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm border border-slate-100">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">AS</div>
                                    <div className="flex-1">
                                        <div className="text-xs font-bold text-slate-800">Alex Smith</div>
                                        <div className="text-[10px] text-slate-500">Route B-04</div>
                                    </div>
                                    <div className="text-sm font-bold text-primary">84%</div>
                                </div>
                                <div className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm border border-slate-100 opacity-60">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">MK</div>
                                    <div className="flex-1">
                                        <div className="text-xs font-bold text-slate-800">Mike K.</div>
                                        <div className="text-[10px] text-slate-500">Route C-01</div>
                                    </div>
                                    <div className="text-sm font-bold text-red-500">72%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 text-center">
                    <button className="inline-flex items-center justify-center gap-2 text-slate-900 font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors group">
                        <span>Explore our full technology stack</span>
                        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
