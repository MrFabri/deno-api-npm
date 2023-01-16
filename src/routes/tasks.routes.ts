import { Router } from 'npm:express';
import { getTasks, getTask, createTask, updateTask, deleteTask } from "../controllers/tasks.controller.ts";

const router = Router();

router.get('/tasks', getTasks);
router.get('/task/:id', getTask);
router.post('/task', createTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

export default router;