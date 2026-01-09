import { CatchAsync, SuccessMessage } from "../../utils/Utilite";
import { createTaskService, getTaskService } from "./task.service";

const createTaskController = CatchAsync(async (req, res) => {
    const result = await createTaskService(req.payload);
    res.send(SuccessMessage("Task is successfully created", result, 200));
});

const getTaskController = CatchAsync(async(req, res)=> {
    const result = await getTaskService();

    res.send(SuccessMessage("Task retrive", result, 200));
});

const task = {
    createTaskController,
    getTaskController
}

export default task;