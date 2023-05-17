import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'

const app = fastify()

app.register(cors, { origin: true }) // todas urls de front-end podem acessar nosso back=end

app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('❤❤ HTTP Server running on http://localhost:3333')
  })
