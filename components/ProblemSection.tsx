import {
  Clock3,
  Files,
  BrainCircuit,
} from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: Clock3,
      title: "Too Time Consuming",
      description:
        "Analyzing a stock manually requires hours of reading annual reports, financial statements and news.",
    },
    {
      icon: Files,
      title: "Information Everywhere",
      description:
        "Financial data, company filings and market news are scattered across multiple platforms.",
    },
    {
      icon: BrainCircuit,
      title: "Hard To Interpret",
      description:
        "Even experienced investors struggle to connect financial metrics with actual investment decisions.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <p className="text-green-600 font-semibold uppercase tracking-widest text-sm">
            The Problem
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Every Investor Faces These Challenges
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Investing should not require hours of research across
            multiple websites, reports and news sources.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-sm
                  border
                  border-slate-200
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center">

                  <Icon className="h-7 w-7 text-green-600" />

                </div>

                <h3 className="text-xl font-semibold text-slate-900 mt-6">
                  {problem.title}
                </h3>

                <p className="text-slate-500 mt-4 leading-relaxed">
                  {problem.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}