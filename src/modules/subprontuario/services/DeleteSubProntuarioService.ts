import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
//modelo já esta aqui
import { SubProntuarioRepository } from "../typeorm/repositories/SubProntuarioRepository";


interface IRequest {
    cod_subprontuario: any;
}
class DeleteSubProntuarioService {

    public async execute({ cod_subprontuario }: IRequest): Promise<void> {

        const Repository = getCustomRepository(SubProntuarioRepository)

        const pacientes = await Repository.findOne(cod_subprontuario);

        if (!pacientes) {
            throw new AppError('Nenhum paciente foi encontrado !')
        }

        await Repository.remove(pacientes)

    }
}

export default DeleteSubProntuarioService;