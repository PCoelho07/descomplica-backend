import { Student } from "@/domain/entities/student";
import { StudentFilters } from "@/domain/types/student-filters";

export interface ListAllStudents {
    list(filterBy: StudentFilters): Promise<Student[]>
}