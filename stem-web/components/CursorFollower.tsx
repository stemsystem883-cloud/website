"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch/coarse-pointer devices (mobile/tablet)
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const ua = navigator.userAgent;
    const isSafari = /Safari/.test(ua) && !/Chrome|Chromium|Edg/.test(ua);
    if (isCoarse || isSafari || !dotRef.current) return;

    const dot = dotRef.current;
    gsap.set(dot, { opacity: 0, x: -24, y: -24 });

    let revealed = false;

    function onMove(e: MouseEvent) {
      if (!revealed) {
        gsap.to(dot, { opacity: 1, duration: 0.25, ease: "power2.out" });
        revealed = true;
      }
      gsap.to(dot, {
        x: e.clientX - 12,
        y: e.clientY - 12,
        duration: 0.38,
        ease: "power2.out",
        overwrite: true,
      });
    }

    function onLeave() {
      gsap.to(dot, { opacity: 0, duration: 0.2 });
      revealed = false;
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-6 w-6 rounded-full border border-primary-blue/25 bg-primary-blue/28 backdrop-blur-[1px]"
    />
  );
}
