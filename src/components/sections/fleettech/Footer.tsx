export default function Footer() {
  return (
    <footer className="bg-[#0c1017] border-t border-border-dark py-12 px-6 md:px-10 lg:px-40">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3 text-white">
          <div className="size-6 text-primary">
            <span className="material-symbols-outlined !text-[24px]">local_shipping</span>
          </div>
          <h2 className="text-lg font-bold tracking-tight">FleetTech</h2>
        </div>
        <div className="text-slate-500 text-sm">
          © 2023 FleetTech Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
