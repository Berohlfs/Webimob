import Sequelize, { Model } from 'sequelize';

class ContatoImobiliaria extends Model {
  static init(sequelize) {
    super.init(
      {
        NOME: Sequelize.STRING,
        TELEFONE: Sequelize.STRING,
        NASCIMENTO: Sequelize.STRING,

      },
      {
        sequelize,
        modelName: 'imobiliaria_contatos',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.imobiliarias, { foreignKey: 'imobiliariaId' });
  }
}

export default ContatoImobiliaria;
