'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol_usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rol_usuario.init({
    id_usuario: DataTypes.STRING,
    lastNid_rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rol_usuario',
  });
  return rol_usuario;
};