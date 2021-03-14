import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Paciente from "../typeorm/entities/Consulta";
import { ConsultaRepository } from "../typeorm/repositories/ConsultaRepository";

interface IRequest {
    cod_consulta: any;
}
class ShowConsultaService {

    public async execute({ cod_consulta }: IRequest): Promise<Paciente> {

        const Repository = getCustomRepository(ConsultaRepository)

        const pacientes = await Repository.findOne(cod_consulta);

        if (!pacientes) {
            throw new AppError('Nenhum paciente foi encontrado !')
        }


        return pacientes

    }
}

export default ShowConsultaService;