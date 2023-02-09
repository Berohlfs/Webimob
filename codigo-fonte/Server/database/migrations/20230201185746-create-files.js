/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('arquivos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      NOME: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      PATH: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      imobiliariaId: {
        type: Sequelize.INTEGER,
        references: { model: 'Imobiliarias', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },

    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('arquivos');
  },
};
