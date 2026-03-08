const steps = [
  {
    number: "01",
    icon: "search",
    title: "Audit",
    description: "Deep analysis of current fleet efficiency and costs.",
    active: true,
  },
  {
    number: "02",
    icon: "architecture",
    title: "Model Dev",
    description: "Creating a custom optimization strategy.",
    active: true,
  },
  {
    number: "03",
    icon: "rocket_launch",
    title: "Launch",
    description: "Implementation of new protocols and tools.",
    active: true,
  },
  {
    number: "04",
    icon: "tune",
    title: "Control",
    description: "Ongoing monitoring and management.",
    active: false,
  },
  {
    number: "05",
    icon: "analytics",
    title: "Reporting",
    description: "Regular analytics and improvement steps.",
    active: false,
  },
];

export default function Timeline() {
  return (
    <section className="py-20 px-6 bg-[#0b0d10] border-y border-border-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">
            Our Process
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-bold">Workflow Stages</h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:grid grid-cols-5 gap-4 relative">
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 w-full h-0.5 bg-border-dark z-0"></div>
          <div className="absolute top-16 left-0 w-3/5 h-0.5 bg-gradient-to-r from-primary to-blue-900 z-0"></div>

          {steps.map((step) => (
            <div
              key={step.title}
              className="relative z-10 flex flex-col items-center md:items-start group cursor-default"
            >
              <div className="text-slate-500 mb-6 font-mono text-sm group-hover:text-primary transition-colors">
                {step.number}
              </div>
              <div
                className={`w-12 h-12 rounded-full bg-surface-dark flex items-center justify-center mb-6 transition-all bg-[#0b0d10] ${
                  step.active
                    ? "border-2 border-primary shadow-[0_0_15px_rgba(37,106,244,0.3)] group-hover:scale-110"
                    : "border-2 border-border-dark group-hover:border-slate-400 group-hover:scale-110"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-xl ${
                    step.active ? "text-primary" : "text-slate-400"
                  }`}
                >
                  {step.icon}
                </span>
              </div>
              <h4
                className={`font-bold text-lg mb-2 ${
                  step.active ? "text-white" : "text-slate-200"
                }`}
              >
                {step.title}
              </h4>
              <p className="text-slate-500 text-sm leading-snug">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="flex md:hidden flex-col gap-8 relative">
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-border-dark"></div>

          {steps.map((step) => (
            <div key={step.title} className="flex gap-6 relative">
              <div
                className={`w-12 h-12 rounded-full bg-surface-dark flex items-center justify-center shrink-0 z-10 bg-[#0b0d10] ${
                  step.active
                    ? "border-2 border-primary"
                    : "border-2 border-border-dark"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-lg ${
                    step.active ? "text-primary" : "text-slate-400"
                  }`}
                >
                  {step.icon}
                </span>
              </div>
              <div>
                <span
                  className={`text-xs font-mono mb-1 block ${
                    step.active ? "text-primary" : "text-slate-500"
                  }`}
                >
                  STEP {step.number}
                </span>
                <h4
                  className={`font-bold text-lg ${
                    step.active ? "text-white" : "text-slate-200"
                  }`}
                >
                  {step.title}
                </h4>
                <p className="text-slate-500 text-sm mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
