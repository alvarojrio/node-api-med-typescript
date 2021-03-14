import { Router } from 'express'
import ProntuarioController from '../controllers/ProntuarioController';

const prontuarioRouter = Router();
const Controller = new  ProntuarioController;

prontuarioRouter.get('/',Controller.index);
prontuarioRouter.get('/show/:id',Controller.show);
prontuarioRouter.post('/create',Controller.create);
prontuarioRouter.put('/update/:id',Controller.update);
prontuarioRouter.delete('/delete/:id',Controller.delete);

export default prontuarioRouter;

