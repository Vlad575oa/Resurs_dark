import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-[#283937] bg-background-dark/90 backdrop-blur-md px-6 py-4 lg:px-10">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3 text-white group cursor-pointer">
          <div className="size-8 text-primary flex items-center justify-center bg-[#2C3A37] rounded-full">
            <span className="material-symbols-outlined text-[20px]">local_shipping</span>
          </div>
          <h2 className="text-white text-lg font-bold tracking-tight">
            GUARDIAN <span className="text-primary font-normal text-sm ml-1 opacity-80">| FLEET COMMAND</span>
          </h2>
        </div>
        <nav className="hidden xl:flex items-center gap-1 p-1 bg-[#1c2624] rounded-full border border-[#2C3A37]">
          <Link className="text-slate-300 hover:text-primary hover:bg-[#2C3A37] px-4 py-2 rounded-full text-sm font-medium transition-all" href="/">
            Dashboard
          </Link>
          <Link className="text-slate-300 hover:text-primary hover:bg-[#2C3A37] px-4 py-2 rounded-full text-sm font-medium transition-all" href="#live-map">
            Live Map
          </Link>
          <Link className="bg-primary text-background-dark px-4 py-2 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(19,236,218,0.3)]" href="#loss-analysis">
            Loss Analysis
          </Link>
          <Link className="text-slate-300 hover:text-primary hover:bg-[#2C3A37] px-4 py-2 rounded-full text-sm font-medium transition-all" href="#digital-control">
            Digital Control
          </Link>
          <Link className="text-slate-300 hover:text-primary hover:bg-[#2C3A37] px-4 py-2 rounded-full text-sm font-medium transition-all" href="#drivers">
            Drivers
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-[#1c2624] rounded-full px-4 py-2 border border-[#2C3A37] w-64 focus-within:border-primary/50 transition-colors">
          <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
          <input className="bg-transparent border-none text-sm text-white focus:ring-0 w-full placeholder:text-slate-500 font-mono" placeholder="Search Unit ID..." type="text"/>
        </div>
        <button className="flex items-center justify-center size-10 rounded-full bg-[#1c2624] text-white hover:bg-primary hover:text-background-dark transition-colors border border-[#2C3A37] relative">
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-[#1c2624]"></span>
          <span className="material-symbols-outlined text-[20px]">notifications</span>
        </button>
        <button className="flex items-center justify-center size-10 rounded-full bg-[#1c2624] text-white hover:bg-primary hover:text-background-dark transition-colors border border-[#2C3A37]">
          <span className="material-symbols-outlined text-[20px]">account_circle</span>
        </button>
      </div>
    </header>
  );
}
