import { resolve } from 'path';
import fs from 'fs';
import Arquivo from '../models/Imobiliaria/Arquivo';

class FilesControllerImobiliaria {
  async create(req, res) {
    const { originalname, filename } = req.file;
    if (!req.file) {
      return res.status(406).json('Faça o upload de uma imagem!');
    }
    try {
      await Arquivo.create({
        NOME: originalname,
        PATH: filename,
        imobiliariaId: req.params.id,
      });
      return res.status(200).json('Arquivo enviado com sucesso.');
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async index(req, res) {
    try {
      const arquivos = await Arquivo.findAll({
        where: { imobiliariaId: req.params.id },
      });
      return res.status(200).json(arquivos);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async delete(req, res) {
    const { filename } = req.params;
    const directoryPath = resolve(__dirname, '..', 'tmp', 'uploads', filename);
    try {
      fs.unlinkSync(directoryPath);
      await Arquivo.destroy({ where: { PATH: filename } });
      res.status(200).json('Arquivo excluído com sucesso.');
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async download(req, res) {
    const { filename } = req.params;
    const directoryPath = resolve(__dirname, '..', 'tmp', 'uploads', filename);
    try {
      res.download(directoryPath);
    } catch (error) {
      res.status(500).json(`Erro ao baixar o arquivo${error}`);
    }
  }
}

export default new FilesControllerImobiliaria();
