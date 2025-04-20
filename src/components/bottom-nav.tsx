import Link from "next/link";
import React from "react";

const BottomNav = () => {
  return (
    <div className="w-full h-full flex justify-between items-center px-8 text-xs text-center text-zinc-50 font-boska">
      <div className="mb-1">
        <h1>madeleydesignstudio</h1>
      </div>
      <div className="flex gap-4 justify-center">
        <Link href="/">home</Link>
        <Link href="/our-philosophy">our philosophy</Link>
        <Link href="/our-work">our work</Link>
        <Link href="/blog">blog</Link>
        <Link href="/contact">contact</Link>
      </div>
    </div>
  );
};

export default BottomNav;
