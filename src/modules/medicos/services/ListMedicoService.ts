import { getCustomRepository } from "typeorm";
import Paciente from "../typeorm/entities/Medico";
import { MedicoRepository } from "../typeorm/repositories/MedicoRepository";

class ListMedicoRepository {

    public async execute(): Promise<Paciente[]> {

        const Repository = getCustomRepository(MedicoRepository)
        
        const medicos = await Repository.find();
        
        return medicos

    }
}

export default ListMedicoRepository;