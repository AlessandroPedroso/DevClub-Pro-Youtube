import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';//protege segurança no header
import compression from 'compression';

const app = express();
app.use(json());
app.use(cors({
    origin: ['https://meudominio.com.br', 'https://meudominio2.com.br'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(helmet());
app.use(compression({level:1}));

app.get('/', (req, res) => {
    return res.status(200).json(new Array(100000).fill({name:'Alessandro', age:'29'}));
});

app.listen(3333, () => console.log('App is running at port 3333'));








