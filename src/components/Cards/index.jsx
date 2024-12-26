import "./index.css";

const CardsFolder = ({ project, type }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      className={`devtool d-blc folderCards pos-relative ${
        project.type === "backend" ? "backend" : "fullstack"
      }`}>
      <h2 className="devtool pos-absolute pos00">{project.title}</h2>

      <span className="typeDescription devtool pos-absolute pos01">
        ({project.type})
      </span>
    </a>
  );
};

export { CardsFolder };
