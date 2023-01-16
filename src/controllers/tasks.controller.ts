import { Request, Response } from "npm:express";
import Task from "../models/task.model.ts";

export const getTasks = async (_req: Request, res: Response) => {
    const tasks = await Task.find();
    return res.json(tasks);
}

export const createTask = async (req: Request, res: Response) => {
    const newTask = await Task.create(req.body);
    return res.json(newTask);
}

export const getTask = async (req: Request, res: Response) => {
    const task = await Task.findById(req.params.id);
    return res.json(task);
}

export const deleteTask = async (req: Request, res: Response) => {
    await Task.findByIdAndDelete(req.params.id);
    return res.json({
        "Task": "Deleted successfully!"
    });
}

export const updateTask = async (req: Request, res: Response) => {
    const taskUpdate = await Task.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {
            new: true
        }
    );
    
    return res.json(taskUpdate);
}