// Importation des dépendances et des composants
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Profil from "./Profil"; // Importation du composant Profil
import "../Style/Navbar.css";

// Composant Navbar
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showGithubModal, setShowGithubModal] = useState(false);

  return (
    <header className="navbar">
      
      {/* Logo cliquable */}
      <div className="logo" onClick={() => setShowGithubModal(true)}>John Doe</div>

      {/* Modal GitHub qui affiche le composant Profil */}
      {showGithubModal && (
        <div className="github-modal">
          {/* Le composant Profil gère son propre contenu et le bouton de fermeture */}
          <Profil onClose={() => setShowGithubModal(false)} />
        </div>
      )}

      {/* Icône du menu burger pour mobile */}
      <div className="burger-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>

      {/* Liens de navigation */}
      <nav 
        className={isOpen ? "nav-links open" : "nav-links"}
        onMouseLeave={() => setIsOpen(false)}
      >
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Service">Services</Link></li>
          <li><Link to="/Portfolio">Portfolio</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/About">Mentions légales</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
