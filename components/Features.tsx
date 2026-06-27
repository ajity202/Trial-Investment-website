import {
  BarChart3,
  BrainCircuit,
  FileText,
  Mic,
  Newspaper,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

export default function Features() {
  const features = [
  {
    icon: BarChart3,
    title: "Financial Analysis",
    description:
      "Analyze revenue, profitability, balance sheet, cash flow and key financial ratios in seconds.",
  },
  {
    icon: Mic,
    title: "Earnings Call Intelligence",
    description:
      "AI reads lengthy earnings call transcripts and highlights the most important management insights.",
  },
  {
    icon: Newspaper,
    title: "News Intelligence",
    description:
      "Track market-moving news and identify bullish, bearish and neutral sentiment instantly.",
  },
  {
    icon: ShieldAlert,
    title: "Risk Detection",
    description:
      "Identify financial, governance and operational risks before making investment decisions.",
  },
  {
    icon: BrainCircuit,
    title: "AI Investment Score",
    description:
      "Every company receives a structured AI score based on multiple financial and qualitative factors.",
  },
  {
    icon: FileText,
    title: "Professional Reports",
    description:
      "Download structured research reports that are easy to understand and backed by trusted data.",
  },
];
  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        {/* Heading */}

<div className="text-center">

  <p className="text-green-400 font-semibold uppercase tracking-[0.2em] text-sm">
    AI Capabilities
  </p>

  <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
    AI Research Designed for Smarter Investing
  </h2>

  <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-base sm:text-lg leading-7">
    Stock Guru AI combines financial statements,
    earnings calls, market news and AI-powered
    reasoning into one comprehensive investment
    research platform.
  </p>

</div>

        {/* Feature Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-16">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
  key={index}
  className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-white/5
    p-7 lg:p-8
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-green-500/40
    hover:shadow-2xl
    hover:shadow-green-500/10
  "
>

  {/* Icon */}

  <div className="
    h-16
    w-16
    rounded-2xl
    bg-green-500/10
    flex
    items-center
    justify-center
    transition
    duration-500
    group-hover:bg-green-500
  ">

    <Icon className="h-8 w-8 text-green-400 group-hover:text-black transition" />

  </div>

  {/* Title */}

  <h3 className="text-2xl font-semibold mt-7">
    {feature.title}
  </h3>

  {/* Description */}

  <p className="text-slate-400 mt-4 leading-8">
    {feature.description}
  </p>

  {/* Bottom */}

  <div className="mt-8 flex items-center justify-between">

    <span className="text-green-400 text-sm font-medium">
      Learn More
    </span>

    <ArrowRight
      className="
        h-5
        w-5
        text-green-400
        transition-transform
        duration-300
        group-hover:scale-110
        group-hover:text-black
      "
    />

  </div>

  {/* Bottom Accent */}

  <div className="
    absolute
    bottom-0
    left-0
    h-1
    w-0
    bg-gradient-to-r
    from-green-400
    to-emerald-300
    transition-all
    duration-500
    group-hover:w-full
  " />

</div>            );
          })}

        </div>

      </div>
    </section>
  );
}