import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        NOME: Sequelize.STRING,
        USUARIO: Sequelize.STRING,
        PASSWORD_HASH: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // campo virtual, nao tem persistencia

      },
      {
        sequelize,
        modelName: 'usuarios',
      },
    );
    this.addHook('beforeSave', async (usuarios) => {
      if (usuarios.password) {
        usuarios.PASSWORD_HASH = await bcrypt.hash(usuarios.password, 8);
      }
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.PASSWORD_HASH);
  }
}

export default Usuario;
