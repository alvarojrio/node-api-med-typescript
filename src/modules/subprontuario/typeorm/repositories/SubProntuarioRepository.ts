import { EntityRepository, Repository } from 'typeorm'

import Prontuario from '../entities/SubProntuario';

@EntityRepository(Prontuario)

export class SubProntuarioRepository extends Repository<Prontuario> {

    public async findById(cod_consulta: number): Promise<Prontuario|undefined> {
        const Prontuario = await this.findOne({
            where:{
                cod_consulta,
            }
        });

        return Prontuario;
    }


}