// Page "À propos" du site
import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate(); // Hook pour naviguer entre les pages
  return (
    <div>
      <h2>À propos</h2>
      {/* Bouton pour revenir à la page d'accueil */}
      <button onClick={() => navigate("/")}>Retour à l'accueil</button>
    </div>
  );
}
