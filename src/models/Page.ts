import Paragraph from "./Paragraph";

/**
 * Immutable page representation
 */
export class Page {
    /**
     * The paragraphs contained by this page
     */
    private readonly paragraphs: Paragraph[];
    /**
     * The paragraph that is currently updating
     */
    private readonly workingParagraph: number;
    /**
     * How many paragraphs does this page contains
     */
    private readonly size: number;
    constructor(paragraphs?: Paragraph[], workingParagraph?: number) {
        this.paragraphs = paragraphs ? paragraphs : [new Paragraph("")];
        this.workingParagraph = workingParagraph ? workingParagraph : 0;
        this.size = paragraphs ? paragraphs.length : 1;
    }

    /**
     * @returns How many paragraphs does this page contains
     */
    get Size() { return this.size }


    /**
     * Get the index of the current working paragraph
     */
    get WorkingParagraphIndex() { return this.workingParagraph }

    /**
     * Get the paragraphs from this Page
     */
    get Paragraphs(){return this.paragraphs}

    /**
     * @returns The paragraph that is being edited at the moment
     */
    public getWorkingParagraph(): Paragraph {
        return this.paragraphs[this.workingParagraph];
    }

    /**
     * Add a new paragraph to this page
     * @Return a new updated page
     */

    public addNewParagraph(): Page {
        const newParagraph = new Paragraph("");
        let localParagraphs = this.paragraphs;
        localParagraphs.push(newParagraph);
        return new Page(localParagraphs, localParagraphs.length - 1);
    }

    /**
     * Delete the currently working paragraph
     * @Return a new updated page
     */

    public deleteParagraph(): Page {
        let localParagraphs = this.paragraphs;

        return new Page(localParagraphs.filter((value: Paragraph, index: number) => {
            return index != this.WorkingParagraphIndex
        }), this.workingParagraph - 1);
    }


    /**
     * Updates the currently working paragraph
     * @param paragrapf The paragraph to replace the currently woring paragraph
     * @returns A new updated page
     */

    public updateParagraph(paragraph: Paragraph): Page {
        const localState = this.paragraphs;
        localState[this.workingParagraph] = paragraph;
        return new Page(localState, this.workingParagraph);
    }

    /**
     * Update which paragraph  is being woked on
     * @param index The paragraph that the user wants to edit
     * @returns A new updated Page
     */

    public changeWorkingParagraph(index: number): Page {
        return index < this.size ? new Page(this.paragraphs, index) : this;
    }

}