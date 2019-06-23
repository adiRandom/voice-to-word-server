/**
 * Imutable paragraph representaion
 */

export default class Paragraph {
    private readonly underlyingText: string;

    constructor(state: string) {
        this.underlyingText = state
    }

    /**
     * The text representation of the paragraph
     */
    get Paragraph(): string {
        return this.underlyingText;
    }

    /**
     * Concats some text to the paragraph
     * @param text The text to concat to this paragraph
     * @returns a new updated Paragraph
     */

    public concatToParagraph(text: string): Paragraph {
        let localState = this.underlyingText;
        if (this.underlyingText === "") {
            const _text = text.trim();
            localState = _text.charAt(0).toUpperCase() + _text.slice(1);
        } else
            localState = this.underlyingText.concat(text);

        return new Paragraph(localState);
    }

    /**
     * Clears the content of this Paragraph and replace it with a new one
     * @param text The text to replace this Paragraph
     * @returns a new updated Paragraph
     */
    public clearAndUpdateParagraph(text:string):Paragraph{
        return new Paragraph(text);
    }

}