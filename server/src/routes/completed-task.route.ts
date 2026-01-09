import { Router } from "express";
import { YupVaildationMiddleware } from "../utils/Middleware";
import { verifyTaskSchema } from "../module/completed-task/completed-task.yup";
import completedTask from "../module/completed-task/completed-task.controller";

const CompletedTaskRoute = Router();

CompletedTaskRoute.post("/verify", YupVaildationMiddleware(verifyTaskSchema), completedTask.verifyTaskController);

export default CompletedTaskRoute;