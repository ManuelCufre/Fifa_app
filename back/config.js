module.exports = {
    database: 'fifa_db',
    username: 'root',
    password: 'tu_contraseña',
    host: 'localhost',
    dialect: 'mysql',
  };

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fifa_db', 'root', 'tu_contraseña', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;