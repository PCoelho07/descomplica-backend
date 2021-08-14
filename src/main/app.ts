import 'module-alias/register'
import 'reflect-metadata'

import express from 'express'
import setupApolloServer from '@/main/config/apollo-server'
import './database/connect'

const app = express()

setupApolloServer(app)

app.listen(3000, () => {
    console.log('Server running at: http://localhost:3000')
})