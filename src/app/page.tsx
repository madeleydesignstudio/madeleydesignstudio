import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Image in bottom left */}
      <div className="absolute bottom-0 left-0">
        <Image src="/ai-one.png" alt="AI One" width={650} height={850} />
      </div>

      {/* Red Equilateral Triangle */}
      <div
        className="w-20 h-20 absolute -rotate-90"
        style={{
          top: "-44%",
          left: "33%",
          borderLeft: "600px solid transparent",
          borderRight: "600px solid transparent",
          borderBottom: "1470px solid rgba(244, 244, 245, 0.05)",
        }}
      />
    </div>
  );
}
