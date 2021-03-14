import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('prontuario')

class Prontuario {

    @PrimaryGeneratedColumn('increment')
    cod_prontuario: number;

    @Column()
    cod_paciente: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Prontuario;