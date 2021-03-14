import { getCustomRepository } from "typeorm";
import Paciente from "../typeorm/entities/SubProntuario";
import { SubProntuarioRepository } from "../typeorm/repositories/SubProntuarioRepository";

class ListSubProntuarioRepository {

    public async execute(): Promise<Paciente[]> {

        const Repository = getCustomRepository(SubProntuarioRepository)
        
        const Prontuarios = await Repository.find();
        
        return Prontuarios

    }
}

export default ListSubProntuarioRepository;