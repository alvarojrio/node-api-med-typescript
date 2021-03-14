import { Router } from 'express'
import PacienteController from '../controllers/PacienteController';

const pacientesRouter = Router();
const Controller = new  PacienteController;

pacientesRouter.get('/',Controller.index);
pacientesRouter.get('/show/:id',Controller.show);
pacientesRouter.post('/create',Controller.create);
pacientesRouter.put('/update/:id',Controller.update);
pacientesRouter.delete('/delete/:id',Controller.delete);

export default pacientesRouter;

