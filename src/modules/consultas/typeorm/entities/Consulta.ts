import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('consultas')

class Consulta {

    @PrimaryGeneratedColumn('increment')
    cod_consulta: number;

    @Column()
    cod_paciente: number;

    @Column()
    cod_agenda: number;

    @Column({ type: 'timestamp' })
    data_consulta: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Consulta;