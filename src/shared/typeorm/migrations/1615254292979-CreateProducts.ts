import {MigrationInterface, QueryRunner, Table, Tree} from "typeorm";

export class CreateProducts1615254292979 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'produtos',
            columns:[
                {
                    name:'id',
                    type:'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name:'produto_nome',
                    type:'varchar',
                    
                },
                {
                    name:'quantidade',
                    type:'int',
                    
                },{
                    name:'createda_at',
                    type:'timestamp',
                    default: 'now()',
                    
                },{
                    name:'updated_at',
                    type:'timestamp',
                    default: 'now()',
                    
                },
            ],
          })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.dropTable('produtos')
    }


}
