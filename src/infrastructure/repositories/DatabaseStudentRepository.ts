import { Student } from "@/domain/entities/student/student";
import { StudentRepository } from "@/data/repositories/student-repository";
import { StudentFilters } from "@/domain/types/student-filters";
import studentsData from '@/data-source/students'

type StudentData = {
    id: number
    name: string
    email: string
    cpf: string
}

export class DatabaseStudentRepository implements StudentRepository {

    protected students: StudentData[]

    constructor() {
        this.students = studentsData
    }

    public all(): Promise<Student[]> {
        return new Promise((resolve, reject) => {
            resolve(this.students.map(student => Student.create({
                name: student.name,
                cpf: student.cpf,
                email: student.email
            })))
        })
    }

    public findBy(filters: StudentFilters): Promise<Student[]> {
        return new Promise((resolve, reject) => {

            const result = this.students.filter(student => student.name === filters.name || student.email === filters.email || student.cpf === filters.cpf)

            if (result.length === 0) resolve([])

            resolve(result.map(student => Student.create({
                name: student.name,
                cpf: student.cpf,
                email: student.email
            })))
        })
    }
}