import { Rocket } from "lucide-react";

export default function ReportCTA() {

  return (

    <div className="mt-20">

      <div className="rounded-[32px] border border-slate-200 bg-white shadow-xl overflow-hidden">

        <div className="flex flex-col xl:flex-row items-center justify-between gap-10 p-10">

          <div className="flex flex-col sm:flex-row items-center gap-6">

            <div className="h-24 w-24 rounded-full bg-green-50 flex items-center justify-center">

              <Rocket className="h-12 w-12 text-green-500" />

            </div>

            <div className="text-center sm:text-left">

              <h3 className="text-3xl font-bold text-slate-900">
                Generate Your First AI Report
              </h3>

              <p className="mt-3 text-slate-500 leading-7 max-w-xl">
                Analyze any NSE-listed company and receive a structured AI-powered investment report in under 60 seconds.
              </p>

            </div>

          </div>

          <div className="text-center">

            <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-12 py-5 rounded-2xl transition shadow-lg shadow-green-500/20">

              Start Free →

            </button>

            <p className="mt-3 text-sm text-slate-500">
              Takes less than 60 seconds
            </p>

          </div>

        </div>

        <div className="border-t border-slate-200 px-8 py-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-sm text-slate-600">

            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✓</span>
              No Credit Card Required
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✓</span>
              Cancel Anytime
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✓</span>
              AI-Powered Insights
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✓</span>
              Export PDF Report
            </div>

          </div>

        </div>

      </div>

    </div>

  );
}