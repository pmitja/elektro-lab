"use client";

import { useEffect } from "react";

// Site-wide section reveals. Heroes are handled by HeroGsap.
export default function RevealInit() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup = () => {};

    void import("gsap").then(({ gsap }) => {
      const targets = Array.from(document.querySelectorAll<HTMLElement>("section"))
        .filter((section) => !section.querySelector("[data-gsap-hero]"))
        .map((section) => section.querySelector<HTMLElement>(":scope > div"))
        .filter((el): el is HTMLElement => Boolean(el));

      gsap.set(targets, { autoAlpha: 0, y: 28 });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const target = entry.target as HTMLElement;
            io.unobserve(target);
            gsap.to(target, {
              autoAlpha: 1,
              y: 0,
              duration: 0.72,
              ease: "power3.out",
              overwrite: "auto",
            });
          });
        },
        { threshold: 0.01, rootMargin: "0px 0px 140px 0px" }
      );

      targets.forEach((target) => io.observe(target));
      cleanup = () => {
        io.disconnect();
        gsap.set(targets, { clearProps: "opacity,visibility,transform" });
      };
    });

    return () => {
      cleanup();
    };
  }, []);

  return null;
}
