import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

// controllers
import imobiliarias from './controllers/ImobiliariaController';
import filesImobiliaria from './controllers/FilesControllerImobiliaria';
import sessions from './controllers/SessionsController';
import auth from './middlewares/auth';
import contatosImobiliaria from './controllers/ContatoImobiliariaController';
import usuarios from './controllers/UsuariosController';

const router = new Router();
const upload = multer(multerConfig);

// Sessions
router.post('/sessions', sessions.create);

//router.use(auth);

// Imobiliarias
router.get('/imobiliarias', imobiliarias.index);
router.post('/imobiliarias', imobiliarias.create);
router.delete('/imobiliarias/:id', imobiliarias.delete);
router.put('/imobiliarias/:id', imobiliarias.update);
router.get('/imobiliarias/:id', imobiliarias.show);

router.get('/imobiliarias/anotacoes/:id', imobiliarias.indexAnotacoes);
router.put('/imobiliarias/anotacoes/:id', imobiliarias.updateAnotacoes);

// Files Imobiliarias
router.post('/imobiliarias/files/:id', upload.single('file'), filesImobiliaria.create);
router.get('/imobiliarias/files/:id', filesImobiliaria.index);
router.get('/files/:filename', filesImobiliaria.download);
router.delete('/files/:filename', filesImobiliaria.delete);

// Contatos Imobiliarias
router.post('/imobiliarias/contatos/:id', contatosImobiliaria.create);
router.get('/imobiliarias/contatos/:id', contatosImobiliaria.index);
router.put('/imobiliarias/contatos/:id', contatosImobiliaria.update);
router.get('/imobiliarias/contatos/detalhes/:id', contatosImobiliaria.show);
router.delete('/contatos/:id', contatosImobiliaria.delete);

// Usuarios
router.post('/usuarios', usuarios.create);
router.get('/usuarios', usuarios.index);
router.put('/usuarios/:id', usuarios.update);
router.get('/usuarios/:id', usuarios.show);
router.delete('/usuarios/:id', usuarios.delete);

export default router;
