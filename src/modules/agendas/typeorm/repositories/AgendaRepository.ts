import { EntityRepository, Repository } from 'typeorm'

import Agenda from '../entities/Agenda';

@EntityRepository(Agenda)

export class AgendaRepository extends Repository<Agenda> {

    public async findById(cod_medico: number): Promise<Agenda|undefined> {
        const Agenda = await this.findOne({
            where:{
                cod_medico,
            }
        });

        return Agenda;
    }


}