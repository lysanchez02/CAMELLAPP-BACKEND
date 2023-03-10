'use strict';
const {
  Model
} = require('sequelize');
const usuario = require('./usuario');
const detalleoferta = require('./detalleoferta');
const postulaciones = require('./postulaciones');
module.exports = (sequelize, DataTypes) => {
  class ofertaempleo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ofertaempleo.hasMany(models.detalleoferta, {foreignKey: 'idofertaempleo'});
      ofertaempleo.belongsTo(models.postulaciones, {foreignKey: 'idofertaempleo'});
      ofertaempleo.belongsTo(models.usuario, {foreignKey: 'idUsuario'})
    }
  }
  ofertaempleo.init({
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
    horario: DataTypes.STRING,
    salario: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    titulo: DataTypes.STRING,
    tiempoContrato: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ofertaempleo',
    tableName: 'ofertaempleo'
  });
  return ofertaempleo;
};