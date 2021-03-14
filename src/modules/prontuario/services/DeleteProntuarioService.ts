import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
//modelo já esta aqui
import { ProntuarioRepository } from "../typeorm/repositories/ProntuarioRepository";


interface IRequest {
    cod_prontuario: any;
}
class DeleteProntuarioService {

    public async execute({ cod_prontuario }: IRequest): Promise<void> {

        const Repository = getCustomRepository(ProntuarioRepository)

        const pacientes = await Repository.findOne(cod_prontuario);

        if (!pacientes) {
            throw new AppError('Nenhum paciente foi encontrado !')
        }

        await Repository.remove(pacientes)

    }
}

export default DeleteProntuarioService;