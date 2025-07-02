import express from "express";
import { PrismaClient } from "../generated/prisma";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();
app.use(cors({
    origin: '*'
}));

app.get("/", async (req, res) => {
    try {
        await prisma.user.create({
            data: {
                name: "Siam Sheikh",
                id: 1
            }
        })
    } catch (error) {
        console.log(error);

    }

    res.send("Hello world")
})

app.listen(3000, () => {
    console.log("Server is listing");

})