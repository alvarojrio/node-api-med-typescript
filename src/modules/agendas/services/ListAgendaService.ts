import { getCustomRepository } from "typeorm";
import Paciente from "../typeorm/entities/Agenda";
import { AgendaRepository } from "../typeorm/repositories/AgendaRepository";

class ListAgendaRepository {

    public async execute(): Promise<Paciente[]> {

        const Repository = getCustomRepository(AgendaRepository)
        
        const Agendas = await Repository.find();
        
        return Agendas

    }
}

export default ListAgendaRepository;