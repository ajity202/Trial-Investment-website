export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>

            <h3 className="text-2xl font-bold">
              Stock Guru AI
            </h3>

            <p className="text-slate-400 mt-4 leading-relaxed">
              AI-powered stock analysis platform built for modern investors.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mt-6 text-sm">

              <a
                href="#"
                className="text-slate-400 hover:text-green-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-green-400 transition"
              >
                X
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-green-400 transition"
              >
                YouTube
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-green-400 transition"
              >
                Website
              </a>

            </div>

          </div>

          {/* Product */}
          <div>

            <h4 className="font-semibold mb-4">
              Product
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Sample Reports
                </a>
              </li>

            </ul>

          </div>

          {/* Resources */}
          <div>

            <h4 className="font-semibold mb-4">
              Resources
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Documentation
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Support
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-400 transition">
                  FAQs
                </a>
              </li>

            </ul>

          </div>

          {/* Legal */}
          <div>

            <h4 className="font-semibold mb-4">
              Legal
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Terms of Service
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Disclaimer
                </a>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-sm">
            © 2026 Stock Guru AI. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm mt-4 md:mt-0">
            Educational purposes only. Not investment advice.
          </p>

        </div>

      </div>

    </footer>
  );
}