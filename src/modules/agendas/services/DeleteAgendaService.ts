import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
//modelo já esta aqui
import { AgendaRepository } from "../typeorm/repositories/AgendaRepository";


interface IRequest {
    cod_agenda: any;
}
class DeleteAgendaService {

    public async execute({ cod_agenda }: IRequest): Promise<void> {

        const Repository = getCustomRepository(AgendaRepository)

        const pacientes = await Repository.findOne(cod_agenda);

        if (!pacientes) {
            throw new AppError('Nenhum paciente foi encontrado !')
        }

        await Repository.remove(pacientes)

    }
}

export default DeleteAgendaService;