// Importation du composant Link pour la navigation interne et du style CSS de la navbar
import { Link } from "react-router-dom";
import "../Style/Navbar.css";

// Composant Navbar affichant la barre de navigation principale du site
function Navbar() {
  return (
    <header className="navbar">
      {/* Logo ou nom du site */}
      <div className="logo">EMCH KONGO</div>
      {/* Menu de navigation principal */}
      <nav>
        <ul>
          {/* Lien vers la page d'accueil */}
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* Lien vers la page des services */}
          <li>
            <Link to="/Service">Services</Link>
          </li>
          {/* Lien vers la page portfolio */}
          <li>
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          {/* Lien vers la page de contact */}
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          {/* Lien vers la page des mentions légales */}
          <li>
            <Link to="/About">Mentions légales</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
