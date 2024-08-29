import fastify from 'fastify';
import { postsRoutes } from './routes/posts.js';

const app = fastify({
    logger: {
        transport: {
            target:'pino-pretty'
        }
    }
});

// app.log.error('Deu ruim aqui')

// app.get('/', (request, reply) => {
//     // app.log.info(request) //informa informações que estão denteo do header

//     return reply.status(200).send({ message: 'Hello fastify' })
// });

app.register(postsRoutes)

app.listen({
    host: '0.0.0.0',
    port:4000
})