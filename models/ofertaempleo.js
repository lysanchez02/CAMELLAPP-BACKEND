'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ofertaempleo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ofertaempleo.init({
    horario: DataTypes.STRING,
    salario: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    titulo: DataTypes.STRING,
    tiempo_contrato: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ofertaempleo',
  });
  return ofertaempleo;
};