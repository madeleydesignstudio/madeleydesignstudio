"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const BottomHeader = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Wait for main animation to complete (3000ms + text animation time)
    const timer = setTimeout(() => {
      setShow(true);
    }, 3200); // 3000ms initial delay + 1800ms for text animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed z-[9999] bottom-0 w-full bg-zinc-900 px-12"
      initial={{ y: 100, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
    >
      <div className="w-full border-t border-zinc-700 py-2">
        <div className="flex items-center justify-between font-boska font-bold">
          <h1 className="text-sm">madeleydesignstudio.</h1>
          <div className="flex items-center gap-2 text-xs">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BottomHeader;
