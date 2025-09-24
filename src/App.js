// Importation des dépendances principales et des composants de pages
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import "./Style/App.css";

// Composant principal de l'application
const App = () => {
  return (
    <div>
      {/* Barre de navigation affichée sur toutes les pages */}
      <Navbar />
      {/* Définition des routes de l'application */}
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />
        {/* Page À propos */}
        <Route path="/About" element={<About />} />
        {/* Page Services */}
        <Route path="/Service" element={<Service />} />
        {/* Page Portfolio */}
        <Route path="/Portfolio" element={<Portfolio />} />
        {/* Page Contact */}
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      {/* Pied de page affiché sur toutes les pages */}
      <Footer />
    </div>
  );
};

export default App;
