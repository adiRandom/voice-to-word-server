"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Paragraph_1 = __importDefault(require("./Paragraph"));
/**
 * Immutable page representation
 */
var Page = /** @class */ (function () {
    function Page(paragraphs, workingParagraph) {
        if (isPageMock(paragraphs)) {
            this.paragraphs = paragraphs.paragraphs;
            this.workingParagraph = paragraphs.workingParagraph;
            this.size = paragraphs.size;
        }
        else {
            this.paragraphs = paragraphs ? paragraphs : [new Paragraph_1.default("")];
            this.workingParagraph = workingParagraph ? workingParagraph : 0;
            this.size = paragraphs ? paragraphs.length : 1;
        }
    }
    Object.defineProperty(Page.prototype, "Size", {
        /**
         * @returns How many paragraphs does this page contains
         */
        get: function () { return this.size; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "WorkingParagraphIndex", {
        /**
         * Get the index of the current working paragraph
         */
        get: function () { return this.workingParagraph; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Page.prototype, "Paragraphs", {
        /**
         * Get the paragraphs from this Page
         */
        get: function () { return this.paragraphs; },
        enumerable: true,
        configurable: true
    });
    /**
     * @returns The paragraph that is being edited at the moment
     */
    Page.prototype.getWorkingParagraph = function () {
        return this.paragraphs[this.workingParagraph];
    };
    /**
     * Add a new paragraph to this page
     * @Return a new updated page
     */
    Page.prototype.addNewParagraph = function () {
        var newParagraph = new Paragraph_1.default("");
        var localParagraphs = this.paragraphs;
        localParagraphs.push(newParagraph);
        return new Page(localParagraphs, localParagraphs.length - 1);
    };
    /**
     * Delete the currently working paragraph
     * @Return a new updated page
     */
    Page.prototype.deleteParagraph = function () {
        var _this = this;
        var localParagraphs = this.paragraphs;
        return new Page(localParagraphs.filter(function (value, index) {
            return index != _this.WorkingParagraphIndex;
        }), this.workingParagraph - 1);
    };
    /**
     * Updates the currently working paragraph
     * @param paragrapf The paragraph to replace the currently woring paragraph
     * @returns A new updated page
     */
    Page.prototype.updateParagraph = function (paragraph) {
        var localState = this.paragraphs;
        localState[this.workingParagraph] = paragraph;
        return new Page(localState, this.workingParagraph);
    };
    /**
     * Update which paragraph  is being woked on
     * @param index The paragraph that the user wants to edit
     * @returns A new updated Page
     */
    Page.prototype.changeWorkingParagraph = function (index) {
        return index < this.size ? new Page(this.paragraphs, index) : this;
    };
    return Page;
}());
exports.Page = Page;
function isPageMock(val) {
    return (val.paragraphs);
}
//# sourceMappingURL=Page.js.map