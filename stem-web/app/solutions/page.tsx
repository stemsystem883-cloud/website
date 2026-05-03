import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Shield, TrendingUp } from "lucide-react";
import { FlowCanvas } from "@/components/FlowCanvas";
import { PageReveal } from "@/components/PageReveal";

export const metadata: Metadata = {
  title: "Solutions | Stem Decision Intelligence",
  description: "How Stem supports strategy, growth, and risk decisions in fast-moving markets.",
  openGraph: {
    title: "Solutions | Stem",
    description: "How Stem supports strategy, growth, and risk decisions in fast-moving markets.",
  },
};

const SOLUTIONS = [
  {
    icon: Compass,
    title: "Competitor and market response",
    body: "Understand what changed, what it means for your position, and where a faster response matters.",
    bullets: ["Competitor movement", "Market timing", "Category shifts"],
  },
  {
    icon: Shield,
    title: "Risk and policy awareness",
    body: "Stay ahead of developments that affect exposure, compliance assumptions, and strategic timing.",
    bullets: ["Regulatory changes", "Policy signals", "Risk awareness"],
  },
  {
    icon: TrendingUp,
    title: "Expansion and growth decisions",
    body: "Get a clearer view before new market moves, product expansion, or resource commitments.",
    bullets: ["Growth planning", "Expansion timing", "Opportunity mapping"],
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary-blue/70">{children}</p>;
}

export default function SolutionsPage() {
  return (
    <div className="flex-1 bg-[#fbfcff]">
      <PageReveal />
      <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(53,99,235,0.12),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f7faff_100%)]" />
          <div className="relative mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl" data-reveal>
            <SectionLabel>Solutions</SectionLabel>
            <h1 className="text-4xl font-bold tracking-[-0.04em] text-deep-ink sm:text-5xl lg:text-[4.2rem] lg:leading-[1.04]">
              Built for decisions that cannot wait on scattered research.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
              Stem-cogent helps companies and teams move from external uncertainty to a clearer view of what matters, what changed, and what deserves action now.
            </p>
          </div>

          <FlowCanvas
            inputs={["Competitor update", "CBN circular", "Pricing movement", "Expansion signal"]}
            centerLabel="Prioritize"
            outputTitle="A sharper basis for the next decision"
            outputBody="Bring timing, market movement, and risk into one clearer frame so the team can decide faster and defend the recommendation."
            footerLabel="Useful for strategy, growth, market, and leadership conversations."
            compact
          />
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl" data-reveal>
            <SectionLabel>Where Stem-cogent Helps Most</SectionLabel>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-deep-ink sm:text-4xl lg:text-5xl">
              Practical support for high-value decisions.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3" data-reveal-group>
            {SOLUTIONS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fc_100%)] p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(15,23,42,0.10)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-blue/10 text-primary-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-deep-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.bullets.map((bullet) => (
                      <span key={bullet} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-6 lg:grid-cols-2" data-reveal-group>
          <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_18px_44px_rgba(15,23,42,0.06)]">
            <SectionLabel>Before Stem</SectionLabel>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-deep-ink">Slow research. More guesswork.</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <li>Teams hunt across too many sources.</li>
              <li>Important signals are easy to miss or misread.</li>
              <li>Recommendations take longer to align internally.</li>
            </ul>
          </div>
          <div className="rounded-[30px] border border-primary-blue/15 bg-[linear-gradient(180deg,#ffffff_0%,#eef4ff_100%)] p-7 shadow-[0_18px_44px_rgba(53,99,235,0.10)]">
            <SectionLabel>With Stem</SectionLabel>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-deep-ink">Clearer timing. Better discussion.</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
              <li>Teams get a cleaner view of market change.</li>
              <li>Signals are easier to prioritize and interpret.</li>
              <li>Leadership can move with more confidence.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] px-6 py-20 text-white sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[840px] text-center" data-reveal>
          <h2 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            Talk through the decision environment your team operates in.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            We&apos;ll help you map where Stem can reduce blind spots and make the next important decision easier to defend.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/waitlist" className="btn-primary">
              Join the waitlist <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}