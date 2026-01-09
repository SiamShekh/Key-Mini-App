import { Router } from "express";
import UserRoute from "./user.route";
import TaskRouter from "./task.route";
import CompletedTaskRoute from "./completed-task.route";

const MainRoute = Router();

MainRoute.use("/user", UserRoute);
MainRoute.use("/task", TaskRouter);
MainRoute.use("/complete-task", CompletedTaskRoute)

export default MainRoute;