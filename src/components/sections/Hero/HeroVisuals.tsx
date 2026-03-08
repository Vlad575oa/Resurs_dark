import Image from "next/image";
import { Verified, Car } from "lucide-react";

export const HeroVisuals: React.FC = () => {
    return (
        <div className="relative lg:h-full min-h-[400px] flex items-center justify-center">
            {/* Main Image container */}
            <div className="relative w-full aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group border border-white/10 bg-navy/20">
                <div className="absolute inset-0 bg-navy/20 z-10 mix-blend-multiply transition-opacity group-hover:opacity-10 pointer-events-none"></div>
                <video
                    src="/Hero_video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Card 1: SLA - Static for ATF Speed Index */}
                <div className="absolute top-8 right-8 z-20 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 flex flex-col gap-1 min-w-[140px]">
                    <div className="flex items-center gap-2 text-green-600 mb-1">
                        <Verified className="w-5 h-5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Guarantee</span>
                    </div>
                    <span className="text-3xl font-black text-navy">98%</span>
                    <span className="text-xs font-medium text-slate-600">SLA Performance</span>
                </div>

                {/* Floating Card 2: Fleet Size */}
                <div className="absolute bottom-8 left-8 z-20 bg-navy/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/10 flex items-center gap-4 text-white max-w-[220px]">
                    <div className="bg-primary-main p-2 rounded-lg text-white">
                        <Car className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold leading-none">5000+</p>
                        <p className="text-[10px] text-white/70 mt-1 uppercase tracking-wider">Units Managed</p>
                    </div>
                </div>
            </div>

            {/* Decorative Background element */}
            <div className="absolute -z-10 -right-20 -bottom-20 w-[400px] h-[400px] bg-primary-main/10 rounded-full blur-3xl"></div>
        </div>
    );
};
