import { getCustomRepository } from "typeorm";
import Paciente from "../typeorm/entities/Prontuario";
import { ProntuarioRepository } from "../typeorm/repositories/ProntuarioRepository";

class ListProntuarioRepository {

    public async execute(): Promise<Paciente[]> {

        const Repository = getCustomRepository(ProntuarioRepository)
        
        const Prontuarios = await Repository.find();
        
        return Prontuarios

    }
}

export default ListProntuarioRepository;