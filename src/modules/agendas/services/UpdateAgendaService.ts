import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Agenda from "../typeorm/entities/Agenda";
import { AgendaRepository } from "../typeorm/repositories/AgendaRepository";

interface IRequest {
    cod_agenda: any;
    cod_medico: number;
    data_agenda: Date;
    especialidade: string;
    tempo_medio_atendimento: string;
  
}

class UpdateAgendaService {

    public async execute({ cod_agenda, cod_medico, data_agenda, especialidade, tempo_medio_atendimento }: IRequest): Promise<Agenda> {

        const Repository = getCustomRepository(AgendaRepository)
        
        const Agendas = await Repository.findOne(cod_agenda);

        if (!Agendas) {
            throw new AppError('Nenhum Agenda foi encontrado !')
        }

        const AgendaExist = await Repository.findById(cod_agenda);

        if (AgendaExist) {
            throw new AppError('Agenda já existe no banco de dados', 422)
        }
        
        Agendas.cod_medico = cod_medico;
        Agendas.data_agenda = data_agenda;
        Agendas.especialidade = especialidade;
        Agendas.tempo_medio_atendimento = tempo_medio_atendimento; 
 
        await Repository.save(Agendas)

        return Agendas

    }
}

export default UpdateAgendaService;