import { prisma } from "..";
import { CatchAsync } from "../utils/Utilite";
import { isValid, parse } from '@telegram-apps/init-data-node';
import jwt from "jsonwebtoken";

const create_user = CatchAsync(async (req, res) => {
    const { key } = req?.body;
    if (!key) {
        throw new Error("init key is not found");
    }

    if (!isValid(key, process.env.BOT_TOKEN as string)) {
        throw new Error("Unknown traffic");
    }

    const parseValue = parse(key);

    const tx = await prisma.$transaction(async (tx) => {
        const user = await prisma.user.findFirst({
            where: {
                tgId: String(parseValue?.user?.id)
            }
        });

        if (user) {
            return user;
        }


        const val = await prisma.user.create({
            data: {
                name: parseValue?.user?.first_name + " " + parseValue?.user?.last_name,
                tgId: String(parseValue?.user?.id),
                username: parseValue?.user?.username,
                referCode: String(parseValue?.user?.id),
                referBy: "0",
                balance: Math.floor(Math.random() * 400),
            }
        });

        return val;
    });

    const token = jwt.sign(tx, process.env.SECRET as string);

    res.cookie("auth", token, {
        httpOnly: true,
        secure: true,
        maxAge: 1000 * 60 * 60 * 15,
        sameSite: "none",
    }).send({ status: true, isIntro: tx.isIntroShowed });
});

const getUser = CatchAsync(async (req, res) => {
    const user = await prisma
        .user
        .findFirstOrThrow({
            where: {
                id: req?.user?.id
            },
            select: {
                name: true,
                balance: true,
                isBlock: true,
                isDelete: true,
                isIntroShowed: true
            }
        });

    res.status(200).send(user)
});

const introShowed = CatchAsync(async (req, res) => {
    const result = await prisma.user.update({
        where: {
            id: req.user.id
        },
        data: {
            isIntroShowed: true
        }
    });

    res.status(200).json({
        status: result?.isIntroShowed
    });
})

const user = {
    create_user,
    getUser,
    introShowed
}

export default user;