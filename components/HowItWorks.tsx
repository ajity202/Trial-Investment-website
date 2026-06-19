import {
  Search,
  Brain,
  FileText,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Search Any Stock",
      description:
        "Enter any NSE or BSE listed company.",
    },
    {
      icon: Brain,
      title: "AI Analyzes Everything",
      description:
        "Financials, news, filings and market sentiment.",
    },
    {
      icon: FileText,
      title: "Generate Report",
      description:
        "Receive a structured AI-powered analysis.",
    },
    {
      icon: TrendingUp,
      title: "Make Better Decisions",
      description:
        "Understand opportunities and risks instantly.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-green-600 font-semibold uppercase tracking-widest text-sm">
            How It Works
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Get A Complete Stock Analysis In Under 60 Seconds
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Our AI automates the research process so you can focus
            on making better investment decisions.
          </p>

        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative"
              >
                <div className="
                  bg-slate-50
                  border
                  border-slate-200
                  rounded-3xl
                  p-6
                  text-center
                  h-full
                  hover:shadow-xl
                  transition-all
                  duration-300
                ">

                  <div className="
                    h-14
                    w-14
                    rounded-2xl
                    bg-green-100
                    mx-auto
                    flex
                    items-center
                    justify-center
                  ">
                    <Icon className="h-7 w-7 text-green-600" />
                  </div>

                  <div className="mt-4 text-sm text-green-600 font-medium">
                    Step {index + 1}
                  </div>

                  <h3 className="font-semibold text-lg mt-2">
                    {step.title}
                  </h3>

                  <p className="text-slate-500 text-sm mt-3">
                    {step.description}
                  </p>

                </div>

                {index !== steps.length - 1 && (
                  <ArrowRight
                    className="
                      hidden
                      lg:block
                      absolute
                      -right-5
                      top-1/2
                      -translate-y-1/2
                      text-slate-300
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