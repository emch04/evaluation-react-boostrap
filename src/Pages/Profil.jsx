// Importation de la bibliothèque React et du fichier de style
import React from "react";
import "./../Style/Profil.css";


// Définition du composant Profil, qui affiche les informations de l'utilisateur dans une modale Bootstrap
// La prop `onClose` est une fonction pour fermer la modale
const Profil = ({ onClose }) => {
  // Données statiques de l'utilisateur GitHub (à remplacer par des données dynamiques si nécessaire)
  const userData = {
    login: "github-john-doe",
    id: 19842736,
    node_id: "MDQ6VXNlcjE5ODQyNzM2",
    avatar_url: "https://avatars.githubusercontent.com/u/19842736?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/github-john-doe",
    html_url: "https://github.com/github-john-doe",
    followers_url: "https://api.github.com/users/github-john-doe/followers",
    following_url:
      "https://api.github.com/users/github-john-doe/following{/other_user}",
    gists_url: "https://api.github.com/users/github-john-doe/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/github-john-doe/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/github-john-doe/subscriptions",
    organizations_url: "https://api.github.com/users/github-john-doe/orgs",
    repos_url: "https://api.github.com/users/github-john-doe/repos",
    events_url: "https://api.github.com/users/github-john-doe/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/github-john-doe/received_events",
    type: "User",
    user_view_type: "public",
    site_admin: false,
    name: "John Doe",
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: null,
    bio: "As we all know, John Doe's identity is unknown.\r\nI just wanted to contribute without being known.",
    twitter_username: null,
    public_repos: 1,
    public_gists: 0,
    followers: 17,
    following: 0,
    created_at: "2016-06-09T17:14:00Z",
    updated_at: "2023-11-23T19:48:23Z",
  };

  // Rendu du composant de la modale
  return (
    // Conteneur principal de la modale, rendu visible avec un style en ligne
    <div className="modal" tabIndex="-1" style={{ display: "flex" }}>
      {/* Centre la modale verticalement et l'agrandit avec `modal-lg` */}
      <div className="modal-dialog modal-dialog-centered modal-lg">
        {/* Contenu de la modale avec un fond sombre et du texte clair */}
        <div className="modal-content bg-dark text-light">
          {/* En-tête de la modale */}
          <div className="modal-header">
            <h5 className="modal-title"> <strong>Mon Profil Github</strong></h5>
            {/* Bouton pour fermer la modale, avec un style pour le thème sombre */}
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          {/* Corps de la modale */}
          <div className="modal-body">
            {/* Utilisation du système de grille de Bootstrap pour la mise en page */}
            <div className="container-fluid">
              <div className="row">
                {/* Colonne pour l'avatar, centrée. La bordure a été retirée. */}
                <div className="col-md-5 text-center">
                  {/* Image de l'avatar, responsive et avec une taille personnalisée */}
                  <img
                    src={userData.avatar_url}
                    alt="Avatar"
                    className="img-fluid mb-3 profile-avatar"
                  />
                </div>

                {/* Colonne pour les informations textuelles */}
                <div className="col-md-7 ps-4">
                  <div className="h5">
                    {/* Lien vers le profil GitHub avec une police normale */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      className="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>
                    <a
                      href={userData.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-info "
                    >
                      {userData.name}
                    </a>
                    
                    <hr />
                    <p> 
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg> 
                   </p>
                    <hr />
                  </div>
                  {/*Biographie de l'utilisateur sous forme de citation */}
                  <blockquote className="blockquote">
                    <p>{userData.bio}</p>
                  </blockquote>
                  <hr />
                  {/* Liste des statistiques sans puces */}
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-box"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                      </svg>
                      Repositories: {userData.public_repos}
                    </li>
                    {/* Ligne de séparation horizontale */}
                    <hr />
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-people"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                      </svg>
                      Followers: {userData.followers}
                    </li>
                    {/* Ligne de séparation horizontale */}
                    <hr />
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-people"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                      </svg>{" "}
                      Following: {userData.following}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Pied de page de la modale */}
          <div className="modal-footer">
            {/* Bouton secondaire pour fermer la modale */}

            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exportation du composant pour son utilisation dans d'autres parties de l'application
export default Profil;
