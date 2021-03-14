import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('pacientes')

class Paciente {

    @PrimaryGeneratedColumn('increment')
    cod_paciente: number;

    @Column()
    nome: string;

    @Column()
    telefone: string;
    
    @Column()
    cpf: string;
    
    @Column()
    email: string;

    @Column('date')
    data_nascimento: Date;

    @Column('int')
    sexo: number;

    @Column('float')
    altura: number;

    @Column('float')
    peso: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Paciente;