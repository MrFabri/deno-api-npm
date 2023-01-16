import express from 'npm:express';
import { Request, Response } from "npm:express";
import taskRoutes from './routes/tasks.routes.ts';
import './db.ts';

const app = express();

app.use(express.json());
app.use(taskRoutes);
app.get('/', (_req: Request, res: Response) => {
    res.send('Hello world');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});