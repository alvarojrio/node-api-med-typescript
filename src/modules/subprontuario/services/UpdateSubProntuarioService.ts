import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import SubProntuario from "../typeorm/entities/SubProntuario";
import { SubProntuarioRepository } from "../typeorm/repositories/SubProntuarioRepository";

interface IRequest {
    cod_subprontuario: any;
    cod_consulta: any;
  
}

class UpdateSubProntuarioService {

    public async execute({ cod_subprontuario, cod_consulta }: IRequest): Promise<SubProntuario> {

        const Repository = getCustomRepository(SubProntuarioRepository)

        const SubProntuarios = await Repository.findOne(cod_subprontuario);

        if (!SubProntuarios) {
            throw new AppError('Nenhum paciente foi encontrado !')
        }

        const SubProntuarioExist = await Repository.findById(cod_consulta);

        if (SubProntuarioExist) {
            throw new AppError('Paciente já existe no banco de dados', 422)
        }

        SubProntuarios.cod_consulta = cod_consulta;
 
        await Repository.save(SubProntuarios)

        return SubProntuarios

    }
}

export default UpdateSubProntuarioService;