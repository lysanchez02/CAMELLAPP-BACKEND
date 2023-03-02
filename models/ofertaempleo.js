'use strict';
const {
  Model
} = require('sequelize');
const usuario = require('./usuario');
const detalleOferta = require('./detalleOferta');
module.exports = (sequelize, DataTypes) => {
  class ofertaEmpleo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ofertaEmpleo.hasMany(models.detalleOferta, {foreignKey: 'idOfertaEmpleo'});
      ofertaEmpleo.belongsTo(models.usuario, {foreignKey: 'idUsuario'})
    }
  }
  ofertaEmpleo.init({
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
    tiempo_contrato: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ofertaEmpleo',
    tableName: 'ofertaEmpleo'
  });
  return ofertaEmpleo;
};