import fastify from './app';
import config from './config/config';



fastify.get('/', async(request, reply) => {
      reply.send({ hello: 'world' })
  })

async function start() {
  await fastify.listen(config.PORT, (err, address) => {
        if (err) {
          fastify.log.error(err)
            process.exit(1)
        }
        fastify.log.info(`server listening on ${address}`)
  })
}

start();