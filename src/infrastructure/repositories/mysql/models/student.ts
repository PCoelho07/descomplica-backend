import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('students')
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    email: string;
}