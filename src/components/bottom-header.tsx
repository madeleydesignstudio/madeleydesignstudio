"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const BottomHeader = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset show state when pathname changes
    setShow(false);

    if (pathname === "/") {
      const timer = setTimeout(() => {
        setShow(true);
      }, 3200);
      return () => clearTimeout(timer);
    } else {
      // Show immediately on other pages
      setShow(true);
    }
  }, [pathname]);

  return (
    <motion.div
      className="fixed z-[9999] bottom-0 w-full bg-zinc-900 px-12"
      initial={{
        y: pathname === "/" ? 100 : 0,
        opacity: pathname === "/" ? 0 : 1,
      }}
      animate={show ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
    >
      <div className="w-full border-t border-zinc-700 py-2">
        <div className="flex items-center justify-between font-boska font-bold">
          <h1 className="text-sm">madeleydesignstudio</h1>
          <div className="flex items-center gap-2 text-xs">
            <Link
              href="/"
              className={pathname === "/" ? "underline underline-offset-4" : ""}
            >
              home
            </Link>
            <Link
              href="/about"
              className={
                pathname === "/about" ? "underline underline-offset-4" : ""
              }
            >
              about
            </Link>
            <Link
              href="/blog"
              className={
                pathname === "/blog" ? "underline underline-offset-4" : ""
              }
            >
              blog
            </Link>
            <Link
              href="/careers"
              className={
                pathname === "/careers" ? "underline underline-offset-4" : ""
              }
            >
              careers
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BottomHeader;
