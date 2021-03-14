import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Medico from "../typeorm/entities/Medico";
import { MedicoRepository } from "../typeorm/repositories/MedicoRepository";

interface IRequest {
    id: any;
    nome: string;
    cpf: string;
  
}

class UpdateMedicoService {

    public async execute({ id, nome, cpf }: IRequest): Promise<Medico> {

        const Repository = getCustomRepository(MedicoRepository)

        const medicos = await Repository.findOne(id);

        if (!medicos) {
            throw new AppError('Nenhum paciente foi encontrado !')
        }

        medicos.nome = nome;
        medicos.cpf = cpf;
 
        await Repository.save(medicos)

        return medicos

    }
}

export default UpdateMedicoService;