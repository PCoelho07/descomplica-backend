import { Student } from "@/domain/entities/student/student";
import { StudentRepository } from "@/data/repositories/student-repository";
import { StudentFilters } from "@/domain/types/student-filters";
import { ListAllStudents as ListAllStudentsInterface } from "@/domain/usecases/list-all-students";

export class ListAllStudents implements ListAllStudentsInterface {

    public constructor(private readonly studentRepository: StudentRepository) { }

    public async list(filterBy: StudentFilters): Promise<Student[]> {
        let students: Student[] = []
        const emptyFilters: boolean = Object.values(filterBy).every(key => key === '' || key === undefined)

        if (emptyFilters) {
            students = await this.studentRepository.all()
            return students
        }

        students = await this.studentRepository.findBy(filterBy)

        return students
    }
}