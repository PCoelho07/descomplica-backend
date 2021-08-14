import { Student } from "@/domain/entities/student/student"
import { StudentProps } from "@/domain/types/student-props"

export class StudentModel {
    protected id: number
    protected name: string
    protected email: string
    protected cpf: string

    public static map(data: StudentProps): Student {
        return Student.create({
            name: data.name,
            email: data.email,
            cpf: data.cpf
        })
    }

    public static mapCollection(data: StudentProps[]): Student[] {
        return data.map((item: StudentProps) => StudentModel.map(item))
    }
}