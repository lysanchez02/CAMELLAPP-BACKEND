'use strict';
const {
  Model
} = require('sequelize');
const usuario = require('./usuario');
const ofertaempleo = require('./ofertaempleo');
module.exports = (sequelize, DataTypes) => {
  class postulaciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      postulaciones.belongsTo(models.usuario, {foreignKey: 'idUsuario'})
      postulaciones.hasMany(models.ofertaempleo, {foreignKey: 'idPostulaciones'})
    }
  }
  postulaciones.init({
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
    idofertaempleo: {
      type: DataTypes.INTEGER,
      references:{
        model: {
          tableName:'ofertaempleo',
        },
        key: 'id'
      },
      allowNull: false
    },
    fecha: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'postulaciones',
    tableName: 'postulaciones'
  });
  return postulaciones;
};