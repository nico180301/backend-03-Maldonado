import express from 'express';
import User from '../dao/models/user.model.js';
import Pet from '../dao/models/pet.model.js';
import { generateUsers, generatePets } from '../utils/mocking.utils.js';

const router = express.Router();

router.get('/mockingusers', async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({ message: "No se han generado usuarios aún." });
    }
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener usuarios', error: err });
  }
});

router.post('/generateUsers', async (req, res) => {
  const { users } = req.body;

  try {
    const existingUsers = await User.countDocuments();

    if (existingUsers >= users) {
      return res.status(400).json({ message: "Ya se han generado suficientes usuarios." });
    }

    const generatedUsers = generateUsers(users);
    await User.insertMany(generatedUsers);

    res.status(201).json({ message: `${users} usuarios generados correctamente.` });
  } catch (err) {
    res.status(500).json({ message: 'Error generando usuarios', error: err });
  }
});

router.get('/mockingpets', async (req, res) => {
  try {
    const pets = await Pet.find();
    if (pets.length === 0) {
      return res.status(404).json({ message: "No se han generado mascotas aún." });
    }
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener mascotas', error: err });
  }
});

router.post('/generatePets', async (req, res) => {
  const { pets } = req.body;

  try {
    const existingPets = await Pet.countDocuments();

    if (existingPets >= pets) {
      return res.status(400).json({ message: "Ya se han generado suficientes mascotas." });
    }

    const generatedPets = generatePets(pets);
    await Pet.insertMany(generatedPets);

    res.status(201).json({ message: `${pets} mascotas generadas correctamente.` });
  } catch (err) {
    res.status(500).json({ message: 'Error generando mascotas', error: err });
  }
});

export default router;