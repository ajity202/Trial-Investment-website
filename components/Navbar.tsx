export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-white">
          Stock Guru AI
        </h1>

        <div className="flex items-center gap-6">

          <a href="#" className="text-white">
            Features
          </a>

          <a href="#" className="text-white">
            Pricing
          </a>

          <a href="#" className="text-white">
            About
          </a>

          <button className="text-white border border-white/20 px-4 py-2 rounded-lg">
            Login
          </button>

          <button className="bg-green-500 px-4 py-2 rounded-lg text-white">
            Start Free
          </button>

        </div>
      </div>
    </nav>
  );
}