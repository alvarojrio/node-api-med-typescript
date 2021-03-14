import { Request, Response } from "express";
import CreateMedicoService from "../services/CreateMedicoService";
import DeleteMedicoService from "../services/DeleteMedicoService";
import ListMedicoService from "../services/ListMedicoService";
import ShowMedicoService from "../services/ShowMedicoService";
import UpdateMedicoService from "../services/UpdateMedicoService";

export default class MedicoController {

    public async index(request: Request, response: Response): Promise<Response> {

        const listMedico =  new ListMedicoService();

        const Medicos = await listMedico.execute();

        return response.json(Medicos);

    }

    public async show(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;

        const showMedico =  new ShowMedicoService();

        const Medicos = await showMedico.execute({ id });

        return response.json(Medicos);

    }

    public async create(request: Request, response: Response): Promise<Response> {

        const { nome, cpf} = request.body;

        const createMedico =  new CreateMedicoService();

        const Medicos = await createMedico.execute({ nome, cpf });

        return response.json(Medicos);

    }


    public async update(request: Request, response: Response): Promise<Response> {

        const { nome,  cpf  } = request.body;
        const { id } = request.params;

        const updateMedico = await new UpdateMedicoService();

        const Medicos = updateMedico.execute({ id, nome, cpf  })

        return response.json(Medicos);

    }


    public async delete(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;

        const updateMedico = await new DeleteMedicoService();

        const Medicos = await updateMedico.execute({ id })

        return response.json([]);

    }

}