// Importation des hooks React necessaire au fonctionnement de la page
import {useState} from "react";
import {useNavigate} from 'react-router-dom';

// Déclaration du composant principal
export default function Login() {
    // Création des états pour gérer les champs du formulaire
    // stockage du nom
    const [name, setName] = useState('');
    //stockage de l'email
    const [email, setEmail] = useState('');
    //Affichage d'un message (succès ou erreur)
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    // Fonction appelée quand on clique sur "Inscription"
    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                // On spécifie le type de données envoyées
                headers: {'Content-Type': 'application/json'},
                // Les données envoyées au serveur
                body: JSON.stringify({ name, email })
            });

            // Gestion d'erreur
            if (!response.ok) throw new Error('Erreur lors de l’inscription');
            setMessage('Inscription réussie !');
        } catch (err) {
            setMessage(err.message);
        }
    };

    // Fonction appelée quand on clique sur "Connexion"
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ name, email})
            });

            if (!response.ok) throw new Error('Connexion échouée');

            // On récupère les infos utilisateur renvoyées par le backend
            const data = await response.json();
            // On redirige vers la page Profil avec les données
            navigate('/profil', { state: { user: data }});
        } catch (err) {
            setMessage(err.message);
        }
    };

    // Rendu du composant : formulaire avec deux champs et deux boutons
    return ( 
        <div style = {{ maxWidth: 400, margin: 'auto'}}>
            <h2>Connexion / Inscription</h2> 

            {/* Champ texte pour le nom */}
            <input
            type = "text"
            placeholder = "Nom"
            value = { name }
            onChange = {e => setName(e.target.value)}
            /><br />

            {/* Champ email */}
            <input 
            type = "email"
            placeholder = "Email"
            value = { email }
            onChange = {e => setEmail(e.target.value)}
            /><br /> < br />

            {/* Bouton pour la connexion */}
            <button onClick = {handleLogin} > Connexion </button> 
            
            {/* Bouton pour l'inscription */}
            <button onClick = {handleRegister} style = {{marginLeft: '10px'}} > Inscription </button> 
            
            {/* Message affiché à l'utilisateur */}
            <p style = {{marginTop: '10px'}} > { message } </p> 
        </div>
    );
}