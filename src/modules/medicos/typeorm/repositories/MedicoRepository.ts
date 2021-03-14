import { EntityRepository, Repository } from 'typeorm'

import Medico from '../entities/Medico';

@EntityRepository(Medico)

export class MedicoRepository extends Repository<Medico> {

    public async findById(cpf: string): Promise<Medico|undefined> {
        const Medico = await this.findOne({
            where:{
                cpf,
            }
        });

        return Medico;
    }


}