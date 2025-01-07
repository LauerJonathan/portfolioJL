import devtool from "../../assets/projects/devtool.png";
import hrnet from "../../assets/projects/hrnet.png";
import lespetitsplats from "../../assets/projects/petitsplats.webp";
import ohMyFood from "../../assets/projects/ohMyFood.png";
import booki from "../../assets/projects/booki.png";
import gameon from "../../assets/projects/gameon.png";
import fisheyes from "../../assets/projects/fisheyes.png";
import folder from "../../assets/media/folder.webp";
import hos from "../../assets/projects/hos.png";

// graph img
import omfGraph from "../../assets/projects/graph/ohMyFood.png";
import bookieGraph from "../../assets/projects/graph/bookie.png";
import gameonGraph from "../../assets/projects/graph/gameon.png";
import lppGraph from "../../assets/projects/graph/lespetitsplats.png";
import fisheyesGraph from "../../assets/projects/graph/fisheyes.png";
import hrnetGraph from "../../assets/projects/graph/hrnet.png";
import devtoolsGraph from "../../assets/projects/graph/devtools.png";
import hosPharmaGraph from "../../assets/projects/graph/hos-pharma.png";

const projects = {
  en: [
    {
      title: "Backend",
      folder: true,
      tags: [
        "Fullstack / Backend",
        "API Design",
        "Data Management",
        "Software Engineering",
        "RESTful APIs",
        "Node.js",
        "Express.js",
        ,
        "Project Management",
      ],
      img: folder,
      link: "https://jonathanlauer.fr/folder/backend",
      description:
        "This folder contains all the fullstack and backend projects I have completed. From API development to data management, including front-end integration in fullstack projects.",
    },
    {
      title: "HosPharmacie",
      folder: false,
      tags: [
        "Fullstack",
        "API Design",
        "Data Management",
        "Software Engineering",
        "RESTful APIs",
        "Node.js",
        "Express.js",
        "vite",
        "Project Management",
      ],
      img: hos,
      graph: hosPharmaGraph,
      link: "https://jonathanlauer.fr/hosPharmacie/login",
      github: "https://github.com/LauerJonathan/hos-pharmacy",
      description:
        "This project was developed to streamline the management of hospital pharmacy stocks by providing a dashboard that displays alerts for expired, near-expired, and low-stock medications. Pharmacists can manage inventory by removing expired items, adjusting quantities, or adding new lots to maintain optimal stock levels.",
    },
    {
      title: "DevTools",
      tags: [
        "React Developer",
        "React Components",
        "Functional Programming",
        "Frameworking",
        "Lighthouse Performance",
        "State Management",
      ],
      img: devtool,
      graph: devtoolsGraph,
      link: "https://lauerjonathan.github.io/devtools/",
      github: "https://github.com/LauerJonathan/devtools",
      description:
        "This project started from a simple observation: for accessibility reasons, the choice of display colors and contrast is crucial. A web application that generates CSS files with primary and secondary colors, as well as some shades, and ready-to-use style files to optimize development.",
    },
    {
      title: "Hrnet",
      tags: [
        "React Developer",
        "jQuery to React Migration",
        "React Components",
        "Functional Programming",
        "Performance Testing",
        "Lighthouse Performance",
        "State Management",
      ],
      img: hrnet,
      graph: hrnetGraph,
      link: "https://lauerjonathan.github.io/hrnet/",
      github: "https://github.com/LauerJonathan/hrnet/tree/main/learn",
      description:
        "In this project, I participated in the conversion of a jQuery application to React. My main task was to redesign the key pages of the application by replacing jQuery plugins with React components. Documenting the converted component was an important part of the work. This included writing technical documents detailing the component's architecture, functionality, and design rationale.",
    },
    {
      title: "FishEyes",
      tags: [
        "Développeur Front-End",
        "JavaScript pur",
        "Performance Optimization",
        "Boucles natives",
        "Programmation fonctionnelle",
        "Sécurité Web",
        "Green Code",
      ],
      img: fisheyes,
      graph: fisheyesGraph,
      link: "https://jonathanlauer.fr/virtualServer/fisheyes/",
      github: "https://github.com/LauerJonathan/fisheye",
      description:
        "FishEyes was a graphic integration of a photography website. The photographer wanted to share his work with as many people as possible. Particular attention was paid to the accessibility of the content.",
    },
    {
      title: "LesPetitsPlats",
      tags: [
        "Front-End Developer",
        "Pure JavaScript",
        "Performance Optimization",
        "Native Loops",
        "Functional Programming",
        "Web Security",
        "Green Code",
        "Search Engine",
      ],
      img: lespetitsplats,
      graph: lppGraph,
      link: "https://jonathanlauer.fr/virtualServer/lespetitsplats",
      github: "https://github.com/LauerJonathan/lespetitsplats",
      description:
        "As a freelance Front-End developer for Les petits plats, my task was to implement a fast search feature on a recipe website. I developed two versions of the search algorithm: one using native loops (while, for) and the other with functional programming. Both versions were tested and compared for performance. I used Bootstrap for design and ensured code security.",
    },
    {
      title: "GameOn",
      tags: [
        "HTML5 & CSS3",
        "JavaScript",
        "Front-End Development",
        "Form Validation",
        "Responsive Design",
        "QA Testing",
        "Web Development",
        "UI Integration",
      ],
      img: gameon,
      graph: gameonGraph,
      link: "https://jonathanlauer.fr/virtualServer/gameon",
      github: "https://github.com/LauerJonathan/gameon",
      description:
        "As a junior Front-End developer at GameOn, I am tasked with picking up where Jason left off on the homepage and the registration form. My goal is to add the missing JavaScript to make the form functional, following the QA team's recommendations and organizing the code on a forked GitHub repo.",
    },
    {
      title: "OhMyFood",
      tags: [
        "Mobile-first Design",
        "HTML5 & CSS3",
        "JavaScript",
        "Figma",
        "UI Integration",
        "Smooth Animations",
        "Cross-Device Compatibility",
      ],
      img: ohMyFood,
      graph: omfGraph,
      link: "https://jonathanlauer.fr/virtualServer/ohmyfood",
      github: "https://github.com/LauerJonathan/ohmyfood",
      description:
        "As a junior developer at Ohmyfood, I developed a mobile-first website allowing users to book a table and customize their meal at fine dining restaurants in Paris. I turned Figma designs and prototypes into a responsive site with smooth animations, optimized for mobile, tablet, and desktop.",
    },
    {
      title: "Bookie",
      tags: [
        "UI intégration",
        "HTML5 & CSS3",
        "Mobile-first Design",
        "Front-end",
        "Cross-Browser Compatibility",
      ],
      img: booki,
      graph: bookieGraph,
      link: "http://jonathanlauer.fr/virtualServer/booki",
      github: "https://github.com/LauerJonathan/bookie",
      description:
        "As part of the Booki project, I integrated the interface of their website using HTML and CSS. Working from a provided mockup and detailed technical specifications, I completed the existing codebase to deliver a website that met the requirements, while maintaining the initial file structure.",
    },
  ],

  fr: [
    {
      title: "Backend",
      folder: true,
      tags: [
        "Fullstack / Backend",
        "Conception d'API",
        "Gestion des Données",
        "Ingénierie Logicielle",
        "APIs RESTful",
        "Node.js",
        "Express.js",
        "Gestion de Projet",
      ],
      img: folder,
      link: "https://jonathanlauer.fr/folder/backend",
      description:
        "Ce dossier regroupe l'ensemble des projets fullstack et backend que j'ai réalisés. De la création d'API à la gestion des données, en passant par l'intégration front-end dans les projets fullstack.",
    },
    {
      title: "HosPharmacie",
      folder: false,
      tags: [
        "Fullstack",
        "API Design",
        "Data Management",
        "Software Engineering",
        "RESTful APIs",
        "Node.js",
        "Express.js",
        "vite",
        "Project Management",
      ],
      img: hos,
      graph: hosPharmaGraph,
      link: "https://jonathanlauer.fr/hosPharmacie/login",
      github: "https://github.com/LauerJonathan/hos-pharmacy",
      description:
        "Ce projet a été développé pour simplifier la gestion des stocks de pharmacie hospitalière en offrant un tableau de bord affichant des alertes pour les médicaments périmés, presque périmés et en faible quantité. Les pharmaciens peuvent gérer les stocks en supprimant les produits périmés, ajustant les quantités ou ajoutant de nouveaux lots pour maintenir des niveaux de stock optimaux.",
    },
    {
      title: "DevTool",
      tags: [
        "Développeur React",
        "Composants React",
        "Programation fonctionnelle",
        "Framework",
        "Performance Lighthouse",
        "Gestion d'état",
      ],
      img: devtool,
      graph: devtoolsGraph,
      link: "https://lauerjonathan.github.io/devtools/",
      github: "https://github.com/LauerJonathan/devtools",
      description:
        "Ce projet est partit d'un constat simple : pour des soucis d'accéssibilité, le choix des couleurs d'affichage et de contraste est primordial. Une application WEB qui génère des fichiers CSS avec les couleurs primaires et secondaires ainsi que quelques nuances, et des fichiers de style prêt à l'emploi pour optimiser le developpement.",
    },
    {
      title: "Hrnet",
      tags: [
        "Développeur React",
        "Migration jQuery vers React",
        "Composants React",
        "Programation fonctionnelle",
        "Tests de performance",
        "Performance Lighthouse",
        "Gestion d'état",
      ],
      img: hrnet,
      graph: hrnetGraph,
      link: "https://lauerjonathan.github.io/hrnet/",
      github: "https://github.com/LauerJonathan/hrnet/tree/main/learn",
      description:
        "Dans ce projet, j'ai participé à la conversion d'une application jQuery vers React. Ma mission principale a été de refondre les pages clés de l'application en remplaçant les plugins jQuery par des composants React. La documentation du composant converti a été une étape importante du travail. Cela comprendra la rédaction de documents techniques détaillant l'architecture du composant, son fonctionnement, et les raisons de sa conception",
    },
    {
      title: "FishEyes",
      tags: [
        "Front-End Developer",
        "Pure JavaScript",
        "Performance Optimization",
        "Native Loops",
        "Functional Programming",
        "Web Security",
        "Green Code",
        "Search Engine",
      ],
      img: fisheyes,
      graph: fisheyesGraph,
      link: "https://jonathanlauer.fr/virtualServer/fisheyes/",
      github: "https://github.com/LauerJonathan/fisheye",
      description:
        "FishEyes était une intégration graphique d'un site de photographie. Le photographe en question voulait pouvoir partager son travail avec le plus grand nombre. Un accent particulier a été mis sur l'accessibilité du contenu.",
    },
    {
      title: "LesPetitsPlats",
      tags: [
        "Pure JavaScript",
        "Performance Optimization",
        "Native Loops",
        "Functional Programming",
        "Web Security",
        "Green Code",
        "Search Engine",
      ],
      img: lespetitsplats,
      graph: lppGraph,
      link: "https://jonathanlauer.fr/virtualServer/lespetitsplats",
      github: "https://github.com/LauerJonathan/lespetitsplats",
      description:
        "Dans ce projet, j'ai mis en place des algorithmes de recherche puissants, ceci afin de gérer l'affichage en fonction des demandes d'utilisateurs et ce de manière fluide. Un travail important a été fourni sur la rigueur de la syntaxe et de l'imbrication des différents éléments de recherche.",
    },
    {
      title: "GameOn",
      tags: [
        "HTML5 & CSS3",
        "JavaScript",
        "Développement Front-End",
        "Validation de Formulaire",
        "Design Responsive",
        "Test QA",
        "Développement Web",
        "Intégration UI",
      ],
      img: gameon,
      graph: gameonGraph,
      link: "https://jonathanlauer.fr/virtualServer/gameon",
      github: "https://github.com/LauerJonathan/gameon",
      description:
        "En tant que développeur Front-End junior chez GameOn, je dois reprendre le travail de Jason sur la page d'accueil et le formulaire d'inscription. Mon objectif est d'ajouter le JavaScript manquant pour rendre le formulaire fonctionnel, en respectant les recommandations de l'équipe QA et en organisant le code sur un repo GitHub forké.",
    },
    {
      title: "OhMyFood",
      tags: [
        "Design mobile-first",
        "HTML5 & CSS3",
        "JavaScript",
        "Figma",
        "Intégration UI",
        "Animations fluides",
        "Compatibilité multi-appareils",
      ],
      img: ohMyFood,
      graph: omfGraph,
      link: "https://jonathanlauer.fr/virtualServer/ohmyfood",
      github: "https://github.com/LauerJonathan/ohmyfood",
      description:
        "En tant que développeur junior chez Ohmyfood, j'ai développé un site mobile-first permettant aux utilisateurs de réserver une table et de personnaliser leur repas dans des restaurants gastronomiques à Paris. J'ai transformé les maquettes et prototypes Figma en un site responsive avec des animations fluides, optimisé pour mobile, tablette et desktop.",
    },
    {
      title: "Bookie",
      tags: [
        "Intégration UI",
        "HTML5 & CSS3",
        "Design Mobile-first",
        "Front-end",
        "Compatibilité Cross-Browser",
      ],
      img: booki,
      graph: bookieGraph,
      link: "http://jonathanlauer.fr/virtualServer/booki/",
      github: "https://github.com/LauerJonathan/bookie",
      description:
        "Dans le cadre du projet Booki, j’ai intégré l’interface de leur site web en utilisant HTML et CSS. Travaillant à partir d'une maquette fournie et de spécifications techniques détaillées, j'ai complété la base de code existante pour livrer un site conforme aux attentes, tout en respectant la structure de fichiers initiale.",
    },
  ],
};

export { projects };
