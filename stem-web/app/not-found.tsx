import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center px-6 py-20 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(53,99,235,0.10),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f7faff_100%)] -z-10" />

      <Link href="/" className="mb-10 inline-flex items-center">
        <BrandLogo size={36} />
      </Link>

      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-blue/70">404 — Page not found</p>
      <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-deep-ink sm:text-5xl">
        This page does not exist.
      </h1>
      <p className="mx-auto mt-5 max-w-[38ch] text-base leading-7 text-slate-500">
        You may have followed an old link or mistyped the address. Let us get you back on track.
      </p>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">
          <Home className="h-4 w-4" />
          Back to home
        </Link>
        <Link href="/platform" className="btn-secondary">
          <ArrowLeft className="h-4 w-4" />
          Explore the platform
        </Link>
      </div>
    </div>
  );
}
