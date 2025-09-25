// Page de contact du site
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  // Le hook `useNavigate` permet de changer de page.
  const navigate = useNavigate();

  return (
    // Conteneur principal de la page. Vous pouvez ajouter une classe CSS pour le styliser.
    // Exemple : <div className="contact-container">
    <div className="container mt-5">
      
      {/* Titre de la page */}
      <h2 className="text-center fw-bold">Me Contacter</h2>
      <p className="text-center text-muted">N'hésitez pas à m'envoyer un message.</p>

      {/* Barre décorative */}
      <div
          className="progress mx-auto"
          style={{ height: "5px", maxWidth: "400px", width: "80%" }}
        >
          <div
            className="progress-bar bg-primary"
            style={{ width: "100%" }}
          ></div>
      </div>

      {/* 
        FORMULAIRE DE CONTACT
        C'est ici que vous pouvez intégrer un formulaire de contact.
        Un formulaire simple en Bootstrap contiendrait des champs pour le nom, l'email, le sujet et le message.
        
        Exemple de structure de champ :
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">Nom</label>
          <input type="text" className="form-control" id="nameInput" />
        </div>
      */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          {/* Mettez votre formulaire ici */}
          <p className="text-center">[Le formulaire de contact sera bientôt disponible ici]</p>
        </div>
      </div>

      {/* 
        AUTRES INFORMATIONS DE CONTACT
        Vous pouvez également ajouter d'autres informations comme votre email, téléphone, etc.
        <div className="text-center mt-4">
          <p>Ou par email : votre.email@example.com</p>
        </div>
      */}

      {/* 
        Bouton pour revenir à la page d'accueil.
        - `onClick` : Redirige vers la page d'accueil.
      */}
      <div className="text-center mt-5">
        <button className="btn btn-primary" onClick={() => navigate("/")}>Retour à l'accueil</button>
      </div>
    </div>
  );
}
