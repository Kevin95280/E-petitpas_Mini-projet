# E-petitpas_Mini-projet ![React](https://img.shields.io/badge/React-19-blue) ![Node.js](https://img.shields.io/badge/Node.js-22-green) ![Prisma](https://img.shields.io/badge/Prisma-ORM-purple)
> Application simple avec React, Express, Prisma et Supabase, permettant à un utilisateur de s'inscrire, se connecter et consulter son profil.

&nbsp;

## Fonctionnalités principales

- Inscription utilisateur avec validation email
- Connexion avec redirection vers un profil
- Affichage des données utilisateur dans un tableau stylisé
- Stockage des données en base PostgreSQL via Supabase
- API backend avec Express + Prisma

&nbsp;

**Étape 1 – Initialisation du projet Git + GitHub**
- `git init` pour initialiser le repo
- `git remote add origin https://github.com/Kevin95280/E-petitpas_Mini-projet` pour la création du dépot Github et la connexion

**Étape 2 – Mise en place du frontend (React)**
- `npx create-react-app frontend` pour la mise en place de l'environnement de developpement front
- `npm install react-router-dom` pour la gestion des routes, côté front
- Création de l'arboresence du projet (dossiers components, pages et leurs fichiers associés)

**Étape 3 – Maquettes de base (sans backend)**
- Construction page Login.jsx
    *  Implémentation fetch API pour stocker les données en BDD lors de l'inscription
    *  Implémentation fetch API pour récupérer les données en BDD lors de la connexion + utilisation hook useNavigate pour la redirection vers la page profil
- Construction page Profil.jsx
    *  utilisation du hook useLocation afin de récupérer les données transmises depuis la page login (via le navigate)

**Étape 4 – Mise en place du backend (Express + Prisma)**
- `mkdir backend && cd backend`, création d'un sous-dossier backend
- `npm init -y`, installation du gestionnaire de package Node
- `npm install express cors body-parser prisma @prisma/client`, installation des dépendances du projet, côté back
- `npm install --save-dev nodemon` pour un rechargement automatique
- `npx prisma init`, initialisation de prisma
- Modification du schema.prisma pour permettre la connexion à la plateforme Supabase
- `npx prisma migrate dev --name init`, lance la connexion et prepare un fichier de migration pour la table "User"
- Mise en place du fichier index.js qui va jouer le rôle de serveur en:
     * réceptionnant les infos provenant du formulaire React
     * communiquant avec la BDD PostgreSQL pour stocker ou retrouver un utilisateur+
     * et enfin en renvoyant au frontend les infos à afficher.

**Étape 5 – Création et intégration des composants React**
- Creation des composants Input et Button permettant leur réutilisation ultérieure
- Intégration des composants sur la page `Login.jsx`

**Étape 6 – Stylisation rapide des pages Login et Profil**

&nbsp;

🔗 Démo en ligne
👉 [Voir le site en ligne](https://e-petitpas-mini-projet-frontend.onrender.com)

&nbsp;

**A noter:**   
Dans le cadre d'un projet plus abouti, le style de l'application serait entierement géré dans un dossier CSS/SCSS.  
Les variables d'environnement seraient également stockés dans un fichier .env qui ne serait pas rendu public, par mesure de sécurité.

&nbsp;

Projet réalisé par Kevin Coelho, dans le cadre d’un projet React / Node.js – 2025

