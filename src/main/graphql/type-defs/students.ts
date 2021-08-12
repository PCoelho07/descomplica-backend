import { gql } from 'apollo-server-express'

export default gql`
    type Query {
        students(name: String, cpf: String, email: String): [Student!]
    }

    type Student {
        name: String!
        email: String!
        cpf: String!
    }
`