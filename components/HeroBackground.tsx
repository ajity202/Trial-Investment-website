export default function HeroBackground() {
  return (
    <div className="absolute inset-0 opacity-10 overflow-hidden">

      <svg
        className="w-full h-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
      >
        <path
          d="
          M0 400
          L100 350
          L200 380
          L300 250
          L400 300
          L500 220
          L600 280
          L700 150
          L800 200
          L900 120
          L1000 180
          L1100 80
          L1200 140
          "
          fill="none"
          stroke="#00E676"
          strokeWidth="3"
        />
      </svg>

    </div>
  );
}