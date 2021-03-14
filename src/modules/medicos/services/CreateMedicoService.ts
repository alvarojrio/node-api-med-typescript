import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Medico from "../typeorm/entities/Medico";
import { MedicoRepository } from "../typeorm/repositories/MedicoRepository";

interface IRequest {
    nome: string;
    cpf: string;
}
class CreateMedicoService {


    public async execute({ nome, cpf }: IRequest): Promise<Medico> {

        const Repository = getCustomRepository(MedicoRepository)

        const MedicoExist = await Repository.findById(cpf);

        if (MedicoExist) {
            // new AppError('There is already one product with this name');
        }

        const Medico =  await Repository.create({nome, cpf})

        await Repository.save(Medico);

        return Medico

    }
}

export default CreateMedicoService;