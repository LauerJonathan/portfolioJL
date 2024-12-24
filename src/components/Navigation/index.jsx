import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Switch } from "../../components/Buttons/Switch";

import enflag from "../../assets/media/switch/enflag.webp";
import frflag from "../../assets/media/switch/frflag.webp";
import moon from "../../assets/media/switch/moon.webp";
import sun from "../../assets/media/switch/sun.webp";

import { useLanguage, useTheme } from "../../utils/context/LanguageContext";

import { Link } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const page = location.pathname.substring(1);
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const state = {
    state: language,
    value: { on: "fr", off: "en" },
    func: toggleLanguage,
  };
  const state2 = {
    state: theme,
    value: { on: "sun", off: "moon" },
    func: toggleTheme,
  };
  const [toggle, setToggle] = useState(false);
  const navigateData = {
    en: {
      Home: {
        path: "/",
        active: page === "" && true,
      },
      Resume: {
        path: "/resume",
        active: page === "resume" && true,
      },
      Projects: {
        path: "/projects",
        active: page === "projects" || page.split("/")[0] === "folder",
      },
      Contact: {
        path: "/contact",
        active: page === "contact" && true,
      },
    },
    fr: {
      Accueil: {
        path: "/",
        active: page === "" && true,
      },
      CV: {
        path: "/resume",
        active: page === "resume" && true,
      },
      Projects: {
        path: "/projects",
        active: page === "projects" || page.split("/")[0] === "folder",
      },
      Contact: {
        path: "/contact",
        active: page === "contact" && true,
      },
    },
  };
  return (
    <nav className="devtool navbar">
      <div
        className={`devtool navcontent ${
          toggle ? "toggle" : ""
        } adlam centerX betY`}>
        <ul>
          {Object.entries(
            language === "en" ? navigateData.en : navigateData.fr
          ).map((key, value) => {
            return (
              <li key={value} className={key[1].active ? "active" : ""}>
                <Link to={key[1].path}>{key[0]}</Link>
              </li>
            );
          })}
        </ul>
        <div className="devtool flex column-800">
          <Switch pic1={enflag} pic2={frflag} state={state} />
          <Switch pic1={moon} pic2={sun} state={state2} />
        </div>
      </div>
      <div className={`devtool logo adlam undis`}>
        Lauer <br /> Jonathan
      </div>
      <button
        className="devtool toggleBtn undis"
        onClick={() => {
          setToggle(!toggle);
        }}>
        𓃑
      </button>
    </nav>
  );
};

export default Navigation;
