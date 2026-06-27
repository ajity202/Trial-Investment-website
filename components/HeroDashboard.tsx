import {
  TrendingUp,
  Building2,
} from "lucide-react";

export default function HeroDashboard() {
  return (
    <div className="max-w-xl lg:max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 sm:p-7 lg:p-10 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-green-500/10">

  {/* Header */}

  <div className="flex flex-col sm:flex-row justify-between items-start gap-5">

    <div className="flex gap-3">

      <div className="h-12 w-12 rounded-xl bg-green-500/20 flex items-center justify-center">

        <Building2 className="w-6 h-6 text-green-400" />

      </div>

      <div>

        <h3 className="font-semibold text-base sm:text-lg">
          Tata Consultancy Services Ltd.
        </h3>

        <p className="text-sm text-gray-400">
          TCS • NSE
        </p>

      </div>

    </div>

    <div className="text-left sm:text-right">

      <h3 className="font-bold text-lg sm:text-xl">
        ₹3,952.30
      </h3>

      <p className="text-green-400 text-sm flex items-center sm:justify-end gap-1">

        <TrendingUp className="w-4 h-4" />

        +45.80 (1.17%)

      </p>

    </div>

  </div>

  {/* Divider */}

  <div className="border-t border-white/10 my-6" />

  {/* Main Grid */}

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

    {/* Left */}

    <div>

      <p className="text-sm text-gray-400">
        Overall AI Verdict
      </p>

      <h4 className="text-green-400 font-semibold mt-2">
        Moderately Bullish
      </h4>

      {/* Gauge */}

      <div className="mt-6 flex justify-center">

        <div className="relative w-40 sm:w-44 h-28">

          <svg
            viewBox="0 0 200 120"
            className="w-full h-full"
          >

            <path
              d="M20 100 A80 80 0 0 1 180 100"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="14"
              strokeLinecap="round"
            />

            <path
              d="M20 100 A80 80 0 0 1 180 100"
              fill="none"
              stroke="#00E676"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray="200"
              strokeDashoffset="44"
            />

          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center pt-6">

            <div className="text-4xl sm:text-5xl font-bold">
              78
            </div>

            <div className="text-xs text-gray-400">
              AI Score
            </div>

          </div>

        </div>

      </div>

      {/* Confidence */}

      <div className="mt-6">

        <p className="text-sm text-gray-400">
          Confidence
        </p>

        <p className="text-green-400 font-semibold">
          High
        </p>

        <div className="mt-2 text-xs text-gray-400">
          Strong investment outlook
        </div>

      </div>

    </div>

    {/* Right */}

    <div className="space-y-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Positive */}

        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4">

          <h4 className="text-green-400 font-semibold mb-3">
            Positive Signals
          </h4>

          <ul className="space-y-2 text-sm">

            <li>✓ Revenue Growth</li>

            <li>✓ Healthy Cash Flow</li>

            <li>✓ Strong Balance Sheet</li>

          </ul>

        </div>

        {/* Negative */}

        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4">

          <h4 className="text-red-400 font-semibold mb-3">
            Negative Signals
          </h4>

          <ul className="space-y-2 text-sm">

            <li>⚠ Margin Pressure</li>

            <li>⚠ Global Slowdown</li>

            <li>⚠ Currency Risk</li>

          </ul>

        </div>

      </div>

      {/* Analysis Info */}

      <div className="bg-white/5 rounded-2xl p-4 border border-white/10">

        <div className="flex flex-col sm:flex-row justify-between gap-4">

          <div>

            <p className="text-gray-400 text-sm">
              Analysis Date
            </p>

            <p className="font-medium">
              24 May 2024
            </p>

          </div>

          <div className="sm:text-right">

            <p className="text-gray-400 text-sm">
              AI Score
            </p>

            <p className="text-green-400 font-bold">
              78 / 100
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

      {/* News Sentiment */}
      <div className="border-t border-white/10 mt-6 pt-6">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">

          <h4 className="text-sm text-gray-400">
            News Sentiment
          </h4>

          <span className="text-green-400 text-sm font-medium">
            Bullish 68%
          </span>

        </div>

        <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">

          <div className="bg-green-500 h-full w-[68%] rounded-full"></div>

        </div>

      </div>

      {/* Tabs */}
      <div className="border-t border-white/10 mt-6 pt-4">

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">

          <button className="bg-white/10 rounded-lg py-2 hover:bg-white/20 transition">
            Financial
          </button>

          <button className="bg-white/5 rounded-lg py-2 hover:bg-white/20 transition">
            News
          </button>

          <button className="bg-white/5 rounded-lg py-2 hover:bg-white/20 transition">
            Risks
          </button>

          <button className="bg-white/5 rounded-lg py-2 hover:bg-white/20 transition">
            AI Summary
          </button>

        </div>

      </div>

    </div>
  );
}