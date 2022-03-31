import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';
import auth  from '../../middlewares/passport';
import { getAllUsers } from './users.service';


const options ={
    beforeHandler: auth
}
async function userRouter(fastify:FastifyInstance, ) {
    fastify.get('/users',options, getAllUsers)
}

export default fp(userRouter)