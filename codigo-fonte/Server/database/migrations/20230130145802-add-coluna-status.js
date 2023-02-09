/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn('imobiliarias', 'STATUS', {
      type: Sequelize.INTEGER,
      default: 'inativo',
      allowNull: 'false',
    });
  },

  down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('imobiliarias', 'STATUS');
  },
};
