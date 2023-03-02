'use strict';
const {
  Model
} = require('sequelize');
const experiencia = require('./experiencia');
const postulaciones = require('./postulaciones');
const rolUsuario = require('./rolUsuario');
const ofertaEmpleo = require('./ofertaEmpleo');
const intereses = require('./intereses');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usuario.hasMany(models.experiencia, {foreignKey: 'idUsuario'});
      usuario.hasMany(models.postulaciones, {foreignKey: 'idUsuario'});
      usuario.hasMany(models.rolUsuario, {foreignKey: 'idUsuario'});
      usuario.hasMany(models.ofertaEmpleo, {foreignKey: 'idUsuario'});
      usuario.hasMany(models.intereses, {foreignKey: 'idUsuario'});
    }
  }
  usuario.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    foto: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    documento: DataTypes.INTEGER,
    celular: DataTypes.STRING,
    correo: DataTypes.STRING,
    nacionalidad: DataTypes.STRING,
    direccion: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'usuario',
    modelName: 'usuario',
  });
  return usuario;
};