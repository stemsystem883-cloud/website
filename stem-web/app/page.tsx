"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  BarChart2,
  CheckCircle2,
  Globe,
  MousePointer2,
  Search,
  Shield,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StoryHeroVisual } from "@/components/StoryHeroVisual";

gsap.registerPlugin(ScrollTrigger);

const PROBLEM_POINTS = [
  "Slow research across too many places",
  "Unclear priorities when important signals conflict",
  "Too much guesswork around what matters and when to act",
];

const PROBLEM_NOTES = [
  { label: "Competitor tracking", detail: "Regional move spotted after pricing changes", top: "8%", left: "5%" },
  { label: "Policy change", detail: "New circular flagged for review", top: "16%", right: "9%" },
  { label: "Market pulse", detail: "Movement detected across key segments", top: "47%", left: "2%" },
  { label: "Risk watch", detail: "Timing pressure around growth decisions", top: "54%", right: "4%" },
  { label: "Expansion note", detail: "New opportunity signal in another hub", bottom: "8%", left: "24%" },
];

const SOLUTION_POINTS = [
  {
    step: "01",
    title: "Track important market changes",
    body: "Follow the shifts that affect strategy, timing, growth, and competitive position.",
  },
  {
    step: "02",
    title: "Understand what matters faster",
    body: "Filter scattered inputs into clearer signals with enough context to be useful.",
  },
  {
    step: "03",
    title: "Make decisions with less guesswork",
    body: "Move from raw market noise to a sharper view of what deserves attention now.",
  },
];

const USE_CASES = [
  {
    icon: Search,
    title: "Competitor tracking",
    body: "Keep up with moves that could affect your position before they become expensive to ignore.",
    accent: "bg-[linear-gradient(135deg,#eef4ff_0%,#ffffff_100%)]",
  },
  {
    icon: Globe,
    title: "Market change monitoring",
    body: "See shifts early before they turn into missed opportunities or slow reactions.",
    accent: "bg-[linear-gradient(135deg,#f7fbff_0%,#eef7f3_100%)]",
  },
  {
    icon: Shield,
    title: "Risk and policy awareness",
    body: "Stay aware of changes that could affect decision quality, timing, and exposure.",
    accent: "bg-[linear-gradient(135deg,#fff8f4_0%,#ffffff_100%)]",
  },
  {
    icon: MousePointer2,
    title: "Expansion and growth decisions",
    body: "Get a clearer picture before moving into new opportunities or committing resources.",
    accent: "bg-[linear-gradient(135deg,#f3f6ff_0%,#ffffff_100%)]",
  },
];

const BEFORE_STEM = [
  "Scattered information",
  "Slow research",
  "Unclear priorities",
  "Reactive decisions",
];

const WITH_STEM = [
  "Clearer market visibility",
  "Faster understanding",
  "Stronger timing",
  "More confident decisions",
];

const AUDIENCES = [
  "Strategy teams",
  "Growth and expansion teams",
  "Founders and leadership",
  "Research and intelligence teams",
  "Operation lead"
];

const SOCIAL_PROOF = [
  "Early conversations with fintech and finance teams",
  "Decision workflows mapped across strategy and growth roles",
  "Built with direct founder and leadership feedback",
  "Focused rollout designed for practical adoption",
];

const TRUST_POINTS = [
  {
    title: "Clear problem focus",
    body: "Built around a real challenge: companies, businesses, and teams trying to make important decisions with fragmented and unreliable information.",
  },
  {
    title: "Early rollout",
    body: "We are speaking with a small number of teams and individuals in corporate organizations with experience ahead of public launch to make the product sharper, clearer, and more useful.",
  },
  {
    title: "Calm product design",
    body: "Everything is being designed to reduce noise, not add more of it. Stem-cogent is here to help you think better under pressure.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary-blue/70">
      {children}
    </p>
  );
}

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const problemSectionRef = useRef<HTMLElement>(null);
  const problemSummaryRef = useRef<HTMLDivElement>(null);
  const problemCardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const revealItems = gsap.utils.toArray<HTMLElement>("[data-story-reveal]");

      revealItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 84%",
              once: true,
            },
          }
        );
      });

      const problemCards = problemCardRefs.current.filter(Boolean);
      const problemOffsets = [
        { x: -80, y: -26, rotate: -7 },
        { x: 56, y: -34, rotate: 8 },
        { x: -74, y: 20, rotate: -5 },
        { x: 68, y: 18, rotate: 6 },
        { x: -20, y: 48, rotate: -4 },
      ];

      if (problemSectionRef.current && problemCards.length > 0) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: problemSectionRef.current,
            start: "top 72%",
            toggleActions: "play none none none",
          },
        });

        problemCards.forEach((card, index) => {
          const offset = problemOffsets[index] ?? { x: 0, y: 0, rotate: 0 };
          timeline.fromTo(
            card,
            {
              x: offset.x,
              y: offset.y,
              rotate: offset.rotate,
              opacity: 0.82,
            },
            {
              x: 0,
              y: 0,
              rotate: 0,
              opacity: 0.28,
              duration: 0.55,
              ease: "power2.out",
            },
            index === 0 ? 0 : "<0.08"
          );
        });

        timeline.fromTo(
          problemSummaryRef.current,
          { opacity: 0, y: 28, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "power2.out",
          },
          "-=0.18"
        );
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="flex-1 bg-[#fbfcff]">
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-6 py-10 sm:py-12 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(53,99,235,0.14),transparent_34%),radial-gradient(circle_at_85%_12%,rgba(15,23,42,0.06),transparent_20%),linear-gradient(180deg,#ffffff_0%,#f7faff_100%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.10)_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,560px)]">
          <div className="max-w-2xl" data-story-reveal>
            <SectionLabel>For Fintech/Financial Companies and Teams In Fast-Moving Markets</SectionLabel>
            <h1 className="max-w-[13ch] text-5xl font-bold tracking-[-0.04em] text-deep-ink sm:text-6xl lg:text-[4.6rem] lg:leading-[1.02]">
              See what&apos;s changing in the market. Make better decisions faster.
            </h1>
            <p className="mt-6 max-w-[60ch] text-lg leading-8 text-slate-600 sm:text-xl">
              Stem-cogent helps fintech/financial companies and teams cut through scattered market information so they can understand what matters and act with more confidence.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/request-call" className="btn-primary">
                Get early access <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/platform" className="btn-secondary">
                See how it works
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Built for strategy, growth, and leadership teams",
                "Focused early rollout",
                "Calm, decision-first product design",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-600 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:pl-2" data-story-reveal>
            <StoryHeroVisual />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white px-6 py-10 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {SOCIAL_PROOF.map((item) => (
            <div
              key={item}
              data-story-reveal
              className="rounded-2xl border border-slate-200 bg-[#f8faff] px-4 py-4 text-sm font-medium text-slate-700 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        ref={problemSectionRef}
        className="relative overflow-hidden bg-[#f6f8fb] px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
          <div className="max-w-xl" data-story-reveal>
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-deep-ink sm:text-5xl">
              Making important decisions is harder when the information is scattered.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Fintech/Financial companies and teams often have to track market changes, competitors, and emerging risks across too many places. The result is slow research, unclear priorities, and too much guesswork around what matters and when to act.
            </p>

            <div className="mt-8 space-y-4">
              {PROBLEM_POINTS.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white bg-white/75 px-4 py-4 shadow-sm backdrop-blur">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-blue" />
                  <p className="text-sm font-medium leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-2" data-story-reveal>
            {/* Visual Dashboard Container */}
            <div className="relative h-[440px] rounded-[34px] border border-slate-200/80 bg-white/82 p-5 shadow-[0_24px_72px_rgba(15,23,42,0.08)] backdrop-blur sm:h-[500px] lg:h-[520px] lg:p-8">
              <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_top_left,rgba(53,99,235,0.12),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.90))]" />
              {PROBLEM_NOTES.map((note, index) => (
                <div
                  key={note.label}
                  ref={(node) => {
                    problemCardRefs.current[index] = node;
                  }}
                  className="absolute w-[150px] rounded-2xl border border-slate-200 bg-white/95 px-3 py-2.5 shadow-[0_12px_30px_rgba(15,23,42,0.07)] sm:w-[200px] lg:w-[210px] lg:px-4 lg:py-3"
                  style={{ top: note.top, left: note.left, right: note.right, bottom: note.bottom }}
                >
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-primary-blue/65 lg:text-[10px]">
                    {note.label}
                  </p>
                  <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-700 sm:text-sm lg:mt-2 lg:leading-6">
                    {note.detail}
                  </p>
                </div>
              ))}

              <div
                ref={problemSummaryRef}
                className="absolute bottom-4 left-1/2 z-10 w-[240px] -translate-x-1/2 rounded-[22px] border border-slate-700/40 bg-[#0f172a] p-4 text-white shadow-[0_26px_62px_rgba(15,23,42,0.28)] sm:bottom-6 sm:w-[270px] sm:p-5 lg:w-[286px]"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-blue-200/70 sm:text-[10px]">
                  What teams need instead
                </p>
                <h3 className="mt-1.5 text-base font-semibold leading-tight sm:mt-2 sm:text-lg sm:leading-[1.25]">
                  A clearer view of what matters before they move.
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-300 sm:mt-3 sm:text-sm sm:leading-7">
                  The goal is not more information. It is a better way to understand the market and decide with more confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f172a] px-6 py-20 text-white sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(53,99,235,0.22),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.07),transparent_20%)]" />
        <div className="relative mx-auto max-w-[1280px]">
          <div className="max-w-3xl" data-story-reveal>
            <SectionLabel>The Solution</SectionLabel>
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
              Stem-cogent helps your team see what matters faster.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Stem-cogent gives fintech/financial companies and teams a clearer way to keep up with market changes, spot important shifts, and move from scattered information to clearer decisions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {SOLUTION_POINTS.map((item) => (
              <div
                key={item.step}
                data-story-reveal
                className="rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-[0_22px_60px_rgba(2,6,23,0.18)] backdrop-blur"
              >
                <span className="text-5xl font-semibold tracking-[-0.05em] text-primary-blue/25">{item.step}</span>
                <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3" data-story-reveal>
            {[
              "Track important market changes",
              "Understand what matters faster",
              "Make decisions with less guesswork",
            ].map((item) => (
              <div key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-primary-blue" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl" data-story-reveal>
            <SectionLabel>Use Cases</SectionLabel>
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-deep-ink sm:text-5xl">
              Built for the decisions teams make every day
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              People understand products faster when they can see the decisions they support. That is where Stem should feel practical, not abstract.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {USE_CASES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  data-story-reveal
                  className={`group rounded-[30px] border border-slate-200 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 ${item.accent}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep-ink text-white shadow-lg shadow-slate-900/10">
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
        </div>
      </section>

      <section className="bg-[#f7f9fc] px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl" data-story-reveal>
            <SectionLabel>Outcomes</SectionLabel>
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-deep-ink sm:text-5xl">
              Less guesswork. Faster decisions. More clarity.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Stem-cogent helps companies and teams spend less time chasing scattered information and more time making confident business decisions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_120px_1fr] lg:items-stretch">
            <div data-story-reveal className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Before Stem</p>
              <div className="mt-6 space-y-4">
                {BEFORE_STEM.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4 text-sm font-medium text-slate-600">
                    <AlertCircle className="h-4 w-4 text-slate-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div data-story-reveal className="hidden items-center justify-center lg:flex">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-blue text-white shadow-[0_18px_44px_rgba(53,99,235,0.24)]">
                <ArrowRight className="h-6 w-6" />
              </div>
            </div>

            <div data-story-reveal className="rounded-[30px] border border-primary-blue/15 bg-[linear-gradient(180deg,#ffffff_0%,#eef4ff_100%)] p-7 shadow-[0_18px_50px_rgba(53,99,235,0.09)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-blue/70">With Stem</p>
              <div className="mt-6 space-y-4">
                {WITH_STEM.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-4 text-sm font-medium text-slate-700 shadow-sm">
                    <Zap className="h-4 w-4 text-primary-blue" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="max-w-xl" data-story-reveal>
            <SectionLabel>Who It&apos;s For</SectionLabel>
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-deep-ink sm:text-5xl">
              For companies and teams also decision makers that need to understand the market before they move
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Stem-cogent is built for fintech/financial companies and teams making strategy, growth, market, and leadership decisions in fast-moving environments.
            </p>
          </div>

          <div data-story-reveal>
            <div className="rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fc_100%)] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <div className="flex flex-wrap gap-3">
                {AUDIENCES.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: BarChart2, title: "Strategy", body: "Sharper market understanding before major calls." },
                  { icon: Search, title: "Research", body: "Less time hunting across scattered sources." },
                  { icon: Globe, title: "Growth", body: "Better visibility before expansion and timing decisions." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-blue/10 text-primary-blue">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-deep-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f172a] px-6 py-20 text-white sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(53,99,235,0.26),transparent_30%),radial-gradient(circle_at_84%_70%,rgba(96,165,250,0.16),transparent_26%)]" />
        <div className="relative mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div data-story-reveal className="rounded-[30px] border border-white/10 bg-white/6 p-7 shadow-[0_22px_60px_rgba(2,6,23,0.2)] backdrop-blur">
            <SectionLabel>Trust And Early Rollout</SectionLabel>
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
              Built for a real problem companies and teams face every day
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              We&apos;re building Stem-cogent with a clear focus: helping fintech/financial companies and teams understand what&apos;s changing in the market and make better decisions faster. We&apos;re currently in early rollout and speaking with a small number of teams ahead of public launch.
            </p>

            <div className="mt-8 rounded-[26px] border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-blue-200/70">Founder note</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Stem-cogent is here to help companies and teams think clearly under pressure. See what's changing. Reduce guesswork. Know what matters. Spend less time researching and more time deciding.
              </p>
            </div>
          </div>

          <div className="grid gap-4" data-story-reveal>
            {TRUST_POINTS.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-[0_18px_44px_rgba(2,6,23,0.14)] backdrop-blur">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_100%)] px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(53,99,235,0.12),transparent_20%),radial-gradient(circle_at_85%_80%,rgba(15,23,42,0.05),transparent_18%)]" />
        <div className="relative mx-auto max-w-[920px] text-center" data-story-reveal>
          <SectionLabel>Next Step</SectionLabel>
          <h2 className="text-4xl font-bold tracking-[-0.04em] text-deep-ink sm:text-6xl">
            See what&apos;s changing. Decide with more confidence.
          </h2>
          <p className="mx-auto mt-6 max-w-[44ch] text-lg leading-8 text-slate-600">
            Tell us what your team needs to track, assess, or decide. We&apos;ll show you how Stem can support that workflow.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/request-call" className="btn-primary">
              Get early access <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/platform" className="btn-secondary">
              Explore the platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}