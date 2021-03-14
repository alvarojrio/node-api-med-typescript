import { Request, Response } from "express";
import CreatePacienteService from "../services/CreatePacienteService";
import DeletePacienteService from "../services/DeletePacienteService";
import ListPacienteService from "../services/ListPacienteService";
import ShowPacienteService from "../services/ShowPacienteService";
import UpdatePacienteService from "../services/UpdatePacienteService";

export default class PacienteController {

    public async index(request: Request, response: Response): Promise<Response> {

        const listPaciente =  new ListPacienteService();

        const Pacientes = await listPaciente.execute();

        return response.json(Pacientes);

    }

    public async show(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;

        const showPaciente =  new ShowPacienteService();

        const Pacientes = await showPaciente.execute({ id });

        return response.json(Pacientes);

    }

    public async create(request: Request, response: Response): Promise<Response> {

        const { nome, telefone, cpf, email, data_nascimento, sexo, altura, peso } = request.body;

        const createPaciente =  new CreatePacienteService();

        const Pacientes = await createPaciente.execute({
            nome,
            telefone,
            cpf,
            email,
            data_nascimento,
            sexo,
            altura,
            peso
            });

        return response.json(Pacientes);

    }


    public async update(request: Request, response: Response): Promise<Response> {

        const { nome, telefone, cpf, email, data_nascimento, sexo, altura, peso } = request.body;
        const { id } = request.params;

        const updatePaciente =  new UpdatePacienteService();

        const Pacientes = await updatePaciente.execute({ id, nome, telefone, cpf, email, data_nascimento, sexo, altura, peso })

        return response.json(Pacientes);

    }


    public async delete(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;

        const updatePaciente =  new DeletePacienteService();

        const Pacientes = await updatePaciente.execute({ id })

        return response.json(Pacientes);

    }

}