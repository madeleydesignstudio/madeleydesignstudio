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
        <h2 className="text-zinc-900 text-[15rem] leading-[0.1] font-switzer font-bold z-10 absolute top-0 left-0">
          DINO
        </h2>
        <div className="w-[75%] h-[75vh] relative flex justify-center items-center ml-auto">
          <Image
            src="/dino-madeleydesignstudio.jpg"
            alt="dino-madeleydesignstudio"
            fill
            className="object-cover "
          />
        </div>
      </div>
      <div className="max-w-5xl">
        <p className="font-switzer text-zinc-900 text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aperiam
          dignissimos, temporibus asperiores autem cum beatae blanditiis velit
          molestiae sed quidem, totam iure sint illo. Suscipit laborum odit
          sequi magnam? Id obcaecati quas vitae cum totam neque nobis non
          labore, voluptatem fuga dicta explicabo beatae placeat quis tempore ex
          vel aliquam quia nam vero? Dolor suscipit nulla quo voluptate culpa.
          Fuga tenetur similique fugit, minus aliquid commodi quisquam, hic
          voluptates quia officia eligendi, odio iure illum nihil itaque
          deleniti voluptatem enim neque molestiae optio ipsum. Placeat
          voluptatem dignissimos minima aperiam. Tenetur deleniti quo
          accusantium repellendus, nemo est hic? Iste laborum aliquam sapiente
          culpa labore reprehenderit corrupti alias eveniet, nobis, voluptate
          pariatur, magnam facilis? Praesentium autem esse mollitia illum quo
          magnam. Dolorum non quidem illum ut eius veritatis eos officiis
          consectetur molestiae repellendus expedita, animi voluptas quibusdam
          magni labore quae consequatur dolor sint quasi fugit aliquid
          reprehenderit cumque! Dolorem, magnam quia. Suscipit recusandae veniam
          magnam sapiente eum architecto sed eius, ipsam deleniti magni ut
          maxime nesciunt voluptatum, voluptatem laborum ducimus possimus nam,
          debitis sit nulla odit? Nulla nam sit aut ea. Reprehenderit saepe
          rerum, iure ipsum tempore eligendi molestiae ad assumenda, ducimus
          neque, cumque facilis quidem consequuntur praesentium rem iste amet
          atque. Officia, accusantium. Repudiandae quo soluta a aliquid autem
          aperiam! Iste accusantium modi quisquam tenetur placeat cum unde
          aperiam, quae ut sed error minus mollitia! Laboriosam, impedit
          reiciendis aliquam tenetur, magnam commodi assumenda vitae cum odit
          repudiandae nobis nesciunt porro. Necessitatibus quasi laboriosam
          ipsum praesentium aspernatur tempore sit debitis perspiciatis pariatur
          eum dolore architecto, corporis deserunt? Neque expedita similique
          fuga laboriosam, numquam dolorem praesentium nisi cupiditate autem,
          aspernatur architecto consectetur? Consequuntur similique at, magnam
          nemo delectus dolore ipsam maxime recusandae dicta, quae earum
          eligendi mollitia consequatur exercitationem sunt dignissimos debitis
          ullam laboriosam minus commodi itaque? Qui odio quaerat autem beatae?
          Impedit officia quisquam cumque necessitatibus qui in deserunt. Nisi
          officia repellendus quae quia quo pariatur ducimus quibusdam neque eos
          saepe, quam omnis quasi eaque excepturi cum. Similique cumque
          inventore qui. Asperiores, illo iure dolor porro ab inventore
          provident praesentium, et quam repudiandae blanditiis natus id
          accusantium tempora omnis ipsa velit? Odio natus, quia quis blanditiis
          ea optio debitis! Tempora, impedit. Voluptatem delectus molestiae sit
          vero dolore quia velit maiores, porro natus culpa illum quibusdam
          eveniet esse beatae dolorem vel repellendus soluta dignissimos. Autem
          accusamus numquam facilis quia quod ipsum magnam! Deserunt impedit rem
          iste natus incidunt dicta reprehenderit cumque fugiat voluptatibus,
          expedita, exercitationem porro commodi aspernatur unde beatae sint,
          voluptates quis blanditiis. Esse, numquam. Molestias repudiandae
          dolorem suscipit culpa amet! Tenetur, nostrum doloremque maiores
          itaque veniam est enim veritatis quibusdam laboriosam harum vero quod
          eligendi consequatur aut ullam dicta? Perferendis sint facilis velit
          accusamus dolorum possimus dolores expedita corrupti sapiente! Ipsa,
          tenetur, maiores quo voluptatum, atque at accusamus iste magni
          eligendi voluptates temporibus? Earum rem molestias vel quam, tenetur
          corrupti, veritatis tempore necessitatibus quasi non perferendis nihil
          modi officia ut? Voluptatibus dicta aperiam animi maxime, modi ducimus
          quam veniam autem dignissimos? Facere porro excepturi laudantium
          molestiae! Numquam, eos reiciendis, suscipit, ipsa cumque sed officia
          sit blanditiis ex libero vel a! Blanditiis libero consequatur commodi
          accusantium in, ducimus aliquid ut distinctio doloremque dolorem
          eveniet a eius? Blanditiis, omnis impedit velit vero, porro facilis
          dolorum optio, autem voluptatum est ex a maxime. Accusantium sapiente
          harum quisquam, fugiat, fuga voluptatum accusamus quibusdam ducimus
          reprehenderit minus pariatur officiis tempora, culpa cumque aliquam
          expedita ullam ab sequi! Repellat deleniti, consectetur laborum nisi
          perspiciatis quae accusantium. Corrupti asperiores eos mollitia,
          expedita ratione dolor exercitationem dicta adipisci ut vel quae eum?
          Magni delectus, dolor eius ipsam aut, sequi libero labore voluptates
          officia ratione quos, similique rerum dicta.
        </p>
      </div>
    </div>
  );
};

export default About;
