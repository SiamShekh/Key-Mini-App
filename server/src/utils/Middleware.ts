import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "..";
import { CatchAsync } from "./Utilite";

export const UserVaildation: RequestHandler = CatchAsync(async (req, res, next) => {
    const token = req?.headers?.authorization || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";

    jwt.verify(token, process.env.SECRET as string, async (err, decode: any) => {
        if (err) next(err);

        const user = await prisma.user.findUniqueOrThrow({
            where: {
                id: decode?.id
            }
        });

        req.user = {
            id: user?.id,
            tgId: user?.tgId
        }

        if (user) next();
    })
})

