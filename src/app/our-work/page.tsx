"use client";

import Image from "next/image";

const OurWork = () => {
  return (
    <section className="relative h-full p-2 w-full overflow-hidden">
      <div className="absolute bottom-0 left-0">
        <Image src="/ai-two.png" alt="Logo" width={400} height={400} />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image src="/ai-three.png" alt="Logo" width={600} height={600} />
      </div>

      <div
        className="w-20 h-20 absolute -rotate-90"
        style={{
          top: "-24%",
          left: "34%",
          borderLeft: "400px solid transparent",
          borderRight: "400px solid transparent",
          borderBottom: "1470px solid rgba(251, 146, 60, 0.05)",
        }}
      />
      <div
        className="w-20 h-20 absolute rotate-[60deg]"
        style={{
          top: "5%",
          right: "18%",
          borderLeft: "600px solid transparent",
          borderRight: "600px solid transparent",
          borderBottom: "1470px solid rgba(251, 146, 60, 0.05)",
        }}
      />
    </section>
  );
};
export default OurWork;
