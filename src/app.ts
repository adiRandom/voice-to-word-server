import Express, { Response, Request } from 'express';
import path from 'path'
import { Page } from './models/Page';
import saveToDocx from './services/SaveToDocx';

const app = Express();


app.use(Express.static(path.join(__dirname, "../public")));

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/doc", async (req: Request, res: Response) => {
    const { pageToSave, fileName } = JSON.parse(req.body);
    await saveToDocx(pageToSave, fileName);
    res.status(200);
    //TODO: Check for erorrs
})

app.listen(8000);