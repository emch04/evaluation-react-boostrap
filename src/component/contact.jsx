import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Contact</h2>
      <button onClick={() => navigate("/")}>Retour à l'accueil</button>
    </div>
  );
}
