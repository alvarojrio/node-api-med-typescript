import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm';

@Entity('agenda')

class Agendas {

    @PrimaryGeneratedColumn('increment')
    cod_agenda: number;

    @Column('int')
    cod_medico: number;
        
    @Column()
    data_agenda: Date;
       
    @Column()
    especialidade: string;
   
    @Column('time', {name: 'tempo_medio_atendimento'})
    tempo_medio_atendimento: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Agendas;