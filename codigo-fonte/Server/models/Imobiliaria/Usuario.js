import Sequelize, { Model } from 'sequelize';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        NOME: Sequelize.STRING,
        USUARIO: Sequelize.STRING,
        PASSWORD_HASH: Sequelize.STRING,

      },
      {
        sequelize,
        modelName: 'usuarios',
      },
    );
  }
}

export default Usuario;
