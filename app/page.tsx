
"use client"; // Ajout de cette directive pour le rendre client-side
import { useState } from "react"; // Importer useState
import ActionButton from "@/components/action-button";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProjectShowcase from "@/components/project-showcase";
import Sidebar from "@/components/sidebar";
import SkillOutline from "@/components/skill-outline";
import { Separator } from "@/components/ui/separator";
import WorkShowcase from "@/components/work-showcase";

import {
  Project,
  WorkExperience,
  aboutYou,
  marketingHeadlines,
  projects, // Liste de tous les projets
  skills,
  workExperiences,
} from "@/lib/data";

export default function Home() {
  const [visibleProjects, setVisibleProjects] = useState(3); // Afficher 3 projets par défaut

  const handleShowMoreProjects = () => {
    setVisibleProjects((prevCount) => prevCount + 3); // Afficher 3 projets supplémentaires
  };

  return (
    <div className="md:max-w-3xl mx-auto md:mt-8 ">
      <Navbar />
      <div className="flex flex-col md:flex-row my-10 mx-10 md:mx-0 space-x-0 md:space-x-10 space-y-10 md:space-y-0 ">
        <Sidebar />
        <div className="md:min-w-[65vh] min-w-full space-y-10">
          {/* Hero */}
          <section id="home" key="home" className="space-y-5">
            <div className="text-2xl font-bold tracking-tight">
              {marketingHeadlines.mainHeadline}
            </div>
            <div className="text-muted-foreground">
              {marketingHeadlines.subHeadline}
            </div>
            <div>
              <Separator />
            </div>
            <div className="flex justify-between">
              <ActionButton actionText="Hire me" />
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Experience</p>
                <h3 className="font-medium leading-none">
                  {aboutYou.yearsOfExperience}
                </h3>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Location</p>
                <h3 className="font-medium leading-none">
                  {aboutYou.location}
                </h3>
              </div>
            </div>
           
            <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">Compétences</h2>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <SkillOutline
                    key={skill.text}
                    Icon={skill.icon}
                    text={skill.text}
                  />
                ))}
              </div>
            
            </div>
          </section>
          {/* Projects */}
          <section id="projects" key="projects">
            <h2 className="text-2xl font-semibold tracking-tight">Projets</h2>
            <div className="space-y-5 mt-5">
              {/* Afficher uniquement les projets visibles */}
              {projects.slice(0, visibleProjects).map((project: Project) => (
                <ProjectShowcase key={project.title} project={project} />
              ))}
            </div>
            {/* Bouton "Voir plus de projets" */}
            {visibleProjects < projects.length && (
              <button
                onClick={handleShowMoreProjects}
                className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600 transition-colors"
              >
                Voir plus de projets
              </button>
            )}
          </section>
          {/* Work */}
          <section id="work" key="work">
            <h2 className="text-2xl font-semibold tracking-tight">Formation</h2>
            
              <div className="p-6 space-y-6">
                {workExperiences.map(
                  (experience: WorkExperience, index: number) => (
                    <WorkShowcase
                      key={experience.company}
                      experience={experience}
                      whetherlast={workExperiences.length === index + 1}
                    />
                  )
                )}
              </div>
            
          </section>
          {/* Contact */}
          <section id="contact" key="contact">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <div className="mt-5 rounded-xl border bg-card text-card-foreground shadow">
              <p className="p-6 text-sm text-muted-foreground">
                La meilleure façon de me joindre est de passer par:{" "}
                <a href={`mailto:${aboutYou.email}`}>
                  <br />
                  Cliquez ici pour envoyer un mail
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

