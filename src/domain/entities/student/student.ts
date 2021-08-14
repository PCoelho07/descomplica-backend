import { StudentProps } from "@/domain/types/student-props"
import { Cpf } from "@/domain/value-objects/cpf"
import { Email } from "@/domain/value-objects/email"

export class Student {
    protected name: string
    protected cpf: string
    protected email: string

    private constructor(name: string, cpf: Cpf, email: Email) {
        this.name = name
        this.cpf = cpf.toString()
        this.email = email.toString()
    }

    public static create(props: StudentProps): Student {
        return new Student(props.name, new Cpf(props.cpf), new Email(props.email))
    }

    getName(): string {
        return this.name
    }

    getCpf(): string {
        return this.cpf.toString()
    }

    getEmail(): string {
        return this.email.toString()
    }
}