import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStudentsTable1628895140811 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'students',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'cpf',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('students')
    }

}
