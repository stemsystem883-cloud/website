"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  staggerChildren?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 30,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const from: gsap.TweenVars = { opacity: 0 };
    if (direction === "up") from.y = distance;
    if (direction === "down") from.y = -distance;
    if (direction === "left") from.x = distance;
    if (direction === "right") from.x = -distance;

    const ctx = gsap.context(() => {
      gsap.fromTo(el, from, {
        opacity: 1, x: 0, y: 0,
        duration: 0.85, delay,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 86%", once: true },
      });
    });
    return () => ctx.revert();
  }, [delay, direction, distance]);

  return <div ref={ref} className={className}>{children}</div>;
}

export function RevealItem({
  children,
  distance = 20,
  className = "",
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  return (
    <ScrollReveal distance={distance} className={className}>
      {children}
    </ScrollReveal>
  );
}
