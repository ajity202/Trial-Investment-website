import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-[32px] p-12 text-white shadow-2xl">

          <p className="text-green-400 font-semibold uppercase tracking-widest text-sm">
            Start Today
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Ready To Analyze Stocks Smarter?
          </h2>

          <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
            Generate professional AI-powered stock analysis reports
            in under 60 seconds and make more informed investment decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

            <button className="bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-xl font-semibold flex items-center gap-2 justify-center transition">
              Start Free
              <ArrowRight size={18} />
            </button>

            <button className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl transition">
              View Sample Report
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}