import Sequelize, { Model } from 'sequelize';

class EmailImobiliaria extends Model {
  static init(sequelize) {
    super.init(
      {
        EMAIL: Sequelize.STRING,
        PRIMEIRO: Sequelize.BOOLEAN,

      },
      {
        sequelize,
        modelName: 'email_imobiliarias',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.imobiliarias, { foreignKey: 'imobiliariaId' });
  }
}

export default EmailImobiliaria;
