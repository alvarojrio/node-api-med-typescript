import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Agenda from "../typeorm/entities/Agenda";
import { AgendaRepository } from "../typeorm/repositories/AgendaRepository";

interface IRequest {
    cod_medico: number;
    data_agenda: Date;
    especialidade: string;
    tempo_medio_atendimento: string;
}
class CreateAgendaService {


    public async execute({ cod_medico, data_agenda, especialidade, tempo_medio_atendimento  }: IRequest): Promise<Agenda> {

        const Repository = getCustomRepository(AgendaRepository)

        const AgendaExist = await Repository.findById(cod_medico);

        if (AgendaExist) {
            throw new AppError('Agenda já existe no banco de dados', 422)
        }

        const Agenda = Repository.create({cod_medico, data_agenda, especialidade, tempo_medio_atendimento })

        await Repository.save(Agenda);

        return Agenda

    }
}

export default CreateAgendaService;