import Express, { Response, Request } from 'express';
import path from 'path'
import { Page } from './models/Page';
import saveToDocx from './services/SaveToDocx';
import bodyParser from "body-parser";
import cors from "cors"

const app = Express();


app.use(Express.static(path.join(__dirname, "../public")));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/doc", async (req: Request, res: Response) => {
    const { pageToSave, fileName } = req.body;
    await saveToDocx(pageToSave, fileName);
    res.sendStatus(200);
    //TODO: Check for erorrs
})

app.listen(8000);