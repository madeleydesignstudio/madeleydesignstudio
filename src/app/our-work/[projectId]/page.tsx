"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProjectById } from "@/data/projects";

export default function ProjectPage() {
  const params = useParams();
  const projectId = Number(params.projectId);

  // Find the project by ID using the imported function
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl text-zinc-50 font-bold mb-4">
          Project not found
        </h1>
        <Link href="/our-work" className="text-zinc-400 hover:text-zinc-50">
          Back to Our Work
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <Link
        href="/our-work"
        className="text-zinc-400 hover:text-zinc-50 mb-8 inline-block"
      >
        ← Back to Our Work
      </Link>

      <h1 className="text-4xl text-zinc-50 font-bold mb-8">{project.name}</h1>

      {/* Project image with styled border */}
      <div
        className="relative mx-auto mb-12"
        style={{ width: "80%", height: "500px" }}
      >
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

        {/* Image */}
        <div className="absolute top-[11px] left-[11px] right-[11px] bottom-[11px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Project details */}
      <div className="relative mx-auto p-6" style={{ width: "80%" }}>
        <div className="mb-4">
          <span className="text-zinc-400 mr-2">Category:</span>
          <span className="text-zinc-50">{project.category}</span>
        </div>

        <div className="text-zinc-50">
          <p className="mb-6">
            This is a detailed description for {project.name}. In a real
            application, this would contain comprehensive information about the
            project.
          </p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Phasellus feugiat eros ut nisl feugiat, nec efficitur nisl
            tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
}
