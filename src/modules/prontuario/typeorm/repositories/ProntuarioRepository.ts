import { EntityRepository, Repository } from 'typeorm'

import Prontuario from '../entities/Prontuario';

@EntityRepository(Prontuario)

export class ProntuarioRepository extends Repository<Prontuario> {

    public async findById(cod_paciente: number): Promise<Prontuario|undefined> {
        const Prontuario = await this.findOne({
            where:{
                cod_paciente,
            }
        });

        return Prontuario;
    }


}