import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';
import { login, register } from './auth.service';


async function authRouter(fastify:FastifyInstance) {
    fastify.post('/auth/login', login)
    fastify.post('/auth/register', register)
}

export default fp(authRouter)