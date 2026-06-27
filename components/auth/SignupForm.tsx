"use client";

import Link from "next/link";
import {
  Eye,
  EyeOff,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <div className="text-center mt-6">

        <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full text-sm">
          AI-Powered Stock Research
        </span>

        <h1 className="text-4xl font-bold text-white mt-6">
          Create Account
        </h1>

        <p className="text-gray-400 mt-3">
          Start analyzing stocks with AI in seconds.
        </p>

      </div>

      <form className="mt-8 space-y-5">

        <div>
          <label className="text-sm text-gray-300">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-green-500"
          />
        </div>

        <div>
          <label className="text-sm text-gray-300">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-green-500"
          />
        </div>

        <div>

          <label className="text-sm text-gray-300">
            Password
          </label>

          <div className="relative mt-2">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white outline-none focus:border-green-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>

        </div>

        <div>

          <label className="text-sm text-gray-300">
            Confirm Password
          </label>

          <div className="relative mt-2">

            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white outline-none focus:border-green-500"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>

        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-xl transition"
        >
          Create Free Account
        </button>

      </form>

      <div className="mt-6">

        <button className="w-full border border-white/10 py-3 rounded-xl text-white hover:bg-white/5 transition">
          Continue with Google
        </button>

      </div>

      <div className="flex items-center justify-center gap-2 mt-5 text-xs text-gray-400">

        <ShieldCheck
          size={14}
          className="text-green-400"
        />

        Secure account creation

      </div>

      <p className="text-center text-gray-400 text-sm mt-6">

        Already have an account?{" "}

        <Link
          href="/login"
          className="text-green-400 hover:text-green-300"
        >
          Login
        </Link>

      </p>

    </div>
  );
}