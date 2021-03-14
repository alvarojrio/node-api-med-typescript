import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('subprontuario')

class SubProntuario {

    @PrimaryGeneratedColumn('increment')
    cod_subprontuario: number;

    @Column()
    cod_prontuario: number;
   
    @Column()
    cod_consulta: number;
    
    @Column()
    descricao: string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default SubProntuario;