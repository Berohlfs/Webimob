/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('fone_imobiliarias', 'NUMERO', {
      type: Sequelize.STRING(16),
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('fone_imobiliarias', 'NUMERO', {
      type: Sequelize.STRING(254),
      allowNull: true,
    });
  },
};
