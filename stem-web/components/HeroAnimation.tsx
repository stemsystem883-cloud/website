"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Zap, Shield, Globe, BarChart2, Activity, TrendingUp, AlertCircle } from "lucide-react";

// Nodes start scattered (chaotic offsets), then converge to final resting position
const DATA_NODES = [
  { icon: Zap,          label: "Price Shift",     finalX: -155, finalY: -125, chaosX: -320, chaosY: -260, delay: 0.05 },
  { icon: Shield,       label: "Policy Change",   finalX:  165, finalY: -145, chaosX:  340, chaosY: -290, delay: 0.12 },
  { icon: Globe,        label: "Market Entry",    finalX: -185, finalY:  130, chaosX: -360, chaosY:  250, delay: 0.18 },
  { icon: BarChart2,    label: "Volume Spike",    finalX:  145, finalY:  155, chaosX:  300, chaosY:  300, delay: 0.08 },
  { icon: Activity,     label: "Competitor Move", finalX:    0, finalY: -185, chaosX:   60, chaosY: -370, delay: 0.22 },
  { icon: TrendingUp,   label: "FX Movement",     finalX: -120, finalY:  200, chaosX: -240, chaosY:  390, delay: 0.15 },
  { icon: AlertCircle,  label: "Risk Signal",     finalX:  200, finalY:   60, chaosX:  400, chaosY:  120, delay: 0.10 },
];

// Floating Nigerian data tags around the card
const FLOAT_TAGS = [
  { text: "Naira FX Pulse",    x: -230, y:  -30, delay: 1.6 },
  { text: "NIBSS Vol. Shift",  x:  185, y:  -80, delay: 1.9 },
  { text: "SEC Nigeria Update",x: -195, y:  110, delay: 2.2 },
  { text: "Lagos Hub Signal",  x:  180, y:  100, delay: 2.5 },
];

export function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [converged, setConverged] = useState(false);
  const [showLineage, setShowLineage] = useState(false);

  const cardMouseX = useMotionValue(0);
  const cardMouseY = useMotionValue(0);
  const cardSpringX = useSpring(cardMouseX, { damping: 25, stiffness: 150 });
  const cardSpringY = useSpring(cardMouseY, { damping: 25, stiffness: 150 });

  useEffect(() => {
    setMounted(true);
    // Convergence trigger: nodes fly in, card appears at ~1.2s
    const t1 = setTimeout(() => setConverged(true), 1200);
    // Auto-expand lineage tooltip at ~3s to show "defensible intel" narrative
    const t2 = setTimeout(() => setShowLineage(true), 3200);
    const t3 = setTimeout(() => setShowLineage(false), 6000);

    const el = containerRef.current;
    const handleMouse = (e: MouseEvent) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      cardMouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 24);
      cardMouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 14);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [cardMouseX, cardMouseY]);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="relative aspect-square lg:h-[620px] w-full flex items-center justify-center overflow-hidden select-none"
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-blue/10 rounded-full filter blur-[90px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-300/10 rounded-full filter blur-[80px] animate-blob animation-delay-2000" />
      </div>

      {/* Abstract Nigeria map ghost */}
      <svg
        viewBox="0 60 320 260"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          d="M 130 80 L 170 72 L 205 80 L 228 98 L 240 122 L 242 150 L 234 178 L 218 202 L 198 222 L 174 238 L 148 242 L 122 234 L 100 216 L 86 192 L 82 165 L 88 138 L 102 114 L 116 96 Z"
          fill="none"
          stroke="#3563EB"
          strokeWidth="1.2"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 0.08, pathLength: 1 }}
          transition={{ delay: 0.5, duration: 2.6, ease: "easeInOut" }}
        />
        {/* Lagos pulse */}
        <motion.circle cx="136" cy="200" r="3.5" fill="#3563EB"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0.3] }}
          transition={{ delay: 2.8, duration: 0.8 }}
        />
        <motion.circle cx="136" cy="200" r="10" fill="none" stroke="#3563EB" strokeWidth="1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.25, 0], scale: [0.5, 2, 2.8] }}
          transition={{ delay: 3.1, duration: 1.4, repeat: Infinity, repeatDelay: 2.2 }}
        />
      </svg>

      {/* Convergence path lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        {DATA_NODES.map((node, i) => {
          const cx = 50 + (node.finalX / 5.5);
          const cy = 50 + (node.finalY / 5.5);
          return (
            <motion.line
              key={i}
              x1={`${cx}%`} y1={`${cy}%`}
              x2="50%" y2="50%"
              stroke="#3563EB"
              strokeWidth="1"
              strokeDasharray="3 7"
              initial={{ opacity: 0 }}
              animate={converged
                ? { opacity: [0.3, 0], pathLength: [1, 0] }
                : { opacity: 0.15 }
              }
              transition={{ delay: converged ? i * 0.035 : 0, duration: 0.55 }}
            />
          );
        })}
      </svg>

      {/* Fragmented data nodes — chaotic → converge → vanish */}
      {DATA_NODES.map((node, i) => (
        <motion.div
          key={i}
          className="absolute z-20 pointer-events-none"
          initial={{ x: node.chaosX, y: node.chaosY, opacity: 0, scale: 0.3 }}
          animate={converged
            ? { x: 0, y: 0, opacity: 0, scale: 0.1 }
            : { x: node.finalX, y: node.finalY, opacity: 1, scale: 1 }
          }
          transition={converged
            ? { duration: 0.5, ease: [0.32, 0, 0.67, 0], delay: i * 0.03 }
            : { type: "spring", stiffness: 38, damping: 16, delay: node.delay }
          }
          style={{ y: y2 }}
        >
          <div className="p-2.5 bg-white/80 backdrop-blur-md rounded-xl shadow-sm border border-gray-100 text-gray-400">
            <node.icon className="w-4 h-4" />
          </div>
        </motion.div>
      ))}

      {/* Floating Nigerian data tags — appear after convergence */}
      {FLOAT_TAGS.map((tag, i) => (
        <motion.div
          key={i}
          className="absolute z-20 pointer-events-none"
          style={{
            left: "50%",
            top: "50%",
            x: tag.x,
            y: tag.y,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={converged
            ? { opacity: 0.5, scale: 1 }
            : { opacity: 0 }
          }
          transition={{ delay: tag.delay, duration: 0.7 }}
        >
          <span className="text-[8px] font-mono font-bold text-primary-blue/60 bg-primary-blue/5 border border-primary-blue/10 px-2 py-0.5 rounded whitespace-nowrap">
            {tag.text}
          </span>
        </motion.div>
      ))}

      {/* Central Signal Card */}
      <motion.div
        className="relative z-30"
        style={{ x: cardSpringX, y: cardSpringY }}
      >
        <motion.div
          className="w-[280px] sm:w-[318px]"
          initial={{ scale: 0.75, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 28, damping: 18, delay: 1.2 }}
          style={{ y: y1 }}
        >
          {/* Glow ring reveals on convergence */}
          <motion.div
            className="absolute -inset-2 rounded-[22px] bg-primary-blue/15 blur-xl z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: converged ? 0.8 : 0 }}
            transition={{ delay: 1.35, duration: 1 }}
          />

          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-visible group z-10">
            {/* Header */}
            <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-100 flex items-center justify-between rounded-t-2xl">
              <span className="text-[10px] font-mono font-bold text-primary-blue tracking-tight">
                [SOURCE: CBN-REG-2026]
              </span>
              <div className="flex items-center gap-1.5">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
                </div>
                <span className="text-[9px] font-bold text-green-600 uppercase tracking-widest">Live</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-primary-blue/10 text-primary-blue text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Regulatory Shift
                </span>
                <span className="bg-orange-50 text-orange-600 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  High Impact
                </span>
              </div>
              <h4 className="text-deep-ink font-bold text-sm leading-snug mb-2">
                New Capital Adequacy Requirements for Payment Service Banks
              </h4>
              <p className="text-gray-500 text-[11px] leading-relaxed mb-4">
                Consolidation signal detected for Lagos fintech hub. Affecting 4 key market players in Q3.
              </p>
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div className="flex -space-x-1">
                  {["C", "M", "R"].map((l, idx) => (
                    <div key={idx} className="w-5 h-5 rounded-full bg-primary-blue/10 border border-white flex items-center justify-center text-[7px] font-bold text-primary-blue">
                      {l}
                    </div>
                  ))}
                </div>
                <button
                  className="text-[10px] font-semibold text-primary-blue hover:underline cursor-pointer"
                  onClick={() => setShowLineage((v) => !v)}
                >
                  View Lineage →
                </button>
              </div>
            </div>

            {/* Lineage tooltip — auto-opens at t=3.2s + click toggleable */}
            <AnimatePresence>
              {showLineage && (
                <motion.div
                  key="lineage"
                  className="absolute -right-2 -bottom-[118px] w-52 bg-deep-ink text-white p-4 rounded-xl shadow-2xl z-50"
                  initial={{ opacity: 0, y: -8, scale: 0.93 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.95 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <p className="text-[9px] font-bold text-green-400 mb-2 uppercase tracking-widest">
                    Intelligence Confidence: 98%
                  </p>
                  <ul className="text-[9px] space-y-1.5 text-gray-400 mb-2">
                    {[
                      "1 Official CBN Circular",
                      "2 Verified Market Reports",
                      "1 Competitor Press Release",
                    ].map((s) => (
                      <li key={s} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-primary-blue flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[9px] text-gray-500 border-t border-white/10 pt-2">
                    Reduces decision exposure for expansion strategy in Q3
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      {/* Market live pill */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40"
        initial={{ y: 14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.6 }}
      >
        <div className="flex items-center gap-2 text-[11px] font-medium text-deep-ink bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md border border-gray-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Market Live
          <span className="text-gray-400 font-normal">· 142 active signals in Lagos</span>
        </div>
      </motion.div>
    </div>
  );
}
