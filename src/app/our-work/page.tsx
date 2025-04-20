"use client";

import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/data/projects";

const OurWork = () => {
  const projects = getAllProjects();

  return (
    <section className="h-full p-2  w-full">
      <div className="overflow-x-auto h-full overflow-y-hidden">
        <div className="text-zinc-50 text-4xl font-bold">our work</div>
        <ul className="flex items-end h-full">
          {projects.map((project) => (
            <li
              key={project.id}
              className="flex-shrink-0 transition-transform hover:scale-105"
            >
              <Link href={`/our-work/${project.id}`}>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={300}
                    height={200}
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default OurWork;
