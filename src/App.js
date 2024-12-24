import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "./utils/devtool/style/global.css";
import "./utils/style/app.css";

// import context provider
import { LanguageProvider } from "./utils/context/LanguageContext";

// Page Components
import Home from "./pages/home";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume";
import Projects from "./pages/Project";
import Folder from "./pages/Folder";

// Main App Component
const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/folder/:type" element={<Folder />} />
        </Routes>
      </Router>
      <Footer />
    </LanguageProvider>
  );
};

export default App;
