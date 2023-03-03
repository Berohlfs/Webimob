/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('imobiliarias', 'INTERNO', 'RESPONSAVEL');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('imobiliarias', 'RESPONSAVEL', 'INTERNO');
  },
};
