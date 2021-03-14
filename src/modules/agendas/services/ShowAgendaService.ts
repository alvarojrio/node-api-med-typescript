import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Agenda from "../typeorm/entities/Agenda";
import { AgendaRepository } from "../typeorm/repositories/AgendaRepository";

interface IRequest {
    cod_agenda: any;
}
class ShowAgendaService {

    public async execute({ cod_agenda }: IRequest): Promise<Agenda> {

        const Repository = getCustomRepository(AgendaRepository)

        const Agenda = await Repository.findOne(cod_agenda);

        if (!Agenda) {
            throw new AppError('Nenhum paciente foi encontrado !')
        }


        return Agenda

    }
}

export default ShowAgendaService;