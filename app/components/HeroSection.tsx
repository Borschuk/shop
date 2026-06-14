import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-violet-600 via-violet-700 to-teal-800 px-6 py-20 text-white sm:px-12 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Product Catalog
        </h1>
        <p className="mt-4 text-lg font-medium text-violet-100 sm:text-xl">
          A full-stack application built with Next.js, Supabase, and modern
          React patterns.
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-base text-violet-200/80">
          Browse products, register an account, add your own listings — all
          powered by server-side rendering and zero-boilerplate server actions.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/products"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-violet-700 shadow transition hover:bg-violet-50"
          >
            Browse Products
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
}
