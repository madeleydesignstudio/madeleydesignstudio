import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="p-2 h-full overflow-auto">
        <div className=" w-full h-full flex flex-col gap-8">
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
          <div className=" flex justify-center items-center">
            <Image
              src="/01.png"
              alt="Madeley Design Studio"
              width={960}
              height={540}
            />
          </div>
          <div className="w-full flex justify-left items-center">
            <p className="font-bricolage text-xl max-w-2xl text-zinc-50 font-extralight">
              A Design & Development studio that is small by design, but
              monolific by nature. We work with brands and companies to craft a
              digital presence that captivates and resonates with its users.
            </p>
          </div>
          <div className="w-[75%] mx-auto">
            <Separator className="h-[0.5px] bg-zinc-50" />
          </div>

          <div className="w-full flex justify-left items-center">
            <p className="font-bricolage text-xl max-w-2xl text-zinc-50 font-extralight">
              A Design & Development studio that is small by design, but
              monolific by nature. We work with brands and companies to craft a
              digital presence that captivates and resonates with its users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
