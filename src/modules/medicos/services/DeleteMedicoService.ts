import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
//modelo já esta aqui
import { MedicoRepository } from "../typeorm/repositories/MedicoRepository";


interface IRequest {
    id: any;
}
class DeleteMedicoService {

    public async execute({ id }: IRequest): Promise<void> {

        const Repository = getCustomRepository(MedicoRepository)

        const pacientes = await Repository.findOne(id);

        if (!pacientes) {
            throw new AppError('Nenhum paciente foi encontrado !')
        }

        await Repository.remove(pacientes)

    }
}

export default DeleteMedicoService;