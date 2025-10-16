import express from "express";
import { PrismaClient } from "../generated/prisma";
import cors from "cors";
import Utility from "./utils/Utilite";
import MainRoute from "./routes/main.route";
import cookieParser from "cookie-parser";

export const app = express();
export const prisma = new PrismaClient();

app.use(cors({
    origin: [`https://192.168.0.103:5173`, `https://192.168.56.1:5173`],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.get("/", Utility.CatchAsync(async (req, res) => {
    res.send({
        code: 200,
        msg: "Server is runing",
        data:[]
    })
}))

app.use(MainRoute);

app.use(Utility.Error_Handler);
app.use(Utility.NotFound);

