"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SOURCE_CHIPS = [
  { label: "Competitor move", note: "New pricing signal in Lagos hub" },
  { label: "Policy update", note: "CBN circular flagged for review" },
  { label: "Market shift", note: "Demand movement across segments" },
  { label: "Regional pulse", note: "Abuja and Lagos activity divergence" },
  { label: "Risk signal", note: "Timing pressure on expansion calls" },
];

const BADGES = [
  "Scattered sources",
  "Signal filtering",
  "Decision brief",
  "Built for financial teams",
];

export function StoryHeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Array<HTMLDivElement | null>>([]);
  const lineRefs = useRef<Array<HTMLDivElement | null>>([]);
  const badgeRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const lensRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chips = chipRefs.current.filter(Boolean);
      const lines = lineRefs.current.filter(Boolean);
      const badges = badgeRefs.current.filter(Boolean);

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .from(containerRef.current, { opacity: 0, y: 24, duration: 0.65 })
        .from(chips, { opacity: 0, x: -24, stagger: 0.08, duration: 0.55 }, 0.15)
        .from(lines, { scaleX: 0, transformOrigin: "left center", opacity: 0, stagger: 0.05, duration: 0.4 }, 0.5)
        .from(lensRef.current, { opacity: 0, scale: 0.82, duration: 0.55 }, 0.62)
        .from(cardRef.current, { opacity: 0, x: 26, y: 10, duration: 0.65 }, 0.88)
        .from(badges, { opacity: 0, y: 10, stagger: 0.06, duration: 0.38 }, 1.05);

      gsap.to(chips, {
        y: (i) => (i % 2 === 0 ? -6 : 6),
        repeat: -1,
        yoyo: true,
        duration: 2.4,
        stagger: 0.14,
        ease: "sine.inOut",
      });

      gsap.to(lensRef.current, {
        boxShadow: "0 0 0 16px rgba(53,99,235,0.07), 0 16px 44px rgba(53,99,235,0.16)",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: 0.7,
        animation: gsap.timeline()
          .to(chips, { yPercent: -8, stagger: 0.04 }, 0)
          .to(cardRef.current, { yPercent: -4 }, 0)
          .to(lensRef.current, { yPercent: -3 }, 0),
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[600px] overflow-hidden rounded-[30px] border border-slate-200/80 bg-[linear-gradient(135deg,#fbfcff_0%,#eef4ff_38%,#f8fafc_100%)] p-5 shadow-[0_28px_90px_rgba(15,23,42,0.08)] sm:p-6 lg:max-w-full lg:p-7"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(53,99,235,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_32%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:36px_36px]" />

      {/* Mobile layout: vertical stack */}
      <div className="relative flex flex-col gap-4 md:hidden">
        {SOURCE_CHIPS.slice(0, 3).map((chip, index) => (
          <div
            key={chip.label}
            ref={(node) => { chipRefs.current[index] = node; }}
            className="rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.07)] backdrop-blur"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-blue/70">{chip.label}</p>
            <p className="mt-1 text-sm font-medium leading-relaxed text-slate-700">{chip.note}</p>
          </div>
        ))}
        <div ref={cardRef} className="rounded-[24px] border border-slate-200/80 bg-[#0f172a] p-5 text-white shadow-[0_20px_50px_rgba(15,23,42,0.28)]">
          <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-blue-200/70">Priority Brief</p>
              <h3 className="mt-1.5 text-base font-semibold leading-snug text-white">Regulatory timing shift detected</h3>
            </div>
            <span className="shrink-0 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">Live</span>
          </div>
          <div className="space-y-3 pt-3">
            <div className="rounded-xl border border-white/8 bg-white/5 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-200/70">Why it matters</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-300">A new policy signal and competitor movement are converging around the same decision window.</p>
            </div>
            <div className="rounded-xl border border-white/8 bg-white/5 px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-200/70">Next move</p>
              <p className="mt-1 text-sm font-medium text-white">Review timing assumptions before acting.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout: 3-column grid */}
      <div className="relative hidden md:grid md:grid-cols-[1fr_130px_1fr] md:items-center md:gap-4 md:min-h-[480px] lg:gap-6 lg:min-h-[520px]">

        {/* Left: chips column */}
        <div className="flex flex-col justify-center gap-3 pr-2">
          {SOURCE_CHIPS.map((chip, index) => (
            <div
              key={chip.label}
              ref={(node) => { chipRefs.current[index] = node; }}
              className="rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_10px_28px_rgba(15,23,42,0.07)] backdrop-blur"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-blue/70">{chip.label}</p>
              <p className="mt-1 text-[13px] font-medium leading-snug text-slate-700">{chip.note}</p>
            </div>
          ))}
        </div>

        {/* Center: lens + connecting lines */}
        <div className="relative flex h-full items-center justify-center">
          {/* Left-side lines (chip → lens) */}
          {SOURCE_CHIPS.map((chip, index) => (
            <div
              key={`line-l-${chip.label}`}
              ref={(node) => { lineRefs.current[index] = node; }}
              className="absolute right-[65px] h-px bg-[linear-gradient(90deg,rgba(53,99,235,0.08),rgba(53,99,235,0.5))]"
              style={{
                width: "calc(50% + 20px)",
                top: `${22 + index * 14}%`,
              }}
            />
          ))}

          {/* Right-side lines (lens → card) */}
          {SOURCE_CHIPS.map((chip, index) => (
            <div
              key={`line-r-${chip.label}`}
              className="absolute left-[65px] h-px bg-[linear-gradient(90deg,rgba(53,99,235,0.5),rgba(53,99,235,0.08))]"
              style={{
                width: "calc(50% + 20px)",
                top: `${22 + index * 14}%`,
              }}
            />
          ))}

          {/* Lens circle */}
          <div
            ref={lensRef}
            className="relative z-10 flex h-[112px] w-[112px] shrink-0 items-center justify-center rounded-full border border-primary-blue/25 bg-white shadow-[0_16px_44px_rgba(53,99,235,0.14)]"
          >
            <div className="absolute inset-[12px] rounded-full border border-dashed border-primary-blue/20" />
            <div className="absolute inset-[26px] rounded-full bg-primary-blue/8" />
            <div className="relative text-center px-1">
              <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-primary-blue/65 leading-tight">Signal<br />Lens</p>
              <p className="mt-1 text-xs font-semibold text-deep-ink leading-tight">What matters now</p>
            </div>
          </div>
        </div>

        {/* Right: priority brief card */}
        <div ref={cardRef} className="flex flex-col justify-center pl-2">
          <div className="rounded-[26px] border border-slate-900/20 bg-[#0f172a] p-5 text-white shadow-[0_24px_64px_rgba(15,23,42,0.32)]">
            <div className="flex items-start justify-between gap-2 border-b border-white/10 pb-4">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-blue-200/70">Priority Brief</p>
                <h3 className="mt-2 text-[15px] font-semibold leading-snug text-white lg:text-base">
                  Regulatory timing shift detected
                </h3>
              </div>
              <span className="shrink-0 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Live
              </span>
            </div>

            <div className="space-y-3 pt-4">
              <div className="rounded-xl border border-white/8 bg-white/5 p-3.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-200/70">Why it matters</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-300">
                  A new policy signal and competitor movement are converging around the same decision window.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-white/8 bg-white/5 p-3">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-200/70">Confidence</p>
                  <p className="mt-1.5 text-xl font-bold text-white">97%</p>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/5 p-3">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-200/70">Source trail</p>
                  <p className="mt-1.5 text-[12px] font-medium leading-snug text-white">CBN circular, market watch, competitor update</p>
                </div>
              </div>

              <div className="rounded-xl border border-white/8 bg-white/5 px-3.5 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-200/70">Next move</p>
                <p className="mt-1.5 text-[13px] font-medium leading-snug text-white">Review timing assumptions before acting.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Badge row */}
      <div className="relative mt-5 flex flex-wrap gap-2">
        {BADGES.map((badge, index) => (
          <span
            key={badge}
            ref={(node) => { badgeRefs.current[index] = node; }}
            className="rounded-full border border-white/80 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}