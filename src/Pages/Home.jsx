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
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur Web full stack</h2>
        <button onClick={() => navigate("/about")}>en savoir plus</button>
      </div>

      {/* Section à propos et compétences */}
      <section className="about-skills">
        {/* Bloc À propos */}
        <div className="about">
          <div>
            <h2>A propos</h2>
            <div className="ligne"></div>
          </div>
          {/* Barre de séparation visuelle */}
          <div className="skill-bar"></div>
          {/* Image de profil */}
          <img src="./assets/img.jpg" alt="John Doe" className="profile-pic" />
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
            <div className="ligne"></div>
          </div>
          {/* Barres de compétences */}
          <div className="skill-bar">
            <span>HTML5 90%</span>
            <div className="bar html"></div>
          </div>
          <div className="skill-bar">
            <span>CSS3 80%</span>
            <div className="bar css"></div>
          </div>
          <div className="skill-bar">
            <span>JavaScript 70%</span>
            <div className="bar js"></div>
          </div>
          <div className="skill-bar">
            <span>PHP 60%</span>
            <div className="bar php"></div>
          </div>
          <div className="skill-bar">
            <span>React 50%</span>
            <div className="bar react"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
