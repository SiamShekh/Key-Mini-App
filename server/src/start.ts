import { app } from ".";

async function main() {
    app.listen(process.env.PORT, () => {
        console.log(`Server is listing ${process.env.PORT}`);
    });
}

main();