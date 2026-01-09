import { Router } from "express";
import task from "../module/task/task.controller";
import { YupVaildationMiddleware } from "../utils/Middleware";
import { taskSchema } from "../module/task/task.yup";

const TaskRouter = Router();

TaskRouter.post("/create-task", YupVaildationMiddleware(taskSchema), task.createTaskController);
TaskRouter.get("/get-task", task.getTaskController);

export default TaskRouter;