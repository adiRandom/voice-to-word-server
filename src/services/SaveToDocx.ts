import { Page } from "../models/Page";
import fs from "fs"
import os from "os"
import path from "path"
import docx, { Document, Packer } from "docx"


/**
 * Service that creates a Docx from a Page model
 * @param pageToSave The Page model from which the docx is created
 * @param fileName The name of the docx file
 */
export default async function saveToDocx(pageToSave: Page, fileName: string): Promise<void> {

    //Create the folder to save the doc if it hasn't been created prior

    fs.mkdirSync(path.join(os.homedir(), "Documents/voice-to-word"));


    //Create the doc and write the paragraphs to it

    const doc: Document = new docx.Document();
    for (let paragraph of pageToSave.Paragraphs) {
        const _paragraph: docx.Paragraph = new docx.Paragraph(paragraph.Paragraph);
        doc.addParagraph(_paragraph);
    }

    const packer: Packer = new docx.Packer();
    return packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync(path.join(os.homedir(), `Documents/voice-to-word/${fileName}.docx`), buffer);
    })
}

function getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}