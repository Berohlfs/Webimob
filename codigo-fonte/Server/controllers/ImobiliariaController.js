import * as Yup from 'yup';
import { Op } from 'sequelize';
import { parseISO } from 'date-fns';
import Imobiliaria from '../models/Imobiliaria/Imobiliaria';
import EmailImobiliaria from '../models/Imobiliaria/EmailImobiliaria';
import FoneImobiliaria from '../models/Imobiliaria/FoneImobiliaria';

class ImobiliariaController {
  async index(req, res) {
    const {
      NOME,
      APELIDO,
      PARCEIRO,
      STATUS,
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

    if (APELIDO) {
      where = {
        ...where,
        APELIDO: {
          [Op.like]: APELIDO,
        },
      };
    }

    if (PARCEIRO) {
      where = {
        ...where,
        PARCEIRO: {
          [Op.like]: PARCEIRO,
        },
      };
    }

    if (STATUS) {
      where = {
        ...where,
        STATUS: {
          [Op.like]: STATUS.split(',').map((item) => item.toUpperCase()),
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
      const imobiliarias = await Imobiliaria.findAll({
        where,
        order,
        limit,
        offset: limit * page - limit,
      });
      return res.status(200).json(imobiliarias);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async create(req, res) {
    const emails = [
      { EMAIL: req.body.email1, PRIMEIRO: true },
      { EMAIL: req.body.email2, PRIMEIRO: false },
    ];

    const fones = [
      { NUMERO: req.body.fone1, ORDEM: 1 },
      { NUMERO: req.body.fone2, ORDEM: 2 },
      { NUMERO: req.body.fone3, ORDEM: 3 },
    ];
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      cpf_cnpj: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro ao validar o schema.' });
    }
    const imobiliaria = await Imobiliaria.findOne({
      where: { CPF_CNPJ: req.body.cpf_cnpj },
    });
    try {
      if (imobiliaria == null) {
        await Imobiliaria.create({
          NOME: req.body.nome,
          CPF_CNPJ: req.body.cpf_cnpj,
          INTERNO: req.body.interno,
          APELIDO: req.body.apelido,
          PARCEIRO: req.body.parceiro,
          INSC_MUNICIPAL: req.body.insc_municipal,
          CEP: req.body.cep,
          LOGRADOURO: req.body.logradouro,
          NUMERO: req.body.numero,
          COMPLEMENTO: req.body.complemento,
          CIDADE: req.body.cidade,
          UF: req.body.uf,
          email_imobiliarias: emails,
          fone_imobiliarias: fones, // (EAGER-LOADING)
        }, {
          include: [EmailImobiliaria, FoneImobiliaria],
        });
        return res.status(200).json('Imobiliária cadastrada com sucesso!');
      }

      return res.status(406).json('CPF/CNPJ já cadastrado no sistema!');
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async delete(req, res) {
    try {
      await Imobiliaria.destroy({ where: { id: req.params.id } });
      res.status(200).json('Imobiliaria Excluida com sucesso');
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string(),
      cpf_cnpj: Yup.string().string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro ao validar o schema.' });
    }
    await Imobiliaria.upsert({

      id: req.params.id, // parametro de roq existente do upsert
      NOME: req.body.nome,
      CPF_CNPJ: req.body.cpf_cnpj,
      INTERNO: req.body.interno,
      APELIDO: req.body.apelido,
      PARCEIRO: req.body.parceiro,
      INSC_MUNICIPAL: req.body.insc_municipal,
      CEP: req.body.cep,
      LOGRADOURO: req.body.logradouro,
      NUMERO: req.body.numero,
      COMPLEMENTO: req.body.complemento,
      CIDADE: req.body.cidade,
      UF: req.body.uf,
    }).then(() => {
      res.status(200).json('Informações alteradas com sucesso!');
    }).catch((error) => {
      res.status(500).json({ error });
    });
  }

  async show(req, res) {
    try {
      const imobiliaria = await Imobiliaria.findByPk(req.params.id, {
        include:
        [EmailImobiliaria, FoneImobiliaria],
      });
      res.status(200).json(imobiliaria);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async indexAnotacoes(req, res) {
    try {
      const anotacoes = await Imobiliaria.findByPk(req.params.id, {
        attributes: ['ANOTACOES'],
      });
      res.status(200).json(anotacoes);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async updateAnotacoes(req, res) {
    try {
      await Imobiliaria.update({

        ANOTACOES: req.body.anotacoes,

      }, {
        where: { id: req.params.id },
      });

      res.status(200).json('Anotações salvas com sucesso!');
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

export default new ImobiliariaController();
