import HeroContent from "./Herocontent";
import HeroDashboard from "./HeroDashboard";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">

      {/* Background Chart Pattern */}
      <HeroBackground />

      <div className="relative max-w-7xl mx-auto px-6 pt-44 pb-36">

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">

          {/* Left Side */}
          <HeroContent />

          {/* Right Side */}
          <HeroDashboard />

        </div>

      </div>

    </section>
  );
}