import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
//modelo já esta aqui
import { ConsultaRepository } from "../typeorm/repositories/ConsultaRepository";


interface IRequest {
    cod_Consulta: any;
}
class DeleteConsultaService {

    public async execute({ cod_Consulta }: IRequest): Promise<void> {

        const Repository = getCustomRepository(ConsultaRepository)

        const pacientes = await Repository.findOne(cod_Consulta);

        if (!pacientes) {
            throw new AppError('Nenhum paciente foi encontrado !')
        }

        await Repository.remove(pacientes)

    }
}

export default DeleteConsultaService;