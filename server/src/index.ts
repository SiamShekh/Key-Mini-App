import express from "express";
import { PrismaClient } from "../generated/prisma";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.post("/login", async (req, res) => {
    try {
        console.log(req?.body);
        
    } catch (error) {
        console.log(error);
    }

    res.send("Hello world")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is listing ${process.env.PORT}`);
})