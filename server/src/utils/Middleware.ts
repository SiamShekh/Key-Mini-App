import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "..";
import { CatchAsync } from "./Utilite";

export const UserVaildation: RequestHandler = CatchAsync(async (req, res, next) => {
    const token = req?.cookies?.auth;

    if (!token) {
        throw new Error("headers not found.");
    }

    const verify: any = jwt.verify(token, process.env.SECRET as string);
    if (verify?.tgId && verify?.id) {
        const user = await prisma.user.findUniqueOrThrow({
            where: {
                id: verify?.id
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

