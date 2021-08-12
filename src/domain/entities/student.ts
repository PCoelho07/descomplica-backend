import { Cpf } from "@/domain/value-objects/cpf"
import { Email } from "@/domain/value-objects/email"

type StudentProps = {
    name: string
    cpf: string
    email: string
}

export class Student {
    protected name: string
    protected cpf: Cpf
    protected email: Email

    private constructor(name: string, cpf: Cpf, email: Email) {
        this.name = name
        this.cpf = cpf
        this.email = email
    }

    public static create(props: StudentProps): Student {
        return new Student(props.name, new Cpf(props.cpf), new Email(props.email))
    }
}