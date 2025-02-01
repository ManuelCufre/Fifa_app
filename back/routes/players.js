const express = require('express');
const router = express.Router();
const Player = require('../models/players'); 

// Ruta para obtener todos los jugadores
router.get('/', async (req, res) => {
  try {
    const players = await Player.findAll({
      attributes: ['id', 'long_name', 'overall', 'club_name', 'nationality_name', 'age', 'height_cm', 'weight_kg'],
    });

    res.json(players); 
  } catch (error) {
    console.error('Error al obtener los jugadores:', error);
    res.status(500).send('Error al obtener los jugadores');
  }
});


module.exports = router;