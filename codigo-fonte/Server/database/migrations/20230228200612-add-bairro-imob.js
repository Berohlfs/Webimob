/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('imobiliarias', 'BAIRRO', {
      type: Sequelize.STRING(25),
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('imobiliarias', 'BAIRRO');
  },
};
