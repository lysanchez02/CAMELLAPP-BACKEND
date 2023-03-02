'use strict';
const {
  Model
} = require('sequelize');
const categoria = require('./categoria');
const usuario = require('./usuario');
module.exports = (sequelize, DataTypes) => {
  class intereses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      intereses.belongsTo(models.categoria, {foreignKey: 'idCategoria'});
      intereses.belongsTo(models.usuario, {foreignKey: 'idUsuario'});

    }
  }
  intereses.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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
    idUsuario: {
      type: DataTypes.INTEGER,
      references:{
        model: {
          tableName:'usuario',
        },
        key: 'id'
      },
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'intereses',
    tableName: 'intereses'
  });
  return intereses;
};