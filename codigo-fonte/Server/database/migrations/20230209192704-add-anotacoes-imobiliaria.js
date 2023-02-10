'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('imobiliarias','ANOTACOES', {
       type: Sequelize.TEXT,
       allowNull: 'true',
       });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn('imobiliarias','ANOTACOES');

  }
};
