'use strict';
const {
  Model
} = require('sequelize');
const usuario = require('./usuario');
module.exports = (sequelize, DataTypes) => {
  class experiencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    experiencia.belongsTo(models.usuario, {foreignKey: 'idUsuario'});  
    }
  }
  experiencia.init({
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
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    lugarTrabajo: DataTypes.STRING,
    duracionTrabajo: DataTypes.STRING,
    archivo: DataTypes.STRING,

  },
   {
    sequelize,
    tableName: 'experiencia',
    modelName: 'experiencia',
  });
  return experiencia;
};