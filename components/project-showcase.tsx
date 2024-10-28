"use client";

import { Project } from "@/lib/data";
import { ExternalLink } from "lucide-react";

interface ProjectShowcaseProps {
  project: Project;
}
 
export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <div
      onClick={() => {
        window.open(project.link);
      }}
      className="rounded-xl border bg-card text-card-foreground shadow cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground"
    >
      <div className="space-y-2 p-6">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold leading-none tracking-tight">
            {project.title}
          </h3>
          <ExternalLink height={15} width={15}  />
        </div>
        <p className="text-sm text-muted-foreground">{project.description.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}</p>

          {/* Bouton vers GitHub */}
          {project.githubLink && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // Empêche l'ouverture du projet si on clique sur le bouton GitHub
              window.open(project.githubLink);
            }}
            className="mt-3 inline-flex items-center justify-center px-2 py-0.5 bg-black text-white text-xs rounded-md hover:bg-gray-600 transition-colors"
          >
            Voir le code sur GitHub
          </button>
        )}
      </div>
    </div>
  );
}
