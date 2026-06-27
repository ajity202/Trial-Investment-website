export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_35%)]" />

        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[150px]" />

      </div>
<div className="relative z-10 w-full max-w-md">

  <div className="text-center mb-8">

    <h1 className="text-3xl font-bold text-white">
      Stock Guru AI
    </h1>

    <p className="text-gray-400 mt-2">
      AI-Powered Stock Research Platform
    </p>

    <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
  By creating an account, you agree to our
  <span className="text-green-400"> Terms of Service </span>
  and
  <span className="text-green-400"> Privacy Policy</span>.
</p>

  </div>

  {children}

</div>

    </main>
  );
}