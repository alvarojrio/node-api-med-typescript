import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Paciente from "../typeorm/entities/Paciente";
import { PacienteRepository } from "../typeorm/repositories/PacientesRepository";

interface IRequest {
    nome: string;
    telefone: string;
    cpf: string;
    email: string;
    data_nascimento: string;
    sexo: number;
    altura: number;
    peso: number;
}
class CreatePacienteService {


    public async execute({ nome, telefone, cpf, email, data_nascimento, sexo, altura, peso }: IRequest): Promise<Paciente> {

        const PacieteRepository = getCustomRepository(PacienteRepository)

        const pacienteExist = await PacieteRepository.findById(cpf);

        if (pacienteExist) {
            throw new AppError('Paciente já existe no banco de dados', 422)
        }

        const paciente = PacieteRepository.create({
            nome, telefone, cpf, email, data_nascimento, sexo, altura, peso,
        })

        await PacieteRepository.save(paciente);

        return paciente

    }
}

export default CreatePacienteService;