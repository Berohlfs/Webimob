import Sequelize, { Model } from 'sequelize';

class Imobiliaria extends Model {
  static init(sequelize) {
    super.init(
      {
        NOME: {
          type: Sequelize.STRING,
        },
        CPF_CNPJ: {
          type: Sequelize.STRING(18),
        },
        INTERNO: {
          type: Sequelize.STRING(40),
        },
        APELIDO: {
          type: Sequelize.STRING(50),
        },
        PARCEIRO: {
          type: Sequelize.STRING(50),

        },
        INSC_MUNICIPAL: {
          type: Sequelize.STRING(25),
        },
        // ENDEREÇO
        CEP: {
          type: Sequelize.STRING(9),
        },
        LOGRADOURO: {
          type: Sequelize.STRING,
        },
        NUMERO: {
          type: Sequelize.INTEGER,
        },
        COMPLEMENTO: {
          type: Sequelize.STRING,
        },
        CIDADE: {
          type: Sequelize.STRING(80),
        },
        UF: {
          type: Sequelize.STRING(2),
        },
        STATUS: {
          type: Sequelize.STRING(15),
        },
        ANOTACOES: {
          type: Sequelize.TEXT,
        },
      },
      {
        sequelize,
        modelName: 'imobiliarias',
      },
    );
  }

  static associate(models) {
    this.hasMany(models.email_imobiliarias);
    this.hasMany(models.fone_imobiliarias);
    this.hasMany(models.arquivos);
    this.hasMany(models.imobiliaria_contatos);
  }
}

export default Imobiliaria;
