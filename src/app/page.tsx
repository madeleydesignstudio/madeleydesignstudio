import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <div className="p-2 h-full overflow-auto">
        <div className=" w-full">
          <h1 className="font-boska text-9xl text-zinc-50">
            madeleydesignstudio
          </h1>
          <div className="flex flex-col gap-4 items-end">
            <p className="font-bricolage text-xl max-w-2xl text-zinc-50 font-extralight">
              We are madeleydesignstudio — We specialise in creative
              engineering, engineering, transforming complex challenges into
              tangible realities swiftly, elegantly, and with technical
              precision.
            </p>
            <p className="font-bricolage text-xl max-w-2xl text-zinc-50 font-extralight">
              Guided by your vision and our engineering ingenuity, we create
              solutions that are one-of-a-kind, impactful, and a testament to
              innovative thinking made real.
            </p>
            <Link
              href="/contact"
              className="text-left text-zinc-500 w-full max-w-2xl"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
