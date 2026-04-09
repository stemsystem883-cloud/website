"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type FlowCanvasProps = {
  inputs: string[];
  centerLabel: string;
  outputTitle: string;
  outputBody: string;
  footerLabel?: string;
  compact?: boolean;
};

export function FlowCanvas({
  inputs,
  centerLabel,
  outputTitle,
  outputBody,
  footerLabel,
  compact = false,
}: FlowCanvasProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRefs = useRef<Array<HTMLDivElement | null>>([]);
  const lineRefs = useRef<Array<HTMLDivElement | null>>([]);
  const centerRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = inputRefs.current.filter(Boolean);
      const lines = lineRefs.current.filter(Boolean);

      gsap.from(rootRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(items, {
        opacity: 0,
        x: -24,
        stagger: 0.07,
        duration: 0.55,
        ease: "power2.out",
        delay: 0.12,
      });

      gsap.from(lines, {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "left center",
        stagger: 0.05,
        duration: 0.35,
        ease: "power2.out",
        delay: 0.32,
      });

      gsap.from(centerRef.current, {
        opacity: 0,
        scale: 0.88,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.45,
      });

      gsap.from(outputRef.current, {
        opacity: 0,
        x: 26,
        y: 10,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.58,
      });

      gsap.to(items, {
        y: (index) => (index % 2 === 0 ? -6 : 6),
        repeat: -1,
        yoyo: true,
        stagger: 0.12,
        duration: 2,
        ease: "sine.inOut",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className={`relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-[linear-gradient(135deg,#ffffff_0%,#eef4ff_40%,#f8fafc_100%)] shadow-[0_24px_70px_rgba(15,23,42,0.08)] ${compact ? "p-5 sm:p-6" : "p-6 sm:p-7"}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(53,99,235,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.06),transparent_24%)]" />

      {/* Mobile layout: vertical stack */}
      <div className="relative flex flex-col gap-4 md:hidden">
        {inputs.map((item, index) => (
          <div
            key={item}
            ref={(node) => { inputRefs.current[index] = node; }}
            className="rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_8px_22px_rgba(15,23,42,0.07)]"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-blue/65">Signal input</p>
            <p className="mt-1 text-sm font-medium text-slate-700">{item}</p>
          </div>
        ))}
        <div className="flex items-center justify-center py-1">
          <div
            ref={centerRef}
            className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-primary-blue/20 bg-white shadow-[0_12px_32px_rgba(53,99,235,0.14)]"
          >
            <p className="px-2 text-center text-[9px] font-semibold uppercase tracking-[0.2em] text-primary-blue/70 leading-tight">{centerLabel}</p>
          </div>
        </div>
        <div ref={outputRef} className="rounded-[24px] border border-slate-200/80 bg-[#0f172a] p-5 text-white shadow-[0_20px_50px_rgba(15,23,42,0.28)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-blue-200/70">Output</p>
          <h3 className="mt-2 text-base font-semibold leading-snug text-white">{outputTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{outputBody}</p>
          {footerLabel && (
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium text-slate-200">
              {footerLabel}
            </div>
          )}
        </div>
      </div>

      {/* Desktop layout: 3-column grid with aligned lines */}
      <div
        className={`relative hidden md:grid md:grid-cols-[minmax(0,1fr)_120px_minmax(0,1fr)] md:items-stretch ${compact ? "md:min-h-[300px]" : "md:min-h-[360px]"}`}
      >
        {/* Left column: chips distributed evenly to match line positions */}
        <div className="flex h-full flex-col justify-around pr-3">
          {inputs.map((item, index) => (
            <div
              key={item}
              ref={(node) => { inputRefs.current[index] = node; }}
              className="rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_10px_26px_rgba(15,23,42,0.07)]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-blue/65">Signal input</p>
              <p className="mt-1 text-[13px] font-medium leading-snug text-slate-700">{item}</p>
            </div>
          ))}
        </div>

        {/* Center column: lens + connecting lines aligned to chip centers */}
        <div className="relative flex h-full items-center justify-center">
          {/* Left lines: from chip centers into lens (chip → lens) */}
          {inputs.map((_, index) => (
            <div
              key={`ln-l-${index}`}
              ref={(node) => { lineRefs.current[index] = node; }}
              className="flow-line absolute right-[60px] h-px"
              style={{
                width: "calc(50% + 30px)",
                top: `${((index * 2 + 1) / (inputs.length * 2)) * 100}%`,
              }}
            />
          ))}
          {/* Right lines: from lens into output (lens → output) */}
          {inputs.map((_, index) => (
            <div
              key={`ln-r-${index}`}
              className="flow-line flow-line-reverse absolute left-[60px] h-px"
              style={{
                width: "calc(50% + 30px)",
                top: `${((index * 2 + 1) / (inputs.length * 2)) * 100}%`,
              }}
            />
          ))}

          {/* Lens circle */}
          <div
            ref={centerRef}
            className="relative z-10 flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full border border-primary-blue/22 bg-white shadow-[0_16px_40px_rgba(53,99,235,0.14)]"
          >
            <div className="absolute inset-[11px] rounded-full border border-dashed border-primary-blue/18" />
            <p className="relative px-2 text-center text-[9px] font-semibold uppercase tracking-[0.22em] text-primary-blue/70 leading-tight">{centerLabel}</p>
          </div>
        </div>

        {/* Right column: output card */}
        <div ref={outputRef} className="flex flex-col justify-center pl-3">
          <div className="rounded-[26px] border border-slate-900/20 bg-[#0f172a] p-5 text-white shadow-[0_22px_60px_rgba(15,23,42,0.30)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-blue-200/70">Output</p>
            <h3 className="mt-3 text-[15px] font-semibold leading-snug text-white lg:text-base">{outputTitle}</h3>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-300">{outputBody}</p>
            {footerLabel && (
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-[13px] font-medium text-slate-200">
                {footerLabel}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}