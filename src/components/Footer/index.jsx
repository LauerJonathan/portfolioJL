import { useLanguage } from "../../utils/context/LanguageContext";
import "./footer.css";
import frontImg from "../../assets/media/background/moutains-front.svg";
const Footer = () => {
  const { language } = useLanguage();
  return (
    <>
      <footer className="devtool footer fixed bt0lft0 pointerEventOff">
        <div className="devtool right txt-center fixed bt0lft10 adlam">
          {language === "en"
            ? "© 2024 Lauer J. All right reserved."
            : "© 2024 Lauer J. Tous droits réservés."}
        </div>
      </footer>
    </>
  );
};

export default Footer;
