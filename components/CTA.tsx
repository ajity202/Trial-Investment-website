import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-[32px] p-12 text-white shadow-2xl border border-white/10">

          <p className="text-green-400 font-semibold uppercase tracking-widest text-sm">
            Start Today
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Ready To Analyze Stocks Smarter?
          </h2>

          <p className="text-slate-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            Generate professional AI-powered stock analysis reports
            in under 60 seconds and make more informed investment decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

            {/* Start Free */}

            <Link
              href="/signup"
              className="
                bg-green-500
                hover:bg-green-400
                text-black
                px-8
                py-4
                rounded-xl
                font-semibold
                flex
                items-center
                gap-2
                justify-center
                transition
                shadow-lg
                shadow-green-500/20
              "
            >
              Start Free

              <ArrowRight size={18} />

            </Link>

            {/* Sample Report */}

            <a
              href="#sample-report"
              className="
                border
                border-white/20
                hover:bg-white/10
                px-8
                py-4
                rounded-xl
                transition
              "
            >
              View Sample Report
            </a>

          </div>

          {/* Small Trust Text */}

          <p className="text-xs text-slate-400 mt-6">
            No credit card required • Get started in seconds
          </p>

        </div>

      </div>
    </section>
  );
}