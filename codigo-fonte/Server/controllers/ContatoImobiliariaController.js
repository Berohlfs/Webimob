import ContatoImobiliaria from '../models/Imobiliaria/ContatoImobiliaria';

class ContatoImobiliariaController {
  async create(req, res) {
    const { nome, telefone, nascimento } = req.body;
    try {
      await ContatoImobiliaria.create({
        NOME: nome,
        TELEFONE: telefone,
        NASCIMENTO: nascimento,
        imobiliariaId: req.params.id,
      });
      return res.status(200).json('Contato cadastrado com sucesso!');
    } catch (error) {
      return res.status(500).json(`Houve um erro no envio.${error}`);
    }
  }

  async index(req, res) {
    try {
      const contatos = await ContatoImobiliaria.findAll({
        where: { imobiliariaId: req.params.id },
      });
      return res.status(200).json(contatos);
    } catch (error) {
      return res.status(500).json('Houve um erro ao carregar os contatos.');
    }
  }

  async delete(req, res) {
    try {
      await ContatoImobiliaria.destroy({ where: { id: req.params.id } });
      res.status(200).json('Contato excluído com sucesso.');
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async show(req, res) {
    try {
      const contato = await ContatoImobiliaria.findByPk(req.params.id);
      res.status(200).json(contato);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async update(req, res) {
    const { nome, telefone, nascimento } = req.body;

    ContatoImobiliaria.update({

      NOME: nome,
      TELEFONE: telefone,
      NASCIMENTO: nascimento,

    }, {
      where: { id: req.params.id },
    }).then(() => {
      res.status(200).json('Informações alteradas com sucesso!');
    }).catch((error) => {
      res.status(500).json({ error });
    });
  }
}

export default new ContatoImobiliariaController();
