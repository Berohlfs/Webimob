/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([

      queryInterface.changeColumn('imobiliarias', 'CEP', {
        type: Sequelize.STRING(9),
        allowNull: true,
      }),
      queryInterface.changeColumn('imobiliarias', 'NUMERO', {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
      queryInterface.changeColumn('imobiliarias', 'UF', {
        type: Sequelize.STRING(2),
        allowNull: true,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
