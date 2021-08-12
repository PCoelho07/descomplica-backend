import 'module-alias/register'
import express from 'express'
import setupApolloServer from '@/main/config/apollo-server'

const app = express()

setupApolloServer(app)

app.listen(3000, () => {
    console.log('Server running at: http://localhost:3000')
})