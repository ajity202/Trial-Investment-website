import {
  FileText,
  TrendingUp,
  TrendingDown,
  ShieldAlert,
} from "lucide-react";

export default function ReportPreview() {
  return (
    <div
      className="
        w-full
        bg-white
        rounded-[28px]
        border
        border-slate-200
        shadow-xl
        overflow-hidden
      "
    >

      {/* Header */}

      <div className="bg-slate-900 text-white p-8">

        <div className="flex items-center gap-4">

          <div className="h-14 w-14 rounded-2xl bg-green-500/20 flex items-center justify-center">

            <FileText className="h-7 w-7 text-green-400" />

          </div>

          <div>

            <p className="text-green-400 text-sm uppercase tracking-wider">
              AI Stock Research Report
            </p>

            <h3 className="text-2xl font-bold mt-1">
              Tata Consultancy Services Ltd.
            </h3>

            <p className="text-slate-400 text-sm mt-1">
              NSE : TCS
            </p>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="p-8">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

          <div>

            <p className="text-slate-500">
              AI Investment Score
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold text-green-600 mt-2">
              82
            </h2>

          </div>

          <div className="bg-green-100 text-green-700 font-semibold px-5 py-3 rounded-full">
            Moderately Bullish
          </div>

        </div>

        <div className="mt-10">

          <h4 className="text-xl font-semibold text-slate-900">
            Executive Summary
          </h4>

          <p className="text-slate-600 mt-4 leading-8">
            Strong revenue growth, healthy balance sheet,
            improving cash flow and positive earnings
            momentum indicate strong long-term fundamentals.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 gap-5 mt-10">

          <div className="bg-green-50 border border-green-100 rounded-2xl p-5">

            <div className="flex items-center gap-2 text-green-700 font-semibold">

              <TrendingUp size={18} />

              Positive Signals

            </div>

            <ul className="mt-4 space-y-3 text-sm text-slate-700">

              <li>✓ Revenue Growth</li>
              <li>✓ Strong Cash Flow</li>
              <li>✓ Healthy Balance Sheet</li>

            </ul>

          </div>

          <div className="bg-red-50 border border-red-100 rounded-2xl p-5">

            <div className="flex items-center gap-2 text-red-700 font-semibold">

              <TrendingDown size={18} />

              Key Risks

            </div>

            <ul className="mt-4 space-y-3 text-sm text-slate-700">

              <li>⚠ Premium Valuation</li>
              <li>⚠ Global IT Spending</li>

            </ul>

          </div>

        </div>

        <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-5">

          <div className="flex items-center gap-2 text-yellow-700 font-semibold">

            <ShieldAlert size={18} />

            Overall Risk

          </div>

          <p className="mt-3 text-slate-700">
            Moderate
          </p>

        </div>

        <button className="mt-10 w-full rounded-xl bg-slate-900 py-4 text-white font-medium hover:bg-slate-800 transition">

          Preview Full Report →

        </button>

      </div>

    </div>
  );
}