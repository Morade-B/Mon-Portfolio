"use client";

import { Button } from "./ui/button";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { Home, Briefcase, Mail, Presentation, Download } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  function navigateTo(path: string) {
    router.push(path);
  }

  return (
    <div className="border bg-card text-card-foreground p-3 shadow-sm md:rounded-lg flex justify-between items-center top-0 sticky z-50">
      <Logo onClick={() => navigateTo("/")} />
      {/* Navigation Menus */}
      <div className="sm:flex sm:items-center flex-wrap grid grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-2">
        <Button
          onClick={() => navigateTo("/")}
          variant="outline"
          size="sm"
          className="ml-auto h-8"
        >
          <Home className=" h-4 w-4" />
          <span className="hidden md:block ml-2">Accueil</span>
        </Button>
        <Button
          onClick={() => navigateTo("/#projects")}
          variant="outline"
          size="sm"
          className="ml-auto h-8"
        >
          <Presentation className=" h-4 w-4" />
          <span className="hidden md:block ml-2">Projets</span>
        </Button>
        <Button
          onClick={() => navigateTo("/#work")}
          variant="outline"
          size="sm"
          className="ml-auto h-8"
        >
          <Briefcase className=" h-4 w-4" />
          <span className="hidden md:block ml-2">Formation</span>
        </Button>
        <Button
          onClick={() => navigateTo("/#contact")}
          variant="outline"
          size="sm"
          className="ml-auto h-8"
        >
          <Mail className=" h-4 w-4" />
          <span className="hidden md:block ml-2">Contact</span>
        </Button>
        {/* Bouton pour télécharger le CV */}
        <Button
          onClick={() => {
            window.open("/cv.docx", "_blank");
          }}
          variant="outline"
          size="sm"
          className="ml-auto h-8"
         
        >
          <Download className=" h-4 w-4" />
          <span className="hidden md:block ml-2">CV</span>
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
