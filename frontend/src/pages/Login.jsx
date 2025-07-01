import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });

      if (!response.ok) throw new Error('Erreur lors de l’inscription');
      setMessage('Inscription réussie !');
    } catch (err) {
      setMessage(err.message);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });

      if (!response.ok) throw new Error('Connexion échouée');

      const data = await response.json();
      navigate('/profil', { state: { user: data } });
    } catch (err) {
      setMessage(err.message);
    }
  };

return (
<div style={{ maxWidth: 400, margin: 'auto' }}>
    <h2>Connexion / Inscription</h2>
    <input type="text" placeholder="Nom" value={name} onChange={e=> setName(e.target.value)}
    /><br />
    <input type="email" placeholder="Email" value={email} onChange={e=> setEmail(e.target.value)}
    /><br /><br />
    <button onClick={handleLogin}>Connexion</button>
    <button onClick={handleRegister} style={{ marginLeft: '10px' }}>Inscription</button>
    <p style={{ marginTop: '10px' }}>{message}</p>
</div>
);
}