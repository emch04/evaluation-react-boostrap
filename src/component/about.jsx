import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>À propos</h2>
      <button onClick={() => navigate("/")}>Retour à l'accueil</button>
    </div>
  );
}
