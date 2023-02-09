import { Sequelize } from 'sequelize';
import config from '../config/bd';
import Imobiliaria from '../models/Imobiliaria/Imobiliaria';
import EmailImobiliaria from '../models/Imobiliaria/EmailImobiliaria';
import FoneImobiliaria from '../models/Imobiliaria/FoneImobiliaria';
import Arquivo from '../models/Imobiliaria/Arquivo';
import ContatoImobiliaria from '../models/Imobiliaria/ContatoImobiliaria';

/**
 * Este arquivo realiza a conexao e inicializa os models
 *
 */

const models = [Imobiliaria, EmailImobiliaria, FoneImobiliaria, Arquivo, ContatoImobiliaria];

class Database {
  constructor() {
    this.connection = new Sequelize(config);
    this.init();
    this.associate();
  }

  init() {
    models.forEach((model) => model.init(this.connection));
  }

  associate() {
    models.forEach((model) => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
