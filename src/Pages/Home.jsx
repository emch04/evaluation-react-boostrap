// Importation de React et des fichiers CSS pour le style de la page d'accueil
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Home.css";
import "../Style/App.css";

export default function Home() {
  const navigate = useNavigate(); // Hook pour naviguer entre les pages
  return (
    <div className="home">
      {/* Image de présentation principale */}
      <img src="./assets/home.JPG" alt="John Doe" />

      {/* Bloc d'introduction */}
      <div className="intro">
        
        <h1>Bonjour, je suis Emch Kongo</h1>
        <h2>Développeur Web full stack</h2>
        <button
          onClick={() => navigate("/about")}
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

      {/* Section à propos et compétences */}
      <section className="about-skills">
        {/* Bloc À propos */}
        <div className="about">
          <div>
            <h2>A propos</h2>
            <div
              className="progress"
              role="progressbar"
              aria-label="Example 1px high"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "5px" }}
            >
              <div className="progress-bar" style={{ width: "100%" }}></div>
            </div>
          </div>
          {/* Barre de séparation visuelle */}
          <div className="skill-bar"></div>
          {/* Image de profil */}
          <img src="./assets/img.jpg" alt="John Doe" className="profile" />
          {/* Texte de présentation */}
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

        {/* Bloc Compétences */}
        <div className="skills">
          <div>
            <h2>Mes compétences</h2>
            <div
              className="progress"
              role="progressbar"
              aria-label="Example 1px high"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "5px" }}
            >
              <div className="progress-bar" style={{ width: "100%" }}></div>
            </div>
          </div>
          {/* Barres de compétences */}
          <div className="skill-bar">
            <span>HTML5 90%</span>
            <div
              className="progress"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-danger"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>CSS3 80%</span>
            <div
              className="progress"
              role="progressbar"
              aria-label="Info example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-info"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>JAVASCRIPT 70%</span>
            <div
              className="progress"
              role="progressbar"
              aria-label="Warning example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-warning"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>PHP 60%</span>
            <div
              class="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-success"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
          <div className="skill-bar">
            <span>REACT 50%</span>
            <div
              class="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar " style={{ width: "50%" }}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
