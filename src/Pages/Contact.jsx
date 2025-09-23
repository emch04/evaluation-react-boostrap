// Page de contact du site
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();// Hook pour navi guer entre les pages
  return (
    <div>
      <h2>Contact</h2>
      {/* Bouton pour revenir à la page d'accueil */}
      <button onClick={() => navigate("/")}>Retour à l'accueil</button>
    </div>
  );
}
