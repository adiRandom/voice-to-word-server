import {Server} from 'http'
import _app from "./app"
import open from "open"


const app = new Server(_app as any);

app.on("start", () => {
    console.log("Starting the app server...");
})

app.on('listening', () => {
    console.log("App server started");
    console.log("Starting the app...")
    open("http://localhost:8000/").then(() => {
        console.log("App started");
    });
})

app.listen(8000);