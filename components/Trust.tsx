import Image from "next/image";

export default function Trust() {
  const logos = [
    { name: "NSE", src: "/logos/NSE.svg", size: "h-12" },
    { name: "BSE", src: "/logos/BSE.svg", size: "h-12" },
    { name: "Moneycontrol", src: "/logos/moneycontrol.svg", size: "h-12" },
    { name: "Economic Times", src: "/logos/economics times.svg", size: "h-16" },
    { name: "Mint", src: "/logos/mint.svg", size: "h-12" },
    { name: "Screener", src: "/logos/screener.svg", size: "h-10" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Trusted Data Sources
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
            Powered By Reliable Financial Data
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Our AI combines stock exchange data, company filings,
            financial statements and market news from trusted sources.
          </p>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 mt-14 pt-10">

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">

            {logos.map((logo) => (
              <div
                key={logo.name}
                className="
                  bg-slate-50
                  border
                  border-slate-200
                  rounded-2xl
                  h-24
                  flex
                  items-center
                  justify-center
                  hover:border-green-200
                  hover:shadow-lg
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={60}
                  className={`object-contain ${logo.size} w-auto`}
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}