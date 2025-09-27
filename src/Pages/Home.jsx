// Importation de React et des fichiers CSS pour le style de la page d'accueil
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Home.css";
import "../Style/App.css";

export default function Home() {
  // Le hook `useNavigate` de React Router permet de déclencher la navigation par programmation.
  // On l'utilisera pour rediriger l'utilisateur vers une autre page au clic sur un bouton.
  const navigate = useNavigate();

  return (
    // Conteneur principal de la page d'accueil
    <div className="home">
      
      {/* Section "Héros" (la grande image en haut) */}
      <div className="hero-container">
        {/* L'image principale. Le chemin doit être accessible depuis le dossier `public`. */}
        <img src="./assets/home.JPG" alt="Emch Kongo - Développeur Web" />

        {/* Bloc d'introduction superposé à l'image */}
        <div className="intro">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur Web full stack</h2>
          
          {/* 
            Bouton "En savoir plus".
            - `onClick` : Au clic, la fonction `navigate` est appelée avec le chemin '/about', 
              ce qui redirige l'utilisateur vers la page "À propos".
            - `style={{...}}` : Applique des styles CSS directement sur l'élément. 
              C'est utile pour des ajustements rapides, mais il est souvent préférable de les mettre dans un fichier CSS.
          */}
          <button
            onClick={() => navigate("/")}
            className="btn btn-primary"
            style={{
              "--bs-btn-padding-y": ".25rem",
              "--bs-btn-padding-x": ".5rem",
              "--bs-btn-font-size": ".75rem",
            }}
          >
            En savoir plus
          </button>
        </div>
      </div>

      {/* Section combinée "À propos" et "Compétences" */}
      <section className="about-skills">
        
        {/* Colonne "À propos" */}
        <div className="about">
          <div>
            <h2>À propos</h2>
            {/* Barre décorative sous le titre */}
            <div
              className="progress"
              style={{ height: "5px" }}
            >
              <div className="progress-bar" style={{ width: "100%" }}></div>
            </div>
          </div>
          
          {/* Image de profil */}
          <img src="./assets/img.jpg" alt="Profil de Emch Kongo" className="profile" />
          
          {/* Paragraphes de présentation. Modifiez le texte ici. */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            Nullam scelerisque leo nec nisi tincidunt, eu tincidunt odio
            tincidunt.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            aliquam fugiat minus, cum facilis quo vero ea impedit porro
            repudiandae!
          </p>
        </div>

        {/* Colonne "Compétences" */}
        <div className="skills">
          <div>
            <h2>Mes compétences</h2>
            {/* Barre décorative sous le titre */}
            <div
              className="progress"
              style={{ height: "5px" }}
            >
              <div className="progress-bar" style={{ width: "100%" }}></div>
            </div>
          </div>

          {/* 
            STRUCTURE D'UNE BARRE DE COMPÉTENCE (à répéter pour chaque compétence)
            - Modifiez le nom de la compétence et le pourcentage dans le `<span>`.
            - Modifiez la largeur (`width`) dans le style de la `div.progress-bar` pour correspondre au pourcentage.
          */}
          <div className="skill-bar">
            <span>HTML5 90%</span>
            <div className="progress">
              <div
                className="progress-bar bg-danger"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>

          <div className="skill-bar">
            <span>CSS3 80%</span>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          <div className="skill-bar">
            <span>JAVASCRIPT 70%</span>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>

          <div className="skill-bar">
            <span>PHP 60%</span>
            <div className="progress">
              <div
                className="progress-bar bg-success"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>

          <div className="skill-bar">
            <span>REACT 50%</span>
            <div className="progress">
              <div className="progress-bar" style={{ width: "50%" }}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
