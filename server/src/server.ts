import app from './app';
import config from './config/config';



app.get('/', async(request, reply) => {
      reply.send({ hello: 'world' })
  })

async function start() {
  try{
    await app.listen(config.PORT, () => {
      console.log(`server listening on ${config.PORT}`)
    })
  }
   catch(err){
      console.error(err);
      process.exit(1);
   }
}

start();