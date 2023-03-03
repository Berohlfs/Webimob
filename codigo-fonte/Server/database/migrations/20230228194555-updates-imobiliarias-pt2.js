/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([

      queryInterface.removeColumn('fone_imobiliarias', 'ORDEM'),

    ]);
  },

  async down(queryInterface, Sequelize) {
    await Promise.all([

      queryInterface.addColumn('fone_imobiliarias', 'ORDEM', {
        type: Sequelize.STRING(25),
        allowNull: true,
      }),

    ]);
  },
};
