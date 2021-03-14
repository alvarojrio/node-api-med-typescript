import { Request, Response }   from "express";
import CreateProntuarioService from "../services/CreateSubProntuarioService";
import DeleteProntuarioService from "../services/DeleteSubProntuarioService";
import ListProntuarioService   from "../services/ListSubProntuarioService";
import ShowProntuarioService   from "../services/ShowSubProntuarioService";
import UpdateProntuarioService from "../services/UpdateSubProntuarioService";

export default class SubProntuarioController {

    
    
    public async index(request: Request, response: Response): Promise<Response> {

        const listProntuario =  new ListProntuarioService();

        const Prontuarios = await listProntuario.execute();

        return response.json(Prontuarios);

    }

    public async show(request: Request, response: Response): Promise<Response> {

        const { cod_subprontuario } = request.params;

        const showProntuario =  new ShowProntuarioService();

        const Prontuarios = await showProntuario.execute({ cod_subprontuario });

        return response.json(Prontuarios);

    }

    public async create(request: Request, response: Response): Promise<Response> {

        const { cod_prontuario, cod_consulta, descricao } = request.body;

        const createProntuario =  new CreateProntuarioService();

        const Prontuarios = await createProntuario.execute({ cod_prontuario, cod_consulta, descricao });
       
         return response.json(Prontuarios);

    }


    public async update(request: Request, response: Response): Promise<Response> {

        return response.json(['não permitido alterar um prontuário fora da consulta.']);

    }


    public async delete(request: Request, response: Response): Promise<Response> {

        const { cod_subprontuario } = request.params;

        const updateProntuario =  new DeleteProntuarioService();

        const Prontuarios = await updateProntuario.execute({ cod_subprontuario })

        return response.json(Prontuarios);

    }

}