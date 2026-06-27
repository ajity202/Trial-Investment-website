import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export default function ForgotPasswordForm() {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

      <Link
        href="/login"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
      >
        <ArrowLeft size={16} />
        Back to Login
      </Link>

      <div className="text-center mt-6">

        <div className="flex justify-center">

          <div className="h-16 w-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">

            <Mail
              size={28}
              className="text-green-400"
            />

          </div>

        </div>

        <h1 className="text-4xl font-bold text-white mt-6">
          Reset Password
        </h1>

        <p className="text-gray-400 mt-3">
          Enter your email and we'll send you a reset link.
        </p>

      </div>

      <form className="mt-8">

        <label className="text-sm text-gray-300">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-green-500"
        />

        <button
          type="submit"
          className="w-full mt-6 bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-xl transition"
        >
          Send Reset Link
        </button>

      </form>

    </div>
  );
}