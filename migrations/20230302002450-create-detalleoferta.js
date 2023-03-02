'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detalleOferta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idOfertaEmpleo: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'ofertaEmpleo',
          },
          key:'id'
        },
        allowNull: false
            },
      idCategoria: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'categoria',
          },
          key:'id'
        },
        allowNull: false
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
    await queryInterface.dropTable('detalleOferta');
  }
};