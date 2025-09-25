// Page du portfolio présentant les réalisations
import React from "react";
import "../Style/Portfolio.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function Portfolio() {
  return (
    <div>
      <img src="/Assets/img1.jpg" alt="lumiere bleue" />
      <div className="container mt-5 text-center">
        {/* Titre */}
        <h2 className="fw-bold">Portfolio</h2>
        <p className="text-muted">Voici quelques-unes de mes réalisations</p>

        {/* Barre décorative */}
        <div
          className="progress mx-auto"
          role="progressbar"
          aria-label="Decorative line"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ height: "5px", maxWidth: "400px", width: "80%" }} // largeur ajustée
        >
          <div
            className="progress-bar bg-primary"
            style={{ width: "100%" }}
          ></div>
        </div>
      </div>
      {/* 
        GRILLE DU PORTFOLIO
        - Le conteneur principal pour la grille de cartes.
        - `py-3` est une classe Bootstrap qui ajoute un léger padding (rembourrage) vertical (en haut et en bas).
      */}
      <div className="container py-3">
        {/*
          - `row` est la ligne Bootstrap qui contient les colonnes des cartes.
          - `row-cols-1` : Affiche 1 colonne sur les écrans extra-petits (mobile, par défaut).
          - `row-cols-md-3` : Affiche 3 colonnes sur les écrans de taille moyenne (md) et plus grands.
          - `g-3` : Définit l'espacement (gutter) entre les colonnes.
        */}
        <div className="row row-cols-1 row-cols-md-3 g-3">

          {/* 
            DÉBUT D'UNE CARTE DE PROJET (Structure à répéter pour chaque projet)
            - `col` : Définit une colonne dans la grille Bootstrap.
          */}
          <div className="col">
            {/* 
              - `card` : Le conteneur de la carte.
              - `h-100` : Fait en sorte que toutes les cartes d'une même ligne aient la même hauteur.
            */}
            <div className="card h-100">
              {/* Image de la carte : Remplacez `src` par le chemin de votre image dans le dossier `public/Assets` */}
              <img src="/Assets/img3.jpg" className="card-img-top" alt="Fresh Food Website" />
              
              {/* Corps de la carte */}
              <div className="card-body">
                {/* Titre de la carte : Modifiez le texte du titre ici */}
                <h5 className="card-title">Fresh Food</h5>
                {/* Description de la carte : Modifiez le texte de la description ici */}
                <p className="card-text">
                  Site de vente de produits frais en ligne.
                </p>
                {/* Bouton/Lien : Modifiez le lien `to` et le texte du bouton */}
                <Link to="/portfolio/fresh-food" className="btn btn-primary btn-sm">
                  Voir le site
                </Link>
              </div>

              {/* Pied de page de la carte */}
              <div className="card-footer">
                {/* Texte du pied de page : Modifiez les technologies ou autres informations ici */}
                <small className="text-body-secondary">
                  Site réalisé avec PHP et MySQL
                </small>
              </div>
            </div>
          </div>
          {/* FIN DE LA CARTE DE PROJET */}

          {/* Répétez la structure de la carte pour les autres projets... */}
          <div className="col">
            <div className="card h-100">
              <img src="/Assets/img2.jpg" className="card-img-top" alt="Restaurant Akira Website" />
              <div className="card-body">
                <h5 className="card-title">Restaurant Akira</h5>
                <p className="card-text">
                  Site vitrine pour un restaurant japonais.
                </p>
                <Link to="/portfolio/restaurant-akira" className="btn btn-primary btn-sm">
                  Voir le site
                </Link>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Site réalisé avec WordPress
                </small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="/Assets/img5.jpg" className="card-img-top" alt="Wellness Space Website" />
              <div className="card-body">
                <h5 className="card-title">Espace bien-être</h5>
                <p className="card-text">
                  Application de réservation pour un spa.
                </p>
                <Link to="/portfolio/espace-bien-etre" className="btn btn-primary btn-sm">
                  Voir le site
                </Link>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Site réalisé avec LARAVEL
                </small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="/Assets/img6.jpg" className="card-img-top" alt="SEO Project" />
              <div className="card-body">
                <h5 className="card-title">SEO</h5>
                <p className="card-text">
                  Amélioration du référencement d'un site e-commerce.
                </p>
                <Link to="/portfolio/SEO" className="btn btn-primary btn-sm">
                  Voir le site
                </Link>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Utilisation des outils SEO
                </small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="/Assets/img4.jpg" className="card-img-top" alt="API Creation" />
              <div className="card-body">
                <h5 className="card-title">Création d'une API</h5>
                <p className="card-text">
                  Création d'une API RESTful publique pour une application mobile.
                </p>
                <Link to="/portfolio/api" className="btn btn-primary btn-sm">
                  Voir le site
                </Link>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  PHP - SYMFONY
                </small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="/Assets/img7.jpg" className="card-img-top" alt="Website Mockup" />
              <div className="card-body">
                <h5 className="card-title">Maquette d'un site web</h5>
                <p className="card-text">
                  Création du prototype et de la maquette pour un site de voyage.
                </p>
                <Link to="/portfolio/maquette" className="btn btn-primary btn-sm">
                  Voir le site
                </Link>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Réalisé avec FIGMA
                </small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
