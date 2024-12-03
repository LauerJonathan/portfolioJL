import { useLanguage, useTheme } from "../../utils/context/LanguageContext";
import "./home.css";
import bitmoji from "../../assets/media/bitmoji/bitmoji.svg";
import { AboutMeContent } from "../../utils/lang/home";
import { useState, useEffect } from "react";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";

// import compnents here

const Home = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [AboutMe, setAbout] = useState(AboutMeContent.en);

  useEffect(() => {
    language === "en"
      ? setAbout(AboutMeContent.en)
      : setAbout(AboutMeContent.fr);
  }, [language]);

  return (
    <main className="devtool flex centerX container w-100">
      <div className="content">
        <section>
          <div className="aboutMe">
            <img src={bitmoji} alt="bitmoji" />
            <div>
              <h1>
                {AboutMe.title}
                <span>{AboutMe.quote}</span>
              </h1>
              <p>
                <span className="under-title">&nbsp;About me&nbsp;</span>
                {AboutMe.aboutMeTxt}
              </p>
              <br />
              <div className="centerContainer"></div>
            </div>
          </div>
          <Skills />
          <Contact />
        </section>
      </div>
    </main>
  );
};

export default Home;
