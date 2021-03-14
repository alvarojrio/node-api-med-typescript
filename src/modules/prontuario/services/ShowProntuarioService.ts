import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Paciente from "../typeorm/entities/Prontuario";
import { ProntuarioRepository } from "../typeorm/repositories/ProntuarioRepository";

interface IRequest {
    cod_paciente: any;
}
class ShowProntuarioService {

    public async execute({ cod_paciente }: IRequest): Promise<Paciente> {

        const Repository = getCustomRepository(ProntuarioRepository)

        const pacientes = await Repository.findOne(cod_paciente);

        if (!pacientes) {
            throw new AppError('Nenhum paciente foi encontrado !')
        }


        return pacientes

    }
}

export default ShowProntuarioService;