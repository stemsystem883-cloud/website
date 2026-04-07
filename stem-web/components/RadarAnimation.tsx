"use client";

import { motion } from "framer-motion";
import { Search, AlertCircle, TrendingUp, ShieldAlert } from "lucide-react";

export function RadarAnimation() {
  const points = [
    { icon: Search, label: "Competitor Tracking", x: "20%", y: "30%" },
    { icon: AlertCircle, label: "Risk Signal", x: "70%", y: "25%" },
    { icon: TrendingUp, label: "Market Shift", x: "40%", y: "70%" },
    { icon: ShieldAlert, label: "Policy Update", x: "80%", y: "65%" },
  ];

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto bg-deep-ink rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
      {/* Radar Circles */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute inset-0 border border-white/5 rounded-full"
          style={{ margin: `${i * 15}%` }}
        />
      ))}

      {/* Crosshair */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-[1px] bg-white/5" />
        <div className="h-full w-[1px] bg-white/5" />
      </div>

      {/* Sweep Line */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-1/2 h-1/2 origin-top-left bg-gradient-to-tr from-primary-blue/20 to-transparent border-l border-primary-blue/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Radar Points */}
      {points.map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: p.x, top: p.y }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
            times: [0, 0.5, 1],
          }}
        >
          <div className="relative">
            <div className="p-2 bg-primary-blue rounded-lg shadow-lg shadow-primary-blue/40">
              <p.icon className="w-4 h-4 text-white" />
            </div>
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/10 backdrop-blur-sm text-[10px] px-2 py-1 rounded text-white font-medium border border-white/10">
              {p.label}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Center Pulse */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 bg-primary-blue rounded-full shadow-lg shadow-primary-blue/50 relative">
          <div className="absolute inset-0 rounded-full bg-primary-blue animate-ping opacity-40" />
        </div>
      </div>
    </div>
  );
}
