import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiSupabase,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiMui,
  SiPrisma,
  SiFlutter,
  SiHeroku,
  SiTailwindcss,
  SiSwagger,
  SiGithub,
  SiFigma,
  SiSass,
  SiReactrouter,
  SiSlack,
  SiVisualstudiocode,
  SiGooglechrome,
  SiBugsnag,
  SiTestinglibrary,
  SiNotion,
  SiPurism,
  SiSimpleanalytics,
  SiVite,
  SiDatabricks,
  
  

  
  
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";


export const skills = [
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiRedux,
    text: "Redux",
  },
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiReactrouter,
    text: "React-Router"
  },
  {
    icon: SiVite,
    text: "Vite",
  },
  {
    icon: SiGithub,
    text: "GitHub"
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiSass,
    text: "Sass"
  },
  {
    icon: SiDocker,
    text: "Docker",
  },
  {
    icon: SiExpress,
    text: "Express",
  },
  
  {
    icon: SiMongodb,
    text: "MongoDB",
  },
  
  {
    icon: SiFirebase,
    text: "Firebase",
  },
  {
    icon: SiNodedotjs,
    text: "Node",
  },
  {
    icon: SiSwagger,
    text: "Swagger"
  },
  {
    icon: SiDatabricks,
    text: "API",
  },
  {
    icon: SiPurism,
    text: "Responsive",
  },
  {
    icon: SiSimpleanalytics,
    text: "SEO",
  },
  {
    icon: SiTestinglibrary,
    text: "Tests",
  },
  {
    icon: SiBugsnag,
    text: "Debug",
  },
  {
    icon: SiGooglechrome,
    text: "Chrome DevTools",
  },
  {
    icon: SiVisualstudiocode,
    text: "VSCode",
  },
  {
    icon: SiNotion,
    text: "Notion",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiFigma,
    text: "Figma"
  },
  {
    icon: SiSlack,
    text: "Slack"
  },

  
  /*
  {
    icon: SiPrisma,
    text: "Prisma",
  },
  {
    icon: SiBootstrap,
    text: "Bootstrap",
  },
  {
    icon: SiMui,
    text: "MUI",
  },
  {
    icon: SiFlutter,
    text: "Flutter",
  },
  {
    icon: SiAmazonaws,
    text: "AWS",
  },
  {
    icon: SiHeroku,
    text: "Heroku",
  },
  {
    icon: SiSupabase,
    text: "Supabase",
  },
  {
    icon: SiPython,
    text: "Python",
  },
  {
    icon: BiLogoPostgresql,
    text: "PostgreSQL",
  },*/
];

export interface Project {
  title: string;
  description: string;
  link: string;
  githubLink?: string; // Le lien vers le repo GitHub
  displaySkills?: string[];
}

export const projects: Project[] = [
  {
    
    title: "Argent Bank",
    description: `J'intègre Argent Bank, une nouvelle banque en ligne qui souhaite que j'implémente le front-end de son application en utilisant React.
    
    Les compétences acquises :

        •  Implémenter la gestion des données avec Redux pour assurer le fonctionnement du front.
        •  Configurer des routes API pour la communication client / serveur.
        •  Afficher les données du back end sur l'interface via des appels API.`,

    displaySkills: ["React", "React-Router", "Sass", "Redux", "API", "Swagger", "Responsive" ],
     
    link: "",
    githubLink: "https://github.com/Morade-B/ArgentBank-projet-11"
  },
  {
    title: "724events",
    description: `L'agence d'événementielle 724events me contacte pour son site vitrine afin de reprendre le développement et débugger le travail déjà mis en place par un autre développeur.
    
    Les compétences acquises :

        •  Débugger un site web grâce aux Chrome DevTools.
        •  Rédiger un cahier de recette pour tester un site.`,

    displaySkills: ["React", "Tests", "Debug", "Chrome DevTools" ],

    link: "https://724events-projet-9.vercel.app/",
    githubLink: "https://github.com/Morade-B/724events-projet-9"
  },
  {
    title: "Photographe Nina Carducci",
    description: `Je propose mes services d'optimisation SEO à plusieurs clients. Et Nina Carducci, photographe expérimentée basée à Bordeaux accepte ma proposition d'optimisation de son site.
    
    Les compétences acquises :

        •  Optimiser la performance d'un site web.`,

    displaySkills: ["HTML5", "CSS3", "JavaScript", "Responsive", "SEO" ],

    link: "https://morade-b.github.io/NinaCarducci-Projet-8/",
    githubLink: "https://github.com/Morade-B/NinaCarducci-Projet-8"
  },
  {
    title: "Kasa",
    description: `Kasa est dans le métier de la location d'appartements entre particuliers depuis maintenant 10 ans, et souhaite aujourd'hui développer une nouvelle plateforme web avec React.
    
    Les compétences acquises :

        •  Initialiser une application avec Create React App.
        •  Configurer la navigation entre les pages de l'application avec React Router.
        •  Développer des éléments de l'interface d'un site web grâce à des composants React.
        •  Développer une interface web avec Sass.`,

    displaySkills: ["React", "React-Router", "Sass", "Responsive", "Figma", "VSCode" ],

    link: "https://kasa-projet7.vercel.app/",
    githubLink: "https://github.com/Morade-B/Kasa-Projet7"
  },
  {
    title: "Oh My Food",
    description: `Ohmyfood est une jeune start-up qui souhaite s'imposer sur le marché de la restauration. Déjà présente à New-York, elle souhaite faire sa place à Paris.
    
    Les compétences acquises :

        •  Intégrer une maquette en mobile-first.
        •  Mettre en œuvre des animations CSS.
        •  Versionner son projet avec Git et Github.`,

    displaySkills: ["HTML5", "Sass", "VSCode", "Git", "Figma", "GitHub" ],

    link: "https://morade-b.github.io/OhMyFoodProject",
    githubLink: "https://github.com/Morade-B/OhMyFoodProject"
  },
  {
    title: "Portfolio Sophie Bluel",
    description: `Sophie Bluel est une architecte d'intérieur qui souhaite mettre en avant son travail avec un site portfolio où elle pourra elle-même les ajouter en se connectant à son interface administrateur.
    
    Les compétences acquises :

        •  Manipuler les éléments du DOM avec JavaScript.
        •  Gérer les événements utilisateurs avec JavaScript.
        •  Récupérer les données utilisateurs dans le JavaScript via des formulaires.`,

    displaySkills: ["HTML5", "CSS3", "JavaScript", "Swagger", "Figma", "API" ],

    link: "https://morade-b.github.io/Portfolio-architecte-sophie-bluel",
    githubLink: "https://github.com/Morade-B/Portfolio-architecte-sophie-bluel"
  },
  {
    title: "Print-it-JS",
    description: `Print It est une petite entreprise familiale. Elle souhaite dynamiser son site internet en y ajoutant un carrousel.
    
    Les compétences acquises :

        •  Programmer en utilisant les fondamentaux de JavaScript`,

     
    displaySkills: ["HTML5", "CSS3", "JavaScript", "VSCode" ],

    link: "https://morade-b.github.io/Print-it-JS",
    githubLink: "https://github.com/Morade-B/Print-it-JS"
  },
  {
    title: "Booki",
    description: `Booki est une start-up qui souhaite permettre aux utilisateurs de trouver des hébergements et des activités dans la ville de leur choix.
    
    Les compétences acquises :

        •  Installer un environnement de développement front-end
        •  Implémenter une interface responsive avec HTML et CSS.
        •  Intégrer du contenu conformément à une maquette avec HTML et CSS.`,


    displaySkills: ["HTML5", "CSS3", "VSCode", "Figma", "Responsive" ],

    link: "https://morade-b.github.io/Projet-Booki/",
    githubLink: "https://github.com/Morade-B/Projet-Booki.git"
  },
  {
    title: "Riding-Cities",
    description: `Riding Cities est une association sportive qui promeut le skate en région parisienne. L'association souhaite améliorer son site internet.
    
    Les compétences acquises :

        •  Intégrer des éléments sur une page web en utilisant les fondamentaux de HTML. `,

    displaySkills: ["HTML5", "CSS3" ],

    link: "https://morade-b.github.io/Projet-1-Riding-Cities/",
    githubLink: "https://github.com/Morade-B/Projet-1-Riding-Cities.git"
   
  }
];


export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Intégrateur Web",
    logo: "/formation.png",
    position: "Formation",
    description: `  Diplôme de niveau Bac+2: Developpeur web junior spécialisé dans React et Next.js. ` ,
    years: "Fév, 2024 - Nov, 2024",
  },
  {
    company: "AFPA",
    logo: "/formation.png",
    position: "Formation",
    description: "Technicien d'intervention en froid commercial et climatisation.",
    years: "Déc, 2021 - Sep, 2022",
  },
  {
    company: "SNCF",
    logo: "/formation.png",
    position: "Employé",
    description: "J'ai travaillé en tant qu'Opérateur de circulation.",
    years: "Sep, 2014 - Jul, 2015",
  },
  {
    company: "Université ",
    logo: "/formation.png",
    position: "Étudiant ",
    description: "Durant ma periode a l'universit j'ai suivi un DUT Génie Eléctrique Informatique Industrielle",
    years: "Sep, 2013 - Jun, 2014",
  },
  {
    company: "Bac",
    logo: "/formation.png",
    position: "Étudiant",
    description:
      "J'ai obtenu un bac Scientifique Option Sciences de l'Ingenieur ",
    years: "Sep, 2012 - Jun, 2013",
  },
];

export const aboutYou = {
  name: "Présentation",
  description:
    `👋 Passionné par le développement web, je suis un jeune développeur front-end spécialisé dans React et Next.js avec une solide formation d'intégrateur web, acquise lors d'un parcours intensif de 9 mois chez OpenClassrooms. Cette expérience m'a permis d'atteindre un niveau de compétences équivalent à un diplôme Bac+2 et de maîtriser les bases de l'intégration et du développement d'interfaces web modernes.\n\n
    
        Mon objectif est de continuer à développer mes compétences et mes connaissances, je suis ouvert aux opportunités d'emploi et aux projets futurs dans le domaine.\n\n
        
        N'hésitez pas à me contacter si vous êtes à la recherche d'un développeur web enthousiaste et motivé pour rejoindre votre équipe ou collaborer sur un projet. Je serais ravi de contribuer à votre réussite et d'apporter une valeur ajoutée à votre équipe.`,
  yearsOfExperience: "Junior",
  location: "Paris",
  email: "morade.baghloul@gmail.com",
};

export const logoText = "Morade BAGHLOUL";

export const marketingHeadlines = {
  mainHeadline: "Bienvenue sur mon portfolio !",
  subHeadline: "Mes qualités : Grande capacité d'autonomie, organisé, curieux, déterminé et toujours souriant."
};

export const websiteMetadata = {
  title: "Mon Portfolio",
  description: "👋 Salut, Bienvenue sur mon portfolio.",
};
