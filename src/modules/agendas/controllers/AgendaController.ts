import { Request, Response }   from "express";
import CreateAgendaService from "../services/CreateAgendaService";
import DeleteAgendaService from "../services/DeleteAgendaService";
import ListAgendaService   from "../services/ListAgendaService";
import ShowAgendaService   from "../services/ShowAgendaService";
import UpdateAgendaService from "../services/UpdateAgendaService";

export default class AgendaController {

    public async index(request: Request, response: Response): Promise<Response> {

        const listAgenda =  new ListAgendaService();

        const Agendas = await listAgenda.execute();

        return response.json(Agendas);

    }

    public async show(request: Request, response: Response): Promise<Response> {

        const { cod_agenda } = request.params;

        const showAgenda =  new ShowAgendaService();

        const Agendas = await showAgenda.execute({ cod_agenda });

        return response.json(Agendas);

    }

    public async create(request: Request, response: Response): Promise<Response> {

        console.log('teste')
        const { cod_medico, data_agenda, especialidade, tempo_medio_atendimento } = request.body;

        const createAgenda =  new CreateAgendaService();

        const Agendas = await createAgenda.execute({ cod_medico, data_agenda, especialidade, tempo_medio_atendimento  });

        return response.json(Agendas);

    }


    public async update(request: Request, response: Response): Promise<Response> {

        const { cod_medico, data_agenda, especialidade, tempo_medio_atendimento  } = request.body;
        const { cod_agenda } = request.params;

        const updateAgenda =  new UpdateAgendaService();

        const Agendas = await updateAgenda.execute({  cod_agenda, cod_medico, data_agenda, especialidade, tempo_medio_atendimento  })

        return response.json(Agendas);

    }


    public async delete(request: Request, response: Response): Promise<Response> {

        const { cod_agenda } = request.params;

        const updateAgenda =  new DeleteAgendaService();

        const Agendas = await updateAgenda.execute({ cod_agenda })

        return response.json(Agendas);

    }

}