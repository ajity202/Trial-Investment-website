import {
  Search,
  Database,
  BrainCircuit,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
  {
    icon: Search,
    title: "Choose a Company",
    description:
      "Search any NSE-listed company using its name or stock ticker.",
  },
  {
    icon: Database,
    title: "AI Collects Data",
    description:
      "Financial statements, exchange filings, earnings calls and trusted market news are gathered automatically.",
  },
  {
    icon: BrainCircuit,
    title: "AI Performs Analysis",
    description:
      "Our AI evaluates financial quality, growth, valuation, risks and overall business strength.",
  },
  {
    icon: FileText,
    title: "Get Your AI Report",
    description:
      "Receive a structured report with AI score, strengths, risks and actionable insights.",
  },
];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

<div className="text-center">

  <p className="text-green-600 font-semibold uppercase tracking-[0.2em] text-sm">
    How It Works
  </p>

  <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
    From Stock Search to AI Report in Four Simple Steps
  </h2>

  <p className="mt-5 text-slate-500 text-base sm:text-lg max-w-3xl mx-auto leading-8">
    Stock Guru AI automates the research process by collecting trusted financial
    data, analyzing it with AI and generating an easy-to-understand investment report.
  </p>

</div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 mt-16">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative"
              >
                <div className="
    group
    relative
    bg-slate-50
    border
    border-slate-200
    rounded-3xl
    p-7
    h-full
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-green-300
    hover:shadow-xl
                ">

                   <div className="
    h-18
    w-18
    rounded-2xl
    bg-green-50
    border
    border-green-200
    rounded-full
    flex
    items-center
    justify-center
    transition-all
    duration-300
    group-hover:bg-green-500
  ">
                     <Icon className="h-8 w-8 text-green-600 group-hover:text-white transition" />
                  </div>

                  <div className="mt-6 text-sm font-semibold text-green-600">
                    Step {index + 1}
                  </div>

                   <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                    {step.title}
                    </h3>

                  <p className="mt-4 text-slate-500 leading-7">
                    {step.description}
                    </p>

                </div>

                {index !== steps.length - 1 && (
                  <ArrowRight
                    className="
                      hidden
                      xl:block
                      absolute
                      -right-6
                      top-1/2
                      -translate-y-1/2
                      text-slate-300
                       w-6
                       h-6
                    "
                  />
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}