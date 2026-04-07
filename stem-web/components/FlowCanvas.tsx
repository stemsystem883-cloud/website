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
      <div className={`relative grid items-center gap-5 md:grid-cols-[minmax(0,0.9fr)_100px_minmax(0,1fr)] ${compact ? "md:min-h-[300px]" : "md:min-h-[360px]"}`}>
        <div className="space-y-3">
          {inputs.map((item, index) => (
            <div
              key={item}
              ref={(node) => {
                inputRefs.current[index] = node;
              }}
              className="rounded-2xl border border-white/80 bg-white/88 px-4 py-3 shadow-[0_12px_28px_rgba(15,23,42,0.08)]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-blue/65">Signal input</p>
              <p className="mt-1 text-sm font-medium text-slate-700">{item}</p>
            </div>
          ))}
        </div>

        <div className="relative hidden h-full items-center justify-center md:flex">
          {inputs.map((item, index) => (
            <div
              key={item}
              ref={(node) => {
                lineRefs.current[index] = node;
              }}
              className="absolute left-[-54px] h-px w-[86px] bg-[linear-gradient(90deg,rgba(53,99,235,0.52),rgba(53,99,235,0.10))]"
              style={{ top: `${18 + index * (52 / Math.max(inputs.length, 5))}%` }}
            />
          ))}

          <div
            ref={centerRef}
            className="flex h-[96px] w-[96px] items-center justify-center rounded-full border border-primary-blue/20 bg-white/90 text-center shadow-[0_18px_42px_rgba(53,99,235,0.14)]"
          >
            <p className="px-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary-blue/70">{centerLabel}</p>
          </div>
        </div>

        <div ref={outputRef} className="rounded-[28px] border border-slate-200/80 bg-[#0f172a] p-5 text-white shadow-[0_24px_64px_rgba(15,23,42,0.28)] sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-blue-200/70">Output</p>
          <h3 className="mt-3 text-xl font-semibold leading-tight text-white">{outputTitle}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{outputBody}</p>
          {footerLabel && (
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200">
              {footerLabel}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}