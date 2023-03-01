/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([

      queryInterface.changeColumn('imobiliarias', 'NOME', {
        type: Sequelize.STRING(60),
        allowNull: false,
      }),
      queryInterface.changeColumn('imobiliarias', 'APELIDO', {
        type: Sequelize.STRING(30),
        allowNull: true,
      }),
      queryInterface.changeColumn('imobiliarias', 'INSC_MUNICIPAL', {
        type: Sequelize.STRING(20),
        allowNull: true,
      }),

      queryInterface.changeColumn('imobiliarias', 'LOGRADOURO', {
        type: Sequelize.STRING(50),
        allowNull: true,
      }),
      queryInterface.changeColumn('imobiliarias', 'CIDADE', {
        type: Sequelize.STRING(40),
        allowNull: true,
      }),
      queryInterface.changeColumn('imobiliarias', 'COMPLEMENTO', {
        type: Sequelize.STRING(15),
        allowNull: true,
      }),

    ]);
  },

  async down(queryInterface) {
    await Promise.all([
      queryInterface.removeColumn('imobiliarias', 'NOME'),
      queryInterface.removeColumn('imobiliarias', 'APELIDO'),
      queryInterface.removeColumn('imobiliarias', 'INSC_MUNICIPAL'),
      queryInterface.removeColumn('imobiliarias', 'LOGRADOURO'),
      queryInterface.removeColumn('imobiliarias', 'CIDADE'),
      queryInterface.removeColumn('imobiliarias', 'COMPLEMENTO'),

    ]);
  },
};
