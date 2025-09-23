// Page des services proposés
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Service() {
  const navigate = useNavigate(); // Hook pour naviguer entre les pages
  return (
    <div>
      <h2>Service</h2>
      {/* Bouton pour revenir à la page d'accueil */}
      <button onClick={() => navigate("/")}>Retour à l'accueil</button>
    </div>
  );
}
