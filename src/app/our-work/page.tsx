"use client";

import Image from "next/image";

const projects = [
  { id: 1, name: "Project 1", image: "/01.png", category: "web" },
  { id: 2, name: "Project 2", image: "/02.png", category: "brand" },
  { id: 3, name: "Project 3", image: "/03.png", category: "web" },
  { id: 4, name: "Project 4", image: "/04.png", category: "design" },
  { id: 5, name: "Project 5", image: "/05.png", category: "web" },
  { id: 6, name: "Project 6", image: "/06.png", category: "brand" },
  { id: 8, name: "Project 8", image: "/08.png", category: "design" },
  { id: 9, name: "Project 9", image: "/09.png", category: "web" },
  { id: 10, name: "Project 10", image: "/10.png", category: "brand" },
];

const OurWork = () => {
  return (
    <section className="h-full p-2  w-full">
      <div className="overflow-x-auto h-full overflow-y-hidden">
        <div>our work</div>
        <ul className="flex items-end h-full">
          {projects.map((project) => (
            <li
              key={project.id}
              className="flex-shrink-0 transition-transform hover:scale-105"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={200}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default OurWork;
