import bcrypt from 'bcrypt';
import User from '../users/users.model';
import {FastifyRequest, FastifyReply} from 'fastify'
import IUser from './../users/user';



export async function login(req:FastifyRequest, res:FastifyReply) {
   try{
    const credentials = req.body as IUser;
    const {email, password} = credentials;
    const user = await User.findOne({email});
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        res.status(401).send({message:'Invalid Credentials'})
    }
    res.send({auth: true, user: user.toJSON()});
   }
   catch(err){
       console.error(err);
   }
}

export async function register(req:FastifyRequest, res:FastifyReply) {
   try{
    const credentials = req.body as IUser;
    const {email, password, firstname, lastname} = credentials;
    const hasUser = await User.findOne({email});
    if(hasUser){
      return res.status(409).send({message:'User already exists'});
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
        email,
        password: hashedPassword,
        firstname,
        lastname
    });
    res.send({auth: true, user: newUser});
   } catch(err){
       console.error(err);
   }
}



