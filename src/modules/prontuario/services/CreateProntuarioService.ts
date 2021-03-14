import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Prontuario from "../typeorm/entities/Prontuario";
import { ProntuarioRepository } from "../typeorm/repositories/ProntuarioRepository";

interface IRequest {
    cod_paciente: number;
}
class CreateProntuarioService {


    public async execute({ cod_paciente }: IRequest): Promise<Prontuario> {

        const Repository = getCustomRepository(ProntuarioRepository)

        const ProntuarioExist = await Repository.findById(cod_paciente);

        if (ProntuarioExist) {
            throw new AppError('Prontuario já existe no banco de dados', 422)
        }

        const Prontuario = Repository.create({cod_paciente})

        await Repository.save(Prontuario);

        return Prontuario

    }
}

export default CreateProntuarioService;