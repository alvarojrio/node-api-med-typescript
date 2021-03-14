import { Router } from 'express'
import MedicoController from '../controllers/MedicoController';

const medicosRouter = Router();
const Controller = new  MedicoController;

medicosRouter.get('/',Controller.index);
medicosRouter.get('/show/:id',Controller.show);
medicosRouter.post('/create',Controller.create);
medicosRouter.put('/update/:id',Controller.update);
medicosRouter.delete('/delete/:id',Controller.delete);

export default medicosRouter;

