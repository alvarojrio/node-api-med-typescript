import { Request, Response }   from "express";
import CreateProntuarioService from "../services/CreateProntuarioService";
import DeleteProntuarioService from "../services/DeleteProntuarioService";
import ListProntuarioService   from "../services/ListProntuarioService";
import ShowProntuarioService   from "../services/ShowProntuarioService";
import UpdateProntuarioService from "../services/UpdateProntuarioService";

export default class ProntuarioController {

    public async index(request: Request, response: Response): Promise<Response> {

        const listProntuario =  new ListProntuarioService();

        const Prontuarios = await listProntuario.execute();

        return response.json(Prontuarios);

    }

    public async show(request: Request, response: Response): Promise<Response> {

        const { cod_paciente } = request.params;

        const showProntuario =  new ShowProntuarioService();

        const Prontuarios = await showProntuario.execute({ cod_paciente });

        return response.json(Prontuarios);

    }

    public async create(request: Request, response: Response): Promise<Response> {

        const { cod_paciente } = request.body;

        const createProntuario =  new CreateProntuarioService();

        const Prontuarios = await createProntuario.execute({ cod_paciente });

        return response.json(Prontuarios);

    }


    public async update(request: Request, response: Response): Promise<Response> {

        const { cod_paciente  } = request.body;
        const { cod_prontuario } = request.params;

        const updateProntuario =  new UpdateProntuarioService();

        const Prontuarios = await updateProntuario.execute({ cod_prontuario, cod_paciente  })

        return response.json(Prontuarios);

    }


    public async delete(request: Request, response: Response): Promise<Response> {

        const { cod_prontuario } = request.params;

        const updateProntuario =  new DeleteProntuarioService();

        const Prontuarios = await updateProntuario.execute({ cod_prontuario })

        return response.json(Prontuarios);

    }

}