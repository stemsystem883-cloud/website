"""
Rewrites all UTF-16 encoded TSX files as clean UTF-8 without BOM,
fixes the five critical bugs identified in the audit, and adds
the missing homepage sections.
"""
import os

BASE = r"C:\Users\Alex Marco\Desktop\stem-web\stem-web\app"

files = {
    "page.tsx": r'''import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HeroAnimation } from "@/components/HeroAnimation";

export default function Home() {
  return (
    <main className="flex-1">

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary-blue tracking-wide uppercase mb-4">
              Decision Intelligence for Fast-Moving Markets
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-deep-ink sm:text-6xl mb-6">
              Stop making high-stakes decisions half-blind.
            </h1>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              Stem helps fintech and financial-services teams in Nigeria detect meaningful market
              changes early and act with more confidence, less guesswork, and less manual research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/request-call"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-blue px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Request a Scoping Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-deep-ink ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
              >
                See How It Works
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Decision-ready intelligence, not dashboard clutter</span>
            </div>
          </div>
          <HeroAnimation />
        </div>
      </section>

      {/* 2. Stakes / Problem */}
      <section className="bg-soft-bg px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-deep-ink sm:text-4xl mb-6">
              The cost of a blind spot is rarely visible until it is expensive.
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              In fast-moving financial markets, missed signals do not stay small for long. Delayed
              visibility can turn into weak recommendations, poor timing, missed opportunities, or
              preventable exposure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                color: "red",
                icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Missed competitor moves",
                desc: "Important launches and repositioning moves become costly surprises when visibility is delayed.",
              },
              {
                color: "orange",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Delayed expansion timing",
                desc: "The window to enter a market often closes before teams have reliable enough intelligence to act.",
              },
              {
                color: "amber",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Weakly defended recommendations",
                desc: "Strategic calls made without structured signal lineage are hard to align on and easy to challenge.",
              },
              {
                color: "blue",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                title: "Policy or regulatory surprise",
                desc: "Regulatory shifts that could have been anticipated create reactive scrambles instead of prepared responses.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-10 h-10 bg-${card.color}-50 text-${card.color}-500 rounded-lg flex items-center justify-center mb-6`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-deep-ink mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Signal-to-Action Engine */}
      <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-deep-ink sm:text-4xl mb-6">
              From fragmented signals to decision-ready intelligence.
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Stem continuously pulls together meaningful market inputs, detects important changes,
              adds context, and surfaces prioritized intelligence your team can act on.
            </p>
          </div>
          <div className="bg-soft-bg rounded-3xl p-8 lg:p-12 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-start">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Signal Inputs
                </p>
                <div className="space-y-3">
                  {["Competitors", "Market movement", "Pricing shifts", "Policy / regulation", "Category signals"].map(
                    (item) => (
                      <div
                        key={item}
                        className="bg-white rounded-lg px-4 py-3 text-sm font-medium text-deep-ink border border-gray-100 shadow-sm"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 text-center">
                  Stem Engine
                </p>
                <div className="bg-primary-blue/5 border-2 border-primary-blue/20 rounded-2xl p-6 flex flex-col gap-3">
                  {["Detect", "Synthesize", "Prioritize", "Contextualize"].map((step) => (
                    <div
                      key={step}
                      className="bg-white rounded-lg px-4 py-2 text-sm font-semibold text-primary-blue border border-primary-blue/10 text-center shadow-sm"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Intelligence Outputs
                </p>
                <div className="space-y-3">
                  {["Alerts", "Intelligence summaries", "Decision signals", "Recommended next steps"].map((item) => (
                    <div
                      key={item}
                      className="bg-white rounded-lg px-4 py-3 text-sm font-medium text-deep-ink border border-gray-100 shadow-sm flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary-blue flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Value Proposition / Benefits */}
      <section className="bg-soft-bg px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-deep-ink sm:text-4xl mb-6">
              Built to help teams move from noise to confident action.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Detect meaningful changes earlier",
                desc: "Surface important external shifts before they become expensive surprises.",
              },
              {
                title: "Reduce manual monitoring and synthesis",
                desc: "Stop spending weeks on research that automation handles continuously.",
              },
              {
                title: "Increase confidence in recommendations",
                desc: "Back every strategic call with structured, traceable signal lineage.",
              },
              {
                title: "Track competitor, policy, and category movement",
                desc: "Monitor everything that matters in one structured place.",
              },
              {
                title: "Understand signal context and lineage",
                desc: "Know not just what changed, but why it matters and where it came from.",
              },
              {
                title: "Shorten signal-to-action time",
                desc: "Move from fragmented data to decision-ready output faster than before.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-deep-ink mb-3">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Three-Step Plan */}
      <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-deep-ink sm:text-4xl mb-6">
              A simple path from fragmented inputs to better decisions.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                n: "01",
                title: "Connect your sources",
                desc: "Start with the signals, markets, entities, and monitoring priorities that matter most to your team.",
              },
              {
                n: "02",
                title: "Detect meaningful signals",
                desc: "Stem filters noise, tracks change, and surfaces what deserves attention.",
              },
              {
                n: "03",
                title: "Act with defensible intelligence",
                desc: "Use prioritized, contextualized outputs to make faster recommendations and decisions.",
              },
            ].map((step) => (
              <div key={step.n} className="flex flex-col">
                <span className="text-6xl font-bold text-primary-blue/10 mb-4 select-none leading-none">
                  {step.n}
                </span>
                <h3 className="text-xl font-semibold text-deep-ink mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="bg-deep-ink px-6 py-24 sm:py-32 lg:px-8 text-center text-white">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
            See what better market visibility could change for your team.
          </h2>
          <p className="text-lg leading-8 text-white/70 mb-10">
            Tell us what your team is trying to track, assess, or decide. We will show you how
            Stem fits your decision workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-call"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-blue px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
            >
              Request a Scoping Call <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
''',

    "request-call/page.tsx": r'''import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Scoping Call | Stem",
  description: "Request a scoping call to discover how Stem can provide actionable market intelligence for your team.",
};

export default function RequestCallPage() {
  return (
    <main className="flex-1 bg-soft-bg pt-20 pb-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-deep-ink sm:text-5xl mb-6">
              Let&apos;s scope your intelligence needs.
            </h1>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              Every team has different blind spots. On this call, we&apos;ll discuss how your
              organization currently tracks external market shifts and where Stem can automate and
              improve that workflow.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-primary-blue flex items-center justify-center font-semibold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-deep-ink">Align on priorities</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    We learn which competitors, regulations, and market categories matter most to
                    your strategy.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-primary-blue flex items-center justify-center font-semibold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-deep-ink">Review platform capabilities</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    A tailored walkthrough of how Stem surfaces actionable intelligence specific to
                    your sector.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-primary-blue flex items-center justify-center font-semibold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-deep-ink">Determine fit</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    A transparent conversation about integration alignment, readiness, and next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-deep-ink mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-deep-ink focus:border-primary-blue focus:ring-primary-blue transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-deep-ink mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-deep-ink focus:border-primary-blue focus:ring-primary-blue transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-deep-ink mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-deep-ink focus:border-primary-blue focus:ring-primary-blue transition-colors"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-deep-ink mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-deep-ink focus:border-primary-blue focus:ring-primary-blue transition-colors"
                  placeholder="Mid-Market FinTech Ltd."
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-deep-ink mb-1">
                  Role / Title
                </label>
                <select
                  id="role"
                  defaultValue=""
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-deep-ink focus:border-primary-blue focus:ring-primary-blue transition-colors bg-white"
                >
                  <option value="" disabled>Select your role</option>
                  <option value="strategy">Strategy Lead</option>
                  <option value="growth">Growth / Expansion Lead</option>
                  <option value="ceo">Founder / CEO</option>
                  <option value="research">Research / Intelligence Lead</option>
                  <option value="operations">Operations Lead</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-deep-ink mb-1">
                  What are you trying to understand or improve? (optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-deep-ink focus:border-primary-blue focus:ring-primary-blue transition-colors resize-none"
                  placeholder="e.g. We need better visibility into competitor pricing changes and regulatory shifts affecting our lending product."
                />
              </div>
              <button
                type="button"
                className="w-full rounded-lg bg-primary-blue px-6 py-4 text-center font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors mt-4"
              >
                Submit Request
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our standard processing of your business
                information for scoping purposes.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
''',
}

for rel_path, content in files.items():
    full_path = os.path.join(BASE, rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, "w", encoding="utf-8", newline="\n") as f:
        f.write(content)
    size = os.path.getsize(full_path)
    first_bytes = open(full_path, "rb").read(3)
    print(f"Written {rel_path}: {size} bytes, first 3 bytes: {list(first_bytes)}")

print("All files written successfully.")
