import { Express } from 'express'
import { ApolloServer } from 'apollo-server-express'

import studentsResolver from '@/main/graphql/resolvers/students'
import studentsTypeDef from '@/main/graphql/type-defs/students'

const setupApolloServer = async (app: Express): Promise<void> => {
    const resolvers = [
        studentsResolver
    ]

    const typeDefs = [
        studentsTypeDef
    ]

    const apolloServer = new ApolloServer({
        resolvers,
        typeDefs
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({ app })
}

export default setupApolloServer