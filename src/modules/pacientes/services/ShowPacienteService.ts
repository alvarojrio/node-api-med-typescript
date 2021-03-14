import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Paciente from "../typeorm/entities/Paciente";
import { PacienteRepository } from "../typeorm/repositories/PacientesRepository";

interface IRequest {
    id: any;
}
class ShowPacienteService {

    public async execute({ id }: IRequest): Promise<Paciente> {

        const PacieteRepository = getCustomRepository(PacienteRepository)

        const pacientes = await PacieteRepository.findOne(id);

        if (!pacientes) {
            throw new AppError('Nenhum paciente foi encontrado !')
        }


        return pacientes

    }
}

export default ShowPacienteService;