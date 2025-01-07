import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { useLanguage } from "../../../utils/context/LanguageContext";
import { projects } from "../../../utils/data/projects";
import "./index.css";

const ProjectDetails = () => {
  const { title } = useParams(); // Récupère le titre depuis l'URL
  const { language } = useLanguage();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectList = language === "en" ? projects.en : projects.fr;
    const currentProject = projectList.find(
      (p) => p.title === decodeURIComponent(title)
    );
    setProject(currentProject);
    window.scrollTo(0, 0);
  }, [language, title]);

  // Si pas de projet trouvé, on affiche rien
  if (!project) {
    return null;
  }

  return (
    <main className="devtool flex centerX container w-100">
      <section className="devtool content flex centerXY project-details">
        <div className="project-card">
          <header className="project-card__header">
            <div className="project-card__title-container">
              <div className="project-card__title-wrapper">
                {project.folder && (
                  <FolderGit2 className="project-card__folder-icon" />
                )}
                <h1 className="project-card__title adlam">{project.title}</h1>
              </div>
              <button
                className="project-card__link-button adlam"
                onClick={() => window.open(project.link, "_blank")}>
                <span>
                  {language === "fr" ? "Voir le projet" : "View project"}
                </span>
                <ExternalLink size={16} />
              </button>
            </div>
          </header>

          <div className="project-card__content">
            <div className="project-card__image-container">
              <img
                src={project.img}
                alt={project.title}
                className="project-card__image"
              />
            </div>

            <section className="project-card__section">
              <h2 className="project-card__section-title adlam">Description</h2>
              <p className="project-card__description">{project.description}</p>
            </section>

            <section className="project-card__section">
              <h2 className="project-card__section-title adlam">
                {language === "fr"
                  ? "Compétences et technologies utilisées"
                  : "Skills and technologies used"}
              </h2>
              <div className="devtool flex betweenX gap20 infoContainer">
                <div className="project-card__tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <img
                  src={project.graph}
                  alt="technologies graph"
                  className="devtool borderR10 graph-image"></img>
              </div>
              <a
                href={project.github}
                target="_blank"
                className="project-card__link-button devtool mt20">
                {language === "en" ? "Show code" : "Voir le code"}
                <ExternalLink size={16} />
              </a>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;
