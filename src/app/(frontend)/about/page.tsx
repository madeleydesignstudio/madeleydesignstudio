"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollRevealText } from "@/components/scroll-reveal-text";
import Image from "next/image";

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
        <ScrollRevealText
          text={paragraph_one}
          startProgress={0}
          endProgress={0.5}
        />
        <ScrollRevealText
          text={paragraph_two}
          startProgress={0.5}
          endProgress={1}
        />
      </div>
      <div className="relative ">
        <h2 className="text-zinc-900 text-[15rem] leading-[0.1] font-switzer font-bold z-10 absolute -top-14 left-0">
          DINO
        </h2>
        <div className="w-[75%] h-[75vh] relative flex justify-center items-center ml-auto">
          <Image
            src="/dino-madeleydesignstudio.jpg"
            alt="dino-madeleydesignstudio"
            fill
            className="object-cover rounded-l-xl"
          />
        </div>
      </div>
      <div className="max-w-2xl mr-auto p-12">
        <div className=" text-justify flex flex-col gap-y-6">
          <p className="font-switzer text-zinc-900 text-lg font-semibold">
            <span className="font-bold text-2xl ">Meet Dino:</span> Your Go-To
            for Web Development & Marketing Dino isn&apos;t just another digital
            design agency—it&apos;s the heartbeat of innovation, creativity, and
            results. We&apos;re here to power your online presence, elevate your
            brand, and turn your vision into a digital reality. But what makes
            Dino different? Let us show you.
          </p>
          <p className="font-switzer text-zinc-900 text-lg font-semibold">
            <span className="text-2xl">
              We&apos;re Obsessed with the Details
            </span>{" "}
            At Dino, we don&apos;t just build websites; we craft experiences.
            Every pixel, every line of code, and every piece of content is
            meticulously designed to ensure your site isn&apos;t just
            functional—it&apos;s unforgettable. We stay ahead of the curve by
            using the latest technologies and design trends, so your website
            technologies and design trends, so your website isn&apos;t just
            modern today—it&apos;s future-proofed for tomorrow.
          </p>
          <p className="font-switzer text-zinc-900 text-lg font-semibold">
            <span className="font-bold text-2xl">SEO That Actually Works</span>{" "}
            Let&apos;s be real: SEO can feel like a mystery. But not with Dino.
            We&apos;re passionate about making your website climb the search
            engine ladder and stay there. From keyword optimization to
            lightning-fast load times, we&apos;ve got the tools and expertise to
            ensure your site ranks high and attracts the right audience. No
            shortcuts, no fluff— just results.
          </p>
          <p className="font-switzer text-zinc-900 text-lg font-semibold">
            <span className="font-bold text-2xl">
              Your Success is Our Mission
            </span>{" "}
            We don&apos;t just work for you; we work with you. Dino is your
            partner in every sense of the word. Whether you&apos;re launching a
            new project, revamping an existing site, or building a full-scale
            digital strategy, we&apos;re here to guide you every step of the
            way. We listen, we collaborate, and we deliver solutions that align
            with your goals—because your success is what drives us.
          </p>
          {/* <p className="font-switzer text-zinc-900 text-lg font-semibold">
            <span className="font-bold text-2xl">Why Choose Dino?</span>{" "}
            Cutting-Edge Technology: We don&apos;t follow trends—we set them.
            From responsive design to seamless user experiences, we use the best
            tools in the industry to make your site stand out. Transparent
            Process: No jargon, no surprises. We keep you in the loop at every
            stage, so you always know what&apos;s happening and why. Passionate
            Team: Our team lives and breathes digital design and marketing.
            We&apos;re not just good at what we do—we love it. And it shows in
            every project we deliver. Results-Driven Approach: We don&apos;t
            just deliver pretty websites; we deliver solutions that drive
            traffic, engagement, and conversions.
          </p> */}
          <p className="font-switzer text-zinc-900 text-lg font-semibold">
            <span className="font-bold text-2xl">
              Let&apos;s Build Something Amazing Together
            </span>{" "}
            Dino isn&apos;t just about creating websites—it&apos;s about
            creating opportunities. Whether you&apos;re a startup, a growing
            business, or an established brand, we&apos;re here to help you
            thrive in the digital world. Let&apos;s take your online presence to
            the next level and make your brand impossible to ignore. Ready to
            roar? Let&apos;s talk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
