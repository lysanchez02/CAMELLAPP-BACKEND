'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class intereses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  intereses.init({
    idCategoria: DataTypes.STRING,
    idUsuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'intereses',
  });
  return intereses;
};