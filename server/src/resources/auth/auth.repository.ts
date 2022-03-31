import { VerifiedCallback } from 'passport-jwt';
import User from '../users/users.model';



export async function getUserByEmail(email: string) {
    const user = await User.find({ email });
    return user[0];
  }

  export async function jwtCallback(jwtPayload:any, done:VerifiedCallback) {
    const user = await getUserByEmail(jwtPayload.email);
    return done(null, user || false);
  }