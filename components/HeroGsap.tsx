"use client";

import { useEffect } from "react";

export default function HeroGsap() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup = () => {};

    void import("gsap").then(({ gsap }) => {
      const contexts = gsap.utils.toArray<HTMLElement>("[data-gsap-hero]").map((hero) =>
        gsap.context(() => {
          const copyRoot = hero.matches("[data-gsap-hero-copy]")
            ? hero
            : hero.querySelector<HTMLElement>("[data-gsap-hero-copy]");
          const copy = copyRoot ? Array.from(copyRoot.children) : [];
          const panel = hero.querySelector<HTMLElement>("[data-gsap-hero-panel]");
          const glow = hero.parentElement?.querySelector<HTMLElement>("[data-gsap-hero-glow]");

          gsap.set(copy, { autoAlpha: 0, y: 26 });
          if (panel) gsap.set(panel, { autoAlpha: 0, y: 34, scale: 0.98 });
          if (glow) gsap.set(glow, { autoAlpha: 0, scale: 0.82 });

          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          tl.to(copy, { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.08 });
          if (panel) tl.to(panel, { autoAlpha: 1, y: 0, scale: 1, duration: 0.78 }, "-=0.48");
          if (glow) tl.to(glow, { autoAlpha: 1, scale: 1, duration: 1.15 }, 0.08);
        }, hero)
      );

      cleanup = () => contexts.forEach((context) => context.revert());
    });

    return () => cleanup();
  }, []);

  return null;
}
