import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, Search, Shield, TrendingUp } from "lucide-react";
import { PageReveal } from "@/components/PageReveal";

export const metadata: Metadata = {
  title: "Use Cases | Stem Decision Intelligence",
  description: "How fintech/financial companies and  teams uses Stem-cogent to track change, reduce guesswork, and move faster.",
  openGraph: {
    title: "Use Cases | Stem",
    description: "How fintech/financial companies and  teams use Stem-cogent to track change, reduce guesswork, and move faster.",
  },
};

const USE_CASES = [
  {
    icon: Search,
    title: "Competitor tracking",
    body: "Keep up with moves that could affect your position before they become expensive to ignore.",
  },
  {
    icon: TrendingUp,
    title: "Market change monitoring",
    body: "See important shifts early before they turn into missed opportunities or slow reactions.",
  },
  {
    icon: Shield,
    title: "Risk and policy awareness",
    body: "Stay aware of developments that affect timing, exposure, and decision quality.",
  },
  {
    icon: Briefcase,
    title: "Expansion and growth decisions",
    body: "Get a clearer picture before making new market moves or committing resources.",
  },
];

const SCENARIO_STEPS = [
  "Choose the market questions your team needs to stay close to.",
  "Track the external signals tied to those decisions.",
  "Review a clearer brief instead of stitching fragmented context together by hand.",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary-blue/70">{children}</p>;
}

export default function UseCasesPage() {
  return (
    <div className="flex-1 bg-[#fbfcff]">
      <PageReveal />
      <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(53,99,235,0.12),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f7faff_100%)]" />
        <div className="relative mx-auto max-w-[980px] text-center" data-reveal>
          <SectionLabel>Use Cases</SectionLabel>
          <h1 className="text-4xl font-bold tracking-[-0.04em] text-deep-ink sm:text-5xl lg:text-[4.2rem] lg:leading-[1.04]">
            Built for the decisions teams and companies make every day.
          </h1>
          <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-8 text-slate-600 sm:text-xl">
            People understand products faster when they can see the decisions they support. This is where Stem should feel practical, not abstract.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-6 md:grid-cols-2" data-reveal-group>
          {USE_CASES.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="group rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(15,23,42,0.10)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep-ink text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-deep-ink">{item.title}</h3>
                <p className="mt-3 max-w-[34ch] text-sm leading-7 text-slate-600">{item.body}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary-blue">
                  Practical decision support
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f7f9fc] px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="max-w-xl" data-reveal>
            <SectionLabel>How Teams Use Stem</SectionLabel>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-deep-ink sm:text-4xl lg:text-5xl">
              Start with the decision, not the dashboard.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The best way to frame Stem-cogent is through the decisions teams already need to make. That keeps the product grounded and easier to understand.
            </p>
          </div>
          <div className="space-y-4" data-reveal-group>
            {SCENARIO_STEPS.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-[26px] border border-slate-200 bg-white px-5 py-5 shadow-sm">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-blue/10 text-sm font-semibold text-primary-blue">
                  0{index + 1}
                </div>
                <p className="pt-1 text-sm font-medium leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] px-6 py-20 text-white sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[840px] text-center" data-reveal>
          <h2 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            Have a specific scenario in mind?
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            We can map Stem-cogent to the market questions, workflows, and decision pressure your team is already dealing with.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/request-call" className="btn-primary">
              Talk through your use case <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}