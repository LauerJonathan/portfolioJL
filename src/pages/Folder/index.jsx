import { CardsFolder } from "../../components/Cards";
import { backend } from "../../utils/data/backend";
import "./index.css";

import { useLanguage } from "../../utils/context/LanguageContext";

const Folder = () => {
  const { language } = useLanguage();
  return (
    <main className="folder devtool flex centerX container w-100">
      <div className="devtool pos-relative content">
        <h1 className="devtool adlam">
          {language === "en" ? "Backend projects" : "Projets backend"}
        </h1>
        <section className="folder">
          <div className="container devtool flex wrap gap20">
            {backend.en.map((item, index) => {
              return (
                <CardsFolder project={item} key={index} type={"backend"} />
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Folder;
