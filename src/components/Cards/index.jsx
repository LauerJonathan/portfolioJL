import "./index.css";
import projectScreen from "../../assets/projects/myBudgetScreen.png";
import { Link } from "react-router-dom";
const CardsFolder = ({ project, type }) => {
  if (type === "backend") {
    return (
      <a
        href={project.link}
        target="_blank"
        className={`devtool d-blc folderCards default pos-relative ${
          project.type === "backend" ? "backend" : "fullstack"
        }`}>
        <h2 className="devtool pos-absolute pos00">{project.title}</h2>

        <span className="typeDescription devtool pos-absolute pos01">
          ({project.type})
        </span>
      </a>
    );
  } else if (type === "app") {
    return (
      <Link
        to={project.link}
        target="_blank"
        style={{
          background: `url(${projectScreen})`,
          backgroundSize: "cover", // pas de guillemets doubles
          backgroundPosition: "center", // utiliser des guillemets simples
          backgroundRepeat: "no-repeat", // ou pas de guillemets du tout
        }}
        className={`devtool d-blc folderCards app ${project.title} pos-relative`}></Link>
    );
  }
};

export { CardsFolder };
