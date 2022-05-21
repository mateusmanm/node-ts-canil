import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

import mainRoutes from './routes/index';

dotenv.config();

const server = express();

// Mustache
server.set('view engine', 'views');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// Rotas
server.use(mainRoutes);
server.use((req: Request, res: Response) => {
    res.send('Página não encontrada');
});

// Pasta Publica
server.use(express.static(path.join(__dirname, '../public')));

// Up Server
server.listen(process.env.PORT);