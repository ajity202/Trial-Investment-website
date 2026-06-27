import HeroContent from "./Herocontent";
import HeroDashboard from "./HeroDashboard";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">

      {/* Background */}
      <HeroBackground />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 md:pt-40 lg:pt-44 pb-16 md:pb-24 lg:pb-36">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-16 items-center">

          {/* Left */}
          <div className="order-1">
            <HeroContent />
          </div>

          {/* Right */}
          <div className="order-2 flex justify-center lg:justify-end">
            <HeroDashboard />
          </div>

        </div>

      </div>

    </section>
  );
}