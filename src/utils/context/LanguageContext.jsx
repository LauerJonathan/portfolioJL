import React, { useState, createContext, useContext, useEffect } from "react";
import imgMoon from "../../assets/media/background/moutainsUnstared.svg"; // Image pour le thème moon
import starsOverlay from "../../assets/media/background/stars.svg";
import imgSun from "../../assets/media/background/mountains-day.svg"; // Image pour le thème sun

// Contexte de langue
const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
});

// Contexte de thème
const DisplayContext = createContext({
  theme: "moon",
  toggleTheme: () => {},
});

// Composant Provider de langue et de thème
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("moon");

  // Change le background en fonction du thème
  useEffect(() => {
    const backgroundImage =
      theme === "moon"
        ? `url(${starsOverlay}), url(${imgMoon})`
        : `url(${imgSun})`;
    document.body.style.background = backgroundImage;
  }, [theme]); // Recalculer chaque fois que le thème change
  {
    /* url("../../assets/media/background/stars.svg"),
    url("../../assets/media/background/moutainsUnstared.svg") */
  }
  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  const toggleTheme = () => {
    setTheme(theme === "moon" ? "sun" : "moon");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <DisplayContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </DisplayContext.Provider>
    </LanguageContext.Provider>
  );
};

// Custom hooks pour consommer les contextes
export const useLanguage = () => useContext(LanguageContext);
export const useTheme = () => useContext(DisplayContext);
