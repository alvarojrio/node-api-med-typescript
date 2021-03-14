import { getCustomRepository } from "typeorm";
import Paciente from "../typeorm/entities/Paciente";
import { PacienteRepository } from "../typeorm/repositories/PacientesRepository";

class ListPacienteService {

    public async execute(): Promise<Paciente[]> {

        const PacieteRepository = getCustomRepository(PacienteRepository)
        const pacientes = await PacieteRepository.find();
        
        return pacientes

    }
}

export default ListPacienteService;