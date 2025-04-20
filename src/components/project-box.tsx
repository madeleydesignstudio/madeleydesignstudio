import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectBoxProps {
  project: Project;
}

const ProjectBox = ({ project }: ProjectBoxProps) => {
  return (
    <div className="relative w-[300px] h-[200px] m-3">
      {/* Horizontal borders */}
      <div className="absolute top-[10px] left-[10px] right-[10px] h-[1px] bg-zinc-700 z-20" />
      <div className="absolute bottom-[10px] left-[10px] right-[10px] h-[1px] bg-zinc-700 z-20" />

      {/* Vertical borders */}
      <div className="absolute left-[10px] top-[10px] bottom-[10px] w-[1px] bg-zinc-700 z-20" />
      <div className="absolute right-[10px] top-[10px] bottom-[10px] w-[1px] bg-zinc-700 z-20" />

      {/* Corner crosses */}
      {/* Top-left */}
      <div className="absolute top-[9px] left-[9px] w-[3px] h-[3px] flex items-center justify-center z-30">
        <div className="absolute w-[1.5px] h-[12px] rotate-45 bg-zinc-400" />
        <div className="absolute w-[1.5px] h-[12px] -rotate-45 bg-zinc-400" />
      </div>

      {/* Top-right */}
      <div className="absolute top-[9px] right-[9px] w-[3px] h-[3px] flex items-center justify-center z-30">
        <div className="absolute w-[1.5px] h-[12px] rotate-45 bg-zinc-400" />
        <div className="absolute w-[1.5px] h-[12px] -rotate-45 bg-zinc-400" />
      </div>

      {/* Bottom-left */}
      <div className="absolute bottom-[9px] left-[9px] w-[3px] h-[3px] flex items-center justify-center z-30">
        <div className="absolute w-[1.5px] h-[12px] rotate-45 bg-zinc-400" />
        <div className="absolute w-[1.5px] h-[12px] -rotate-45 bg-zinc-400" />
      </div>

      {/* Bottom-right */}
      <div className="absolute bottom-[9px] right-[9px] w-[3px] h-[3px] flex items-center justify-center z-30">
        <div className="absolute w-[1.5px] h-[12px] rotate-45 bg-zinc-400" />
        <div className="absolute w-[1.5px] h-[12px] -rotate-45 bg-zinc-400" />
      </div>

      {/* Content */}
      <Link href={`/our-work/${project.id}`}>
        <div className="absolute top-[11px] left-[11px] right-[11px] bottom-[11px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />

          {/* Project name overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-60">
            <p className="text-zinc-50 text-sm">{project.name}</p>
            <p className="text-zinc-400 text-xs">{project.category}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectBox;
