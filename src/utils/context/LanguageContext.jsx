import React, { useState, createContext, useContext } from "react";

// Contexte de langue
const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
});

// Contexte de theme
const DisplayContext = createContext({
  theme: "moon",
  toggleTheme: () => {},
});

// Composant de Provider de langue
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("moon");

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

export const useLanguage = () => useContext(LanguageContext);
export const useTheme = () => useContext(DisplayContext);
