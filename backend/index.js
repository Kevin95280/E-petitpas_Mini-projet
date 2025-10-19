// Import des modules nécessaires
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import validator from 'validator';

// Initialisation des instances
const app = express();
const prisma = new PrismaClient();

// Middleware pour gérer CORS et JSON
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend opérationnel" });
});


// Route POST /register : création d'un utilisateur
app.post('/api/register', async (req, res) => {
  const { name, email } = req.body;

    // Vérifie que l'email est bien au bon format
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Format d’email invalide.' });
  }

  try {
    const user = await prisma.user.create({
      data: { name, email }
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Email déjà utilisé ou invalide.' });
  }
});

// Route POST /login : recherche d'un utilisateur existant
app.post('/api/login', async (req, res) => {
  const { name, email } = req.body;

  const user = await prisma.user.findFirst({
    where: { name, email }
  });

  if (!user) {
    return res.status(401).json({ error: 'Utilisateur non trouvé.' });
  }

  res.json(user);
});

// Démarrage du serveur
app.listen(3001, () => {
  console.log('Backend API démarrée sur http://localhost:3001');
});
