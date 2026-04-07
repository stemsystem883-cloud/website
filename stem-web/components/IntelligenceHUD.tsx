"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export type HudStage = 0 | 1 | 2 | 3;

const SIZE = 420;
const CX = SIZE / 2;
const CY = SIZE / 2;
const SPREAD = 150;

const PARTICLES = [
  { id:  1, nx: -0.52, ny: -0.28, tag: "FX-NGN",    priority: false },
  { id:  2, nx:  0.38, ny: -0.54, tag: "CBN-POL",   priority: true  },
  { id:  3, nx: -0.18, ny:  0.62, tag: "NIBSS",     priority: false },
  { id:  4, nx:  0.62, ny:  0.22, tag: "COMP-EXIT", priority: true  },
  { id:  5, nx: -0.68, ny:  0.12, tag: "SEC-NG",    priority: false },
  { id:  6, nx:  0.08, ny: -0.70, tag: "LASG-REG",  priority: false },
  { id:  7, nx: -0.32, ny: -0.58, tag: "FCCPC",     priority: false },
  { id:  8, nx:  0.54, ny: -0.32, tag: "PSB-CAP",   priority: true  },
  { id:  9, nx:  0.24, ny:  0.64, tag: "BDC-FX",    priority: false },
  { id: 10, nx: -0.58, ny: -0.48, tag: "CBN-MPC",   priority: false },
  { id: 11, nx:  0.72, ny: -0.04, tag: "NGX-VOL",   priority: false },
  { id: 12, nx: -0.12, ny:  0.74, tag: "FINTECH",   priority: false },
  { id: 13, nx:  0.44, ny:  0.54, tag: "OPay-EXP",  priority: false },
  { id: 14, nx: -0.48, ny:  0.44, tag: "NNPC-NG",   priority: false },
  { id: 15, nx: -0.70, ny: -0.14, tag: "KANO-HUB",  priority: false },
].map((p) => ({ ...p, px: CX + p.nx * SPREAD, py: CY + p.ny * SPREAD }));

const SIGNAL_CARDS = [
  { tag: "[CBN-REG-2026]",    title: "Capital Adequacy Requirements",  conf: "98%" },
  { tag: "[COMPETITOR-MOVE]", title: "Payment Switch T&C Shift",       conf: "94%" },
  { tag: "[MACRO-FX]",        title: "Naira FX Realignment Signal",    conf: "89%" },
];

const READOUTS: Record<HudStage, string> = {
  0: "SIGNALS: 142 | NOISE: HIGH",
  1: "SCANNING · ANOMALIES DETECTED",
  2: "PRIORITY: 3 SIGNALS | CONF: 94%",
  3: "DECISION READY | CONF: 97%",
};

export function IntelligenceHUD({ stage }: { stage: HudStage }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-[420px] aspect-square mx-auto"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer ambient glow */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        animate={{ opacity: stage >= 2 ? 1 : 0.45 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "radial-gradient(ellipse at center, transparent 48%, rgba(53,99,235,0.10) 100%)",
          filter: "blur(14px)",
        }}
      />

      {/* Main SVG */}
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="absolute inset-0 overflow-visible"
      >
        <defs>
          <filter id="hud-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="hudClip">
            <circle cx={CX} cy={CY} r={CX - 2} />
          </clipPath>
        </defs>

        {/* Glass fill */}
        <circle cx={CX} cy={CY} r={CX - 2} fill="rgba(248,250,252,0.88)" />

        {/* Concentric rings */}
        <circle cx={CX} cy={CY} r={CX - 2}  fill="none" stroke="rgba(53,99,235,0.14)" strokeWidth="1.5" />
        <circle cx={CX} cy={CY} r={CX - 14} fill="none" stroke="rgba(53,99,235,0.07)" strokeWidth="1" strokeDasharray="3 6" />
        <circle cx={CX} cy={CY} r={CX - 32} fill="none" stroke="rgba(53,99,235,0.05)" strokeWidth="1" />
        <circle cx={CX} cy={CY} r={CX - 56} fill="none" stroke="rgba(53,99,235,0.04)" strokeWidth="1" />

        {/* Crosshair */}
        <line x1={6} y1={CY} x2={SIZE - 6} y2={CY} stroke="rgba(53,99,235,0.06)" strokeWidth="1" />
        <line x1={CX} y1={6} x2={CX} y2={SIZE - 6} stroke="rgba(53,99,235,0.06)" strokeWidth="1" />

        {/* Nigeria abstract map ghost */}
        <motion.path
          d={`M ${CX-65} ${CY-70} L ${CX-28} ${CY-82} L ${CX+12} ${CY-64} L ${CX+44} ${CY-40} L ${CX+54} ${CY+2} L ${CX+40} ${CY+46} L ${CX+10} ${CY+72} L ${CX-28} ${CY+74} L ${CX-58} ${CY+54} L ${CX-70} ${CY+24} L ${CX-74} ${CY-20} Z`}
          fill="none"
          stroke="rgba(53,99,235,0.07)"
          strokeWidth="1.5"
          clipPath="url(#hudClip)"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Lagos pulse dot */}
        <motion.circle
          cx={CX - 20} cy={CY + 46} r={2.5}
          fill="#3563EB"
          animate={{ opacity: [0.2, 0.55, 0.2], r: [2, 3.5, 2] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx={CX - 20} cy={CY + 46} r={8}
          fill="none" stroke="#3563EB" strokeWidth="0.8"
          animate={{ opacity: [0.15, 0, 0.15], r: [5, 14, 5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
        />

        {/* Radar sweep — stage 1 only */}
        <AnimatePresence>
          {stage === 1 && (
            <motion.g
              key="radar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.g
                style={{ transformOrigin: `${CX}px ${CY}px` }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <line
                  x1={CX} y1={CY} x2={CX} y2={8}
                  stroke="#3563EB" strokeWidth="1.5" opacity={0.65}
                />
                {/* Trailing sweep glow */}
                <line
                  x1={CX} y1={CY} x2={CX} y2={8}
                  stroke="#3563EB" strokeWidth="22" opacity={0.04}
                  strokeLinecap="round"
                />
              </motion.g>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Particles */}
        {PARTICLES.map((p) => {
          const isActive = p.priority;
          const glowing = isActive && stage >= 1;
          const visible = isActive || stage < 2;
          return (
            <motion.g
              key={p.id}
              animate={{ opacity: visible ? 1 : 0 }}
              transition={{ duration: 0.55 }}
            >
              <motion.circle
                cx={p.px} cy={p.py}
                fill={glowing ? "#3563EB" : "rgba(148,163,184,0.55)"}
                filter={glowing ? "url(#hud-glow)" : undefined}
                animate={{ r: glowing ? [4, 6, 4] : [2.5] }}
                transition={glowing
                  ? { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0 }
                }
              />
              {/* Tag label — stage 1, priority nodes only */}
              {stage === 1 && isActive && (
                <g>
                  <rect
                    x={p.px + 9} y={p.py - 9}
                    width={p.tag.length * 5.2 + 8} height={15}
                    rx={3} fill="rgba(53,99,235,0.10)"
                    stroke="rgba(53,99,235,0.28)" strokeWidth="0.6"
                  />
                  <text
                    x={p.px + 13} y={p.py + 2}
                    fontSize="6.5" fontFamily="monospace"
                    fill="#3563EB" fontWeight="bold"
                  >
                    {p.tag}
                  </text>
                </g>
              )}
            </motion.g>
          );
        })}
      </svg>

      {/* Stage 2: Signal cards */}
      <AnimatePresence mode="wait">
        {stage === 2 && (
          <motion.div
            key="signals"
            className="absolute inset-0 flex flex-col justify-center items-center gap-2 px-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {SIGNAL_CARDS.map((card, i) => (
              <motion.div
                key={i}
                className="w-full bg-white/90 backdrop-blur-sm border border-primary-blue/20 rounded-lg px-3 py-2 shadow-sm"
                initial={{ x: 18, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 380, damping: 28 }}
              >
                <p className="text-[7px] font-mono font-bold text-primary-blue mb-0.5 uppercase tracking-wider">{card.tag}</p>
                <p className="text-[10px] font-semibold text-deep-ink leading-tight">{card.title}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[7px] text-gray-400">Confidence</span>
                  <span className="text-[7px] font-bold text-primary-blue">{card.conf}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Stage 3: Decision brief */}
        {stage === 3 && (
          <motion.div
            key="decision"
            className="absolute inset-0 flex items-center justify-center px-10 pointer-events-none"
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35 }}
          >
            <div className="w-full bg-white/94 backdrop-blur-md border border-primary-blue/25 rounded-xl px-4 py-4 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                <p className="text-[8px] font-mono font-bold text-primary-blue uppercase tracking-widest">[DECISION BRIEF]</p>
              </div>
              <p className="text-[12px] font-bold text-deep-ink leading-snug mb-2">
                Q3 Regulatory Repositioning Required
              </p>
              <p className="text-[9px] text-gray-500 leading-relaxed mb-3">
                Capital adequacy shift, competitor T&C update, and FX realignment signal converge into a single strategic risk for Lagos-hub PSBs.
              </p>
              <div className="border-t border-gray-100 pt-2 flex items-center justify-between">
                <div>
                  <p className="text-[8px] font-bold text-green-600">Confidence: 97%</p>
                  <p className="text-[7px] text-gray-400 mt-0.5">3 sources · CBN Circular · NIBSS Report</p>
                </div>
                <span className="text-[7px] font-mono text-primary-blue/50 bg-primary-blue/5 px-2 py-0.5 rounded border border-primary-blue/10">DEFENSIBLE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top readout — coordinates */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="text-[8px] font-mono text-primary-blue/35 whitespace-nowrap">
          COORD: 6.5244°N, 3.3792°E
        </span>
      </div>

      {/* Bottom readout — dynamic status */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.span
            key={stage}
            className="text-[8px] font-mono text-primary-blue/55 whitespace-nowrap"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
          >
            {READOUTS[stage]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Stage indicator dots — right edge */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 pointer-events-none">
        {([0, 1, 2, 3] as HudStage[]).map((s) => (
          <motion.div
            key={s}
            className="w-1.5 rounded-full"
            animate={{
              height: stage === s ? 14 : 6,
              backgroundColor: stage === s ? "#3563EB" : "rgba(53,99,235,0.2)",
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Hover lineage tooltip */}
      <AnimatePresence>
        {hovered && stage >= 2 && (
          <motion.div
            key="lineage"
            className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 ml-3 w-52 bg-deep-ink text-white p-3.5 rounded-xl shadow-2xl z-50"
            style={{ marginLeft: "12px" }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <p className="text-[9px] font-bold text-green-400 mb-2 uppercase tracking-widest">Source Lineage</p>
            <ul className="text-[9px] space-y-1.5 text-gray-400">
              {[
                "1 Official CBN Circular",
                "NIBSS Volume Report Q1 2026",
                "2 Regional Market Intelligence Reports",
              ].map((s) => (
                <li key={s} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-primary-blue flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="text-[8px] text-gray-500 border-t border-white/10 pt-2 mt-2">
              LATENCY: 12ms · SIGNAL_COUNT: 142
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
