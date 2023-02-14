import { Op } from 'sequelize';
import { parseISO } from 'date-fns';
import * as Yup from 'yup';

import Usuario from '../models/Imobiliaria/Usuario';

class UsuariosController {
  async index(req, res) {
    const {
      NOME,
      USUARIO,
      createdBefore,
      createdAfter,
      updatedBefore,
      updatedAfter,
      sort,
    } = req.query;

    // localhost:1324/imobiliarias?status=active filtros do front ex.
    const page = req.query.page || 1;
    const limit = req.query.limit || 25;

    let where = {};
    let order = [];

    if (NOME) {
      where = {
        ...where,
        NOME: {
          [Op.like]: NOME,
        },
      };
    }

    if (USUARIO) {
      where = {
        ...where,
        USUARIO: {
          [Op.like]: USUARIO,
        },
      };
    }

    if (createdBefore) {
      where = {
        ...where,
        createdAt: {
          [Op.gte]: parseISO(createdBefore),
        },
      };
    }

    if (createdAfter) {
      where = {
        ...where,
        createdAt: {
          [Op.lte]: parseISO(createdAfter),
        },
      };
    }

    if (updatedBefore) {
      where = {
        ...where,
        updatedAt: {
          [Op.gte]: parseISO(updatedBefore),
        },
      };
    }

    if (updatedAfter) {
      where = {
        ...where,
        updatedAt: {
          [Op.lte]: parseISO(updatedAfter),
        },
      };
    }

    if (sort) { // localhost:1324?sort=id:desc,name
      order = sort.split(',').map((item) => item.split(':'));
    }

    try {
      const data = await Usuario.findAll({
        attributes: {
          exclude: ['PASSWORD', 'PASSWORD_HASH'],
        },
        where,
        order,
        limit,
        offset: limit * page - limit,
      });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async show(req, res) {
    const user = await Usuario.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json();
    }

    return res.status(200).json(user);
  }

  async create(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string(),
      cpf_cnpj: Yup.string().string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro ao validar o schema.' });
    }

    const usuario = await Usuario.findOne({
      where: { USUARIO: req.body.cpf_cnpj },
    });
    try {
      if (usuario == null) {
        await Usuario.create({
          USUARIO: req.body.usuario,
          NOME: req.body.nome,
          PASSWORD_HASH: req.body.password,

        });
        return res.status(200).json('Usuário cadastrado com sucesso!');
      }
      return res.status(406).json('CPF/CNPJ já cadastrado no sistema!');
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async update() {

  }

  async delete() {

  }
}
// feriado do carnaval, retornaremos as atividades normais na quinta feira
export default new UsuariosController();
