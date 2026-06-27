import Image from "next/image";

export default function Trust() {
  const logos = [
    { name: "NSE", src: "/logos/NSE.svg", size: "h-12" },
    { name: "BSE", src: "/logos/BSE.svg", size: "h-12" },
    { name: "Moneycontrol", src: "/logos/moneycontrol.svg", size: "h-12" },
    { name: "Economic Times", src: "/logos/economics times.svg", size: "h-14" },
    { name: "Mint", src: "/logos/mint.svg", size: "h-12" },
    { name: "Screener", src: "/logos/screener.svg", size: "h-10" },
  ];

  const dataSources = [
    "Financial Statements",
    "Exchange Filings",
    "Quarterly Results",
    "Earnings Calls",
    "Corporate Actions",
    "Market News",
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">

          <p className="text-green-600 font-semibold uppercase tracking-[0.2em] text-sm">
            Trusted Data Sources
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Powered by Reliable Financial Data
          </h2>

          <p className="mt-5 text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-8">
            Stock Guru AI combines exchange filings, financial statements,
            earnings calls and trusted market intelligence to generate
            structured investment insights.
          </p>

        </div>

        {/* Logos */}
        <div className="mt-14">

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">

            {logos.map((logo) => (

              <div
                key={logo.name}
                className="
                  h-24
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-green-300
                  hover:shadow-xl
                  hover:shadow-green-100
                "
              >

                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={150}
                  height={60}
                  className={`${logo.size} w-auto object-contain`}
                />

              </div>

            ))}

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 mt-14 pt-10">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

            {dataSources.map((item) => (

              <div
                key={item}
                className="
                  rounded-xl
                  bg-green-50
                  border
                  border-green-100
                  py-4
                  px-3
                  text-center
                  text-sm
                  font-medium
                  text-slate-700
                  transition-all
                  duration-300
                  hover:bg-green-100
                "
              >
                ✓ {item}
              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}