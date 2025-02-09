const express = require('express');
const sequelize = require('./config'); 
const playerRoutes = require('./routes/players'); 

const app = express();
const port = 3000;
const cors = require('cors')

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200'
}));

sequelize.authenticate()
  .then(() => {
    console.log('Se conectó a la BASE DE DATOSSS!!!!!');
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