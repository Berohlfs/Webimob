import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';
import Usuario from '../models/Imobiliaria/Usuario';

class SessionsController {
  async create(req, res) {
    const { usuario, senha } = req.body;

    const user = await Usuario.findOne({ // criar model de usuario
      where: { usuario },
    });
    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado.' });
    }

    if (!(await user.checkPassword(senha))) {
      return res.status(401).json({ error: 'Senha inválida.' });
    }
    const { id, nome } = user;
    return res.json({
      user: {
        id,
        nome,
        usuario,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}
export default new SessionsController();
