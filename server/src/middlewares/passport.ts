import passport from 'fastify-passport'

const auth = passport.authenticate('jwt', { session: false });

export default auth;