"use strict";
/**
 * Imutable paragraph representaion
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Paragraph = /** @class */ (function () {
    function Paragraph(state) {
        if (isParagraphMock(state))
            this.underlyingText = state.underlyingText;
        else
            this.underlyingText = state;
    }
    Object.defineProperty(Paragraph.prototype, "Paragraph", {
        /**
         * The text representation of the paragraph
         */
        get: function () {
            return this.underlyingText;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Concats some text to the paragraph
     * @param text The text to concat to this paragraph
     * @returns a new updated Paragraph
     */
    Paragraph.prototype.concatToParagraph = function (text) {
        var localState = this.underlyingText;
        if (this.underlyingText === "") {
            var _text = text.trim();
            localState = _text.charAt(0).toUpperCase() + _text.slice(1);
        }
        else
            localState = this.underlyingText.concat(text);
        return new Paragraph(localState);
    };
    /**
     * Clears the content of this Paragraph and replace it with a new one
     * @param text The text to replace this Paragraph
     * @returns a new updated Paragraph
     */
    Paragraph.prototype.clearAndUpdateParagraph = function (text) {
        return new Paragraph(text);
    };
    return Paragraph;
}());
exports.default = Paragraph;
function isParagraphMock(val) {
    return val.underlyingText;
}
//# sourceMappingURL=Paragraph.js.map