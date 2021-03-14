import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Consulta from "../typeorm/entities/Consulta";
import { ConsultaRepository } from "../typeorm/repositories/ConsultaRepository";
import ShowAgendaService   from "../../agendas/services/ShowAgendaService";

interface IRequest {
    cod_paciente: any;
    cod_agenda: any;
    data_consulta: any;
    tempo_medio: Date;
}
class CreateConsultaService {


    public async execute({ cod_paciente, cod_agenda, data_consulta }: IRequest): Promise<Consulta | AppError | undefined> {
        
        const tempomedio     =  new ShowAgendaService();
        const agenda         = await  tempomedio.execute(cod_agenda);
        
        if(!agenda){
            return  new AppError('Esta agenda não existe', 422)
        }
       
        let tempo_medio = agenda.tempo_medio_atendimento

        const Repository = getCustomRepository(ConsultaRepository)
        

        const ConsultaExist = await Repository.availableAvailability(data_consulta,tempo_medio);


        if (ConsultaExist) {
        
            return  new AppError('Neste horário o médico já tem paciênte agendado, por favor coloque outro horário, tempo médio entre as consultas é de :'+ tempo_medio, 422)
        }
        
        const Consulta = Repository.create({ 
            cod_paciente, 
            cod_agenda,
            data_consulta 
        });
        
        await Repository.save(Consulta);
        
        return Consulta

    }
}

export default CreateConsultaService;