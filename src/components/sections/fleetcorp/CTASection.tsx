import Link from "next/link";

export default function CTASection({ dict, locale }: { dict: any; locale: string }) {
  return (
    <section className="py-20 px-6 bg-background-dark relative border-t border-border-dark/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          {dict?.title || "Ready to scale your fleet operations?"}
        </h2>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          {dict?.description || "Partner with the industry leader in corporate fleet management."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-base font-bold transition-all shadow-xl shadow-orange-500/20 w-full sm:w-auto">
            {dict?.consultation || dict?.buttonConsultation || "Schedule Consultation"}
          </button>
          <Link href={`/${locale}/cases`} className="bg-transparent hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-lg text-base font-bold transition-all w-full sm:w-auto flex items-center justify-center">
            {dict?.cases || dict?.buttonCases || "View Case Studies"}
          </Link>
        </div>
      </div>
    </section>
  );
}
