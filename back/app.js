const express = require('express');
const sequelize = require('./config'); 
const playerRoutes = require('./routes/players'); 

const app = express();
const port = 3000;


app.use(express.json());

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });


sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados con la base de datos.');
  })
  .catch((error) => {
    console.error('Error al sincronizar los modelos:', error);
  });


app.use('/api/players', playerRoutes);


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});