/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('imobiliarias', 'STATUS', {
      type: Sequelize.STRING(15),
      allowNull: true,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
