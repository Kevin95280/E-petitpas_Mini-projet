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

const cellStyle = {
  padding: '12px 8px',
  borderBottom: '1px solid #ddd'
};

// Affichage des informations utilisateur stockées en BDD dans un conteneur simple
return (
<div style={{
  maxWidth: 500,
  margin: '40px auto',
  padding: '20px',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
}}>
  <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Profil Utilisateur</h2>

  <table style={{
    width: '100%',
    borderCollapse: 'collapse'
  }}>
    <tbody>
      <tr>
        <td style={cellStyle}><strong>Nom :</strong></td>
        <td style={cellStyle}>{user.name}</td>
      </tr>
      <tr style={{ backgroundColor: '#fafafa' }}>
        <td style={cellStyle}><strong>Email :</strong></td>
        <td style={cellStyle}>{user.email}</td>
      </tr>
      <tr>
        <td style={cellStyle}><strong>ID utilisateur :</strong></td>
        <td style={cellStyle}>{user.id}</td>
      </tr>
    </tbody>
  </table>
</div>

);
}