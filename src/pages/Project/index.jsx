import { useEffect, useState } from "react";
import { useLanguage } from "../../utils/context/LanguageContext";

import "./project.css";

import { projects } from "../../utils/data/projects";

const Projects = () => {
  const { language } = useLanguage();
  const [prjList, setPrjList] = useState(projects.en);

  useEffect(() => {
    window.scrollTo(0, 0);
    language === "en" ? setPrjList(projects.en) : setPrjList(projects.fr);
  }, [language]);

  return (
    <>
      <section className="devtool flex centerX container w-100 prj">
        <section className="content">
          <h1 className="adlam">
            {language === "en"
              ? "My work in few projects"
              : "Mon travail en quelques projets : "}
          </h1>
          <div className="prjContainer">
            {prjList.map((elmt, index) => {
              return (
                <a
                  href={elmt.link}
                  target="_blank"
                  key={index}
                  className="card">
                  <img src={elmt.img} alt="image du projet" />
                  <div className="devtool flex column startX betY">
                    <div>
                      <h2 key={index}>{elmt.title}</h2>
                      <p>{elmt.description}</p>
                    </div>
                    <div>
                      <ul>
                        {elmt.tags.map((elmt2, index2) => {
                          return <li key={index2}>{elmt2}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default Projects;
