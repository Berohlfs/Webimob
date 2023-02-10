import { Op } from 'sequelize';
import {parseISO} from 'date-fns';
import Usuario from '../models/Imobiliaria/Usuario'

class UsuariosController{
    
    async index(req,res){
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
              APELIDO: {
                [Op.like]: APELIDO,
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
                attributes:{
                    exclude:["PASSWORD", "PASSWORD_HASH" ]   
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
    async show(){

        const user = await Usuario.findByPk(req.params.id)

        if(!user){
            return res.status(404).json()
        }

        return res.status(200).json(user)

    }
    async create(){

    }
    async update(){

    }
    async delete(){

    }
}

export default new UsuariosController();