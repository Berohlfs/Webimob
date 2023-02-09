/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('email_imobiliarias', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      EMAIL: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      PRIMEIRO: {
        type: Sequelize.BOOLEAN,
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

  async down(queryInterface) {
    return queryInterface.dropTable('email_imobiliarias');
  },
};
