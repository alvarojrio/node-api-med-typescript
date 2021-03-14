import {request, response, Router} from 'express';
import medicosRouter from '@modules/medicos/routes/medicos.routes';
import pacienteRouter from '@modules/pacientes/routes/pacientes.routes';
import prontuarioRouter from '@modules/prontuario/routes/prontuario.routes';
import subprontuarioRouter from '@modules/subprontuario/routes/subprontuario.routes';
import consultaRouter from '@modules/consultas/routes/consulta.routes';
import agendaRouter from '@modules/agendas/routes/agenda.routes';


const routes = Router();


//route de medicos
routes.use('/medicos', medicosRouter);
routes.use('/paciente', pacienteRouter);
routes.use('/prontuario', prontuarioRouter);

routes.use('/subprontuario', subprontuarioRouter);
routes.use('/consulta', consultaRouter);
routes.use('/agenda', agendaRouter);

export default routes;