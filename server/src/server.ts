import 'dotenv/config'
import jwt from '@fastify/jwt'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import { authRoutes } from './routes/auth'
import multipart from '@fastify/multipart'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'path'
const app = fastify()

app.register(multipart)
app.register(cors, { origin: true }) // todas urls de front-end podem acessar nosso back=end

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(uploadRoutes)
app.register(memoriesRoutes)
app.register(authRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('❤❤ HTTP Server running on http://localhost:3333')
  })
