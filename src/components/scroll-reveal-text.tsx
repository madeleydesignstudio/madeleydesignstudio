"use client";

import type React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({ text }) => {
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
}

const Word: React.FC<WordProps> = ({
  children,
  progress,
  index,
  totalWords,
}) => {
  const opacity = useTransform(
    progress,
    [index / totalWords, (index + 1) / totalWords],
    [0, 1]
  );

  return (
    <motion.span className="inline-block mr-2" style={{ opacity }}>
      {children}
    </motion.span>
  );
};
