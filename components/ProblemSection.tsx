import {
  FileStack,
  Globe,
  Clock3,
  CircleHelp,
  CheckCircle2,
} from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: FileStack,
      title: "Too Much Information",
      items: [
        "Annual Reports",
        "Quarterly Results",
        "Exchange Filings",
        "Earnings Calls",
      ],
    },
    {
      icon: Globe,
      title: "Multiple Websites",
      items: [
        "NSE",
        "BSE",
        "Moneycontrol",
        "Screener",
      ],
    },
    {
      icon: Clock3,
      title: "Hours of Research",
      items: [
        "Financial Data",
        "Market News",
        "Management Commentary",
        "Financial Ratios",
      ],
    },
    {
      icon: CircleHelp,
      title: "Still Uncertain",
      items: [
        "Should I Buy?",
        "Should I Hold?",
        "Should I Sell?",
        "When Should I Exit?",
      ],
    },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="text-green-600 font-semibold uppercase tracking-[0.2em] text-sm">
            The Problem
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Why Stock Research Feels So Difficult
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-500 text-base sm:text-lg leading-8">
            Retail investors spend hours gathering information from
            multiple websites before making a single investment decision.
          </p>

        </div>

        {/* Problem Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 mt-16">

          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-3xl
                  border
                  border-slate-200
                  p-7
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-green-300
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    h-16
                    w-16
                    rounded-2xl
                    bg-green-100
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    group-hover:bg-green-500
                  "
                >
                  <Icon className="h-8 w-8 text-green-600 group-hover:text-white transition" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {problem.title}
                </h3>

                <ul className="mt-6 space-y-4">

                  {problem.items.map((item) => (

                    <li
                      key={item}
                      className="flex items-center gap-3 text-slate-600"
                    >

                      <div className="h-2 w-2 rounded-full bg-green-500" />

                      {item}

                    </li>

                  ))}

                </ul>

              </div>
            );
          })}

        </div>

        {/* Solution */}

        <div className="mt-20">

          <div className="rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 p-10 text-white shadow-xl">

            <h3 className="text-3xl font-bold text-center">
              Stock Guru AI Solves This.
            </h3>

            <p className="text-center text-green-50 mt-4 max-w-2xl mx-auto leading-7">
              Instead of researching across multiple platforms,
              let AI collect, analyze and summarize everything
              into one structured investment report.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

              {[
                "One Platform",
                "AI-Powered Analysis",
                "Structured Reports",
                "Trusted Financial Data",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-white/10
                    px-5
                    py-4
                    backdrop-blur-sm
                  "
                >

                  <CheckCircle2 className="h-6 w-6 flex-shrink-0" />

                  <span className="font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}