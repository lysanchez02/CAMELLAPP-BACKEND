'use strict';
const {
  Model
} = require('sequelize');
const ofertaempleo = require('./ofertaempleo');
const intereses = require('./intereses');
module.exports = (sequelize, DataTypes) => {
  class categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      categoria.hasMany(models.ofertaempleo, {foreignKey: 'idCategoria'});
      categoria.hasMany(models.intereses, {foreignKey: 'idCategoria'});
    }
  }
  categoria.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categoria',
    tableName: 'categoria'
  });
  return categoria;
};