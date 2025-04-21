"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitioning, setTransitioning] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only trigger transition when pathname changes and not on initial load
    if (pathname && displayChildren !== children) {
      setTransitioning(true);
    }
  }, [pathname, children, displayChildren]);

  useGSAP(() => {
    if (transitioning && overlayRef.current && contentRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          setTransitioning(false);
        },
      });

      // Ensure overlay is completely off-screen to start with
      gsap.set(overlayRef.current, { yPercent: -100 });

      // Fade out current content
      tl.to(contentRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      })
        // Show overlay from top
        .to(overlayRef.current, {
          yPercent: 0,
          duration: 0.5,
          ease: "power3.inOut",
        })
        // Change content while overlay is visible
        .add(() => setDisplayChildren(children))
        // Hide overlay to bottom
        .to(overlayRef.current, {
          yPercent: 100, // Move completely below viewport
          duration: 0.5,
          ease: "power3.inOut",
        })
        // Fade in new content
        .to(contentRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
    }
  }, [transitioning, children]);

  return (
    <>
      <div ref={contentRef} key={pathname} className="min-h-full">
        {displayChildren}
      </div>

      <div
        ref={overlayRef}
        className="fixed inset-0 bg-neutral-900/30 z-50 pointer-events-none"
        style={{ transform: "translateY(-100%)" }}
      />
    </>
  );
}
