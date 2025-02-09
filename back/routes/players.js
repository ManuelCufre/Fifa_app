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


//Ruta para obtener jugador por ID
router.get('/:id', async (req, res) => {
  try {
    const playerId = req.params.id;
    const player = await Player.findOne({
      where: { id: playerId },
      attributes: [
        'id', 'fifa_version', 'fifa_update', 'player_face_url', 'long_name', 'player_positions',
        'club_name', 'nationality_name', 'overall', 'potential', 'value_eur', 'wage_eur', 'age',
        'height_cm', 'weight_kg', 'preferred_foot', 'weak_foot', 'skill_moves', 'international_reputation',
        'work_rate', 'body_type', 'pace', 'shooting', 'passing', 'dribbling', 'defending', 'physic',
        'attacking_crossing', 'attacking_finishing', 'attacking_heading_accuracy', 'attacking_short_passing',
        'attacking_volleys', 'skill_dribbling', 'skill_curve', 'skill_fk_accuracy', 'skill_long_passing',
        'skill_ball_control', 'movement_acceleration', 'movement_sprint_speed', 'movement_agility',
        'movement_reactions', 'movement_balance', 'power_shot_power', 'power_jumping', 'power_stamina',
        'power_strength', 'power_long_shots', 'mentality_aggression', 'mentality_interceptions',
        'mentality_positioning', 'mentality_vision', 'mentality_penalties', 'mentality_composure',
        'defending_marking', 'defending_standing_tackle', 'defending_sliding_tackle', 'goalkeeping_diving',
        'goalkeeping_handling', 'goalkeeping_kicking', 'goalkeeping_positioning', 'goalkeeping_reflexes',
        'goalkeeping_speed', 'player_traits'
      ]
      
    });

    if (!player) {
      return res.status(404).json({ error: 'Jugador no encontrado' });
    }

    res.json(player);
  } catch (error) {
    console.error('Error al obtener el jugador:', error);
    res.status(500).send('Error al obtener el jugador');
  }
});

module.exports = router;