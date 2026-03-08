export default function CTAEnterprise() {
    return (
        <section className="py-20 px-6 bg-background-dark relative border-t border-slate-800/50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to scale your fleet operations?</h2>
                <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
                    Partner with the industry leader in corporate fleet management. Get a customized plan that fits your global needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-bold transition-all shadow-xl shadow-blue-500/20 w-full sm:w-auto">
                        Schedule Consultation
                    </button>
                    <button className="bg-transparent hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-lg text-base font-bold transition-all w-full sm:w-auto">
                        View Case Studies
                    </button>
                </div>
            </div>
        </section>
    );
}
