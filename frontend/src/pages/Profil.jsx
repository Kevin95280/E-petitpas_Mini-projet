// Hook permettant de récupérer les données transmises depuis la page login
import { useLocation } from 'react-router-dom';

export default function Profil() {
  // Récupération des données envoyées via "navigate('/profil', { state: { user } })"
  const location = useLocation();
  // On stocke ces données dans un objet "user"
  const { user } = location.state || {}; // Si aucun user n’est présent, on évite l’erreur

  // Si aucune donnée utilisateur n’est transmise (accès direct à /profil par exemple)
  if (!user) {
    return <p style={{ textAlign: 'center' }}>Aucun utilisateur connecté.</p>;
  }

  // Affichage des informations utilisateur stockées en BDD dans un conteneur simple
  return (
    <div style={{ maxWidth: 400, margin: 'auto', textAlign: 'left' }}>
      <h2>Profil Utilisateur</h2>

      {/* Nom de l'utilisateur */}
      <p><strong>Nom :</strong> {user.name}</p>

      {/* Email */}
      <p><strong>Email :</strong> {user.email}</p>

      {/* Id de l'utilisateur */}
      <p><strong>ID utilisateur :</strong> {user.id}</p>
    </div>
  );
}
