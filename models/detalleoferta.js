'use strict';
const {
  Model
} = require('sequelize');
const categoria = require('./categoria');
const ofertaEmpleo = require('./ofertaEmpleo');
module.exports = (sequelize, DataTypes) => {
  class detalleOferta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      detalleOferta.belongsTo(models.categoria, {foreignKey: 'idCategoria'});
      detalleOferta.belongsTo(models.ofertaEmpleo, {foreignKey: 'idOfertaEmpleo'});
    }
  }
  detalleOferta.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idOfertaEmpleo: {
      type: DataTypes.INTEGER,
      references:{
        model: {
          tableName:'ofertaEmpleo',
        },
        key: 'id'
      },
      allowNull: false
    },
    idCategoria: {
      type: DataTypes.INTEGER,
      references:{
        model: {
          tableName:'categoria',
        },
        key: 'id'
      },
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'detalleOferta',
    tableName: 'detalleOferta'
  });
  return detalleOferta;
};