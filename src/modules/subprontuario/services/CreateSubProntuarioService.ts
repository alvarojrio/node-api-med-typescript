import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Prontuario from "../typeorm/entities/SubProntuario";
import { SubProntuarioRepository } from "../typeorm/repositories/SubProntuarioRepository";

interface IRequest {
    cod_prontuario: number;
    cod_consulta: number;
    descricao: string;
    
}
class CreateProntuarioService {


    public async execute({ cod_prontuario, cod_consulta, descricao }: IRequest): Promise<Prontuario | AppError | undefined> {

        const Repository = getCustomRepository(SubProntuarioRepository)

        const ProntuarioExist = await Repository.findById(cod_consulta);

        if (ProntuarioExist) {
             return new AppError('Prontuario já existe no banco de dados');
        }

        const Prontuario = Repository.create({cod_prontuario, cod_consulta, descricao})

        await Repository.save(Prontuario);

        return Prontuario;

    }
}

export default CreateProntuarioService;