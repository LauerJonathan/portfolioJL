import React, { useEffect, useState } from "react";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { useLanguage } from "../../utils/context/LanguageContext";
import { projects } from "../../utils/data/projects"; // Ajuste le chemin
import "./index.css";

const ProjectDetails = ({ projectTitle }) => {
  const { language } = useLanguage();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectList = language === "en" ? projects.en : projects.fr;
    const currentProject = projectList.find((p) => p.title === projectTitle);
    setProject(currentProject);
    window.scrollTo(0, 0);
  }, [language, projectTitle]);

  if (!project) return null;

  return (
    <div className="project-details">
      <div className="project-card">
        <header className="project-card__header">
          <div className="project-card__title-container">
            <div className="project-card__title-wrapper">
              {project.folder && (
                <FolderGit2 className="project-card__folder-icon" />
              )}
              <h1 className="project-card__title">{project.title}</h1>
            </div>
            <button
              className="project-card__link-button"
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
            <h2 className="project-card__section-title">Description</h2>
            <p className="project-card__description">{project.description}</p>
          </section>

          <section className="project-card__section">
            <h2 className="project-card__section-title">
              {language === "fr" ? "Technologies" : "Technologies"}
            </h2>
            <div className="project-card__tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="project-card__tag">
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
