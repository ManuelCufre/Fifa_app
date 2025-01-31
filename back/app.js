const express = require('express');
const sequelize = require('./config'); // Importar la instancia de Sequelize
const Player = require('./models/players'); // Importar el modelo Player

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Probar la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Ruta para obtener todos los jugadores
app.get('/api/players', async (req, res) => {
  try {
    const players = await Player.findAll();
    res.json(players);
  } catch (error) {
    console.error('Error al obtener los jugadores:', error);
    res.status(500).send('Error al obtener los jugadores');
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});