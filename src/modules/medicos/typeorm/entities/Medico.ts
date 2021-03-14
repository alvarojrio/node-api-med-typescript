import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('medicos')

class Medicos {

    @PrimaryGeneratedColumn('increment')
    cod_medico: number;

    @Column()
    nome: string;
    
    @Column()
    cpf: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Medicos;