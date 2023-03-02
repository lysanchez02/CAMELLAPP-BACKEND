'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('experiencia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'usuario',
          },
          key:'id'
        },
        allowNull: false
      },
      titulo: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      lugarTrabajo: {
        type: Sequelize.STRING
      },
      duracionTrabajo: {
        type: Sequelize.STRING
      },
      archivo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('experiencia');
  }
};