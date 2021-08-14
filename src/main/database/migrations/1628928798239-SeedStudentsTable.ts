import {getRepository, MigrationInterface, QueryRunner} from "typeorm";

export class SeedStudentsTable1628928798239 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const studentsSeed = [
            {
                id: 1,
                name: 'Capitão américa',
                cpf: '77517724096',
                email: 'usa@hotmail.com'
            },
            {
                id: 2,
                name: 'Homem de ferro',
                cpf: '08417577041',
                email: 'stark@hotmail.com'
            },
            {
                id: 3,
                name: 'Roddy St. James',
                cpf: '10523461038',
                email: 'roddy@hotmail.com'
            },
        ]

        await getRepository('students').save(studentsSeed)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
