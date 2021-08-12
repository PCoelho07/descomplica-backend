import { Student } from "@/domain/entities/student/student";
import { StudentFilters } from "../../domain/types/student-filters";

export interface StudentRepository {
    all(): Promise<Student[]>
    findBy(filters: StudentFilters): Promise<Student[]>
}