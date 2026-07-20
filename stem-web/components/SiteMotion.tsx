"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SiteMotion() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.72, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 86%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>("[data-text-reveal]").forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, yPercent: 18, clipPath: "inset(0 0 100% 0)" }, { autoAlpha: 1, yPercent: 0, clipPath: "inset(0 0 0% 0)", duration: 1, ease: "power4.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        gsap.fromTo(Array.from(group.children), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.58, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: group, start: "top 84%", once: true } });
      });
      const brief = document.querySelector<HTMLElement>("[data-brief]");
      if (brief) gsap.fromTo(brief, { autoAlpha: 0, x: 30, rotateY: -5 }, { autoAlpha: 1, x: 0, rotateY: 0, duration: 1.1, delay: 0.25, ease: "power3.out" });
      const engine = document.querySelector<HTMLElement>("[data-engine]");
      if (engine) gsap.to(engine, { scale: 1.08, filter: "drop-shadow(0 0 18px rgba(51,60,255,.85))", duration: 1.7, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((counter) => {
        const value = { number: 0 }; const target = Number(counter.dataset.counter ?? 0);
        gsap.to(value, { number: target, duration: 1.35, ease: "power2.out", snap: { number: 1 }, onUpdate: () => { counter.textContent = String(value.number); }, scrollTrigger: { trigger: counter, start: "top 90%", once: true } });
      });
    });
    return () => ctx.revert();
  }, [pathname]);
  return null;
}
