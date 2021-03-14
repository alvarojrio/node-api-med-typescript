import { getCustomRepository } from "typeorm";
import Paciente from "../typeorm/entities/Consulta";
import { ConsultaRepository } from "../typeorm/repositories/ConsultaRepository";

class ListConsultaRepository {

    public async execute(): Promise<Paciente[]> {

        const Repository = getCustomRepository(ConsultaRepository)
        
        const Consultas = await Repository.find();
        
        return Consultas

    }
}

export default ListConsultaRepository;