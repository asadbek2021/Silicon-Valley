import Fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import passport from 'fastify-passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import dbConnect from './loader/db';
import authRoutes from './resources/auth/auth.routes';
import config from './config/config';
import {jwtCallback} from './resources/auth/auth.repository';

dbConnect()
const fastify = Fastify({
    logger: true
})

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWT_SECRET,
  };

fastify.register(fastifyCors)
fastify.register(passport.initialize())
passport.use(new Strategy(opts,jwtCallback))

fastify.register(authRoutes);

export default fastify;