module.exports = {
    database: 'fifa_db',
    username: 'root',
    password: 'tu_contraseña',
    host: 'localhost',
    dialect: 'mysql',
  };

const { Sequelize } = require('sequelize');

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize('fifa_db', 'root', 'tu_contraseña', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;