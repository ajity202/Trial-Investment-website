import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      description: "Try Stock Guru AI",
      credits: "3 Free Reports",
      featured: false,
      features: [
        "AI Analysis",
        "News Sentiment",
        "Basic Report",
      ],
    },
    {
      name: "Starter",
      price: "₹99",
      description: "Perfect for retail investors",
      credits: "25 Credits",
      featured: true,
      features: [
        "Full AI Report",
        "Risk Assessment",
        "Positive & Negative Signals",
        "News Sentiment",
        "AI Summary",
      ],
    },
    {
      name: "Pro",
      price: "₹299",
      description: "For active investors",
      credits: "100 Credits",
      featured: false,
      features: [
        "Everything in Starter",
        "Priority Access",
        "Future Features",
        "Higher Usage Limits",
      ],
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-green-400 font-semibold uppercase tracking-widest text-sm">
            Pricing
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Simple Credit-Based Pricing
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Pay only for the stock reports you generate.
          </p>

        </div>

        {/* Credit Note */}

        <div className="mt-10 text-center">

          <span className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-full text-sm">
            1 Credit = 1 Stock Analysis Report
          </span>

        </div>

        {/* Pricing Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                rounded-3xl
                p-8
                border
                transition-all
                duration-300
                ${
                  plan.featured
                    ? "bg-green-500 text-black border-green-400 scale-105 shadow-2xl"
                    : "bg-white/5 border-white/10"
                }
              `}
            >

              {plan.featured && (
                <div className="inline-block bg-black text-white text-xs px-3 py-1 rounded-full mb-4">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <p className="mt-2 opacity-80">
                {plan.description}
              </p>

              <div className="text-5xl font-bold mt-6">
                {plan.price}
              </div>

              <div className="mt-2 font-semibold">
                {plan.credits}
              </div>

              <ul className="mt-8 space-y-4">

                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <Check size={18} />
                    {feature}
                  </li>
                ))}

              </ul>

              <button
                className={`
                  w-full
                  mt-8
                  py-3
                  rounded-xl
                  font-medium
                  ${
                    plan.featured
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }
                `}
              >
                Get Started
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}