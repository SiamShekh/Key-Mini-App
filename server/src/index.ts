import express from "express";

const app = express();

app.get("/", async (req, res) => {
    res.send("Hello world")
})

app.listen(3000, () => {
    console.log("Server is listing");

})