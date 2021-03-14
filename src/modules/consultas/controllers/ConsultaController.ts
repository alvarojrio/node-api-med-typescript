import { Request, Response }   from "express";
import CreateConsultaService from "../services/CreateConsultaService";
import DeleteConsultaService from "../services/DeleteConsultaService";
import ListConsultaService   from "../services/ListConsultaService";
import ShowConsultaService   from "../services/ShowConsultaService";
import UpdateConsultaService from "../services/UpdateConsultaService";

export default class ConsultaController {

    public async index(request: Request, response: Response): Promise<Response> {

        const listConsulta =  new ListConsultaService();

        const Consultas = await listConsulta.execute();

        return response.json(Consultas);

    }

    public async show(request: Request, response: Response): Promise<Response> {

        const { cod_consulta } = request.params;

        const showConsulta =  new ShowConsultaService();

        const Consultas = await showConsulta.execute({ cod_consulta });

        return response.json(Consultas);

    }

    public async create(request: Request, response: Response): Promise<Response> {

        const { cod_paciente, cod_agenda, data_consulta } = request.body;

        const createConsulta =  new CreateConsultaService();
        
        const Consultas = await createConsulta.execute({ cod_paciente, cod_agenda, data_consulta });

        return response.json(Consultas);

    }


    public async update(request: Request, response: Response): Promise<Response> {

        const { cod_paciente, cod_agenda, data_consulta } = request.body;
        const { cod_consulta } = request.params;

        const updateConsulta =  new UpdateConsultaService();

        const Consultas = await updateConsulta.execute({ cod_consulta, cod_paciente, cod_agenda, data_consulta })

        return response.json(Consultas);

    }


    public async delete(request: Request, response: Response): Promise<Response> {

        const { cod_Consulta } = request.params;

        const updateConsulta =  new DeleteConsultaService();

        const Consultas = await updateConsulta.execute({ cod_Consulta })

        return response.json(Consultas);

    }

}