import { EntityRepository, Repository,Between } from 'typeorm'

import Consulta from '../entities/Consulta';

@EntityRepository(Consulta)

export class ConsultaRepository extends Repository<Consulta> {

    public async findById(cod_paciente: number): Promise<Consulta|undefined> {
        const Consulta = await this.findOne({
            where:{
                cod_paciente,
            }
        });

        return Consulta;
    }


    public async availableAvailability(data_comparar: Date, tempo_medio: Date): Promise<Consulta|undefined> {
       
        let today = new Date(data_comparar)
        let data2 = new Date(today.valueOf() - today.getTimezoneOffset() * 60000);
        var dataBase = data2.toISOString().replace(/\.\d{3}Z$/, '');
        
        //converte hora para minutos
        let f0 = tempo_medio.toString().split(":");
        let minutos =   ((Number(f0[0])*60)+Number(f0[1])) ;
        
        //add +  
        let new_date = data2.setMinutes ( data2.getMinutes() + minutos );
        let datenew = new Date(new_date); // Date object
        let convertedate = datenew.toISOString().replace(/\.\d{3}Z$/, '');

         const Consulta = await this.findOne({
            data_consulta: Between(dataBase, convertedate)
        }); 
        return Consulta;
    }


    


}