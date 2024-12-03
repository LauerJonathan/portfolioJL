import React, { useEffect } from "react";
import { useLanguage } from "../../utils/context/LanguageContext";
import "./index.css";

const StatusModal = ({ content, stateFct, autocloseduration = 3000 }) => {
  const { lang } = useLanguage();
  useEffect(() => {
    const timer = setTimeout(() => {
      stateFct(false);
    }, autocloseduration);
    return () => clearTimeout(timer);
  }, [stateFct, autocloseduration]);
  return (
    <section className="statusModal">
      <div className="modal--content">
        <button
          className="crossClosing"
          onClick={() => {
            stateFct(false);
          }}>
          X
        </button>
        {/* Contenu principal */}
        <div
          className={`modal-text ${
            content.code === 200 ? "success" : "error"
          }`}>
          {lang === "en" ? content.en : content.fr}
        </div>

        {/* Barre de progression */}
        <div
          className={`progress-bar ${
            content.code === 200 ? "success" : "error"
          }`}
          style={{
            animationDuration: `${autocloseduration}ms`, // Durée de l'animation
          }}></div>
      </div>
    </section>
  );
};

export default StatusModal;
