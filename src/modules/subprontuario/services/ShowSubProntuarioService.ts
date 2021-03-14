import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Paciente from "../typeorm/entities/SubProntuario";
import { SubProntuarioRepository } from "../typeorm/repositories/SubProntuarioRepository";

interface IRequest {
    cod_subprontuario: any;
}
class ShowSubProntuarioService {

    public async execute({ cod_subprontuario }: IRequest): Promise<Paciente> {

        const Repository = getCustomRepository(SubProntuarioRepository)

        const pacientes = await Repository.findOne(cod_subprontuario);

        if (!pacientes) {
            throw new AppError('Nenhum paciente foi encontrado !')
        }


        return pacientes

    }
}

export default ShowSubProntuarioService;