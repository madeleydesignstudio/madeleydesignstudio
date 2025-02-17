"use client";

import type React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  startProgress?: number;
  endProgress?: number;
}

export const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({
  text,
  startProgress = 0,
  endProgress = 1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <div
      ref={containerRef}
      className="lowercase text-7xl font-bold text-center max-w-8xl mx-auto flex flex-wrap justify-center gap-x-5"
    >
      {words.map((word, index) => (
        <Word
          key={index}
          progress={scrollYProgress}
          index={index}
          totalWords={words.length}
          startProgress={startProgress}
          endProgress={endProgress}
        >
          {word}
        </Word>
      ))}
    </div>
  );
};

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  index: number;
  totalWords: number;
  startProgress: number;
  endProgress: number;
}

const Word: React.FC<WordProps> = ({
  children,
  progress,
  index,
  totalWords,
  startProgress,
  endProgress,
}) => {
  const opacity = useTransform(
    progress,
    [
      startProgress + (index / totalWords) * (endProgress - startProgress),
      startProgress +
        ((index + 1) / totalWords) * (endProgress - startProgress),
    ],
    [0, 1]
  );

  return (
    <motion.span className="inline-block mr-2" style={{ opacity }}>
      {children}
    </motion.span>
  );
};
