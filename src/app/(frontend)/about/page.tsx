"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollRevealText } from "@/components/scroll-reveal-text";

const paragraph_one = `A visionary design studio at the intersection of technology and architecture, where precision engineering meets creative brilliance.`;

const paragraph_two = `We design and develop cutting-edge software, elegant websites, and transformative structural designs, blending the artistry of form with the science of function.`;

const About = () => {
  const [showArrow, setShowArrow] = useState(true);
  const { scrollY } = useScroll();

  // Create motion values for the animations
  const titleOpacity = useTransform(scrollY, [0, 200, 300], [1, 1, 0]);
  const subtitleY = useTransform(scrollY, [0, 300], [0, -300]);
  const subtitleOpacity = useTransform(scrollY, [0, 200, 300], [1, 1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / window.innerHeight) * 100;
      setShowArrow(scrollPercentage < 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-zinc-50">
      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-between relative overflow-hidden">
        <motion.h1
          style={{
            opacity: titleOpacity,
            position: "fixed",
            top: "20px",
            right: "20px",
          }}
          className="text-[15rem] font-bold text-zinc-900 font-switzer text-right"
        >
          about
        </motion.h1>
        <motion.h2
          style={{
            y: subtitleY,
            opacity: subtitleOpacity,
          }}
          className="text-9xl font-bold text-zinc-900 font-switzer pb-16 mt-auto"
        >
          madeleydesignstudio.
        </motion.h2>
        {showArrow && (
          <svg
            className="w-24 h-24 absolute bottom-8 right-2 transform -translate-x-1/2 animate-bounce"
            fill="none"
            stroke="#18181b"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        )}
      </div>
      <div className="h-screen w-screen text-zinc-900 font-switzer gap-y-20 flex flex-col ">
        <ScrollRevealText text={paragraph_one} />
        <ScrollRevealText text={paragraph_two} />
      </div>
    </div>
  );
};

export default About;
