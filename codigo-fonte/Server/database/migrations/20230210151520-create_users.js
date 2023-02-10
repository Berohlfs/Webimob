'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('usuarios', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      NOME: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      USUARIO: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      PASSWORD_HASH: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
     });
     
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('usuarios');
   
  }
};
