import * as express from 'express'
import { ApolloServer } from 'apollo-server-express'
import * as depthLimit from 'graphql-depth-limit'
import { createServer } from 'http'
import * as compression from 'compression'
import * as cors from 'cors'
import schema from './schema'

const app = express()

const server = new ApolloServer({
  schema,
  validationRules: [ depthLimit(7) ]
})

app.use(cors())
app.use(compression())
server.applyMiddleware({ app, path: '/graphql' })

const httpServer = createServer(app)

httpServer.listen({ port: 3000 }, (): void => console.log('server started at port 3000 🚀')
)