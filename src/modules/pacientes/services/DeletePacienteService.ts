import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
//modelo já esta aqui
import { PacienteRepository } from "../typeorm/repositories/PacientesRepository";


interface IRequest {
    id: any;
}
class DeletePacienteService {

    public async execute({ id }: IRequest): Promise<void> {

        const PacieteRepository = getCustomRepository(PacienteRepository)

        const pacientes = await PacieteRepository.findOne(id);

        if (!pacientes) {
            throw new AppError('Nenhum paciente foi encontrado !')
        }

        await PacieteRepository.remove(pacientes)

    }
}

export default DeletePacienteService;