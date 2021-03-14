import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Paciente from "../typeorm/entities/Paciente";
import { PacienteRepository } from "../typeorm/repositories/PacientesRepository";

interface IRequest {
    id: any;
    nome: string;
    telefone: string;
    cpf: string;
    email: string;
    data_nascimento: Date;
    sexo: number;
    altura: number;
    peso: number;
}

class UpdatePacienteService {

    public async execute({ id, nome, telefone, cpf, email, data_nascimento, sexo, altura, peso }: IRequest): Promise<Paciente> {

        const PacieteRepository = getCustomRepository(PacienteRepository)

        const pacientes = await PacieteRepository.findOne(id);

        if (!pacientes) {
            throw new AppError('Nenhum paciente foi encontrado !')
        }

        pacientes.nome = nome;
        pacientes.telefone = telefone;
        pacientes.cpf = cpf;
        pacientes.email = email;
        pacientes.data_nascimento = data_nascimento;
        pacientes.sexo = sexo;
        pacientes.altura = altura;
        pacientes.peso = peso;

        await PacieteRepository.save(pacientes)

        return pacientes

    }
}

export default UpdatePacienteService;