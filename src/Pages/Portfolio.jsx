// Page du portfolio présentant les réalisations
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
  const navigate = useNavigate(); // Hook pour naviguer entre les pages
  return (
    <div>
      <h2>Portfolio</h2>
      {/* Bouton pour revenir à la page d'accueil */}
      <button onClick={() => navigate("/")}>Retour à l'accueil</button>
    </div>
  );
}
