'use strict';
const {
  Model
} = require('sequelize');
const rol = require('./rol');
const usuario = require('./usuario');
module.exports = (sequelize, DataTypes) => {
  class rolusuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      rolusuario.belongsTo(models.rol, {foreignKey: 'idRol'});
      rolusuario.belongsTo(models.usuario, {foreignKey: 'idUsuario'});
    }
  }
  rolusuario.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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
    idRol: {
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
    modelName: 'rolusuario',
    tableName: 'rolusuario'
  });
  return rolusuario;
};