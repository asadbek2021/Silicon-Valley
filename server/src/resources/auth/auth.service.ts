import bcrypt from 'bcrypt';
import  Jwt  from 'jsonwebtoken';
import User from '../users/users.model';
import {Request, Response} from 'express'
import IUser from './../users/user';
import config from '../../config/config';



export async function login(req:Request, res:Response) {
   try{
    const credentials = req.body as IUser;
    const {email, password} = credentials;
    const user = await User.findOne({email});
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
     return  res.status(401).send({message:'Invalid Credentials'})
    }
    const payload = {
        id: user.id,
    };
    const token = await Jwt.sign(
        payload,
        config.JWT_SECRET,
        {expiresIn: config.JWT_EXPIRES_IN}
    );
    res.send({ expiresIn: config.JWT_EXPIRES_IN, token });
   }
   catch(err){
       console.error(err);
   }
}

export async function register(req:Request, res:Response) {
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



