// Page "À propos" ou "Mentions Légales" du site
import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  // Le hook `useNavigate` permet de changer de page.
  const navigate = useNavigate();

  return (
    // Conteneur principal de la page. Vous pouvez ajouter une classe CSS pour le styliser.
    // Exemple : <div className="about-container"> 
    <div className="container mt-5">
      
      {/* Titre de la page. Modifiez-le si nécessaire. */}
      <h2>Mentions Légales</h2>
      
      {/* 
        CONTENU DE LA PAGE
        Ajoutez ici vos paragraphes pour les mentions légales, la politique de confidentialité, etc.
        Exemple :
        <p><strong>Éditeur du site :</strong> Votre Nom</p>
        <p><strong>Adresse :</strong> Votre Adresse</p>
        <p><strong>Contact :</strong> votre.email@example.com</p>
      */}
      <p>Contenu des mentions légales à compléter...</p>


      {/* 
        Bouton pour revenir à la page d'accueil.
        - `onClick` : Au clic, la fonction `navigate` est appelée avec le chemin '/', 
          ce qui redirige l'utilisateur vers la page d'accueil.
        - Vous pouvez styliser ce bouton avec des classes Bootstrap, par exemple : `btn btn-secondary`
      */}
      <button className="btn btn-primary mt-4" onClick={() => navigate("/")}>Retour à l'accueil</button>
    </div>
  );
}
