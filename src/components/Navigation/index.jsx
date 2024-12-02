import React, { useState, useEffect } from "react";
import { Switch } from "../../components/Buttons/Switch";

import enflag from "../../assets/media/switch/enflag.webp";
import frflag from "../../assets/media/switch/frflag.webp";
import moon from "../../assets/media/switch/moon.webp";
import sun from "../../assets/media/switch/sun.webp";

import { useLanguage, useTheme } from "../../utils/context/LanguageContext";

import "./index.css";

import { Link } from "react-router-dom";

const Navigation = () => {
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
        active: true,
      },
      Resume: {
        path: "/resume",
        active: false,
      },
      Projects: {
        path: "/projects",
        active: false,
      },
      Contact: {
        path: "/contact",
        active: false,
      },
    },
    fr: {
      Accueil: {
        path: "/",
        active: true,
      },
      CV: {
        path: "/resume",
        active: false,
      },
      Projets: {
        path: "/projects",
        active: false,
      },
      Contact: {
        path: "/contact",
        active: false,
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
