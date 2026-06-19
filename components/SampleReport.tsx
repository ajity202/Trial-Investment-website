import {
  TrendingUp,
  TrendingDown,
  ShieldAlert,
} from "lucide-react";

export default function SampleReport() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-green-600 font-semibold uppercase tracking-widest text-sm">
            Sample Report
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            See What You'll Receive
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Every analysis generates a structured report
            that helps you understand opportunities,
            risks and financial performance.
          </p>

        </div>

        {/* Report Card */}

        <div className="mt-16 bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">

          {/* Header */}

          <div className="bg-slate-900 text-white p-8">

            <div className="flex justify-between items-center">

              <div>
                <h3 className="text-2xl font-bold">
                  Tata Consultancy Services Ltd.
                </h3>

                <p className="text-slate-400 mt-1">
                  NSE: TCS
                </p>
              </div>

              <div className="text-right">

                <div className="text-5xl font-bold text-green-400">
                  78
                </div>

                <div className="text-green-400">
                  Moderately Bullish
                </div>

              </div>

            </div>

          </div>

          <div className="p-8">

            {/* Metrics */}

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-slate-50 rounded-2xl p-5">
                <p className="text-slate-500 text-sm">
                  Revenue Growth
                </p>

                <p className="text-2xl font-bold text-green-600 mt-2">
                  +14%
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5">
                <p className="text-slate-500 text-sm">
                  Profit Growth
                </p>

                <p className="text-2xl font-bold text-green-600 mt-2">
                  +18%
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5">
                <p className="text-slate-500 text-sm">
                  Debt To Equity
                </p>

                <p className="text-2xl font-bold mt-2">
                  0.12
                </p>
              </div>

            </div>

            {/* Signals */}

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div className="bg-green-50 border border-green-100 rounded-2xl p-6">

                <div className="flex items-center gap-2 text-green-700 font-semibold">
                  <TrendingUp size={18} />
                  Positive Signals
                </div>

                <ul className="mt-4 space-y-2 text-sm">
                  <li>Revenue Growth Improving</li>
                  <li>Strong Cash Flow</li>
                  <li>Healthy Balance Sheet</li>
                </ul>

              </div>

              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">

                <div className="flex items-center gap-2 text-red-700 font-semibold">
                  <TrendingDown size={18} />
                  Negative Signals
                </div>

                <ul className="mt-4 space-y-2 text-sm">
                  <li>Margin Pressure</li>
                  <li>Global Slowdown Risk</li>
                </ul>

              </div>

            </div>

            {/* Risk */}

            <div className="mt-8 bg-yellow-50 border border-yellow-100 rounded-2xl p-6">

              <div className="flex items-center gap-2 text-yellow-700 font-semibold">
                <ShieldAlert size={18} />
                Risk Assessment
              </div>

              <p className="mt-3 text-slate-700">
                Moderate risk due to global IT spending slowdown,
                but strong fundamentals provide downside protection.
              </p>

            </div>

            {/* AI Summary */}

            <div className="mt-8 bg-slate-50 rounded-2xl p-6">

              <h4 className="font-semibold text-slate-900">
                AI Summary
              </h4>

              <p className="text-slate-600 mt-3 leading-relaxed">
                TCS demonstrates strong revenue growth, healthy cash flow
                and solid balance sheet strength. While global demand
                concerns remain, the company appears fundamentally strong
                with a moderately bullish outlook.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}