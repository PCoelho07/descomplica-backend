import { Student } from "@/domain/entities/student/student";
import { StudentFilters } from "@/domain/types/student-filters";

import { StudentRepository } from "@/data/repositories/student-repository";
import { StudentModel } from "@/data/models/student";

import { getRepository, Like } from 'typeorm'
import { Student as StudentORM } from '@/infrastructure/repositories/mysql/models/student'

type StudentData = {
    id: number
    name: string
    email: string
    cpf: string
}

export class DatabaseStudentRepository implements StudentRepository {

    public async all(): Promise<Student[]> {
        const repository = getRepository(StudentORM)
        const students: StudentData[] = await repository.find()

        return StudentModel.mapCollection(students)
    }

    public async findBy(filters: StudentFilters): Promise<Student[]> {

        let whereCriteria = []

        if (!!filters.name) {
            whereCriteria.push({
                name: Like(`%${filters.name}%`)
            })
        }

        if (!!filters.cpf) {
            whereCriteria.push({
                cpf: Like(`%${filters.cpf}%`)
            })
        }

        if (!!filters.email) {
            whereCriteria.push({
                email: Like(`%${filters.email}%`)
            })
        }

        const repository = getRepository(StudentORM)
        const students: StudentData[] = await repository.find({
            where: whereCriteria
        })

        return StudentModel.mapCollection(students)
    }
}