/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('fone_imobiliarias', 'FIXO', {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('fone_imobiliarias', 'FIXO');
  },
};
