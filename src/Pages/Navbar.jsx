// Importation du composant Link pour la navigation interne et du style CSS de la navbar
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importation des icônes de menu (burger et croix)
import "../Style/Navbar.css";

// Composant Navbar affichant la barre de navigation principale du site
function Navbar() {
  // --- GESTION DE L'ÉTAT ---
  // `isOpen` est une variable d'état qui détermine si le menu mobile est ouvert (true) ou fermé (false).
  // `setIsOpen` est la fonction pour mettre à jour cet état.
  // Le menu est fermé par défaut (useState(false)).
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Conteneur principal de la barre de navigation
    <header className="navbar">
      
      {/* Logo du site. Modifiez le texte ici pour changer le logo. */}
      <div className="logo">EMCH KONGO</div>

      {/* 
        Icône du menu "burger" pour les écrans mobiles.
        - `onClick` : Au clic, on inverse la valeur de `isOpen` (si c'est ouvert, ça ferme, et vice-versa).
        - `{isOpen ? <FiX /> : <FiMenu />}` : C'est une condition ternaire.
          - SI `isOpen` est `true`, on affiche l'icône de fermeture (la croix <FiX />).
          - SINON (`:`), on affiche l'icône du menu burger (<FiMenu />).
      */}
      <div className="burger-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>

      {/* 
        Menu de navigation principal.
        - `className={isOpen ? "nav-links open" : "nav-links"}` : Applique la classe `open` uniquement si `isOpen` est `true`, 
          ce qui déclenche l'animation d'ouverture du menu en CSS.
        - `onMouseLeave` : Un événement qui se déclenche quand le curseur de la souris quitte la zone du menu.
          Ici, on l'utilise pour fermer automatiquement le menu.
      */}
      <nav 
        className={isOpen ? "nav-links open" : "nav-links"}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Liste des liens de navigation */}
        <ul>
          {/* Chaque `<li>` contient un lien `Link` de React Router pour la navigation sans recharger la page. */}
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
