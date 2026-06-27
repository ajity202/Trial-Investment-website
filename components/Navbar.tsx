"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/60 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl lg:text-3xl font-bold text-white hover:text-green-400 transition">
              Stock Guru AI
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">

            <a
              href="#features"
              className="text-white/80 hover:text-green-400 transition"
            >
              Features
            </a>

            <a
              href="#pricing"
              className="text-white/80 hover:text-green-400 transition"
            >
              Pricing
            </a>

            <a
              href="#sample-report"
              className="text-white/80 hover:text-green-400 transition"
            >
              Sample Report
            </a>

            <Link
              href="/login"
              className="border border-white/20 px-5 py-2.5 rounded-xl text-white hover:bg-white/5 transition"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="bg-green-500 hover:bg-green-400 text-black font-semibold px-5 py-2.5 rounded-xl transition shadow-lg shadow-green-500/20"
            >
              Start Free
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-white"
          >
            <Menu size={30} />
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={closeMenu}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-full sm:w-[380px] bg-slate-950 border-l border-white/10 p-8 transition-transform duration-300 ${
            mobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >

          {/* Header */}
          <div className="flex items-start justify-between">

            <div>

              <h2 className="text-2xl font-bold text-white">
                Stock Guru AI
              </h2>


            </div>

            <button onClick={closeMenu}>
              <X
                size={30}
                className="text-white"
              />
            </button>

          </div>

          {/* Divider */}
          <div className="border-b border-white/10 mt-6 mb-8" />

          {/* Navigation */}
          <div className="flex flex-col gap-6 text-lg">

            <a
              href="#features"
              onClick={closeMenu}
              className="text-white hover:text-green-400 transition py-2"
            >
              Features
            </a>

            <a
              href="#pricing"
              onClick={closeMenu}
              className="text-white hover:text-green-400 transition py-2"
            >
              Pricing
            </a>

            <a
              href="#sample-report"
              onClick={closeMenu}
              className="text-white hover:text-green-400 transition py-2"
            >
              Sample Report
            </a>

            <Link
              href="/login"
              onClick={closeMenu}
              className="text-white hover:text-green-400 transition py-2"
            >
              Login
            </Link>

            <Link
              href="/signup"
              onClick={closeMenu}
              className="mt-4 bg-green-500 hover:bg-green-400 text-black text-center font-semibold py-3 rounded-xl transition shadow-lg shadow-green-500/20"
            >
              Start Free
            </Link>

          </div>

        </div>

      </div>
    </>
  );
}