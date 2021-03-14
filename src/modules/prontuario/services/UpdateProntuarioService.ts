import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Prontuario from "../typeorm/entities/Prontuario";
import { ProntuarioRepository } from "../typeorm/repositories/ProntuarioRepository";

interface IRequest {
    cod_prontuario: any;
    cod_paciente: any;
  
}

class UpdateProntuarioService {

    public async execute({ cod_prontuario, cod_paciente }: IRequest): Promise<Prontuario |AppError | undefined> {

        
            return  new AppError('Esse prontuário não pode ser trocado de paciente', 200)
       

    }
}

export default UpdateProntuarioService;