import { Page, PageMock } from "../models/Page";
import fs from "fs"
import os from "os"
import path from "path"
import { Document, Packer, Paragraph as docxParagraph, TextRun } from "docx";
import Paragraph, { ParagraphMock } from "../models/Paragraph";


/**
 * Service that creates a Docx from a Page model
 * @param pageToSave The Page model from which the docx is created
 * @param fileName The name of the docx file
 */
export default async function saveToDocx(mock: PageMock[], fileName: string): Promise<void> {

    const document = mock.map((val: PageMock, index: number) => new Page(val));

    //Create the folder to save the doc if it hasn't been created prior

    fs.mkdirSync(path.join(os.homedir(), "Documents/voice-to-word"), { recursive: true });


    //Create the doc and write the paragraphs to it

    const doc: Document = new Document();
    for (let i = 0; i < document.length; i++) {
        for (let j = 0; j < document[i].Paragraphs.length; j++) {
            const mockParagraph = document[i].Paragraphs[j];
            const paragraph = new Paragraph((mockParagraph as unknown) as ParagraphMock);
            let _paragraph: docxParagraph = new docxParagraph();
            const textRun = new TextRun(paragraph.Paragraph).size(24);
            _paragraph.addRun(textRun);
            if (i + 1 !== document.length && j + 1 === document[i].Paragraphs.length)
                _paragraph = _paragraph.pageBreak();
            doc.addParagraph(_paragraph);
        }
    }




    const packer: Packer = new Packer();
    return packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync(path.join(os.homedir(), `Documents/voice-to-word/${fileName}.docx`), buffer);
    })
}