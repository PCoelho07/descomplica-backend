import { Student } from "@/domain/entities/student";
import { StudentFilters } from "../types/student-filters";

export interface StudentRepository {
    all(): Promise<Student[]>
    findBy(filters: StudentFilters): Promise<Student[]>
}