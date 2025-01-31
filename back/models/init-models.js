var DataTypes = require("sequelize").DataTypes;
var _players = require("./players");

function initModels(sequelize) {
  var players = _players(sequelize, DataTypes);


  return {
    players,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
