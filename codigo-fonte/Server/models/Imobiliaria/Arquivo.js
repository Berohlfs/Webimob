import Sequelize, { Model } from 'sequelize';

class Arquivo extends Model {
  static init(sequelize) {
    super.init(
      {
        NOME: Sequelize.STRING,
        PATH: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: 'arquivos',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.imobiliarias, { foreignKey: 'imobiliariaId' });
  }
}

export default Arquivo;
