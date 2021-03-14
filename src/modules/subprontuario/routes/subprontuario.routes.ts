import { Router } from 'express'
import SubProntuarioController from '../controllers/SubProntuarioController';

const subprontuarioRouter = Router();
const Controller = new  SubProntuarioController;

subprontuarioRouter.get('/',Controller.index);
subprontuarioRouter.get('/show/:id',Controller.show);
subprontuarioRouter.post('/create',Controller.create);
subprontuarioRouter.put('/update/:id',Controller.update);
subprontuarioRouter.delete('/delete/:id',Controller.delete);

export default subprontuarioRouter;

