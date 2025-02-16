"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";

interface Dot {
  element: SVGCircleElement;
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
}

const YugaLabsAnimation = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const dotsRef = useRef<Dot[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const [showDots, setShowDots] = useState(false);

  // Enhanced text animation sequence
  const textVariants = {
    initial: {
      opacity: 0,
      y: -100,
      scale: 1.1,
      filter: "blur(10px)",
    },
    animate: (i: number) => ({
      opacity: [0, 0.3, 0],
      y: [-(i * 120), 0],
      scale: [1.1, 1],
      filter: ["blur(10px)", "blur(0px)", "blur(5px)"],
      transition: {
        duration: 1.8,
        delay: i * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
        opacity: {
          ease: "linear",
          duration: 1.8,
          times: [0, 0.5, 1],
        },
      },
    }),
    final: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        delay: 1.8,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDots(true);
    }, 3000); // Increased delay for text animation

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!svgRef.current || !showDots) return;

    const svg = svgRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const gapSize = 15;
    const cols = Math.floor(width / gapSize);
    const rows = Math.floor(height / gapSize);

    // Refined color palette
    const colors = [
      "#fafafa", // slate-50
      "#f5f5f5", // slate-100
      "#e5e5e5", // slate-200
      "#d4d4d4", // slate-300
      "#a3a3a3", // slate-400
    ];

    // Create dots with enhanced GSAP animation
    const timeline = gsap.timeline();

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const index = i * cols + j;
        const x = j * gapSize + gapSize / 2;
        const y = i * gapSize + gapSize / 2;
        const color =
          index % 50 === 0
            ? "#a855f7"
            : colors[Math.floor(Math.random() * colors.length)]; // Purple for every 50th circle
        const size = Math.random() * 1.2 + 0.3; // Slightly smaller dots

        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        circle.setAttribute("cx", x.toString());
        circle.setAttribute("cy", y.toString());
        circle.setAttribute("r", "0");
        circle.setAttribute("fill", color);
        circle.setAttribute("opacity", "0");
        svg.appendChild(circle);

        // More organic dot appearance animation
        timeline.to(
          circle,
          {
            r: size,
            opacity: index % 50 === 0 ? 0.3 : 0.15, // Higher opacity for purple circles
            duration: 0.6,
            delay: Math.random() * 0.8,
            ease: "power2.inOut",
          },
          "<0.02"
        ); // Slight overlap for more organic feel

        dotsRef.current.push({
          element: circle,
          x,
          y,
          originX: x,
          originY: y,
          vx: 0,
          vy: 0,
          color,
          size,
        });
      }
    }

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      svg.setAttribute("width", newWidth.toString());
      svg.setAttribute("height", newHeight.toString());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [showDots]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!showDots) return;

    const radius = 60; // Reduced from 120 (50% smaller)
    const strength = 0.35; // Reduced strength for more subtle movement
    const friction = 0.88; // Increased friction for smoother motion

    const animate = () => {
      dotsRef.current.forEach((dot) => {
        const dx = mousePosition.x - dot.x;
        const dy = mousePosition.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius) {
          const force = (1 - distance / radius) * strength;
          dot.vx -= dx * force;
          dot.vy -= dy * force;

          // Enhanced scale effect
          const scale = 1 + (1 - distance / radius) * 0.4;
          dot.element.setAttribute("r", (dot.size * scale).toString());

          // Smoother opacity transition
          const baseOpacity = dot.color === "#a855f7" ? 0.3 : 0.15;
          const opacity = baseOpacity + (1 - distance / radius) * 0.25;
          dot.element.setAttribute("opacity", opacity.toString());
        } else {
          dot.element.setAttribute("r", dot.size.toString());
          dot.element.setAttribute(
            "opacity",
            dot.color === "#a855f7" ? "0.3" : "0.15"
          );
        }

        // Smoother spring force
        dot.vx += (dot.originX - dot.x) * 0.04;
        dot.vy += (dot.originY - dot.y) * 0.04;

        // Apply friction
        dot.vx *= friction;
        dot.vy *= friction;

        // Update position with easing
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Update SVG element position
        dot.element.setAttribute("cx", dot.x.toString());
        dot.element.setAttribute("cy", dot.y.toString());
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition, showDots]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-zinc-900 select-none">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
        style={{
          userSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
        }}
      >
        <defs>
          <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#18181b" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg-gradient)" />

        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <motion.text
            key={i}
            x="50%"
            y={`${50 + i * 2}%`}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#a3a3a3"
            fillOpacity="0.8"
            fontSize="5rem"
            fontFamily="Boska, serif"
            fontWeight="200"
            style={{ pointerEvents: "none" }}
            custom={i}
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            madeleydesignstudio
          </motion.text>
        ))}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#e5e5e5"
          fontSize="5rem"
          fontFamily="Boska, serif"
          fontWeight="200"
          style={{ pointerEvents: "none" }}
          initial="initial"
          animate="final"
          variants={textVariants}
        >
          madeleydesignstudio.
        </motion.text>
      </svg>
    </div>
  );
};

export default YugaLabsAnimation;
