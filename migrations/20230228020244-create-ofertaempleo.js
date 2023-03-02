'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ofertaEmpleo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      horario: {
        type: Sequelize.STRING
      },
      salario: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      tiempoContrato: {
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
    await queryInterface.dropTable('ofertaEmpleo');
  }
};