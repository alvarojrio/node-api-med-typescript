import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Consulta from "../typeorm/entities/Consulta";
import { ConsultaRepository } from "../typeorm/repositories/ConsultaRepository";
import ShowAgendaService from "../../agendas/services/ShowAgendaService";

interface IRequest {
    cod_consulta: any;
    cod_agenda: number;
    cod_paciente: any;
    data_consulta: any;
    tempo_medio: Date;

}

class UpdateConsultaService {

    public async execute({ cod_consulta, cod_paciente, cod_agenda, data_consulta }: IRequest): Promise<Consulta | AppError | undefined> {

        const Repository = getCustomRepository(ConsultaRepository)

        const Consultas = await Repository.findOne(cod_consulta);

        if (!Consultas) {
            throw new AppError('Nenhum consulta  foi encontrado !')
        }

        const tempomedio = new ShowAgendaService();
        const agenda = await tempomedio.execute(cod_agenda);

        if (!agenda) {
            return new AppError('Esta agenda não existe', 422)
        }

        let tempo_medio = agenda.tempo_medio_atendimento

        const ConsultaExist = await Repository.availableAvailability(data_consulta, tempo_medio);


        if (ConsultaExist) {

            return new AppError('Neste horário o médico já tem paciênte agendado, por favor coloque outro horário, tempo médio entre as consultas é de :' + tempo_medio, 422)
        }


        Consultas.cod_paciente = cod_paciente;
        Consultas.cod_agenda = cod_agenda;
        Consultas.data_consulta = data_consulta;

        await Repository.save(Consultas)

        return Consultas

    }
}

export default UpdateConsultaService;