import { Router } from 'express'
import AgendaController from '../controllers/AgendaController';

const agendaRouter = Router();
const Controller = new  AgendaController;

agendaRouter.get('/',Controller.index);
agendaRouter.get('/show/:id',Controller.show);
agendaRouter.post('/create',Controller.create);
agendaRouter.put('/update/:id',Controller.update);
agendaRouter.delete('/delete/:id',Controller.delete);

export default agendaRouter;

