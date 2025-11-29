import { RequestHandler } from "express";
import { prisma } from "..";
import { CatchAsync } from "./Utilite";
import Config from "../config";
import { isValid, parse } from "@telegram-apps/init-data-node";

export const UserVaildation: RequestHandler = CatchAsync(async (req, res, next) => {
    const token = req?.headers?.authorization;

    if (!token) {
        throw new Error("headers not found.");
    }

    if (isValid(token, Config.bot_token as string)) {
        const user = await prisma.user.findUniqueOrThrow({
            where: {
                tgId: String(parse(token)?.user?.id)
            }
        });

        req.user = {
            id: user?.id,
            tgId: user?.tgId
        }

        if (user) next();
    } else {
        throw new Error("headers is invaild.");
    }
})

