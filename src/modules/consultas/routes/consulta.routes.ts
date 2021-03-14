import { Router } from 'express'
import ConsultaController from '../controllers/ConsultaController';

const consultaRouter = Router();
const Controller = new  ConsultaController;

consultaRouter.get('/',Controller.index);
consultaRouter.get('/show/:id',Controller.show);
consultaRouter.post('/create',Controller.create);
consultaRouter.put('/update/:id',Controller.update);
consultaRouter.delete('/delete/:id',Controller.delete);

export default consultaRouter;

