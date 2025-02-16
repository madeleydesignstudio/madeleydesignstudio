import { useScroll, useTransform } from "motion/react";

export const useWordAnimations = (words: string[], startScroll: number) => {
  const { scrollY } = useScroll();

  // Pre-create all transform values before mapping
  return words.map((word, i) => {
    const start = startScroll + i * 20;
    const end = startScroll + 100 + i * 20;
    return useTransform(scrollY, [start, end], [0, 1]);
  });
};
