"use client";
import { useEffect } from "react";
import Lenis, { LenisOptions } from "@studio-freight/lenis";

export const useLenisScroll = () => {
  useEffect(() => {
    const lenisOptions: LenisOptions = {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    };

    const lenis = new Lenis(lenisOptions);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
};
