import { StudentRepository } from "@/data/repositories/student-repository"
import { ListAllStudents } from "@/data/usecases/list-all-students"
import { StudentFilters } from "@/domain/types/student-filters"
import { DatabaseStudentRepository } from "@/infrastructure/repositories/mysql/DatabaseStudentRepository"

export default {
    Query: {
        students: async (parent: any, args: any, context: any, info: any) => {

            const filters: StudentFilters = {
                name: args.name || '',
                cpf: args.cpf || '',
                email: args.email || ''
            }

            const repository: StudentRepository = new DatabaseStudentRepository()
            const loadStudents = new ListAllStudents(repository)

            const result = await loadStudents.list(filters)
            return result
        }
    }
}