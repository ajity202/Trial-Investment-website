export default function Herocontent() {
  return (
    <div>
      <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
        AI-Powered Stock Research
      </span>

      <h1 className="text-6xl font-bold mt-6 leading-tight">
        Smarter Stock
        <br />
        <span className="text-green-400">
          Analysis.
        </span>
        <br />
        Better Investment
        <br />
        Decisions.
      </h1>

      <p className="text-gray-300 mt-6 text-lg max-w-xl">
        Stock Guru AI analyzes financials, news and market data
        to deliver structured insights within seconds.
      </p>

      <div className="flex gap-4 mt-8">
        <button className="bg-green-500 hover:bg-green-400 transition px-6 py-3 rounded-xl font-medium">
          Analyze a Stock →
        </button>

        <button className="border border-white/20 hover:bg-white/10 transition px-6 py-3 rounded-xl">
          View Sample Report
        </button>
      </div>

      <div className="flex items-center gap-4 mt-10">
        <div className="flex -space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-400 border-2 border-slate-900"></div>
          <div className="w-10 h-10 rounded-full bg-slate-500 border-2 border-slate-900"></div>
          <div className="w-10 h-10 rounded-full bg-slate-600 border-2 border-slate-900"></div>
          <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900"></div>
        </div>

        <div>
          <p className="text-yellow-400 font-bold">
            ★★★★★
          </p>

          <p className="text-sm text-gray-400">
            Built for Retail Investors
          </p>
        </div>
      </div>
    </div>
  );
}