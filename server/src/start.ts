import { app } from ".";
import Config from "./config";
import fs from "fs";
import https from "https";
import "./index";

async function main() {
    const key = fs.readFileSync("localhost-key.pem", "utf-8");
    const cert = fs.readFileSync("localhost.pem", "utf-8");

    https.createServer({key, cert},app).listen(Config.port);

    console.log(`Server is runing at: https://localhost:${Config.port}`);
    
}

main();