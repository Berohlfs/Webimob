
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('imobiliaria_contatos', {
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
      TELEFONE: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      NASCIMENTO: {
        type: Sequelize.DATEONLY,
        allowNull: true,
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

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('imobiliaria_contatos');

  }
};
