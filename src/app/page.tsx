import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Image in bottom left */}
      <div className="absolute -bottom-[20px] -left-[20px]">
        <Image src="/ai-one.png" alt="AI One" width={650} height={850} />
      </div>

      <div className="absolute top-[27%] right-5">
        <p className="text-5xl text-zinc-50 max-w-2xl font-thin font-boska whitespace-pre-line">
          Where code meets <span className="font-bold">dream</span>,{"\n"}Forms
          flow and <span className="font-bold">gleam</span>.{"\n"}Nature&apos;s{" "}
          <span className="font-bold">grace</span>,{"\n"}Tech&apos;s{" "}
          <span className="font-bold">embrace</span>.{"\n"}A future, bright and{" "}
          <span className="font-bold">bold</span>,{"\n"}New stories to{" "}
          <span className="font-bold">unfold</span>.
        </p>
      </div>

      <div
        className="w-20 h-20 absolute -rotate-90"
        style={{
          top: "-42%",
          left: "33%",
          borderLeft: "600px solid transparent",
          borderRight: "600px solid transparent",
          borderBottom: "1470px solid rgba(244, 244, 245, 0.05)",
        }}
      />
    </div>
  );
}
