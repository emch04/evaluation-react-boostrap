// Importation du fichier CSS pour le style du pied de page
import "../Style/Footer.css";
import { Link } from "react-router-dom";

// Composant Footer affichant le pied de page du site
function Footer() {
  return (
    <footer className="footer">
      {/* Section d'identité et de contact */}
      <div className="footer-section">
        <h4>Emch Kongo</h4>
        <p>
          40 rue Lorem Ipsum
          <br />
          57000 Metz, France
        </p>
        <p>
          Tel: 10 20 30 40 50
          <br />
          john.doe@gmail.com
        </p>
        {/* Liens vers les réseaux sociaux (à activer si besoin) */}
        <div className="socials">
          <a href="https://github.com/emch04">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/emch-kongo004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="Voir mon LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 
      0 16 .513 16 1.146v13.708c0 .633-.526 
      1.146-1.175 1.146H1.175C.526 16 0 15.487 
      0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 
      0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 
      0-1.358.54-1.358 1.248 0 .694.52 1.248 1.327 
      1.248h.015zm4.908 8.212V9.359c0-.228.016-.457.084-.62.184-.456.602-.929 
      1.305-.929.921 0 1.289.7 1.289 1.729v3.855h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 
      0-1.845.7-2.165 1.192h.016v-1.026H8.651c.03.662 
      0 7.225 0 7.225h2.401z"
              />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/em_ch99"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Voir mon Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.5 0 5.2 0 4.4.03c-.8.04-1.35.17-1.83.36-.5.2-.93.46-1.35.88-.42.42-.68.85-.88 1.35-.19.48-.32 1.03-.36 1.83C0 5.2 0 5.5 0 8s0 2.8.03 3.6c.04.8.17 1.35.36 1.83.2.5.46.93.88 1.35.42.42.85.68 1.35.88.48.19 1.03.32 1.83.36.8.03 1.1.03 3.6.03s2.8 0 3.6-.03c.8-.04 1.35-.17 1.83-.36.5-.2.93-.46 1.35-.88.42-.42.68-.85.88-1.35.19-.48.32-1.03.36-1.83.03-.8.03-1.1.03-3.6s0-2.8-.03-3.6c-.04-.8-.17-1.35-.36-1.83-.2-.5-.46-.93-.88-1.35-.42-.42-.85-.68-1.35-.88-.48-.19-1.03-.32-1.83-.36C10.8 0 10.5 0 8 0zM8 1.5c2.5 0 2.8 0 3.6.03.7.03 1.1.15 1.36.25.34.13.58.3.83.54.24.25.41.49.54.83.1.26.22.66.25 1.36.03.8.03 1.1.03 3.6s0 2.8-.03 3.6c-.03.7-.15 1.1-.25 1.36-.13.34-.3.58-.54.83-.25.24-.49.41-.83.54-.26.1-.66.22-1.36.25-.8.03-1.1.03-3.6.03s-2.8 0-3.6-.03c-.7-.03-1.1-.15-1.36-.25a2.25 2.25 0 0 1-.83-.54 2.25 2.25 0 0 1-.54-.83c-.1-.26-.22-.66-.25-1.36C1.5 10.8 1.5 10.5 1.5 8s0-2.8.03-3.6c.03-.7.15-1.1.25-1.36.13-.34.3-.58.54-.83.25-.24.49-.41.83-.54.26-.1.66-.22 1.36-.25.8-.03 1.1-.03 3.6-.03zm0 2.7a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zm0 6.3a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm3.9-6.8a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Section des liens utiles */}
      <div className="footer-section">
        <h4>Liens utiles</h4>
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
      </div>

      {/* Section des dernières réalisations */}
      <div className="footer-section">
        <h4>Mes dernières réalisations</h4>
        <ul>
          <li>Fresh Food</li>
          <li>Restaurant Akira</li>
          <li>Espace bien-être</li>
          <li>SEO</li>
          <li>Création d’une API</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
