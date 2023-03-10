'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      rol.hasMany(models.rolusuario, {foreignKey: 'idRol'})
    }
  }
  rol.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    rol: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    permisos: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'rol',
    tableName: 'rol'
  });
  return rol;
};