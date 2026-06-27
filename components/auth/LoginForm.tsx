"use client";

import Link from "next/link";
import {
  Eye,
  EyeOff,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

      {/* Back To Home */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      {/* Header */}
      <div className="text-center mt-6">

        <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full text-sm">
          AI-Powered Stock Research
        </span>

        <h1 className="text-4xl font-bold text-white mt-6">
          Welcome Back
        </h1>

        <p className="text-gray-400 mt-3">
          Access your AI-powered stock research dashboard.
        </p>

      </div>

      {/* Form */}
      <form className="mt-8 space-y-5">

        {/* Email */}
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

        {/* Password */}
        <div>

          <label className="text-sm text-gray-300">
            Password
          </label>

          <div className="relative mt-2">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white outline-none focus:border-green-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>

        </div>

        {/* Remember Me + Forgot Password */}
        <div className="flex items-center justify-between">

          <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">

            <input
              type="checkbox"
              className="accent-green-500"
            />

            Remember Me

          </label>

         <Link
         href="/forgot-password"
         className="text-sm text-green-400 hover:text-green-300"
>
  Forgot Password?
  </Link>

        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-xl transition"
        >
          Login to Dashboard
        </button>

      </form>

      {/* Google Login */}
      <div className="mt-6">

        <button
          className="
            w-full
            border
            border-white/10
            py-3
            rounded-xl
            text-white
            hover:bg-white/5
            transition
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="h-5 w-5"
          />

          Continue with Google

        </button>

      </div>

      {/* Security Message */}
      <div className="flex items-center justify-center gap-2 mt-5 text-xs text-gray-400">

        <ShieldCheck
          size={14}
          className="text-green-400"
        />

        Your data is encrypted and secure

      </div>

      {/* Signup */}
      <p className="text-center text-gray-400 text-sm mt-6">

        Don't have an account?{" "}

        <Link
          href="/signup"
          className="text-green-400 hover:text-green-300"
        >
          Create Free Account
        </Link>

      </p>

    </div>
  );
}