import { InferType } from "yup";
import { taskSchema } from "./task.yup";
import { prisma } from "../..";
import SmartError from "../../utils/SmartError";
import { BAD_REQUEST } from "http-status-codes";

export const createTaskService = async (payload: InferType<typeof taskSchema>) => {
    const result = await prisma.$transaction(async (tx) => {
        const task = await tx.task.findFirst({
            where: {
                link: payload.link
            }
        });

        if (task) {
            throw new SmartError("A task already exists for the provided link.", BAD_REQUEST);
        }

        const newlyCreatedTask = await tx.task.create({
            data: payload
        });

        return newlyCreatedTask;
    });

    return result;
}

export const getTaskService = async () => {
    const result = await prisma.task.findMany({});

    return result;
}