"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function RouteScrollReset() {
  const pathname = usePathname();
  const previousPathname = useRef<string | null>(null);

  useLayoutEffect(() => {
    if (previousPathname.current === null) {
      previousPathname.current = pathname;
      return;
    }

    if (previousPathname.current === pathname) return;

    previousPathname.current = pathname;
    if (window.location.hash) return;

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior;
    });
  }, [pathname]);

  return null;
}
