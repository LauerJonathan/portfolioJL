import { CardsFolder } from "../../components/Cards";
import { backend } from "../../utils/data/backend";
import { appli } from "../../utils/data/app";
import "./index.css";

import { useLanguage } from "../../utils/context/LanguageContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Folder = () => {
  const { language } = useLanguage();
  const params = useParams();
  const [folderDescription, setFolderDesc] = useState("");
  const [data, setData] = useState(backend);

  useEffect(() => {
    switch (params.type) {
      case "backend":
        setData(backend);
        setFolderDesc({
          en: "Backend projects",
          fr: "Projets backend",
        });
        break;
      case "app":
        setData(appli);
        setFolderDesc({
          en: "App IOS / Android",
          fr: "App IOS / Android",
        });
        break;
      default:
        setData(appli);
        setFolderDesc({
          en: "App IOS / Android",
          fr: "App IOS / Android",
        });
        break;
    }
  }, [params.type]);

  return (
    <main className="folder devtool flex centerX container w-100">
      <div className="devtool pos-relative content">
        <h1 className="devtool adlam">
          {language === "en" ? folderDescription.en : folderDescription.fr}
        </h1>
        <section className="folder">
          <div className="container devtool flex wrap gap20">
            {data.en.map((item, index) => (
              <CardsFolder project={item} key={index} type={params.type} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Folder;
