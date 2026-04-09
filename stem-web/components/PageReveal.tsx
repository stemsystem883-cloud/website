"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Drop <PageReveal /> at the top of any server-component page.
 * Tag elements with data-reveal (single) or data-reveal-group (staggered grid).
 */
export function PageReveal() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Individual reveals
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.82,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 87%", once: true },
          }
        );
      });

      // Staggered group reveals (card grids etc.)
      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        const children = Array.from(group.children) as HTMLElement[];
        gsap.fromTo(
          children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.72,
            ease: "power3.out",
            stagger: 0.09,
            scrollTrigger: { trigger: group, start: "top 87%", once: true },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
