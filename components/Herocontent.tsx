import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="text-center lg:text-left">

      {/* Badge */}
      <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
        AI-Powered Stock Research
      </span>

      {/* Heading */}
      <h1 className="mt-6 font-bold leading-tight text-5xl sm:text-6xl lg:text-7xl">

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

      {/* Description */}
      <p className="mt-6 text-gray-300 text-lg leading-8 max-w-xl mx-auto lg:mx-0">

        Stock Guru AI analyzes financials, earnings calls,
        news and market data to deliver structured
        investment insights within seconds.

      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

        <Link
          href="/signup"
          className="
            bg-green-500
            hover:bg-green-400
            text-black
            font-semibold
            px-8
            py-4
            rounded-xl
            transition
            text-center
            shadow-lg
            shadow-green-500/20
          "
        >
          Analyze a Stock →
        </Link>

        <a
          href="#sample-report"
          className="
            border
            border-white/20
            hover:bg-white/10
            transition
            px-8
            py-4
            rounded-xl
            text-center
          "
        >
          View Sample Report
        </a>

      </div>

      {/* Trust Section */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">

        {/* Avatars */}
        <div className="flex -space-x-3">

          <div className="w-10 h-10 rounded-full bg-slate-400 border-2 border-slate-900" />

          <div className="w-10 h-10 rounded-full bg-slate-500 border-2 border-slate-900" />

          <div className="w-10 h-10 rounded-full bg-slate-600 border-2 border-slate-900" />

          <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900" />

        </div>

        {/* Rating */}
        <div>

          <p className="text-yellow-400 font-bold text-lg">
            ★★★★★
          </p>

          <p className="text-sm text-gray-400">
            Trusted by Retail Investors
          </p>

        </div>

      </div>

    </div>
  );
}