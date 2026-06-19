import {
  BrainCircuit,
  TrendingUp,
  ShieldAlert,
  Newspaper,
  Wallet,
  FileSearch,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Analysis",
      description:
        "Get structured stock research powered by AI in under 60 seconds.",
    },
    {
      icon: TrendingUp,
      title: "Positive vs Negative Signals",
      description:
        "Instantly identify strengths and risks of any company.",
    },
    {
      icon: Newspaper,
      title: "News Sentiment Analysis",
      description:
        "Track bullish, bearish and neutral sentiment from market news.",
    },
    {
      icon: Wallet,
      title: "Financial Health Assessment",
      description:
        "Analyze revenue growth, profit trends and cash flow instantly.",
    },
    {
      icon: ShieldAlert,
      title: "Risk Identification",
      description:
        "Understand potential risks before making investment decisions.",
    },
    {
      icon: FileSearch,
      title: "Source-Based Insights",
      description:
        "Every insight is backed by trusted financial and market data.",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-green-400 font-semibold uppercase tracking-widest text-sm">
            Powerful Features
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Everything You Need To Analyze Stocks Faster
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Stock Guru AI combines financial analysis,
            market sentiment and risk assessment into a
            single easy-to-understand report.
          </p>

        </div>

        {/* Feature Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  hover:border-green-500/40
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                <div className="
                  h-14
                  w-14
                  rounded-2xl
                  bg-green-500/10
                  flex
                  items-center
                  justify-center
                ">
                  <Icon className="h-7 w-7 text-green-400" />
                </div>

                <h3 className="text-xl font-semibold mt-6">
                  {feature.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}