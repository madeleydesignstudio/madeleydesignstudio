"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Image from "next/image";

const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      orientation: "horizontal",
      infinite: true,
      autoRaf: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    lenis.scrollTo(0, {
      immediate: true,
    });

    document.querySelectorAll(".mwg_effect047 .media").forEach((el) => {
      gsap.fromTo(
        el.querySelector("img"),
        {
          transformOrigin: "0% 50%",
        },
        {
          transformOrigin: "0% 50%",
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            horizontal: true,
            trigger: el,
            start: "left 100%",
            end: "left 80%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        el.querySelector("img"),
        {
          transformOrigin: "100% 50%",
        },
        {
          transformOrigin: "100% 50%",
          scaleX: 0,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            horizontal: true,
            trigger: el,
            start: "right 20%",
            end: "right 0%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="mwg_effect047 flex items-end h-screen text-[#F1F1F1] antialiased">
      <div className="fixed top-0 left-0 p-6 flex justify-between w-full items-center">
        <p className="font-inter font-medium text-[7.6vw] leading-none tracking-[-0.06em] uppercase text-[#EAEBE0]">
          Recent works
        </p>
        <Image
          src="assets/medias/arrow.svg"
          alt="arrow"
          className="w-[5.4vw] h-auto"
          width={100}
          height={100}
        />
      </div>
      <div className="flex w-max">
        <ul className="flex w-max items-end">
          {[...Array(10)].map((_, i) => (
            <li key={i + 1} className="list-none">
              <div className="media w-[20vw] h-auto relative">
                <Image
                  src={`/${String(i + 1).padStart(2, "0")}.png`}
                  alt={`project ${i + 1}`}
                  className="block w-full h-auto transform scale-x-0 origin-left object-cover will-change-transform"
                  width={100}
                  height={100}
                />
              </div>
            </li>
          ))}
        </ul>

        <ul id="clone" className="flex w-screen items-end" aria-hidden="true">
          {[...Array(5)].map((_, i) => (
            <li key={i + 1} className="list-none">
              <div className="media w-[20vw] h-auto relative">
                <Image
                  src={`/${String(i + 1).padStart(2, "0")}.png`}
                  alt={`project ${i + 1} clone`}
                  className="block w-full h-auto transform scale-x-0 origin-left object-cover will-change-transform"
                  width={100}
                  height={100}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
