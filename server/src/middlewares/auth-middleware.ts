import passport from 'jsonwebtoken';
import {FastifyRequest, FastifyReply} from 'fastify'


async function auth(req: FastifyRequest, res:FastifyReply, next:()=>void) {
    if(req.headers.authorization){
       try{
        const authToken = req.headers.authorization.split(' ') as [string, string];
        const token = authToken[1];
        const decoded = await passport.verify(token, 'secret');
        req.user = decoded;
        next()
       }
       catch(err){
           console.error(err);
       }
    }
}

export default auth;