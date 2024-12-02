import { useLanguage, useTheme } from "../../utils/context/LanguageContext";

// import compnents here

const Home = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <section>
      {<h1>
        {theme === "moon"
          ? language == "en"
            ? "Good evening"
            : "Bonsoir"
          : language == "en"
          ? "Good morning"
          : "Bonjour"}
      </h1>}
    </section>
  );
};

export default Home;
