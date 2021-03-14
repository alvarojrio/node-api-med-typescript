import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Paciente from "../typeorm/entities/Medico";
import { MedicoRepository } from "../typeorm/repositories/MedicoRepository";

interface IRequest {
    id: any;
}
class ShowMedicoService {

    public async execute({ id }: IRequest): Promise<Paciente> {

        const Repository = getCustomRepository(MedicoRepository)

        const pacientes = await Repository.findOne(id);

        if (!pacientes) {
            throw new AppError('Nenhum paciente foi encontrado !')
        }


        return pacientes

    }
}

export default ShowMedicoService;