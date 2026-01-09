import { number, object } from "yup";

export const verifyTaskSchema = object({
    taskId: number().required()
});