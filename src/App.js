import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";

import "./utils/devtool/style/global.css";
import "./utils/style/app.css";

// import context provider
import { LanguageProvider } from "./utils/context/LanguageContext";

// Page Components
import Home from "./context/home";
const Contact = () => <div>Contact Us</div>;
const Projects = () => <div>Our Projects</div>;

// Main App Component
const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
