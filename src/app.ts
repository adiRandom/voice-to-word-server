import Express, { Response, Request } from 'express';
import path from 'path'
import { Page } from './models/Page';
import saveToDocx from './services/SaveToDocx';
import bodyParser from "body-parser";
import cors from "cors"
import open from "open";

const app = Express();




app.use(Express.static(path.join(__dirname, "../public")));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/doc", async (req: Request, res: Response) => {
    const { document, fileName } = req.body;
    try {
        await saveToDocx(document, fileName);
        res.sendStatus(200);
    }
    catch (e) {
        res.sendStatus(500);
        res.send(e);
    }
})

export default app;
