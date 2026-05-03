import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart2, Layers, ShieldCheck } from "lucide-react";
import { FlowCanvas } from "@/components/FlowCanvas";
import { PageReveal } from "@/components/PageReveal";

export const metadata: Metadata = {
  title: "Platform | Stem Decision Intelligence",
  description: "See how Stem-cogent monitors markets, tracks competitors, and surfaces the signals that matter for financial teams in Nigeria.",
  openGraph: {
    title: "Platform | Stem",
    description: "See how Stem-cogent monitors markets, tracks competitors, and surfaces the signals that matter.",
  },
};

const PLATFORM_POINTS = [
  {
    title: "Track what matters",
    body: "Focus on the competitors, policy changes, market moves, and growth signals tied to your decisions.",
  },
  {
    title: "Turn noise into structure",
    body: "Bring scattered market inputs into one clearer view so teams do not waste time stitching context together by hand.",
  },
  {
    title: "Move with more confidence",
    body: "Use clearer briefs and better timing signals when the decision window is narrow.",
  },
];

const PLATFORM_STEPS = [
  "Track the signal categories your team cares about.",
  "Detect meaningful changes across the market.",
  "Add context so teams understand why it matters.",
  "Deliver a clearer brief for discussion and action.",
];

const OUTPUTS = [
  {
    icon: Layers,
    title: "Decision briefs",
    body: "Clear summaries of what changed, why it matters, and what needs review next.",
  },
  {
    icon: ShieldCheck,
    title: "Risk and policy alerts",
    body: "Visibility into changes that affect timing, exposure, and strategic assumptions.",
  },
  {
    icon: BarChart2,
    title: "Market visibility",
    body: "A better picture of competitor movement, category shifts, and emerging opportunities.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary-blue/70">{children}</p>;
}

export default function PlatformPage() {
  return (
    <div className="flex-1 bg-[#fbfcff]">
      <PageReveal />
      <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(53,99,235,0.12),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)]" />
        <div className="relative mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl" data-reveal>
            <SectionLabel>Platform</SectionLabel>
            <h1 className="text-4xl font-bold tracking-[-0.04em] text-deep-ink sm:text-5xl lg:text-[4.2rem] lg:leading-[1.04]">
              A clearer system for understanding market change.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
              Stem-cogent helps fintech and financial companies and teams keep up with what is changing, understand what matters faster, and move from scattered information to clearer decisions.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/waitlist" className="btn-primary">
                Join the waitlist <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/use-cases" className="btn-secondary">
                Explore use cases
              </Link>
            </div>
          </div>

          <FlowCanvas
            inputs={["Competitor move", "Policy update", "Market shift", "Regional signal"]}
            centerLabel="Signal lens"
            outputTitle="One clearer view of what changed"
            outputBody="Instead of chasing scattered information, teams get a more useful picture of timing, risk, and market movement."
            footerLabel="Built to reduce noise, not add more of it."
          />
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl" data-reveal>
            <SectionLabel>What The Platform Helps With</SectionLabel>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-deep-ink sm:text-4xl lg:text-5xl">
              What Stem-cogent does, in simple terms.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3" data-reveal-group>
            {PLATFORM_POINTS.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(15,23,42,0.10)]">
                <h3 className="text-2xl font-semibold text-deep-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="max-w-xl" data-reveal>
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-deep-ink sm:text-4xl lg:text-5xl">
              A simple path from raw change to usable clarity.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Stem-cogent is not a complex machine that you have to decode. It is a platform that you can trust.
            </p>
          </div>
          <div className="space-y-4" data-reveal-group>
            {PLATFORM_STEPS.map((item, index) => (
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

      <section className="bg-[#f7f9fc] px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-6 lg:grid-cols-2" data-reveal-group>
          <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_18px_44px_rgba(15,23,42,0.06)]">
            <SectionLabel>Before Stem</SectionLabel>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-deep-ink">Scattered signals. Slow decisions.</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <li>Teams track competitors and policy across too many places.</li>
              <li>Important changes get missed or arrive too late to act on.</li>
              <li>Decisions get delayed because the brief takes too long to build.</li>
            </ul>
          </div>
          <div className="rounded-[30px] border border-primary-blue/15 bg-[linear-gradient(180deg,#ffffff_0%,#eef4ff_100%)] p-7 shadow-[0_18px_44px_rgba(53,99,235,0.10)]">
            <SectionLabel>With Stem</SectionLabel>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-deep-ink">Clearer signals. Faster alignment.</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
              <li>Market changes surface in one structured view.</li>
              <li>Signals are filtered and prioritised so nothing important is missed.</li>
              <li>Teams move from raw context to a usable brief, faster.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl" data-reveal>
            <SectionLabel>What Teams Receive</SectionLabel>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-deep-ink sm:text-4xl lg:text-5xl">
              Outputs designed for discussion and action.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3" data-reveal-group>
            {OUTPUTS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(15,23,42,0.10)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-blue/10 text-primary-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-deep-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex flex-wrap gap-3" data-reveal>
            {[
              "Less noise",
              "Better timing",
              "Clearer strategic discussion",
            ].map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-[#f7f9fc] px-4 py-2 text-sm font-medium text-slate-600">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] px-6 py-20 text-white sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[840px] text-center" data-reveal>
          <h2 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            See how Stem-cogent fits your workflow.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Tell us what you or your company and team needs to track, assess, or decide. We&apos;ll show you where the platform fits and where it helps first.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/waitlist" className="btn-primary">
              Join the waitlist <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/solutions" className="btn-secondary">
              Explore solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}