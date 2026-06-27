import ReportPreview from "./ReportPreview";
import ReportFeatures from "./ReportFeatures";
import ReportCTA from "./ReportCTA";

export default function SampleReport() {
  return (
    <section
      id="sample-report"
      className="bg-white py-24"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="text-green-600 font-semibold uppercase tracking-[0.2em] text-sm">
            Inside Every AI Report
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Everything You Need To Make Better Investment Decisions
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-500 text-base sm:text-lg leading-8">
            Every report combines financial statements,
            earnings calls, market news and AI-powered
            insights into one professional research document.
          </p>

        </div>

        <div className="mt-16 lg:mt-20">

          <div
            className="
              grid
              grid-cols-1
              xl:grid-cols-[1.25fr_0.95fr]
              gap-12
              items-start
            "
          >

            <ReportPreview />

            <ReportFeatures />

          </div>

          <ReportCTA />

        </div>

      </div>
    </section>
  );
}