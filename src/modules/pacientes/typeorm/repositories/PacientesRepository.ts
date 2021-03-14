import { EntityRepository, Repository } from 'typeorm'

import Paciente from '../entities/Paciente';

@EntityRepository(Paciente)

export class PacienteRepository extends Repository<Paciente> {

    public async findById(cpf: string): Promise<Paciente|undefined> {
        const Paciente = await this.findOne({
            where:{
                cpf,
            }
        });

        return Paciente;
    }


}