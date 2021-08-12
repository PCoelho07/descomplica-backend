import { Student } from "@/domain/entities/student/student"
import { StudentRepository } from "@/domain/repositories/student-repository"
import { StudentFilters } from "@/domain/types/student-filters"
import { ListAllStudents } from "@/data/usecases/list-all-students"
import { ListAllStudents as ListAllStudentsInterface } from "@/domain/usecases/list-all-students"

class LocalStudentRepository implements StudentRepository {
    protected students: Student[]

    constructor(initialStudentList: Student[]) {
        this.students = initialStudentList
    }

    public all(): Promise<Student[]> {
        return new Promise((resolve, reject) => {
            resolve(this.students)
        })
    }

    public findBy(filters: StudentFilters): Promise<Student[]> {
        return new Promise((resolve, reject) => {
            const result: Student[] = this.students.filter(student => {
                return student.getName() === filters.name||
                    student.getEmail() === filters.email ||
                    student.getCpf() === filters.cpf
            })

            resolve(result)
        })
    }
}


describe('List students', () => {
    const studentA = Student.create({
        name: 'test-a',
        email: 'test-a@hotmail.com',
        cpf: '10408291479'
    })

    const studentB = Student.create({
        name: 'test-b',
        email: 'test-b@hotmail.com',
        cpf: '10408291478'
    })

    const initialList = [
        studentA,
        studentB
    ]

    const repository: StudentRepository = new LocalStudentRepository(initialList)
    const sutUseCase: ListAllStudentsInterface = new ListAllStudents(repository)

    it('without filters', async () => {
        const result = await sutUseCase.list({})

        expect(result).toEqual(initialList)
    })

    it('with name filter', async () => {
        const result = await sutUseCase.list({
            name: 'test-a'
        })

        expect(result).toEqual([studentA])
    })

    it('with email filter', async () => {
        const result = await sutUseCase.list({
            email: 'test-b@hotmail.com'
        })

        expect(result).toEqual([studentB])
    })

    it('with cpf filter', async () => {
        const result = await sutUseCase.list({
            cpf: '10408291479'
        })

        expect(result).toEqual([studentA])
    })
})