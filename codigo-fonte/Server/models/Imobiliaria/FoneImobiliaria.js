import Sequelize, { Model } from 'sequelize';

class FoneImobiliaria extends Model {
  static init(sequelize) {
    super.init({
      NUMERO: Sequelize.STRING,
      ORDEM: Sequelize.BOOLEAN,
    }, {
      sequelize,
      modelName: 'fone_imobiliarias',
    });
  }

  static associate(models) {
    this.belongsTo(models.imobiliarias, { foreignKey: 'imobiliariaId' });
  }
}
export default FoneImobiliaria;
