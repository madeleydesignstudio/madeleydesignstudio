"use client";

import { getAllProjects } from "@/data/projects";
import ProjectBox from "@/components/project-box";

const OurWork = () => {
  const projects = getAllProjects();

  return (
    <section className="h-full p-2 w-full">
      <div className="overflow-x-auto h-full overflow-y-hidden">
        <div className="text-zinc-50 text-4xl font-bold mb-6">our work</div>
        <div className="flex items-end h-full">
          {projects.map((project) => (
            <ProjectBox key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurWork;
