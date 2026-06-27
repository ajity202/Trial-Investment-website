import {
  FileText,
  FileBarChart,
  Newspaper,
  ShieldAlert,
  Sparkles,
  Mic,
} from "lucide-react";

export default function ReportFeatures() {

  const reportSections = [

    {
      title: "Executive Summary",
      description: "AI-generated overview of company performance.",
      icon: FileText,
    },

    {
      title: "Financial Analysis",
      description: "In-depth financial statement analysis.",
      icon: FileBarChart,
    },

    {
      title: "Earnings Call AI",
      description: "Management insights from earnings calls.",
      icon: Mic,
    },

    {
      title: "News Intelligence",
      description: "AI-powered market news analysis.",
      icon: Newspaper,
    },

    {
      title: "Risk Assessment",
      description: "Financial and governance risk detection.",
      icon: ShieldAlert,
    },

    {
      title: "+20 More Insights",
      description: "Ratios, valuation, PDF export and more.",
      icon: Sparkles,
    },

  ];

  return (

    <div>

      <p className="text-green-600 font-semibold uppercase tracking-[0.2em] text-sm">
        What's Inside Your Report
      </p>

      <h3 className="mt-3 text-2xl lg:text-4xl font-bold text-slate-900">
        Comprehensive AI-Powered Insights
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

        {reportSections.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="
                h-full
                bg-white
                border
                border-slate-200
                rounded-[28px]
                p-7
                hover:-translate-y-1
                hover:shadow-xl
                hover:border-green-200
                transition-all
              "
            >

              <div className="h-20 w-20 rounded-full bg-green-50 flex items-center justify-center">

                <Icon className="h-8 w-8 text-green-500" />

              </div>

              <h4 className="mt-6 text-lg font-semibold text-slate-900">

                {item.title}

              </h4>

              <p className="mt-3 text-slate-500 leading-7 text-sm">

                {item.description}

              </p>

            </div>

          );

        })}

      </div>

    </div>

  );
}