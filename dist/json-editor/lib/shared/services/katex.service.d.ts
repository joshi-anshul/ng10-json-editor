import * as i0 from "@angular/core";
export declare class KatexService {
    private delimiters;
    /**
    *
    * Receives text that can contain LaTeX formulas. The formulas will be
    * identified using `this.delimiters` and rendered inside the passed
    * HTMLElement
    *
    * NOTE: The HTMLElement is expected to have a single child and this
    * will be replaced by the HTML with formatted LaTeX
    *
    * @param {string} text - text to be formatted with LaTeX
    * @param {HTMLElement} el - the HTMLElement where the LaTeX should be rendered
    */
    renderMathInText(text: string, el: HTMLElement): void;
    private findEndOfMath;
    private splitAtDelimiters;
    private splitWithDelimiters;
    static ɵfac: i0.ɵɵFactoryDef<KatexService, never>;
    static ɵprov: i0.ɵɵInjectableDef<KatexService>;
}
//# sourceMappingURL=katex.service.d.ts.map