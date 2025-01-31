const express = require('express');
const Player = require('../models/players').players; // Importar el modelo Player

const router = express.Router();

// Obtener todos los jugadores
router.get('/', async (req, res) => {
  try {
    const players = await Player.findAll();
    res.json(players);
  } catch (error) {
    res.status(500).send('Error al obtener los jugadores');
  }
});

// Obtener un jugador por su ID
router.get('/:id', async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (player) {
      res.json(player);
    } else {
      res.status(404).send('Jugador no encontrado');
    }
  } catch (error) {
    res.status(500).send('Error al obtener el jugador');
  }
});

// Crear un nuevo jugador
router.post('/', async (req, res) => {
  try {
    const { name, position, team, age } = req.body;
    const newPlayer = await Player.create({ name, position, team, age });
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(500).send('Error al crear el jugador');
  }
});

// Actualizar un jugador por su ID
router.put('/:id', async (req, res) => {
  try {
    const { name, position, team, age } = req.body;
    const player = await Player.findByPk(req.params.id);
    if (player) {
      player.name = name;
      player.position = position;
      player.team = team;
      player.age = age;
      await player.save();
      res.json(player);
    } else {
      res.status(404).send('Jugador no encontrado');
    }
  } catch (error) {
    res.status(500).send('Error al actualizar el jugador');
  }
});

// Eliminar un jugador por su ID
router.delete('/:id', async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (player) {
      await player.destroy();
      res.status(204).send();
    } else {
      res.status(404).send('Jugador no encontrado');
    }
  } catch (error) {
    res.status(500).send('Error al eliminar el jugador');
  }
});

module.exports = router;