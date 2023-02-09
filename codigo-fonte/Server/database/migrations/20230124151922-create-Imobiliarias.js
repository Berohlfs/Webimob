/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('imobiliarias', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      NOME: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CPF_CNPJ: {
        type: Sequelize.STRING(18),
        allowNull: false,
      },
      INTERNO: {
        type: Sequelize.STRING(40),
        allowNull: true,
      },
      APELIDO: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      PARCEIRO: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      INSC_MUNICIPAL: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      // ENDEREÇO
      CEP: {

        type: Sequelize.STRING(9),
        allowNull: false,

      },
      LOGRADOURO: {

        type: Sequelize.STRING,
        allowNull: false,

      },
      NUMERO: {

        type: Sequelize.INTEGER,
        allowNull: false,

      },
      COMPLEMENTO: {

        type: Sequelize.STRING,
        allowNull: true,

      },
      CIDADE: {

        type: Sequelize.STRING(80),
        allowNull: false,

      },
      UF: {

        type: Sequelize.STRING(2),
        allowNull: false,

      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('imobiliarias');
  },
};
