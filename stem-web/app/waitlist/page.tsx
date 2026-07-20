import type { Metadata } from "next";
import { RequestForm } from "@/components/RequestForm";

export const metadata: Metadata = { title: "Join the waitlist", description: "Request early access to Stem Cogent." };

export default function WaitlistPage() {
  return <section className="blue-grid bg-primary-blue py-16 sm:py-24"><div className="site-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start"><div className="pt-3 text-white"><p data-reveal className="eyebrow-light">Private access · Launching soon</p><h1 data-text-reveal className="editorial-display mt-5 max-w-[10ch] text-5xl leading-[.98] sm:text-6xl">Make your next move <em>the informed one.</em></h1><p data-reveal className="mt-7 max-w-[36ch] text-sm leading-7 text-white/80">Join the Stem Cogent waitlist. Tell us what your team needs to understand, track, or decide.</p><div data-reveal className="mt-10 border-l border-white/40 pl-5 text-xs leading-7 text-white/85">Early access to the platform<br/>Priority onboarding<br/>A chance to shape the product with your input</div></div><div data-reveal><RequestForm /></div></div></section>;
}
